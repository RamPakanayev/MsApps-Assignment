// client\src\components\App.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchImages } from "../redux/actions";

function App({ images, loading, error, fetchImages }) {
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Pixabay Image Gallery</h1>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.previewURL} alt={image.tags} />
          <p>{image.user}</p>
        </div>
      ))}
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
