import {useQuery} from '@tanstack/react-query';
import { userAndRepos } from '../services/Api';
import { GitHubUser } from '../interface/UserAndRepos';



export default function useGetUserAndRepos(id:string) {
    const queryKey=['user',id]
    const queryFn=()=>userAndRepos(id)
    
    const {data,isLoading,isError,error}=useQuery<GitHubUser>({queryKey,queryFn})
    return {data,isLoading,isError,error}
}