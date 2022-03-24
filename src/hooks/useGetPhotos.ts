import unsplash from '@/api/unSplash';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';

export const useGetPhotos = ({isRefreshing, setIsRefreshing}: any) => {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (isRefreshing || page === 1) {
      unsplash.search
        .getPhotos({query: 'cat', page: page})
        .then(result => {
          setPhotos(result.response?.results);
          setIsRefreshing(false);
        })
        .catch(() => {
          console.log('Something went wrong!');
        });
    }
  }, [isRefreshing, page, setIsRefreshing]);

  const data: any = useRef([]);

  const newPhotos = useMemo(() => {
    data.current = [...data.current, ...photos];
    return data.current;
  }, [photos, data]);

  const handleRefetch = useCallback(() => {
    if (photos.length !== 0) {
      setPage(page + 1);
    }
  }, [photos.length, page]);

  return {
    data: newPhotos,
    refetch: handleRefetch,
  };
};
