import React from "react";
import { Box, Typography } from "@mui/material";

import styles from "./TitleStyles";

function CategoryTitle({title, subTitle}:{title: string, subTitle?: string}) {
    return (
        <Box sx={styles.category.container}>
            <Typography sx={styles.category.title}>{title}</Typography>
            {subTitle &&
                <Typography sx={styles.category.subTitle}>{subTitle}</Typography>
            }
        </Box>
    )
}

export default CategoryTitle;