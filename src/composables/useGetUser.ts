import { useState, Key } from "react";
interface User {
  id: Key | null | undefined;
  login: string;
  avatar_url: string;
  html_url: string;
}
const useGetUser = () => {
  const env = import.meta.env;
  const [user, setUser] = useState<User[]>([]);
  const [name, setName] = useState<string>("");
  const [loading, setIsLoading] = useState<boolean>(false);
  const getUser = async () => {
    setIsLoading(true);
    const res = await fetch(`${env.VITE_PUBLIC_API_URL}/search/users?q=${name}&per_page=5`, {
      headers: {
        Authorization: `Bearer ${env.VITE_PRIVATE_PAT}`,
      },
    });
    const data = await res.json();
    setUser(data.items);
    setIsLoading(false);
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return {
    loading,
    user,
    name,
    getUser,
    handleChangeName,
  };
};

export default useGetUser;
