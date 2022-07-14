import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const PaperInformation = ({ userInfo }) => {

    return (
        <Paper elevation={3}>
            <Stack
                spacing={3}
                direction="row"
                sx={{ justifyContent: 'space-evenly', margin: '20px' }}>
                <Stack>
                    <Typography variant="h5">Respos</Typography>
                    <Typography variant="h6">{userInfo.public_repos}</Typography>
                </Stack>
                <Stack>
                    <Typography variant="h5">Follower</Typography>
                    <Typography variant="h6">{userInfo.followers}</Typography>
                </Stack>
                <Stack>
                    <Typography variant="h5">Following</Typography>
                    <Typography variant="h6">{userInfo.following}</Typography>
                </Stack>
            </Stack>
        </Paper>
    )
};

export default PaperInformation;