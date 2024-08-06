// src/components/EventCard.tsx
import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonButton,
} from "@ionic/react";
import EventMap from "./EventMap";
import InstagramEmbed from "./InstagramEmbed";

interface EventCardProps {
  title: string;
  date: string;
  image: string;
  description: string;
  lat: number;
  lng: number;
  instagramUrl: string;
  onButtonClick: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  image,
  description,
  lat,
  lng,
  instagramUrl,
  onButtonClick,
}) => {
  return (
    <IonCard>
      <IonImg src={image} />
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{date}</p>
        <p>{description}</p>
        <EventMap lat={lat} lng={lng} />
        <InstagramEmbed url={instagramUrl} />
        <IonButton onClick={onButtonClick}>More Info</IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default EventCard;
