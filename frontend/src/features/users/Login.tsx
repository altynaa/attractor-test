import {
    Avatar,
    Box,
    Container, Link
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {Link as RouterLink} from 'react-router-dom';
import {GITHUB_CLIENT_ID} from "../../constants";


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

                <Box sx={{pt: 2}}>
                            <Link component={RouterLink} to={`https://github.com/login/oauth/authorize?client_id=` + GITHUB_CLIENT_ID} variant="body2">
                                Register or login with GitHub
                            </Link>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;