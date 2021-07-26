import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem';

import PropTypes from 'prop-types';

const ImageGallery = ({ images, onClickImg }) => {
  return (
    <ul className={ImageGallery}>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          onClickImg={onClickImg}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onClickImg: PropTypes.func.isRequired,
};

export default ImageGallery;
