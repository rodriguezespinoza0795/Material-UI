import { CardMedia, Grid } from "@mui/material";
import React from 'react'
import PrincipalInformation from '../components/PrincipalInformation'
import Description from './Description'

const UserCard = ({ userInfo }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <CardMedia
                    component="img"
                    alt="GitHub User"
                    image={userInfo.avatar_url}
                />
            </Grid>
            <Grid item xs={9}>
                <PrincipalInformation userInfo={userInfo} />
            </Grid>
            <Description userInfo={userInfo} />
        </Grid>
    )
}

export default UserCard;