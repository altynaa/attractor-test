import {
    Avatar,
    Box,
    Container,
    Typography
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';


const Login = () => {
    return (
        <Container component="main" maxWidth="xs">
            <Box
                style={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOpenIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
            </Box>
        </Container>
    );
};

export default Login;