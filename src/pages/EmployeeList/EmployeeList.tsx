import { Link } from "react-router-dom";
import TableUI from "../../components/Atoms/Table/TableUI";
import { RootState } from '../../redux/store';
import { useSelector } from "react-redux";


const EmployeeList = () => {
  const employees = useSelector((state: RootState) => state.employees.employees);

  return (
    <>
      <div className="title_container">
        <h1>Current Employees</h1>
      </div>
      <div className="container">
        <div className="table_head">
          <div className="entries"></div>
          <div className="search"></div>
        </div>
        <TableUI data={employees} />
        {/* <div className="pagination">
          <div className="count"></div>
          <div className="page_number"></div>
        </div> */}

        <Link to="/">Home</Link>
        
      </div>
    </>
  );
};

export default EmployeeList;
