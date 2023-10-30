import express from "express";
import {CLIENT_SECRET, GITHUB_CLIENT_ID} from "../constants";
import {Octokit} from "octokit";

const usersRouter = express.Router();

usersRouter.post('/github', async (req, res, next) => {
    try {
        const octokit = new Octokit();
        const response = await octokit.request("POST https://github.com/login/oauth/access_token", {
            headers: {
                Accept: "application/json"
            },
            data: {
                client_id: GITHUB_CLIENT_ID,
                client_secret: CLIENT_SECRET,
                code: req.body.code,
                scope: 'repo user'
            }
        });

        const userInfo = await octokit.request("GET https://api.github.com/user", {
            headers: {
                Authorization: `token ${response.data.access_token}`
            },
        });

        return res.send({
            token: response.data.access_token,
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

usersRouter.patch('/edit', async (req, res, next) => {
    try {
        const octokit = new Octokit({
            auth: req.body.token
        });

        const response = await octokit.request("PATCH /user", {
            data: {
                name: req.body.name,
                bio: req.body.bio,
                company: req.body.company,
                location: req.body.location,
            },
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        return res.send(response.data);
    } catch (error) {
        return next(error);
    }
});

usersRouter.get('/search', async (req, res) => {
    try {
        const octokit = new Octokit();
        const response = await octokit.request(`GET /users/${req.query.q}`);
        return res.send(response.data.login);
    } catch (error) {
        console.error(error);
        throw error;
    }
})

export default usersRouter;

