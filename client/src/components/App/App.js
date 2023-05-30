//client\src\components\App\App.js
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchImages } from "../../redux/actions";
import ImageGrid from "../ImageGrid/ImageGrid";
import NextButton from "../NextButton";
import PrevButton from "../PrevButton";
import CategoryModal from "../CategoryModal/CategoryModal";
import ErrorDisplay from "../ErrorDisplay";
import "./App.css";

function App({ images, error, fetchImages }) {
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

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
    setIsCategoryModalOpen(false);
  };

  const handleCategoryButtonClick = () => {
    setIsCategoryModalOpen(true);
  };

  return (
    <div className="app-container">
      <h1>Pixabay Image Gallery</h1>
      <div className="button-group">
        <PrevButton className="prev-button" onClick={handlePrev} />
        <button onClick={handleCategoryButtonClick}>Change Category</button>
        <NextButton className="next-button" onClick={handleNext} />
      </div>
      {isCategoryModalOpen && (
        <CategoryModal
          isOpen={isCategoryModalOpen}
          onChange={handleCategoryChange}
          onClose={() => setIsCategoryModalOpen(false)}
        />
      )}
      {error && <ErrorDisplay error={error} />}
      <div className="image-grid-container">
        <ImageGrid images={images} />
      </div>
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
