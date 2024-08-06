import {
  IonLabel,
  IonItemSliding,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonThumbnail,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from "@ionic/react";
import { tvOutline, clipboardOutline } from "ionicons/icons";
import { ChipStyle, ChipProps, styleList } from "../chip/Chip";
import stadiums from "../../../constants/stadiums";

import Chip from "../chip/Chip";

interface ItemProps {
  title: string;
  thumb: string;
  tags: typeof styleList[keyof typeof styleList];
}

const Item: React.FC<ItemProps> = (props) => {
  const { title, thumb, tags } = props;

  return (
    <IonItemSliding class="mb-4 rounded-full">
      <IonItem>
        <IonThumbnail>
          <IonImg src={thumb.path} alt="" class="rounded-full" />
        </IonThumbnail>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel class="ml-2">{title}</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <Chip type={tags} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <IonItemOptions side="start">
        <IonItemOption color="danger" onClick={() => {}}>
          <IonIcon icon={tvOutline} class="text-lg mr-1" />
          Preview
        </IonItemOption>
      </IonItemOptions>
      <IonItemOptions side="end">
        <IonItemOption color="success" onClick={() => {}}>
          <IonIcon icon={clipboardOutline} class="text-lg mr-1" />
          Copy
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default Item;
