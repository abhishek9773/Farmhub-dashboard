import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ProgressBar from "../../components/ProgressBar";

const ProductDetails = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const settingsp = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  };
  return (
    <div className="py-[60px] p-2 min-w-screen min-h-screen">
      <div className="text-black flex items-center justify-between bg-slate-400 p-4 my-8 font-semibold">
        <p className="text-2xl">Product view</p>
        <p>
          <Link to="/#product">
            <span className="bg-green-400/70 rounded-full px-2 text-sm hover:text-lime-300 hover:underline">
              product
            </span>
          </Link>
          <span className="p-1">/</span>
          <span className="bg-green-400/70 rounded-full px-2 text-sm">
            details
          </span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-start gap-1 ">
        <div className="w-full md:w-4/12 h-full p-4">
          <p className="text-md font-semibold p-1">Product Gallery</p>
          <Slider {...settings}>
            <div className="outline-none">
              <img
                src="https://imgs.search.brave.com/gEjmTrVmRDTOD291nuxbyBGlNQ9EnIaZjSjhpxBvV80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90cmFj/dG9yLTE0OTU0Nzg2/LmpwZw"
                className="px-1 pt-1 rounded-t-lg object-contain"
                alt="Product"
              />
            </div>
          </Slider>
          <Slider {...settingsp}>
            {/* Add your additional images here */}
            <div className="p-1">
              <img
                src="https://imgs.search.brave.com/gEjmTrVmRDTOD291nuxbyBGlNQ9EnIaZjSjhpxBvV80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90cmFj/dG9yLTE0OTU0Nzg2/LmpwZw"
                className="rounded object-cover"
                alt="Product Thumbnail"
              />
            </div>{" "}
            <div className="p-1">
              <img
                src="https://imgs.search.brave.com/gEjmTrVmRDTOD291nuxbyBGlNQ9EnIaZjSjhpxBvV80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90cmFj/dG9yLTE0OTU0Nzg2/LmpwZw"
                className="rounded object-cover"
                alt="Product Thumbnail"
              />
            </div>{" "}
            <div className="p-1">
              <img
                src="https://imgs.search.brave.com/gEjmTrVmRDTOD291nuxbyBGlNQ9EnIaZjSjhpxBvV80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90cmFj/dG9yLTE0OTU0Nzg2/LmpwZw"
                className="rounded object-cover"
                alt="Product Thumbnail"
              />
            </div>{" "}
            <div className="p-1">
              <img
                src="https://imgs.search.brave.com/gEjmTrVmRDTOD291nuxbyBGlNQ9EnIaZjSjhpxBvV80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90cmFj/dG9yLTE0OTU0Nzg2/LmpwZw"
                className="rounded object-cover"
                alt="Product Thumbnail"
              />
            </div>{" "}
            <div className="p-1">
              <img
                src="https://imgs.search.brave.com/gEjmTrVmRDTOD291nuxbyBGlNQ9EnIaZjSjhpxBvV80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90cmFj/dG9yLTE0OTU0Nzg2/LmpwZw"
                className="rounded object-cover"
                alt="Product Thumbnail"
              />
            </div>{" "}
            <div className="p-1">
              <img
                src="https://imgs.search.brave.com/gEjmTrVmRDTOD291nuxbyBGlNQ9EnIaZjSjhpxBvV80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90cmFj/dG9yLTE0OTU0Nzg2/LmpwZw"
                className="rounded object-cover"
                alt="Product Thumbnail"
              />
            </div>
            {/* Additional thumbnails */}
          </Slider>
        </div>
        <div className="w-full md:w-8/12">
          <p className="text-md font-semibold mb-4">Product Details</p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Heavy-Duty Farm Tractor 4x4, 100HP Engine, Agricultural Equipment
          </h2>
          <div className="space-y-2">
            <div className="flex gap-2 items-start">
              <p className="font-semibold">Brand:</p>
              <p>AgriPower</p>
            </div>
            <div className="flex gap-2 items-start">
              <p className="font-semibold">Category:</p>
              <p>Agricultural Machinery</p>
            </div>
            <div className="flex gap-2 items-start">
              <p className="font-semibold">Tags:</p>
              <p className="flex flex-wrap gap-1">
                <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                  tractor
                </span>
                <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                  farming
                </span>
                <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                  heavy-duty
                </span>
                <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                  agriculture
                </span>
                <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                  machinery
                </span>
                <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                  4x4
                </span>
                <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                  diesel
                </span>
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <p className="font-semibold">Color:</p>
              <p>Green, Red, Yellow, Blue</p>
            </div>
            <div className="flex gap-2 items-start">
              <p className="font-semibold">Size:</p>
              <p>Standard, Large, Extra Large</p>
            </div>
            <div className="flex gap-2 items-start">
              <p className="font-semibold">Price:</p>
              <p>$15,000.00</p>
            </div>
            <div className="flex gap-2 items-start">
              <p className="font-semibold">Stock:</p>
              <p>(12)</p>
            </div>
            <div className="flex gap-2 items-start">
              <p className="font-semibold">Reviews:</p>
              <p>(07) Reviews</p>
            </div>
            <div className="flex gap-2 items-start">
              <p className="font-semibold">Published:</p>
              <p>15 June 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-4">
          <p className="font-semibold  mt-4 mb-2">Porduct Description</p>
          <p className="p-2 font-medium text-slate-600 ">
            Experience the power and efficiency of the Heavy-Duty Farm Tractor
            4x4 designed to tackle the toughest agricultural tasks. Equipped
            with a robust 100HP engine, this tractor is perfect for large-scale
            farming operations. Its 4x4 drive system ensures superior traction
            on all terrains, making it ideal for plowing, tilling, and hauling
            heavy loads. Crafted by AgriPower, a trusted name in agricultural
            machinery, this tractor offers exceptional durability and
            reliability. The ergonomic design provides comfort for long working
            hours, and the advanced hydraulic system allows for easy attachment
            and control of various farming implements. Whether you're a seasoned
            farmer or managing a large farm, the Heavy-Duty Farm Tractor is your
            reliable partner for boosting productivity and efficiency on the
            field.
          </p>
        </div>
      </div>
      {/* Rating for Product  */}
    </div>
  );
};

export default ProductDetails;
