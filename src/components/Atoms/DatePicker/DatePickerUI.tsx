import { DatePicker } from 'antd';
import { Dayjs } from 'dayjs'; // Assurez-vous d'importer dayjs
import React from 'react';

interface DatePickerUIProps {
  value?: Dayjs | null; // Utilisez Dayjs au lieu de string
  onChange: (date: Dayjs | null, dateString: string | string[]) => void; // Accepter à la fois string et string[]
}

const DatePickerUI: React.FC<DatePickerUIProps> = ({ value, onChange }) => (
  <DatePicker
    value={value} // Ant Design gère automatiquement Dayjs
    onChange={onChange} // Cela fonctionnera maintenant avec le bon type
    style={{ width: '100%' }}
  />
);

export default DatePickerUI;
