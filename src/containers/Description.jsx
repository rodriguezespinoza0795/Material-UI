import React, { Fragment } from "react";
import { Stack, Typography } from "@mui/material";

import PaperInformation from "../components/PaperInformation";
import LocationInformation from "../components/LocationInformation";

const Description = ({ userInfo }) => {

    return (
        <Fragment>
            <Stack sx={{ justifyContent: 'center' }}>
                {userInfo.bio !== null
                    ? <Typography variant="body1">{userInfo.bio}</Typography>
                    : <Typography variant="body1">Lorem ipsum dolor sit amet. Ea excepturi doloribus ea praesentium nihil nam dolore laboriosam ad fugit nobis</Typography>
                }
            </Stack>
            <PaperInformation userInfo={userInfo} />
            <LocationInformation userInfo={userInfo} />
        </Fragment>
    )
};

export default Description;