import axios, { AxiosResponse } from 'axios';

export interface Item {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    received_events_url: string;
    type: string;
    score: number;
}

export interface User {
    total_count: number;
    incomplete_results: boolean;
    items: Item[];
}

export const search = async (username: string): Promise<User> => {
        const response: AxiosResponse<User> = await axios.get(`https://api.github.com/search/users?q=${username}`);
        console.log(response.data);
        return response.data; // Return only the user data from the response
    
}

