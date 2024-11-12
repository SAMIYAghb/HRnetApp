import React from "react";
import LabelUI from "../../Atoms/Label/LabelUI";
import InputUI from "../../Atoms/Input/InputUI";


interface SearchFieldProps {
  searchString: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ searchString, onSearchChange }) => (
  <div className="search">
    <LabelUI text="Search:" htmlFor="search" />
    <InputUI name="search" type="text" value={searchString} onChange={onSearchChange} />
  </div>
);

export default SearchField;
