import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import BlogPostPreview from "./preview-templates/BlogPostPreview";
import PagePreview from "./preview-templates/PagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", PagePreview);
CMS.registerPreviewTemplate("asso", PagePreview);
CMS.registerPreviewTemplate("potager", PagePreview);
CMS.registerPreviewTemplate("offres", PagePreview);
CMS.registerPreviewTemplate("galerie", PagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
