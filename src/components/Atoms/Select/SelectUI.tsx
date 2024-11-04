import { Select } from "antd";
import React from "react";

interface Option {
  label: string;
  value: string;
}


interface SelectUIProps {
  options: Option[];
  onChange?: (value: string) => void;
  defaultValue?: string;
}

const SelectUI: React.FC<SelectUIProps> = ({ options, onChange }) => (
    <Select
      defaultValue ={options[0]?.value}
      onChange={onChange}
      options={options} // Pass options directly
      style={{ width: "100%" }}
    />

  );


export default SelectUI;
