import React, { useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";

import MenuTitle from "components/MenuTitle/MenuTitle";
import CategoryTitle from "components/MenuTitle/CategoryTitle";
import HubbleButton from "components/HubbleButton/HubbleButton";
import styles from "./PostStyles";
import HubbleTextField from "components/HubbleTextField/HubbleTextField";

/*
버튼을 누르면 상태 반영
상태에 따라서 스타일 변경
*/

function Post() {
  const [form, setForm] = useState({
    category: "",
    isVisible: "",
    title: "",
    content: "",
    source: "",
    tags: [],
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]:
        name === "tags"
          ? value.split(",").map((tag: any) => tag.trim())
          : value,
    });
  };

  const validateForm = () => {
    // TODO 유효성 검사 로직 작성
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    const data = {
      category: form.category,
      isVisible: form.isVisible,
      title: form.title,
      content: form.content,
      source: form.source,
      tags: form.tags,
    };

    console.log(data); // test
    try {
      const response = await axios.post("http://localhost:3000/post", data);
    } catch (error) {
      // TODO: 오류 처리 로직 작성
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
      <CategoryTitle
        title="#태그"
        subTitle="쉼표로 구분해주세요. 예시) 물리학,천문학"
      />
      <Box>
        <HubbleTextField
          name="tags"
          value={form.tags}
          onChange={handleChange}
        />
      </Box>
      <Box sx={styles.postButtonContainer}>
        <Box sx={styles.postButton}>
          <HubbleButton onClick={handleSubmit}>게시글 작성</HubbleButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Post;
