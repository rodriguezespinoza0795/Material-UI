import React, { Fragment } from "react";
import { Stack, Typography } from "@mui/material";

import PaperInformation from "../components/PaperInformation";
import LocationInformation from "../components/LocationInformation";

const Description = ({ userInfo }) => {

    return (
        <Fragment>
            <Stack>
                {userInfo.bio !== null
                    ? <Typography>{userInfo.bio}</Typography>
                    : <Typography>Lorem ipsum dolor sit amet. Ea excepturi doloribus ea praesentium nihil nam dolore laboriosam ad fugit nobis</Typography>
                }
            </Stack>
            <PaperInformation userInfo={userInfo} />
            <LocationInformation userInfo={userInfo} />
        </Fragment>
    )
};

export default Description;