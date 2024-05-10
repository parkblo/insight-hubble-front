import React, { useState } from "react";
import axios from "axios";

import { Box, FormControlLabel, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

import HubbleTextField from "components/HubbleTextField/HubbleTextField";
import HubbleButton from "components/HubbleButton/HubbleButton";
import MenuTitle from "components/MenuTitle/MenuTitle";
import styles from "./SignUpStyles";

function SignUp() {
  const [form, setForm] = useState({
    id: "",
    password: "",
    passwordCheck: "",
    username: "",
    checked: false,
  });
  const [error, setError] = useState({
    state: false,
    message: "",
  });
  let navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value, checked } = e.target;
    setForm({
      ...form,
      [name]: name === "checked" ? checked : value,
    });
  };

  const validateForm = () => {
    if (form.password !== form.passwordCheck) {
      setError({
        state: true,
        message: "비밀번호가 일치하지 않습니다.",
      });
      return false;
    }

    if (form.checked === false) {
      setError({
        state: true,
        message: "이용약관에 동의해주세요.",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    const data = {
      username: form.id,
      password: form.password,
      name: form.username,
    };

    console.log(data); //test

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/join`,
        data
      );
      // 회원가입 성공 로직
      alert("회원가입을 성공했습니다!");
      navigate("/login");
    } catch (error: any) {
      setError({
        state: true,
        message: "서버와 통신 중 오류가 발생했습니다. 관리자에게 문의해주세요",
      });
    }
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.menuTitle}>
        <MenuTitle title="회원 가입" />
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
      {/* field */}
      <Box>
        <Box sx={styles.formLabel}>
          <Typography>비밀번호 재확인</Typography>
          <Typography sx={styles.requiredLabel}>*</Typography>
        </Box>
        <Box sx={styles.textField}>
          <HubbleTextField
            name="passwordCheck"
            type="password"
            value={form.passwordCheck}
            onChange={handleChange}
          />
        </Box>
      </Box>
      {/* field */}
      <Box>
        <Box sx={styles.formLabel}>
          <Typography>유저명</Typography>
          <Typography sx={styles.requiredLabel}>*</Typography>
        </Box>
        <Box sx={styles.textField}>
          <HubbleTextField
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </Box>
      </Box>
      <Box sx={styles.checkboxContainer}>
        <FormControlLabel
          control={
            <Checkbox
              name="checked"
              checked={form.checked}
              onChange={handleChange}
            />
          }
          label="이용약관 개인정보 수집 및 정보 이용에 동의합니다."
        />
      </Box>
      {error.state && (
        <Alert severity="error" sx={{ marginBottom: "10px" }}>
          {error.message}
        </Alert>
      )}
      <Box sx={styles.submitContainer}>
        <Box>
          <HubbleButton onClick={handleSubmit}>회원가입</HubbleButton>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
