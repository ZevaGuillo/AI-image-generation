import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router";
import { User } from "../types/user";
import Gallery from "../components/Homepage/Gallery";
import Loader from "../components/Loader";

const UserPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState<User[]>();
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER}/api/v1/user/${username}`
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (user?.length === 0) {
    return <Navigate to={"/"} />;
  }

  if (loading || !user) {
    return (
      <div className="pt-28 bg-transparent min-h-[100vh]">
        <Loader />
      </div>
    );
  }

  return (
    <main
      className="pt-16 bg-bgColor min-h-[100vh]"
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
            <h3 className="mb-1 text-2xl text-center font-bold leading-normal text-gray-300">
              {user[0].username}
            </h3>
          </div>
          <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-700/50">
            <div className="flex flex-wrap justify-center ">
              <div className="w-full px-6">Posts: {user[0].posts.length}</div>
            </div>
          </div>
        </div>
        <div className="bg-bgColor min-h-[70vh] flex-1 pt-8">
          <Gallery
            posts={user[0].posts
              .reverse()
              .map(post => ({ ...post, user: { ...user[0] } }))}
          />
        </div>
      </div>
    </main>
  );
};

export default UserPage;
