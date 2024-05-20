import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axios.interceptors.request.use(
  (config) => {
    if (window.localStorage.getItem("auth") === "true") {
      const userAccessToken = window.localStorage.getItem("accessToken");
      const userRefreshToken = window.localStorage.getItem("refreshToken");
      config.headers["access"] = `${userAccessToken}`;
      config.headers["refresh"] = `${userRefreshToken}`;
    }

    // ngrok 사용시 브라우저 경고 무시
    config.headers["ngrok-skip-browser-warning"] = "69420";

    // 요청 헤더를 콘솔에 출력 : TEST
    console.log("Starting Request", JSON.stringify(config.headers, null, 2));

    if(config.url === "/reissue"){
      delete config.headers["access"];
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401 && error.config.url !== "/reissue") {
      // /reissue
      await axios
        .post("/reissue",{},{
          headers: {
            "refresh": window.localStorage.getItem("refreshToken"),
          },
        })
        .then((res) => {
          window.localStorage.setItem("accessToken", res.headers.access);
          window.localStorage.setItem("refreshToken", res.headers.refresh);
          error.config.headers["access"] = res.headers.access;
          error.config.headers["refresh"] = res.headers.refresh;
          console.log("토큰 재발급 성공");
        })
        .catch((err) => {
          console.log("토큰 재발급 실패");
          return Promise.reject(error);
        });
    }
    return Promise.reject(error);
  }
);
