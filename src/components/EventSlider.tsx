// src/components/EventSlider.tsx
import React, { useState } from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IonModal, IonButton, IonContent, IonImg } from "@ionic/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import EventCard from "./EventCard";
import SearchBar from "./SearchBar";
import StoriesSlider from "./StoriesSlider";

SwiperCore.use([Pagination]);

const events = [
  {
    title: "Event 1",
    date: "2023-08-01",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150/0000FF/808080?text=Second+Image",
      "https://via.placeholder.com/150/FF0000/FFFFFF?text=Third+Image",
    ],
    description: "Description for Event 1",
    lat: 40.712776,
    lng: -74.005974,
    instagramUrl: "https://www.instagram.com/p/XXXXXXXXX/",
  },
  {
    title: "Event 2",
    date: "2023-08-02",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150/0000FF/808080?text=Second+Image",
    ],
    description: "Description for Event 2",
    lat: 34.052235,
    lng: -118.243683,
    instagramUrl: "https://www.instagram.com/p/YYYYYYYYY/",
  },
  {
    title: "Event 3",
    date: "2023-08-03",
    images: ["https://via.placeholder.com/150"],
    description: "Description for Event 3",
    lat: 51.507351,
    lng: -0.127758,
    instagramUrl: "https://www.instagram.com/p/ZZZZZZZZZ/",
  },
];

const stories = events.map((event) => ({
  images: event.images,
  title: event.title,
  instagramUrl: event.instagramUrl,
}));

const EventSlider: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedStory, setSelectedStory] = useState<null | {
    images: string[];
    title: string;
  }>({ images: [], title: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchText.toLowerCase()) ||
      event.description.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleButtonClick = (eventTitle: string) => {
    alert(`More info about ${eventTitle}`);
  };

  const handleStoryClick = (story: { images: string[]; title: string }) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  return (
    <div>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <StoriesSlider stories={stories} onStoryClick={handleStoryClick} />
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {filteredEvents.map((event, index) => (
          <SwiperSlide key={index}>
            <EventCard
              {...event}
              onButtonClick={() => handleButtonClick(event.title)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <IonModal isOpen={isModalOpen} onDidDismiss={closeModal}>
        <IonContent className="ion-padding">
          {selectedStory && (
            <>
              <Swiper
                spaceBetween={5}
                slidesPerView={3}
                pagination={{ clickable: true }}
              >
                {selectedStory.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <IonImg src={image} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <p style={{ textAlign: "center" }}>{selectedStory.title}</p>
              <IonButton expand="block" onClick={closeModal}>
                Close
              </IonButton>
            </>
          )}
        </IonContent>
      </IonModal>
    </div>
  );
};

export default EventSlider;
