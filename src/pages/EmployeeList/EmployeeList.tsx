import { Link } from "react-router-dom";
import TableUI from "../../components/Atoms/Table/TableUI";
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setEmployees } from '../../redux/slices/EmployeeSlice';

const EmployeeList = () => {
  const dispatch = useDispatch(); // Initialize dispatch
  const employees = useSelector((state: RootState) => state.employees.employees);


  useEffect(() => {
    // Load employees from localStorage when the component mounts
    const storedEmployees = JSON.parse(localStorage.getItem("employees") || "[]");
    
    // If the Redux state is empty, populate it from localStorage
    if (!employees.length && storedEmployees.length) {
      dispatch(setEmployees(storedEmployees)); // Dispatch action to set employees in Redux state
    }
  }, [dispatch, employees.length]);

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
