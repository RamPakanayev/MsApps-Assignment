// client\src\components\App.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchImages } from "../redux/actions";
import ImageGrid from "./ImageGrid";

function App({ loading, error, fetchImages }) {
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Pixabay Image Gallery</h1>
      <ImageGrid />
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.images.loading,
  error: state.images.error,
});

const mapDispatchToProps = { fetchImages };

export default connect(mapStateToProps, mapDispatchToProps)(App);
