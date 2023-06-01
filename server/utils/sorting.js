// Define a function to sort the array of images based on the provided parameter.

exports.sortImages = (images, sortBy) => {
  // If sortBy parameter is "id", sort the images by id
  if (sortBy === "id") {
    return images.sort((a, b) => a.id - b.id);
  }
  // If sortBy parameter is "date", sort the images by date
  else if (sortBy === "date") {
    return images.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else {
    return images;
  }
};
