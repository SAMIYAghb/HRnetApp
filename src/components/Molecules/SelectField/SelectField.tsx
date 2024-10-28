import React from "react";
import LabelUI from "../../Atoms/Label/LabelUI";
import SelectUI from "../../Atoms/Select/SelectUI";

interface Option {
  label: string;
  value: string;
}

interface SelectFieldProps {
  label: string;
  value: string;
  options: Option[];
  onChange?: (value: string) => void;
  defaultValue?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, options, onChange }) => (
  <div className="input_item">
    <LabelUI text={label} />
    <SelectUI 
    options={options} 
    onChange={onChange} />
  </div>
);

export default SelectField;