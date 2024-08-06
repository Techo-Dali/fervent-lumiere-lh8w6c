// src/components/StoriesSlider.tsx
import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface Story {
  images: string[];
  title: string;
  instagramUrl: string;
}

interface StoriesSliderProps {
  stories: Story[];
  onStoryClick: (story: Story) => void;
}

const StoriesSlider: React.FC<StoriesSliderProps> = ({
  stories,
  onStoryClick,
}) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
    >
      {stories.map((story, index) => (
        <SwiperSlide key={index} onClick={() => onStoryClick(story)}>
          <div style={{ textAlign: "center" }}>
            <img
              src={story.images[0]}
              alt={story.title}
              style={{ borderRadius: "50%", width: "80px", height: "80px" }}
            />
            <p>{story.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StoriesSlider;
