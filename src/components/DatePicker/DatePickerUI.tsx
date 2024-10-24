import React from 'react'
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const DatePickerUI: React.FC = () => (
    <DatePicker onChange={onChange} style={{ width: '100%' }}/>
);

export default DatePickerUI;
