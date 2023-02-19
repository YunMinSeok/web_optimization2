import { createSelector } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from '../components/PhotoList';
import { fetchPhotos } from '../redux/photos';

function PhotoListContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const selecterFilteredPhostos = createSelector(
    [state => state.photos.data, state => state.category.category],
    (photos, category) =>
      category === 'all' ? photos : photos.filter(photo => photo.category === category)
  );

  const photos = useSelector(selecterFilteredPhostos);
  const loading = useSelector(state => state.photos.loading);

  if (loading === 'error') {
    return <span>Error!</span>;
  }

  if (loading !== 'done') {
    return <span>loading...</span>;
  }

  return <PhotoList photos={photos} />;
}

export default PhotoListContainer;
