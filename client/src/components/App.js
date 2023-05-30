// client\src\components\App.js
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchImages } from "../redux/actions";
import ImageGrid from "./ImageGrid";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import CategoryModal from "./CategoryModal";
import ErrorDisplay from "./ErrorDisplay";

function App({ images, error, fetchImages }) {
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchImages(category, page);
  }, [fetchImages, category, page]);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrev = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div>
      <h1>Pixabay Image Gallery</h1>
      <PrevButton onClick={handlePrev} />
      <CategoryModal onChange={handleCategoryChange} />
      <NextButton onClick={handleNext} />
      {error && <ErrorDisplay error={error} />}
      <ImageGrid images={images} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  images: state.images.images,
  loading: state.images.loading,
  error: state.images.error,
});

const mapDispatchToProps = { fetchImages };

export default connect(mapStateToProps, mapDispatchToProps)(App);
