import React, { useContext, useState } from "react";
import axios from "axios";

import { Box, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import { Link, useNavigate } from "react-router-dom";

import HubbleTextField from "components/HubbleTextField/HubbleTextField";
import HubbleButton from "components/HubbleButton/HubbleButton";
import MenuTitle from "components/MenuTitle/MenuTitle";
import styles from "./SignInStyles";
import { AuthContext } from "context/AuthContext";
import { signIn } from "api/api";

function SignUp() {
  const [form, setForm] = useState({
    id: "",
    password: "",
  });
  const [error, setError] = useState({
    state: false,
    message: "",
  });
  let navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateForm = () => {
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    const data = {
      username: form.id,
      password: form.password,
    };

    // TODO : 테스트 후 삭제 ========
    console.log(data);
    const oneHourLater = new Date().getTime() + 58 * 60 * 1000; // 58분 후 만료

    window.localStorage.setItem("auth", "true");
    window.localStorage.setItem("token", "123");
    window.localStorage.setItem("exp", oneHourLater.toString());
    window.localStorage.setItem("username", form.id);

    setAuth(true);
    // ==============================

    signIn(data, setError).then(() => {
      setAuth(true);
      navigate("/");
    });
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.menuTitle}>
        <MenuTitle title="로그인" />
      </Box>
      {/* field */}
      <Box>
        <Box sx={styles.formLabel}>
          <Typography>아이디</Typography>
          <Typography sx={styles.requiredLabel}>*</Typography>
        </Box>
        <Box sx={styles.textField}>
          <HubbleTextField name="id" value={form.id} onChange={handleChange} />
        </Box>
      </Box>
      {/* field */}
      <Box>
        <Box sx={styles.formLabel}>
          <Typography>비밀번호</Typography>
          <Typography sx={styles.requiredLabel}>*</Typography>
        </Box>
        <Box sx={styles.textField}>
          <HubbleTextField
            name="password"
            value={form.password}
            type="password"
            onChange={handleChange}
          />
        </Box>
      </Box>
      {error.state && (
        <Alert severity="error" sx={{ marginBottom: "10px" }}>
          {error.message}
        </Alert>
      )}
      <Box sx={styles.submitContainer}>
        <Link
          to="/signup"
          style={{ textDecoration: "none", marginRight: "15px" }}
        >
          회원가입
        </Link>
        <Box>
          <HubbleButton onClick={handleSubmit}>로그인</HubbleButton>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
