import { Typography, Stack } from "@mui/material";
import React, { Fragment } from "react";

const PrincipalInformation = ({ userInfo }) => {
    return (
        <Fragment>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h4">{userInfo.name}</Typography>
                <Typography variant="subtitle2">{userInfo.created_at}</Typography>
            </Stack>
            <Typography variant="caption">{`@${userInfo.login}`}</Typography>
        </Fragment>
    )
}

export default PrincipalInformation;