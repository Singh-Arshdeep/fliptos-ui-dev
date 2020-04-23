import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./viewItemGallery.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const ViewItemGallery = () => {
  return (
    <Carousel infiniteLoop="true">
      <div>
        <img src={images[0].original} alt="img" />
        {/* <p className="legend">Image 1</p> */}
      </div>
      <div>
        <img src={images[1].original} alt="img" />
      </div>
      <div>
        <img src={images[2].original} alt="img" />
      </div>
      <div>
        <img src={images[0].original} alt="img" />
      </div>
    </Carousel>
  );
};
export default ViewItemGallery;
