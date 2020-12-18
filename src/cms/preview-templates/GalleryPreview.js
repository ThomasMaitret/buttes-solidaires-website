import React from "react";
import PropTypes from "prop-types";
import { GalleryTemplate } from "../../templates/gallery";

const GalleryPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  if (!data) return <div>Loading...</div>;
  return <GalleryTemplate image={getAsset(data.image)} title={data.title} />;
};

GalleryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default GalleryPreview;
