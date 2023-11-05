import axios, { AxiosResponse } from 'axios';
import { User } from '../interface/User';
import { GitHubUser } from '../interface/UserAndRepos';
const GITHUB_TOKEN = "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"

export const search = async (username: string): Promise<User> => {
        const response: AxiosResponse<User> = await axios.get(`https://api.github.com/search/users?q=${username}`);
        console.log(response.data);
        return response.data; // Return only the user data from the response
    
}

export const userAndRepos = async (login: string) => {
        const user = await getUser(login);
        return user 
}


    
    async function getUser(username: string) {
        const response: AxiosResponse<GitHubUser> = await axios.get(`https://api.github.com/users/${username}`, {
            headers: { Authorization: `token ${GITHUB_TOKEN}` },
        });
        return response.data;
    }