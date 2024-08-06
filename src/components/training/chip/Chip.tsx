import { IonChip, IonLabel } from "@ionic/react";

export type ChipStyle =
  | "chip-misc"
  | "chip-aerial"
  | "chip-airdribbling"
  | "chip-resets"
  | "chip-redirects"
  | "chip-rebounds"
  | "chip-ground"
  | "chip-backboard"
  | "chip-dashes"
  | "chip-ceilling"
  | "chip-wall"
  | "chip-sidewall"
  | "chip-corner";

export const styleList: { [key: string]: ChipStyle } = {
  misc: "chip-misc",
  aerial: "chip-aerial",
  airdribbling: "chip-airdribbling",
  resets: "chip-resets",
  redirects: "chip-redirects",
  rebounds: "chip-rebounds",
  ground: "chip-ground",
  backboard: "chip-backboard",
  dashes: "chip-dashes",
  ceilling: "chip-ceilling",
  wall: "chip-wall",
  sidewall: "chip-sidewall",
  corner: "chip-corner",
} as const;

export interface ChipProps {
  type: typeof styleList[keyof typeof styleList];
}

const labelText = (style: string) => {
  switch (style) {
    case "chip-misc":
      return "misc";
    case "chip-aerial":
      return "aerial";
    case "chip-airdribbling":
      return "airdribbling";
    case "chip-resets":
      return "resets";
    case "chip-redirects":
      return "redirects";
    case "chip-rebounds":
      return "rebounds";
    case "chip-ground":
      return "ground";
    case "chip-backboard":
      return "backboard";
    case "chip-dashes":
      return "dashes";
    case "chip-ceilling":
      return "ceilling";
    case "chip-wall":
      return "wall";
    case "chip-sidewall":
      return "sidewall";
    case "chip-corner":
      return "corner";
  }
};

const Chip: React.FC<ChipProps> = (props) => {
  const { type } = props;
  return (
    <IonChip class={type}>
      <IonLabel>{labelText(type)}</IonLabel>
    </IonChip>
  );
};

export default Chip;
