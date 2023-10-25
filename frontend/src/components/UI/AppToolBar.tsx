import React from 'react';
import {NavLink} from "react-router-dom";
import {AppBar, Grid, styled, Toolbar, Typography} from "@mui/material";

const Link = styled(NavLink)({
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
        color: 'inherit'
    },
});

const AppToolBar = () => {
    return (
        <AppBar position="sticky" sx={{mb: 2}} >
            <Toolbar>
                <Grid container justifyContent="space-between" alignItems="center"  >
                    <Typography variant="h6" component="div">
                        <Link to="/">Attractor repositories</Link>
                    </Typography>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default AppToolBar;