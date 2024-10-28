import React from "react";

interface LabelUIProps {
  text: string;
  htmlFor?: string;
}

const LabelUI: React.FC<LabelUIProps> = ({ text, htmlFor }) => (
  <label
  className="label"
   htmlFor={htmlFor}>{text}</label>
);

export default LabelUI;