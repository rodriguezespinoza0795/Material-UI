import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = ({ userInfo }) => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Stack>
                    <LocationOnIcon />
                    <Typography>{userInfo.location}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack>
                    <TwitterIcon />
                    {userInfo.twitter_username !== null
                        ? <Typography>{userInfo.twitter_username}</Typography>
                        : <Typography>Not Available</Typography>
                    }
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack>
                    <LanguageIcon />
                    {userInfo.blog !== null
                        ? <Typography>{userInfo.blog}</Typography>
                        : <Typography>Not Available</Typography>
                    }
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack>
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