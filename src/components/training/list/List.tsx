import { IonList, IonSearchbar } from "@ionic/react";
import Item from "./Item";

const List: React.FC = () => {
  return (
    <IonList>
      <IonSearchbar />
      <Item title="dupa" thumb="dfh" tags="chip-aerial" />
    </IonList>
  );
};

export default List;
