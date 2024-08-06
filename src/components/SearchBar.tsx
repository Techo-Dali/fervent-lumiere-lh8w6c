// src/components/SearchBar.tsx
import React from "react";
import { IonSearchbar } from "@ionic/react";

interface SearchBarProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchText, setSearchText }) => {
  return (
    <IonSearchbar
      value={searchText}
      onIonChange={(e) => setSearchText(e.detail.value!)}
      placeholder="Search events"
    />
  );
};

export default SearchBar;
