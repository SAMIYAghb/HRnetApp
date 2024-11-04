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
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    sorter: (a: DataType, b: DataType) => a.firstName.localeCompare(b.firstName),
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
    sorter: (a: DataType, b: DataType) => a.lastName.localeCompare(b.lastName),
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
    render: (date: string) => dayjs(date).format("DD/MM/YYYY"),
    sorter: (a: DataType, b: DataType) => dayjs(a.startDate).unix() - dayjs(b.startDate).unix(),
  },
  { 
    title: "Department", 
    dataIndex: "department", 
    key: "department",
    sorter: (a: DataType, b: DataType) => a.department.localeCompare(b.department),
  },
  {
    title: "Date of Birth",
    dataIndex: "dateOfBirth",
    key: "dateOfBirth",
    render: (date: string) => dayjs(date).format("DD/MM/YYYY"),
    sorter: (a: DataType, b: DataType) => dayjs(a.dateOfBirth).unix() - dayjs(b.dateOfBirth).unix(),
  },
  { 
    title: "Street", 
    dataIndex: "street", 
    key: "street",
    sorter: (a: DataType, b: DataType) => a.street.localeCompare(b.street),
  },
  { 
    title: "City", 
    dataIndex: "city", 
    key: "city",
    sorter: (a: DataType, b: DataType) => a.city.localeCompare(b.city), 
  },
  { 
    title: "State", 
    dataIndex: "state", 
    key: "state",
    sorter: (a: DataType, b: DataType) => a.state.localeCompare(b.state),
  },
  { 
    title: "Zip Code", 
    dataIndex: "zipCode", 
    key: "zipCode",
    sorter: (a: DataType, b: DataType) => a.zipCode.localeCompare(b.zipCode), 
  },
];

const TableUI: React.FC<TableUIProps> = ({ data, onChange }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      rowKey={(record) =>
        `${record.zipCode}-${record.firstName}-${record.lastName}`
      }
      showSorterTooltip={{ target: 'sorter-icon' }}
      rowClassName={(record, index) => 
        index % 2 === 0 ? 'table-row' : 'table-row' 
      }
      pagination={false}
      // pagination={{ pageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '50', '100'] }} // Add pagination here
    />
  );
};

export default TableUI;
