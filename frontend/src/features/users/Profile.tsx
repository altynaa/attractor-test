import React from 'react';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../app/hooks";
import {selectLoginLoading, selectUser} from "./usersSlice";
import {
    Avatar,
    Box,
    Card,
    CardContent,
    CircularProgress,
    Grid,
    Typography
} from '@mui/material';

const Profile = () => {
    const user = useAppSelector(selectUser);
    const loading = useAppSelector(selectLoginLoading);

    return (
        <Grid container direction="column" spacing={2} padding={2}>
            <Grid item container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="h4">
                        User profile
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container spacing={2}>
                {loading ?
                    <Box sx={{display: 'flex'}}>
                        <CircularProgress/>
                    </Box> : <Grid item xs={12}>
                        {user &&
                            <Card>
                                {user.avatar === null ? 'No avatar' :
                                    <Avatar
                                        alt="avatar"
                                        src={user.avatar}
                                        sx={{width: 56, height: 56}}
                                    />}
                                <CardContent>
                                    <Typography>Name: {user.name}
                                        <Link to={'/profileForm'} className="btn btn-success">Edit</Link>
                                    </Typography>
                                    <Typography>Login: {user.login}  </Typography>
                                    <Typography>Email: {user.email === null ? 'User did not add email' : user.email} </Typography>
                                    <Typography>Company: {user.company === null ? 'User did not add name of company' : user.company}
                                        <Link to={'/profileForm'} className="btn btn-success">Edit</Link>
                                    </Typography>
                                    <Typography>Location: {user.location === null ? 'User did not add location' : user.location}
                                        <Link to={'/profileForm'} className="btn btn-success">Edit</Link>
                                    </Typography>
                                    <Typography>Bio: {user.bio === null ? 'User did not add bio' : user.bio}
                                        <Link to={'/profileForm'} className="btn btn-success">Edit</Link>
                                    </Typography>
                                    <Link to={'/profileForm'} className="btn btn-success">Edit</Link>
                                </CardContent>
                            </Card>
                        }
                    </Grid>}
            </Grid>
        </Grid>
    );
};

export default Profile;