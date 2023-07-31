import { useEffect, useState } from "react";
import useGetRepo from "../../composables/useGetRepo";
interface ICard {
  name: string;
  avatar_url: string;
  html_url: string;
}
const Card: React.FC<ICard> = ({ name, avatar_url, html_url }) => {
  const [toggle, setToggle] = useState(false);
  const { getRepo, repos, loading } = useGetRepo();

  useEffect(() => {
    toggle && getRepo(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);
  return (
    <div className="w-1/2 p-2 flex flex-col items-center  m-2 bg-white bg-white mx-auto rounded-xl ">
      <div
        className="flex items-center justify-between rounded-lg w-full bg-gray-200 p-2 cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <div className="flex items-center">
          <img className="rounded-full mr-4 w-20" src={avatar_url} alt="Avatar User" />
          <div>
            <h2 className="text-gray-900 text-lg font-bold">{name}</h2>
            <a href={html_url} target="_blank">
              Visit Profile
            </a>
          </div>
        </div>
        <div className="pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            {!toggle ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            )}
          </svg>
        </div>
      </div>
      {toggle && (
        <div className="bg-white rounded-lg w-full flex flex-col py-5">
          {loading && (
            <>
              <div role="status" className=" mx-auto w-full animate-pulse">
                <div className=" bg-gray-200 dark:bg-gray-500 rounded-lg w-full h-20 mb-4"></div>
              </div>
              <div role="status" className=" mx-auto w-full animate-pulse">
                <div className=" bg-gray-200 dark:bg-gray-500 rounded-lg w-full h-20 mb-4"></div>
              </div>
              <div role="status" className=" mx-auto w-full animate-pulse">
                <div className=" bg-gray-200 dark:bg-gray-500 rounded-lg w-full h-20 mb-4"></div>
              </div>
              <div role="status" className=" mx-auto w-full animate-pulse">
                <div className=" bg-gray-200 dark:bg-gray-500 rounded-lg w-full h-20 mb-4"></div>
              </div>
              <div role="status" className=" mx-auto w-full animate-pulse">
                <div className=" bg-gray-200 dark:bg-gray-500 rounded-lg w-full h-20 mb-4"></div>
              </div>
            </>
          )}
          {repos &&
            !loading &&
            repos.map((item) => {
              return (
                <ul className="flex flex-col mb-5 py-5 bg-gray-200 rounded-lg px-5">
                  <div className="flex justify-between items-center">
                    <li className="font-bold"> - {item.name}</li>
                    <li className="text-sm flex items-center">
                      {item.stargazers_count}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="tomato"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="tomato"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                  </div>
                </ul>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Card;
