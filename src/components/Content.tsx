import Input from "./atoms/Input";
import Card from "./atoms/Card";
import Navbar from "./Navbar";
import useGetUser from "../composables/useGetUser";
import { Key } from "react";

const Content = () => {
  const { name, handleChangeName, getUser, user, loading } = useGetUser();
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getUser();
  };

  return (
    <>
      <Navbar />
      <div className="  p-10">
        <Input name={name} handleChange={handleChangeName} handleSubmit={submit} />
        {loading && (
          <>
            <div role="status" className=" mx-auto w-1/2 animate-pulse">
              <div className=" bg-gray-200 dark:bg-gray-500 rounded-lg w-full h-28 mb-4"></div>
            </div>
            <div role="status" className=" mx-auto w-1/2 animate-pulse">
              <div className=" bg-gray-200 dark:bg-gray-500 rounded-lg w-full h-28 mb-4"></div>
            </div>
            <div role="status" className=" mx-auto w-1/2 animate-pulse">
              <div className=" bg-gray-200 dark:bg-gray-500 rounded-lg w-full h-28 mb-4"></div>
            </div>
            <div role="status" className=" mx-auto w-1/2 animate-pulse">
              <div className=" bg-gray-200 dark:bg-gray-500 rounded-lg w-full h-28 mb-4"></div>
            </div>
            <div role="status" className=" mx-auto w-1/2 animate-pulse">
              <div className=" bg-gray-200 dark:bg-gray-500 rounded-lg w-full h-28 mb-4"></div>
            </div>
          </>
        )}
        {user &&
          !loading &&
          user.map((item: { id: Key | null | undefined; login: string; avatar_url: string; html_url: string; }) => {
            return (
              <>
                <Card key={item.id} name={item.login} avatar_url={item.avatar_url} html_url={item.html_url} />
              </>
            );
          })}
      </div>
    </>
  );
};

export default Content;
