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
import { editPost, postPost } from "api/api";

/*
버튼을 누르면 상태 반영
상태에 따라서 스타일 변경
*/

function Post() {
  const [form, setForm] = useState({
    post_id: "",
    category: "",
    isVisible: "",
    title: "",
    content: "",
    source: "",
    boardParentId: -1,
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
      alert("게시글 작성 전에 먼저 로그인해주세요!");
      navigate("/signin");
      return;
    }
  }, []);

  useEffect(() => {
    if (state) {
      setForm((prevForm) => ({
        ...prevForm,
        post_id: state.post_id,
        category: state.category,
        isVisible: state.isVisible,
        title: state.title,
        content: state.content,
        source: state.source,
        boardParentId: state.boardParentId,
      }));
    }
  }, [state]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "source" && form.boardParentId !== -1) {
      return;
    }
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (form.category === "") {
      setError({
        state: true,
        message: "게시글 종류를 선택해주세요.",
      });
      return false;
    } else if (form.isVisible === "") {
      setError({
        state: true,
        message: "공개 여부를 선택해주세요.",
      });
      return false;
    } else if (form.title === "") {
      setError({
        state: true,
        message: "제목을 입력해주세요.",
      });
      return false;
    } else if (form.content === "") {
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
      post_id: form.post_id,
      boardType: form.category,
      boardSecure: form.isVisible,
      boardTitle: form.title,
      boardInsight: form.source,
      boardContents: form.content,
      boardParentId: form.boardParentId,
    };

    console.log(data); // test

    if (!editMode) {
      // 초기 게시글 작성일 경우
      postPost(data, setError).then(() => {
        navigate(`/mymark/${form.category}`);
      });
    } else {
      // 수정 모드일 경우
      editPost(data, setError).then(() => {
        navigate(`/mymark/${form.category}`);
      });
    }
  };

  return (
    <Box>
      <MenuTitle title="게시글 작성" />
      <CategoryTitle
        title="게시글 종류"
        subTitle="궁금한 것은 물음표, 해결된 것은 느낌표로 선택할 수 있어요."
      />
      <Box sx={styles.categoryContainer}>
        <Box sx={styles.selectButton}>
          <HubbleButton
            name="category"
            value="question"
            onClick={handleChange}
            selected={form.category === "question"}
          >
            물음표
          </HubbleButton>
        </Box>
        <Box sx={styles.selectButton}>
          <HubbleButton
            name="category"
            value="exclamation"
            onClick={handleChange}
            selected={form.category === "exclamation"}
          >
            느낌표
          </HubbleButton>
        </Box>
      </Box>
      <CategoryTitle
        title="공개 여부"
        subTitle="다른 사람들에게 공개하고 싶은 생각인가요?"
      />
      <Box sx={styles.categoryContainer}>
        <Box sx={styles.selectButton}>
          <HubbleButton
            name="isVisible"
            value="true"
            onClick={handleChange}
            selected={form.isVisible === "true"}
          >
            공개
          </HubbleButton>
        </Box>
        <Box sx={styles.selectButton}>
          <HubbleButton
            name="isVisible"
            value="false"
            onClick={handleChange}
            selected={form.isVisible === "false"}
          >
            비공개
          </HubbleButton>
        </Box>
      </Box>
      <CategoryTitle title="제목" />
      <Box>
        <HubbleTextField
          name="title"
          value={form.title}
          onChange={handleChange}
        />
      </Box>
      <CategoryTitle title="본문" />
      <Box>
        <HubbleTextField
          name="content"
          value={form.content}
          onChange={handleChange}
          multiline
          rows={12}
        />
      </Box>
      <CategoryTitle
        title="글의 영감"
        subTitle="이 생각을 하게 된 계기가 있나요?"
      />
      <Box>
        <HubbleTextField
          name="source"
          value={form.source}
          onChange={handleChange}
        />
      </Box>
      {error.state && (
        <Alert severity="error" sx={{ marginTop: "20px" }}>
          {error.message}
        </Alert>
      )}
      <Box sx={styles.postButtonContainer}>
        <Box sx={styles.postButton}>
          <HubbleButton onClick={handleSubmit}>게시글 작성</HubbleButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Post;
