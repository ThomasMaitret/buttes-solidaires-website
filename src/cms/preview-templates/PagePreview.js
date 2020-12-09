import React from "react";
import PropTypes from "prop-types";
import { PageTemplate } from "../../templates/page";

const PagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  if (!data) return <div>Loading...</div>;
  return <PageTemplate image={getAsset(data.image)} title={data.title} />;
};

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default PagePreview;
