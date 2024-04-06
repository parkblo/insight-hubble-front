import React from "react";
import { Box, Typography } from "@mui/material";

import styles from "./HomeItemStyles";

function NotificationList() {
    const dummyNotificationData = [
        {id: 1, text: "movewithurgency님이 회원님의 게시글을 북마크에 추가했습니다."},
        {id: 2, text: "liliili님이 회원님의 게시글에 느낌표를 남겼습니다. : '이 문제는 이 자료에 정리되어있습니다.'"},
        {id: 3, text: "localdelusion님이 회원님의 게시글에 댓글을 남겼습니다 : '이 문제는 어렵네요.'"},
    ]

    return (
        <Box sx={styles.notification.container}>
            {dummyNotificationData.map((item: any) => (
                <Typography sx={{marginBottom:"5px"}}>{item.text}</Typography>
            ))}
        </Box>
    )
}

export default NotificationList;