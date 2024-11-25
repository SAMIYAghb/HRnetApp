import React from "react";
import LabelUI from "../../Atoms/Label/LabelUI";
import SelectUI from "../../Atoms/Select/SelectUI";
import { SelectFieldProps } from "../../../../types";


const SelectField: React.FC<SelectFieldProps> = React.memo(({ label, options, onChange, error }) => (
  <>
  <div className="input_item">
    <LabelUI text={label} />
    <SelectUI 
    options={options} 
    onChange={onChange} />
  </div>
  {error && <div className="error-message">{error}</div>}
   </>
));

export default SelectField;