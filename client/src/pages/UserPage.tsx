import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router";
import { User } from "../types/user";

const UserPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState<User[]>();
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/user/${username}`
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result.user);
        setUser(result.user);
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [username]);

  if (user?.length === 0) {
    return <Navigate to={"/"} />;
  }

  if (loading || !user) {
    return <></>;
  }

  console.log(user)

  return (
    // <div className="flex items-center justify-center min-h-screen from-gray-700 via-gray-800 to-gray-900 bg-gradient-to-br">
    <div
      className=" bg-bgColor h-[100vh]"
      style={{
        backgroundImage:
          "url(https://cdna.artstation.com/p/assets/images/images/000/215/866/large/anton-fadeev-bloodmoon-ruins2-1-800-logo.jpg?1443930004)",
      }}>
      <div className="h-full flex flex-col w-full group break-words ">
        <div className="py-6 bg-bgColor bg-opacity-80 backdrop-blur-xl drop-shadow-xl">
          <div className="flex flex-wrap ">
            <div className="flex mx-auto">
                <img
                  src={user[0].profilePic}
                  referrerPolicy="no-referrer"
                  className=" rounded-full min-w-[120px] max-w-[150px] align-middle"
                />
            </div>
          </div>
          <div className="mt-4 ">
            <h3 className="mb-1 text-2xl text-center font-bold leading-normal text-gray-700 dark:text-gray-300">
              {user[0].username}
            </h3>
          </div>
          <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
            <div className="flex flex-wrap justify-center ">
              <div className="w-full px-6">fdfdf</div>
            </div>
          </div>
        </div>
        <div className="bg-bgColor flex-1">f</div>
      </div>
    </div>
  );
};

export default UserPage;
