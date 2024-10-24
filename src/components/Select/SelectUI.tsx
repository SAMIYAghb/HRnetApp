import { Select } from "antd";
import React from "react";

interface Options {
  options: string[];
}

const SelectUI: React.FC<Options> = ({ options }) => {
  // Vérifie que options est défini
  if (!options) {
    return null; // Ou afficher un loader/placeholder
  }

  return (
    <Select
      // size={size}
      // onChange={handleChange}
      defaultValue={options[0]} // Utilise le premier élément du tableau comme valeur par défaut
       // Formate les options pour Ant Design
      options={options.map(option => ({ label: option, value: option }))} 
      style={{ width: "100%" }}
    />
    // <Select
    //   defaultValue={options[0]} // Utilise le premier élément du tableau comme valeur par défaut
    //   style={{ width: "100%" }}
    // >
    //   {options.map(option => (
    //     <Select.Option key={option} value={option}>
    //       {option}
    //     </Select.Option>
    //   ))}
    // </Select>
  );
};

export default SelectUI;
