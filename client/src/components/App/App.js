import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchImages } from "../../redux/actions";
import ImageGrid from "../ImageGrid/ImageGrid";
import NextButton from "../NextButton/NextButton";
import PrevButton from "../PrevButton/PrevButton";
import CategoryModal from "../CategoryModal/CategoryModal";
import ErrorDisplay from "../ErrorDisplay";
import "./App.css";

function App({ images, error, fetchImages }) {
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  // Fetch images when the component mounts or when category or page changes
  useEffect(() => {
    fetchImages(category, page);
  }, [fetchImages, category, page]);

  // Event handlers
  const handleNext = () => setPage((prevPage) => prevPage + 1);
  const handlePrev = () => setPage((prevPage) => Math.max(prevPage - 1, 1));
  const handleCategoryChange = (newCategory) => {
    // Change the current category
    setCategory(newCategory);
    setPage(1);
    setIsCategoryModalOpen(false);
  };
  const handleCategoryButtonClick = () => setIsCategoryModalOpen(true); // Open the category modal

  return (
    <div className="app-container">
      <h1>Pixabay Image Gallery</h1>
      <div className="button-group">
        <PrevButton onClick={handlePrev} />
        <p>{category}</p>

        <button
          className="change-category-button"
          onClick={handleCategoryButtonClick}
        >
          Change Category
        </button>

        <p>Page {page}</p>
        <NextButton onClick={handleNext} />
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

// Connect the App component to the Redux store
const mapStateToProps = (state) => ({
  images: state.images.images,
  error: state.images.error,
  loading: state.images.loading,
});

const mapDispatchToProps = { fetchImages }; // Map the fetchImages action creator to props

export default connect(mapStateToProps, mapDispatchToProps)(App);
