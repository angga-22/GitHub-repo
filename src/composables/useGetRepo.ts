import { useState } from "react";
interface IRepos {
  name: string;
  stargazers_count: number;
}
const useGetRepo = () => {
  const env = import.meta.env;
  const [repos, setRepos] = useState<IRepos[]>([]);
  const [loading, setIsLoading] = useState<boolean>(false);
  const getRepo = async (username: string) => {
    setIsLoading(true);
    const res = await fetch(`${env.VITE_PUBLIC_API_URL}/users/${username}/repos`, {
      headers: {
        Authorization: `Bearer ${env.VITE_PRIVATE_PAT}`,
      },
    });
    const data = await res.json();
    setRepos(data);
    setIsLoading(false);
  };
  return {
    loading,
    repos,
    getRepo,
  };
};

export default useGetRepo;
