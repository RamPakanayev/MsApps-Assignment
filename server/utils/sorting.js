// server/utils/sorting.js
exports.sortImages = (images, sortBy) => {
  if (sortBy === 'id') {
    return images.sort((a, b) => a.id - b.id);
  } else if (sortBy === 'date') {
    return images.sort((a, b) => new Date(a.webformatURL) - new Date(b.webformatURL));
  } else {
    return images;
  }
};
