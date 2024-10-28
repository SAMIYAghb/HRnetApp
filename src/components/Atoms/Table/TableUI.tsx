import { Table } from "antd";
import dayjs from "dayjs";
import React from "react";
interface DataType {
  firstName: string;
  lastName: string;
  startDate: string;
  department: string;
  dateOfBirth: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

interface TableUIProps {
  data: DataType[];
  onChange?: (pagination: any, filters: any, sorter: any) => void;
}

// const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
//   console.log('params', pagination, filters, sorter, extra);
// };

const columns = [
    { title: "First Name", dataIndex: "firstName", key: "firstName" },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    { title: "Start Date", dataIndex: "startDate", key: "startDate",
        render: (date: string) => dayjs(date).format("DD/MM/YYYY"),
     },
    { title: "Department", dataIndex: "department", key: "department"},
    { title: "Date of Birth", dataIndex: "dateOfBirth", key: "dateOfBirth",
        render: (date: string) => dayjs(date).format("DD/MM/YYYY"),
     },
    { title: "Street", dataIndex: "street", key: "street" },
    { title: "City", dataIndex: "city", key: "city" },
    { title: "State", dataIndex: "state", key: "state" },
    { title: "Zip Code", dataIndex: "zipCode", key: "zipCode" },
  ];

const TableUI: React.FC<TableUIProps> = ({ data, onChange }) => {
  return (
    <Table columns={columns} dataSource={data} onChange={onChange} rowKey="zipCode"/>
  );
};

export default TableUI;
