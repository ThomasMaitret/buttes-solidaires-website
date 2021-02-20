import fs from "fs";
import { join } from "path";

const getGalleryImages = () => {
  const dir = fs.opendirSync(join(process.cwd(), "public", "img", "gallery"));
  let dirent;
  const images = [];

  while ((dirent = dir.readSync()) !== null) {
    images.push(`/img/gallery/${dirent.name}`);
  }

  dir.closeSync();

  return images;
};

module.exports = {
  getGalleryImages,
};
