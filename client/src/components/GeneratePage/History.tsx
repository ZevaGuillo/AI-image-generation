import { useState, useEffect, useCallback } from "react";
import { History } from "../../types/user";
import Swal from "sweetalert2";
import Loader from "../Loader";
import Gallery from "../Homepage/Gallery";
import { useAppSelector } from "../../hooks/useRedux";

export const HistoryGallery = () => {
  const { credits } = useAppSelector(state => state.auth);
  const [history, setHistory] = useState<History[]>();
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
        setHistory(result);
      }
    } catch (error) {
      Swal.fire({
        title: "We had a problem loading history",
        icon: "error",
        focusConfirm: false,
        confirmButtonText: "Ok",
      });
    } finally {
      setLoading(false);
    }
  }, [credits]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="py-8">
      {loading ? (
        <Loader />
      ) : (
        <>
          {!!history?.length && (
            <>
              <h2 className="px-2 md:px-20 font-semibold py-8 text-4xl text-gradient">
                History
              </h2>
              <Gallery
                posts={history.reverse()}
                type="history"
              />
            </>
          )}
        </>
      )}
    </div>
  );
};
