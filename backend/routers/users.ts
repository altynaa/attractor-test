import express from "express";
import {CLIENT_SECRET, GITHUB_CLIENT_ID} from "../constants";
import {Octokit} from "octokit";

const usersRouter = express.Router();

const octokit = new Octokit();

let savedAccessToken = null;

usersRouter.post('/github', async (req, res, next) => {
    try {
        console.log('in back')
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

        console.log(response.data.access_token);
        savedAccessToken = response.data.access_token;
        console.log('token', savedAccessToken);
        return response.data.access_token;
    } catch (error) {
        return next(error);
    }
});

export default usersRouter;

