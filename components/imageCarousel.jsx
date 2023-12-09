"use client";
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';


export default function ImageCarousel({images}) {
    const loaderProp = ({src}) => {
        return src;
    }
    return (
      <div className="flex flex-col justify-center items-center  bg-background w-full h-full ">
        <Carousel
          renderIndicator={false}
          showIndicators={true}
          emulateTouch={true}
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          interval={5000}
          infiniteLoop={true}
          width={300}
          dynamicHeight
          className="bg-background "
        >
          {images.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center "
            >
              <Image
                src={item.src}
                alt={index}
                loader={loaderProp}
                unoptimized={true}
                loading="lazy"
                width={item.width}
                height={1080}
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
}