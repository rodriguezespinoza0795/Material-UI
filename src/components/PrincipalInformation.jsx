import { Typography, Stack } from "@mui/material";
import React, { Fragment } from "react";

const PrincipalInformation = ({ userInfo }) => {
    return (
        <Fragment>
            <Stack>
                <Typography>{userInfo.name}</Typography>
                <Typography>{userInfo.created_at}</Typography>
            </Stack>
            <Typography>{userInfo.login}</Typography>
        </Fragment>
    )
}

export default PrincipalInformation;