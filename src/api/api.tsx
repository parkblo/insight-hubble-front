import { axios } from "./axios";

// 게시글 헤더 관련 ========================================================================================================
// TODO: 북마크 삭제 로직 추가
export async function addBookmark(
  postObject: any,
  setBookmarkcnt: any,
  bookmarkcnt: any,
  setIsBookmarked: any
) {
  const response = await axios
    .post(`/bookmark?boardId=${postObject.item.boardId}`)
    .then(() => {
      setBookmarkcnt(bookmarkcnt + 1);
      setIsBookmarked(true);
    })
    .catch((error) => {
      window.alert("북마크 중 오류가 발생했습니다.");
    });

  return response;
}

export async function deleteBookmark(
  postObject: any,
  setBookmarkcnt: any,
  bookmarkcnt: any,
  setIsbookmarked: any
) {
  const response = await axios
    .delete(`/bookmark/board?boardId=${postObject.item.boardId}`)
    .then(() => {
      setBookmarkcnt(bookmarkcnt - 1);
      setIsbookmarked(false);
    })
    .catch((error) => {
      window.alert("북마크 중 오류가 발생했습니다.");
    });

  return response;
}

// 게시글 조회 ============================================================================================================
export async function getRecentPost(setData: any) {
  const response = await axios
    .get("/discover/paging")
    .then((response) => {
      console.log(response.data); //test
      setData({
        state: "최근 게시글",
        content: response.data.boardList.content,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
}

// TODO: 미개발 API, 수정 필요
export async function getSearchPost(searchString: string) {
  const response = await axios
    .get(`/discover/paging?keyword=${searchString}&page=1`)
    .catch((error) => {
      console.log(error);
    });
  return response;
}

export async function getPost(postId: any, setData: any) {
  const response = await axios
    .get(`/board/${postId}`)
    .then((response) => {
      setData(response.data);
      console.log(response.data); //test
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
}

// 메인 화면 관련 ==========================================================================================================
export async function getMainData(setData: any) {
  const response = await axios
    .get("/info", { headers: { Accept: "application/json" } })
    .then((response) => {
      console.log(response.data); //test
      setData({ state: true, ...response.data });
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
}

// 게시글 작성 관련 ========================================================================================================
export async function postPost(data: any, setError: any, navigate: any) {
  const response = await axios
    .post("/board/save", data)
    .then(() => {
      window.alert("게시글이 작성되었습니다.");
      navigate(`/mymark/${data.boardType}`);
    })
    .catch((error) => {
      if (error.response) {
        setError({
          state: true,
          message: "게시글 작성에 실패했습니다. 다시 시도해주세요.",
        });
      } else if (error.request) {
        setError({
          state: true,
          message: "서버의 응답이 없습니다.",
        });
      } else {
        setError({
          state: true,
          message: "알 수 없는 에러가 발생했습니다.",
        });
      }
    });
  return response;
}

export async function editPost(data: any, setError: any, navigate: any) {
  const response = await axios
    .put(`/board/update`, data)
    .then(() => {
      navigate(`/mymark/${data.boardType}`);
    })
    .catch((error) => {
      console.log(error);
      if (error.response) {
        setError({
          state: true,
          message: "게시글 수정에 실패했습니다. 다시 시도해주세요.",
        });
      } else if (error.request) {
        setError({
          state: true,
          message: "서버의 응답이 없습니다.",
        });
      } else {
        setError({
          state: true,
          message: "알 수 없는 에러가 발생했습니다.",
        });
      }
    });
  return response;
}

export async function deletePost(postObject: any) {
  const response = await axios
    .delete(`/board/delete/${postObject.item.boardId}`)
    .then(() => {
      window.alert("정상적으로 삭제되었습니다.");
      window.location.reload();
    })
    .catch((error) => {
      console.error(error);
      window.alert("삭제 중 오류가 발생했습니다.");
    });

  return response;
}

export async function postComment(data: any) {
  if (data.comment === "") {
    window.alert("댓글 내용을 입력해주세요.");
    return;
  }

  const response = await axios
    .post("/comment", data)
    .then((response) => {
      window.alert("댓글이 등록되었습니다.");
      window.location.reload();
    })
    .catch((error) => {
      window.alert("댓글 작성 중 오류가 발생했습니다.");
    });
  return response;
}

export async function editComment(data: any, navigate: any) {
  const response = await axios
    .put("/comment", data)
    .then(() => {
      window.alert("댓글을 수정했습니다.");
      navigate(-1);
    })
    .catch((error) => {
      window.alert("댓글 수정 중 오류가 발생했습니다.");
    });
  return response;
}

export async function deleteComment(commentId: number) {
  const response = await axios
    .delete(`/comment/${commentId}`)
    .then(() => {
      window.alert("댓글이 삭제되었습니다.");
      window.location.reload();
    })
    .catch((error) => {
      window.alert("댓글 삭제 중 오류가 발생했습니다.");
    });
  return response;
}

// 계정 정보 관련 ==========================================================================================================
export async function signIn(
  data: any,
  setError: any,
  setAuth: any,
  navigate: any
) {
  const response = await axios
    .post("/login", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      const oneHourLater = new Date().getTime() + 58 * 60 * 1000; // 58분 후 만료

      console.log("이게헤더임");
      console.log(res.headers);

      window.localStorage.setItem("auth", "true");
      window.localStorage.setItem("accessToken", res.headers.access);
      window.localStorage.setItem("refreshToken", res.headers.refresh);
      window.localStorage.setItem("exp", oneHourLater.toString());
      window.localStorage.setItem("username", data.username);

      setAuth(true);
      window.alert("로그인에 성공했습니다.");
      navigate("/");
    })
    .catch((error) => {
      if (error.response) {
        setError({
          state: true,
          message: "로그인에 실패했습니다. 다시 시도해주세요.",
        });
      } else if (error.request) {
        setError({
          state: true,
          message: "서버의 응답이 없습니다.",
        });
      } else {
        setError({
          state: true,
          message: "알 수 없는 에러가 발생했습니다.",
        });
      }
    });
  return response;
}

export async function signUp(data: any, setError: any, navigate: any) {
  const response = await axios
    .post("/join", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(() => {
      alert("회원가입을 성공했습니다!");
      navigate("/");
    })
    .catch((error) => {
      if (error.response) {
        setError({
          state: true,
          message:
            "서버와 통신 중 오류가 발생했습니다. 관리자에게 문의해주세요",
        });
      } else if (error.request) {
        setError({
          state: true,
          message: "서버의 응답이 없습니다.",
        });
      } else {
        setError({
          state: true,
          message: "알 수 없는 에러가 발생했습니다.",
        });
      }
    });
  return response;
}

export async function signOut() {
  const userRefreshToken = window.localStorage.getItem("refreshToken");
  console.log(userRefreshToken); //test

  await axios
    .post("/logout", {}, {
      headers: {
        "refresh": userRefreshToken,
      },
    })
    .then(() => {
      window.alert("로그아웃 되었습니다.");
    })
    .catch((error) => {
      window.alert("로그아웃 중 오류가 발생했습니다.");
      console.log(error);
      console.log(error.config);
    });
}

// 마이페이지 관련 ==========================================================================================================
export async function getMyPage(category: string, setData: any) {
  const response = await axios
    .get(`/my-page/${category}`)
    .then((response) => {
      console.log(response.data); //test
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
}
