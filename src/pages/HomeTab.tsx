import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import EventSlider from "../components/EventSlider";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Event Slider</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <EventSlider />
      </IonContent>
    </IonPage>
  );
};

export default Home;
