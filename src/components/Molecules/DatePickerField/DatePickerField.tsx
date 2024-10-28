import React from 'react';
import LabelUI from '../../Atoms/Label/LabelUI';
import DatePickerUI from '../../Atoms/DatePicker/DatePickerUI';
import { Dayjs } from 'dayjs';



interface DatePickerFieldProps {
  label: string;
  name: string;
  value?: Dayjs | null; // Utilisez Dayjs
  onChange: (date: Dayjs | null, dateString: string | string[]) => void; // Le premier paramètre doit être Dayjs
  error?: string;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({ label, name, value, onChange, error }) => {
  return (
    <div className="input_item">
      <LabelUI text={label} htmlFor={name} />
      <DatePickerUI value={value} onChange={onChange} />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default DatePickerField;



