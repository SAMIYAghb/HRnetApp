// import React from 'react';
// import { Table } from 'antd';
// import type { TableColumnsType, TableProps } from 'antd';

// interface DataType {
//   key: React.Key;
//   name: string;
//   chinese: number;
//   math: number;
//   english: number;
// }

// const columns: TableColumnsType<DataType> = [
//   {
//     title: 'First Name',
//     dataIndex: 'name',
//     sorter: {
//       compare: (a, b) => a.chinese - b.chinese,
//       multiple: 3,
//     },
//   },
//   {
//     title: 'Last Name',
//     dataIndex: 'chinese',
//     sorter: {
//       compare: (a, b) => a.chinese - b.chinese,
//       multiple: 3,
//     },
//   },
//   {
//     title: 'Start Date',
//     dataIndex: 'math',
//     sorter: {
//       compare: (a, b) => a.math - b.math,
//       multiple: 2,
//     },
//   },
//   {
//     title: 'Departement',
//     dataIndex: 'english',
//     sorter: {
//       compare: (a, b) => a.english - b.english,
//       multiple: 1,
//     },
//   },
//   {
//     title: 'Date of Birth',
//     dataIndex: 'english',
//     sorter: {
//       compare: (a, b) => a.english - b.english,
//       multiple: 1,
//     },
//   },
//   {
//     title: 'Street',
//     dataIndex: 'english',
//     sorter: {
//       compare: (a, b) => a.english - b.english,
//       multiple: 1,
//     },
//   },
//   {
//     title: 'City',
//     dataIndex: 'english',
//     sorter: {
//       compare: (a, b) => a.english - b.english,
//       multiple: 1,
//     },
//   },
//   {
//     title: 'State',
//     dataIndex: 'english',
//     sorter: {
//       compare: (a, b) => a.english - b.english,
//       multiple: 1,
//     },
//   },
//   {
//     title: 'Zip Code',
//     dataIndex: 'english',
//     sorter: {
//       compare: (a, b) => a.english - b.english,
//       multiple: 1,
//     },
//   },
// ];

// const data: DataType[] = [
//   {
//     key: '1',
//     name: 'John Brown',
//     chinese: 98,
//     math: 60,
//     english: 70,
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     chinese: 98,
//     math: 66,
//     english: 89,
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     chinese: 98,
//     math: 90,
//     english: 70,
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     chinese: 88,
//     math: 99,
//     english: 89,
//   },
// ];

// const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
//   console.log('params', pagination, filters, sorter, extra);
// };

// const TableUI: React.FC = () => {
//   return (
//     <Table<DataType> columns={columns} dataSource={data} onChange={onChange} />
//   )
// }

// export default TableUI



// columns: [
//   { title: 'First Name', data: 'firstName' },
//   { title: 'Last Name', data: 'lastName' },
//   { title: 'Start Date', data: 'startDate' },
//   { title: 'Department', data: 'department' },
//   { title: 'Date of Birth', data: 'dateOfBirth' },
//   { title: 'Street', data: 'street' },
//   { title: 'City', data: 'city' },
//   { title: 'State', data: 'state' },
//   { title: 'Zip Code', data: 'zipCode' },
// ]