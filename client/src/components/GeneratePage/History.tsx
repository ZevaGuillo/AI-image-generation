import { useState, useEffect, useCallback } from "react";
import { History } from "../../types/user";
import Swal from "sweetalert2";
import Loader from "../Loader";

export const HistoryGallery = () => {
  const [history, setHistory] = useState<History>();
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_SERVER}/api/v1/user/history`,
        {
          credentials: "include",
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      }
    } catch (error) {
      Swal.fire({
        title: "History no working",
        icon: "error",
        focusConfirm: false,
        confirmButtonText: "Ok",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>History</h2>
      {loading && <Loader />}
    </div>
  );
};
