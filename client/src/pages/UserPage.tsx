import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router';

const UserPage = () => {

  const {username} = useParams();
  const [user, setUser] = useState<any[]>();

  const fetchUser = async () => {
    // setLoading(true);

    try {
      const response = await fetch(`http://localhost:8000/api/v1/user/${username}`);

      if (response.ok) {
        const result = await response.json();
        console.log(result.user)
        setUser(result.user);
      }
    } catch (error) {
      alert(error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if(user?.length === 0){
    return <Navigate to={'/'}/>
  }

  return <div>UserPage</div>;
};

export default UserPage;
