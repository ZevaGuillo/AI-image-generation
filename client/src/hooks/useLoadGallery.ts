import { useCallback, useEffect } from "react";
import Swal from "sweetalert2";
import { onAddPosts, onLoading, onSetLast } from "../store/gallery/gallerySlice";
import useInfiniteScroll from "./useInfiniteScroll";
import { useAppDispatch, useAppSelector } from './useRedux';

const useLoadGallery = () => {

    const dispatch = useAppDispatch();

    const { last } = useAppSelector(state => state.gallery)

    const { loadMoreRef, skip } = useInfiniteScroll();

    const fetchPosts = useCallback(async () => {
        try {
            dispatch(onLoading())
            if (!last) {
                const response = await fetch(
                    `${import.meta.env.VITE_SERVER}/api/v1/post/?since=${skip}`
                );

                if (response.ok) {
                    const result = await response.json();
                    dispatch(onAddPosts(result.posts));

                    if (result.posts.length < 10) {
                        dispatch(onSetLast());
                    }
                }

            }
        } catch (error) {
            Swal.fire({
                title: 'Out of service',
                icon: 'error',
                focusConfirm: false,
                confirmButtonText: 'Ok',
            })
        } finally {
            dispatch(onLoading())
        }
    }, [skip]);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);


    return {
        loadMoreRef,
    };
};

export default useLoadGallery;

