import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../app/hooks";
import {githubLogin} from "./usersThunks";

const Redirect = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const code = params.get('code');


    useEffect( () => {
        if (code) {
            dispatch(githubLogin(code));
            navigate('/profile');
        }
    }, [code, dispatch]);

    return (
        <div>
            You will be redirected to your profile page soon. Please wait.
        </div>
    );
};

export default Redirect;