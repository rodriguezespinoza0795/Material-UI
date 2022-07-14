import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const PaperInformation = ({ userInfo }) => {

    return (
        <Paper elevation={3}>
            <Stack>
                <Stack>
                    <Typography>Respos</Typography>
                    <Typography>{userInfo.public_repos}</Typography>
                </Stack>
                <Stack>
                    <Typography>Follower</Typography>
                    <Typography>{userInfo.followers}</Typography>
                </Stack>
                <Stack>
                    <Typography>Following</Typography>
                    <Typography>{userInfo.following}</Typography>
                </Stack>
            </Stack>
        </Paper>
    )
};

export default PaperInformation;