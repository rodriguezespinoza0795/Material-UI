import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = ({ userInfo }) => {
    return (
        <Grid container spacing={2} sx={{ marginTop: '15px' }} >
            <Grid item xs={6} >
                <Stack direction="row" spacing={2}>
                    <LocationOnIcon />
                    <Typography>{userInfo.location}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6} >
                <Stack direction="row" spacing={2}>
                    <TwitterIcon />
                    {userInfo.twitter_username !== null
                        ? <Typography>{userInfo.twitter_username}</Typography>
                        : <Typography>Not Available</Typography>
                    }
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction="row" spacing={2}>
                    <LanguageIcon />
                    {userInfo.blog !== null
                        ? <a target="_blank" href={userInfo.blog}><Typography>{userInfo.blog}</Typography></a>
                        : <Typography>Not Available</Typography>
                    }
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction="row" spacing={2}>
                    <BusinessIcon />
                    {userInfo.company !== null
                        ? <Typography>{userInfo.company}</Typography>
                        : <Typography>Not Available</Typography>
                    }
                </Stack>
            </Grid>
        </Grid>
    )
}

export default LocationInformation;