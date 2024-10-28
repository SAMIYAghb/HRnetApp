import React from "react";
import LabelUI from "../../Atoms/Label/LabelUI";
import InputUI from "../../Atoms/Input/InputUI";

interface InputFieldProps {
  label: string;
  name: string;
  type?: "text" | "number";
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type, value, onChange, onBlur,error }) => (
  <div className="input_item">
    <LabelUI text={label} htmlFor={name} />
    <InputUI name={name} type={type} value={value} onChange={onChange} onBlur={onBlur} />
    {error && <div className="error-message">{error}</div>}
  </div>
);

export default InputField;