import React from 'react';
import {useAppSelector} from "../../app/hooks";
import {selectLoginLoading, selectUser} from "./usersSlice";
import {
    Avatar,
    Box,
    Card,
    CardContent,
    CircularProgress,
    Grid,
    Typography,
    Link
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'

const Profile = () => {
    const user = useAppSelector(selectUser);
    const loading = useAppSelector(selectLoginLoading);

    return (
        <Grid container direction="column" spacing={2} padding={2}>
            <Grid item container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="h4"> User profile </Typography>
                </Grid>
            </Grid>
            <Grid item container spacing={2}>
                {loading ?
                    <Box sx={{display: 'flex'}}> <CircularProgress/> </Box> :
                    <Grid item xs={12}>
                        {user &&
                            <Card>  {user.avatar === null ? 'No avatar' :
                                <Avatar alt="avatar" src={user.avatar}
                                        sx={{width: 56, height: 56}}
                                />}
                                <CardContent>
                                    <Typography mb={1}> Name: <b>{user.name === null ? 'N/A' : user.name}</b>
                                        <Link href={'/profileForm'} ml={1}> <EditIcon fontSize={'small'}/> </Link>
                                    </Typography>
                                    <Typography mb={1}>Login: <b>{user.login}</b></Typography>
                                    <Typography
                                        mb={1}>Email: <b>{user.email === null ? 'N/A' : user.email}</b></Typography>
                                    <Typography mb={1}> Company: <b>{user.company === null ? 'N/A' : user.company}</b>
                                        <Link href={'/profileForm'} ml={1}> <EditIcon fontSize={'small'}/> </Link>
                                    </Typography>
                                    <Typography
                                        mb={1}> Location: <b>{user.location === null ? 'N/A' : user.location}</b>
                                        <Link href={'/profileForm'} ml={1}> <EditIcon fontSize={'small'}/> </Link>
                                    </Typography>
                                    <Typography mb={1}> Bio: <b>{user.bio === null ? 'N/A' : user.bio}</b>
                                        <Link href={'/profileForm'} ml={1}> <EditIcon fontSize={'small'}/> </Link>
                                    </Typography>
                                </CardContent>
                            </Card>}
                    </Grid>}
            </Grid>
            <Grid item> <Link href={'/repositories'}> Repositories</Link></Grid>
            <Grid item> <Link href={'/findUsers'}> Other users</Link> </Grid>
        </Grid>
    );
};

export default Profile;