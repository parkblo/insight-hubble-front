import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import MenuTitle from "components/MenuTitle/MenuTitle";
import CategoryTitle from "components/MenuTitle/CategoryTitle";
import HubbleButton from "components/HubbleButton/HubbleButton";
import styles from "./PostStyles";
import HubbleTextField from "components/HubbleTextField/HubbleTextField";
import { useLocation } from "react-router-dom";
import { editComment } from "api/api";

/*
버튼을 누르면 상태 반영
상태에 따라서 스타일 변경
*/

function EditComment() {
  const [form, setForm] = useState({
    comment_id: "",
    content: "",
  });
  const [error, setError] = useState({
    state: false,
    message: "",
  });
  const [editMode, setEditMode] = useState(false);
  let navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    if (window.localStorage.getItem("auth") === "false") {
      alert("댓글 수정 전에 먼저 로그인해주세요!");
      navigate("/signin");
      return;
    }
  }, []);

  useEffect(() => {
    if (state) {
      setForm((prevForm) => ({
        ...prevForm,
        comment_id: state.comment_id,
        content: state.content,
      }));
    }
  }, [state]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (form.content === "") {
      setError({
        state: true,
        message: "본문을 입력해주세요.",
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
      commentId: form.comment_id,
      content: form.content,
    };
    editComment(data, navigate);
  };

  return (
    <Box>
      <MenuTitle title="댓글 수정" />
      <Box>
        <HubbleTextField
          name="content"
          value={form.content}
          onChange={handleChange}
        />
      </Box>
      {error.state && (
        <Alert severity="error" sx={{ marginTop: "20px" }}>
          {error.message}
        </Alert>
      )}
      <Box sx={styles.postButtonContainer}>
        <Box sx={styles.editButton}>
          <HubbleButton onClick={handleSubmit}>수정</HubbleButton>
        </Box>
      </Box>
    </Box>
  );
}

export default EditComment;
