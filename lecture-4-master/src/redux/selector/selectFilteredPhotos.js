import { createSelector } from '@reduxjs/toolkit';

export default createSelector(
  [state => state.photos.data, state => state.category.category],
  (photos, category) =>
    category === 'all' ? photos : photos.filter(photo => photo.category === category)
);
