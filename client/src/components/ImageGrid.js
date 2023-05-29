// client\src\components\ImageGrid.js
import React from 'react';
import { connect } from 'react-redux';

function ImageGrid({ images }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: '1rem',
    }}>
      {images.map(image => (
        <div key={image.id}>
          <img src={image.webformatURL} alt={image.tags} style={{ width: '100%' }} />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  images: state.images.images
});

export default connect(mapStateToProps)(ImageGrid);
