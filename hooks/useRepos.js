import { useEffect, useState } from "react";
import { getRepos } from "../lib/github.js";

export function useRepos(username){
    const [result, setResult] = useState(null);
    useEffect(() => {
        let ignore = false;

        async function loadRepos() {
            try {
                const repos = await getRepos(username);
                if (!ignore) setResult({username, repos});
            } catch (error) {
                if (!ignore) setResult({username, error});
            }
        }

        void loadRepos();

        return () => {
            ignore = true;
        };
    }, [username]);

    const loading = result?.username !== username;
    return {...result, loading};
}