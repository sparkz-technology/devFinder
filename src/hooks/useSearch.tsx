import { useMutation, UseMutateFunction } from "@tanstack/react-query";
// Import the 'search' function from the appropriate file, assuming it's part of the 'Api' module.
import {  search } from "../services/Api";
import { setData } from "../Slice";
import { useDispatch } from "react-redux";
import { User } from "../interface/User";
interface SearchHook {
    data: User | undefined;
    mutate: UseMutateFunction<User, Error, string, unknown>;
    isSuccess: boolean;
    isError: boolean;
    error: Error | null;
}

const useSearch = (): SearchHook => {
    const dispatch = useDispatch();
    const mutationFn = async (username: string) => await search(username);

    const { data, mutate, isSuccess, isError, error } = useMutation<User, Error, string>({
        mutationFn,
        onSuccess: (data) => {
            dispatch(setData(data));
        },
        onError: (error) => {
            console.log(error);
        },
    });

    console.log(data); // For debugging purposes

    return { data, mutate, isSuccess, isError, error };
};

export default useSearch;
