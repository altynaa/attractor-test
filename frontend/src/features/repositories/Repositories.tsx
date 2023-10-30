import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import RepositoryCard from "./components/RepositoryCard";
import {selectUser} from "../users/usersSlice";
import {getRepos} from "./repositoriesThunks";
import {selectRepositories, selectRepositoriesLoading} from "./repositoriesSlice";
import {Box, CircularProgress, Container, Typography} from "@mui/material";

const Repositories = () => {
    const user = useAppSelector(selectUser);
    const dispatch = useAppDispatch();
    const repositories = useAppSelector(selectRepositories);
    const loading = useAppSelector(selectRepositoriesLoading);

    useEffect(() => {
        if (user) {
            dispatch(getRepos(user.token))
        }
    }, [user, dispatch]);
    return (
        <Container>
            <Typography variant="h4" gutterBottom> User's repositories </Typography>
            {loading ? <CircularProgress/> : <Box sx={{p: 3}}>
                {repositories.map((repository) => (
                    <RepositoryCard
                        key={repository.id}
                        title={repository.name}
                        repositoryUrl={repository.url}
                        owner={repository.ownerName}
                        ownerProfileUrl={repository.ownerUrl}
                    />
                ))}
            </Box>}
        </Container>);
};
export default Repositories;
