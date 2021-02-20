import PageTemplate from "templates/page";
import { getGalleryImages } from "../lib/api";
import Image from "next/image";
import { SRLWrapper } from "simple-react-lightbox";

const Gallerypage = ({ images }) => {
  return (
    <PageTemplate image="/img/abris.webp" title="Galerie">
      <SRLWrapper options={{ usingPreact: true }}>
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => {
            return (
              <div
                className="h-48 relative cursor-pointer visibility-auto"
                key={index}
              >
                <Image
                  src={image}
                  layout="fill"
                  objectFit="cover"
                  alt={image}
                />
              </div>
            );
          })}
        </div>
      </SRLWrapper>
    </PageTemplate>
  );
};

export default Gallerypage;

export async function getStaticProps() {
  const images = getGalleryImages();

  return {
    props: { images },
  };
}
