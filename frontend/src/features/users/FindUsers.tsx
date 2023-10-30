import React, {useState} from 'react';
import {Box, Button, Card, CardContent, CircularProgress, Grid, Link, TextField, Typography} from "@mui/material";
import {Search} from "../../types";
import {findUsers} from "./usersThunks";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectSearching, selectSearchResult, selectUser} from "./usersSlice";
import {getReposByLogin} from "../repositories/repositoriesThunks";

const FindUsers = () => {
    const dispatch = useAppDispatch();
    const result = useAppSelector(selectSearchResult);
    const user = useAppSelector(selectUser);
    const searching= useAppSelector(selectSearching);
    const [search, setSearch] = useState<Search>({
        name: ''
    });
    const onFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setSearch(prev => ({...prev, [name]: value}));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (search.name) {
            dispatch(findUsers(search.name));
        }
    };

    const handleReposSearch = () => {
        if (user) {
            dispatch(getReposByLogin(result))
        }
    };

    return (
        <Box component="form"
             onSubmit={onFormSubmit}
             sx={{mt: 3}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Name"
                        name="name"
                        autoComplete="current-name"
                        value={search.name}
                        onChange={onFormChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                        disabled={searching}
                    >
                        {searching ? <CircularProgress/> : "Search"}
                    </Button>
                </Grid>
            </Grid>
            {result && (
                <Card variant="outlined" style={{margin: '16px'}}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>Search result:</Typography>
                        <Typography>
                            <Link onClick={handleReposSearch} target="_blank" rel="noopener noreferrer"> {result} </Link>
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </Box>
    );
};

export default FindUsers;