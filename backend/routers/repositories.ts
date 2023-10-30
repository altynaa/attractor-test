import express from "express";
import {Octokit} from "octokit";

const reposRouter = express.Router();

reposRouter.post('/fetch', async (req, res) => {
    try {
        const octokit = new Octokit({
            auth: req.body.token
        });
        const response = await octokit.request('GET https://api.github.com/user/repos', {
            headers: {
                Authorization: `token ${req.body.token}`
            },
            type: 'all',
        });
        const repositories = response.data;
        const arr = repositories.map((obj: { id: number; name: string; html_url: string, owner: { login: string, url: string }, private: boolean }) => {
            return {
                id: obj.id,
                name: obj.name,
                url: obj.html_url,
                ownerName: obj.owner.login,
                ownerUrl: obj.owner.url,
                private: obj.private
            }
        });
        return res.send(arr);
    } catch (error) {
        console.error(error);
    }
})

reposRouter.get('/fetchByLogin', async (req, res) => {
    try {
        const octokit = new Octokit({
            auth: req.body.token
        });
        console.log(req.query.q);
        const response = await octokit.request(`GET /users/${req.query.q}/repos`, {
            type: 'all'
        });
        const repositories = response.data;
        const arr = repositories.map((obj: { id: number; name: string; html_url: string, owner: { login: string, url: string }, private: boolean }) => {
            return {
                id: obj.id,
                name: obj.name,
                url: obj.html_url,
                ownerName: obj.owner.login,
                ownerUrl: obj.owner.url,
                private: obj.private
            }
        });
        return res.send(arr);
    } catch (error) {
        console.error(error);
        throw error;
    }
})
export default reposRouter;