import { Box, Typography } from "@mui/material";
import React from "react";

import styles from "./TitleStyles";

function MenuTitle({title}:{title: string}) {
    return (
        <Box>
            <Typography sx={styles.menu.title}>{title}</Typography>
            <Box sx={styles.menu.box}></Box>
        </Box>
    )
}

export default MenuTitle;