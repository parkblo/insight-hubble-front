import React, { useState } from "react";
import axios from "axios";

import { Box, FormControlLabel, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import HubbleTextField from "components/HubbleTextField/HubbleTextField";
import HubbleButton from "components/HubbleButton/HubbleButton";
import MenuTitle from "components/MenuTitle/MenuTitle";
import styles from "./SignUpStyles";

function SignUp() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    username: "",
    checked: false,
  });

  const handleChange = (e: any) => {
    const { name, value, checked } = e.target;
    setForm({
      ...form,
      [name]: name === "checked" ? checked : value,
    });
  };

  const validateForm = () => {
    // TODO: 유효성 검사 로직 작성
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    const data = {
      email: form.email,
      password: form.password,
      username: form.username,
    };

    console.log(data); //test

    try {
      const response = await axios.post("http://localhost:3000/signup", data);
      // TODO: 회원 가입 성공 시 로직 작성
    } catch (error) {
      // TODO: 오류 처리 로직작성
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
          <Typography>이메일</Typography>
          <Typography sx={styles.requiredLabel}>*</Typography>
        </Box>
        <Box sx={styles.textField}>
          <HubbleTextField
            name="email"
            value={form.email}
            onChange={handleChange}
          />
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
      <Box sx={styles.submitContainer}>
        <Box>
          <HubbleButton onClick={handleSubmit}>회원가입</HubbleButton>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
