import express from "express";
import {CLIENT_SECRET, GITHUB_CLIENT_ID} from "../constants";
import {Octokit} from "octokit";

const usersRouter = express.Router();

const octokit = new Octokit();

let savedAccessToken = null;

usersRouter.post('/github', async (req, res, next) => {
    try {
        const response = await octokit.request("POST https://github.com/login/oauth/access_token", {
            headers: {
                Accept: "application/json"
            },
            data: {
                client_id: GITHUB_CLIENT_ID,
                client_secret: CLIENT_SECRET,
                code: req.body.code,
            }
        });

        savedAccessToken = response.data.access_token;

        const userInfo = await octokit.request("GET https://api.github.com/user", {
            headers: {
                Authorization: `token ${savedAccessToken}`
            },
        });

        return res.send ({
            name: userInfo.data.name,
            login: userInfo.data.login,
            email: userInfo.data.email,
            avatar: userInfo.data.avatar_url,
            company: userInfo.data.company,
            location: userInfo.data.location,
            bio: userInfo.data.bio,
            url: userInfo.data.url
        });
    } catch (error) {
        return next(error);
    }
});

export default usersRouter;

