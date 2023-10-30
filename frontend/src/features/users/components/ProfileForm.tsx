import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {selectUser} from "../usersSlice";
import {editProfile} from "../usersThunks";
import {Profile} from "../../../types";
import {Box, Button, Grid, TextField} from "@mui/material";


const ProfileForm = () => {
    const dispatch = useAppDispatch();
    const userInfo = useAppSelector(selectUser);
    const [profile, setProfile] = useState<Profile>({
        token: '',
        name: '',
        bio: '',
        location: '',
        company: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            const newProfile: Profile = {
                token: userInfo.token,
                name: userInfo.name !== null ? userInfo.name : '',
                bio: userInfo.bio !== null ? userInfo.bio : '',
                location: userInfo.location !== null ? userInfo.location : '',
                company: userInfo.company !== null ? userInfo.company : '',
            };
            setProfile(newProfile);
        }
    }, [userInfo]);

    const onFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setProfile(prev => ({...prev, [name]: value}));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(editProfile(profile));
        navigate('/profile');
    };


    return (
        <Box component="form" onSubmit={onFormSubmit} sx={{mt: 3}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Name"
                        name="name"
                        autoComplete="current-name"
                        value={profile.name}
                        onChange={onFormChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Company"
                        name="company"
                        autoComplete="current-company"
                        value={profile.company}
                        onChange={onFormChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Location"
                        name="location"
                        autoComplete="current-location"
                        value={profile.location}
                        onChange={onFormChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Bio"
                        name="bio"
                        autoComplete="current-bio"
                        value={profile.bio}
                        onChange={onFormChange}
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
            >
                Update
            </Button>
        </Box>
    );
};

export default ProfileForm;