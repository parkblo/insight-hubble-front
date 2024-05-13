import { axios } from "./axios";

// 게시글 헤더 관련 ========================================================================================================
// TODO: 북마크 삭제 로직 추가
export async function deletePost(postObject: any) {
  const response = await axios
    .delete(`/board/delete/${postObject.item.post_id}`)
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

export async function addBookmark(
  postObject: any,
  setBookmarkcnt: any,
  bookmarkcnt: any
) {
  const response = await axios
    .post(`/bookmark/?postId=${postObject.item.post_id}`)
    .then(() => {
      setBookmarkcnt(bookmarkcnt + 1);
    })
    .catch((error) => {
      window.alert("북마크 중 오류가 발생했습니다.");
    });

  return response;
}

export async function deleteBookmark(
  postObject: any,
  setBookmarkcnt: any,
  bookmarkcnt: any
) {
  const response = await axios
    .delete(`/bookmark/?postId=${postObject.item.post_id}`)
    .then(() => {
      setBookmarkcnt(bookmarkcnt - 1);
    })
    .catch((error) => {
      window.alert("북마크 중 오류가 발생했습니다.");
    });

  return response;
}

// 게시글 조회 ============================================================================================================
export async function getRecentPost() {
  const response = await axios.get("/board").catch((error) => {
    console.log(error);
  });
  return response;
}

// TODO: 미개발 API, 수정 필요
export async function getSearchPost(searchString: string) {
  const response = await axios.get(`/?${searchString}`).catch((error) => {
    console.log(error);
  });
  return response;
}

// 메인 화면 관련 ==========================================================================================================
export async function getMainData() {
  const response = await axios.get("/").catch((error) => {
    console.log(error);
  });
  return response;
}

// 게시글 작성 관련 ========================================================================================================
export async function postPost(data: any, setError: any) {
  const response = await axios.post("/board/save", data).catch((error) => {
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

export async function editPost(data: any, setError: any) {
  const response = await axios
    .put(`/board/update/${data.post_id}`, data)
    .catch((error) => {
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

// 계정 정보 관련 ==========================================================================================================
export async function signIn(data: any, setError: any) {
  const response = await axios.post("/login", data).catch((error) => {
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

export async function signUp(data: any, setError: any) {
  const response = await axios.post("/join", data).catch((error) => {
    if (error.response) {
      setError({
        state: true,
        message: "서버와 통신 중 오류가 발생했습니다. 관리자에게 문의해주세요",
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
