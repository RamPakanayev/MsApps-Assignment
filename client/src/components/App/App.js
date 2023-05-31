//client\src\components\App\App.js

// Import necessary libraries and components
import React, { useEffect, useState } from "react"; // Core React functionality and hooks
import { connect } from "react-redux"; // Redux connect function to connect our component to Redux store
import { fetchImages } from "../../redux/actions"; // Action creator for fetching images
import ImageGrid from "../ImageGrid/ImageGrid"; // Component for displaying images in a grid
import NextButton from "../NextButton"; // Button for navigating to the next page
import PrevButton from "../PrevButton"; // Button for navigating to the previous page
import CategoryModal from "../CategoryModal/CategoryModal"; // Modal for changing the image category
import ErrorDisplay from "../ErrorDisplay"; // Component for displaying errors
import "./App.css"; // Styling for the App component

// App component
function App({ images, error, fetchImages }) {
  // Declare state variables
  const [category, setCategory] = useState("all"); // Current image category
  const [page, setPage] = useState(1); // Current page number
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false); // Whether the category modal is open

  // Fetch images when the component mounts or when category or page changes
  useEffect(() => {
    fetchImages(category, page);
  }, [fetchImages, category, page]);

  // Handlers for the next, previous, category change, and category button click events
  const handleNext = () => setPage((prevPage) => prevPage + 1); // Navigate to the next page
  const handlePrev = () => setPage((prevPage) => Math.max(prevPage - 1, 1)); // Navigate to the previous page, not going below page 1
  const handleCategoryChange = (newCategory) => {
    // Change the current category
    setCategory(newCategory);
    setIsCategoryModalOpen(false);
  };
  const handleCategoryButtonClick = () => setIsCategoryModalOpen(true); // Open the category modal

  // Render the App component
  return (
    <div className="app-container">
      <h1>Pixabay Image Gallery</h1>
      <div className="button-group">
        <PrevButton className="prev-button" onClick={handlePrev} />
        <button
          className="change-category-button"
          onClick={handleCategoryButtonClick}
        >
          Change Category
        </button>
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

// Connect the App component to the Redux store
const mapStateToProps = (state) => ({
  images: state.images.images, // Images from the Redux store
  error: state.images.error, // Error from the Redux store
});

const mapDispatchToProps = { fetchImages }; // Map the fetchImages action creator to props

// Export the connected App component
export default connect(mapStateToProps, mapDispatchToProps)(App);
