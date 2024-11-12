import React from "react";
import SearchField from "../Molecules/SearchField/SearchField";
import EntriesSelector from "../Molecules/EntriesSelector/EntriesSelector";


interface EmployeeTableHeaderProps {
  searchString: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEntriesChange: (value: string | number) => void;
  options: { label: string; value: string }[];
}

const EmployeeTableHeader: React.FC<EmployeeTableHeaderProps> = ({
  searchString,
  onSearchChange,
  onEntriesChange,
  options,
}) => (
  <div className="table_head">
    <EntriesSelector options={options} onEntriesChange={onEntriesChange} />
    <SearchField searchString={searchString} onSearchChange={onSearchChange} />
  </div>
);

export default EmployeeTableHeader;
