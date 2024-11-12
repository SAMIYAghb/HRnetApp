import { Link } from "react-router-dom";
import TableUI from "../../components/Atoms/Table/TableUI";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setEmployees } from "../../redux/slices/EmployeeSlice";
import LabelUI from "./../../components/Atoms/Label/LabelUI";
import InputUI from "./../../components/Atoms/Input/InputUI";
import SelectUI from "../../components/Atoms/Select/SelectUI";
import dayjs from "dayjs";
import { selectStates } from "../../redux/slices/StateSlice";

const EmployeeList = () => {
  const [searchString, setSearchString] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch(); // Initialize dispatch
  const employees = useSelector(
    (state: RootState) => state.employees.employees
  );
  const states = useSelector(selectStates); 

  useEffect(() => {
    // Load employees from localStorage when the component mounts
    const storedEmployees = JSON.parse(
      localStorage.getItem("employees") || "[]"
    );

    // If the Redux state is empty, populate it from localStorage
    if (!employees.length && storedEmployees.length) {
      dispatch(setEmployees(storedEmployees)); // Dispatch action to set employees in Redux state
    }
  }, [dispatch, employees.length]);

  // Create a dictionary of states for quick lookups
  const stateAbbreviationMap = states.reduce((map, state) => {
    map[state.name] = state.abbreviation;
    return map;
  }, {} as Record<string, string>);

  
  const filteredEmployees = employees.map((employee) => ({
    ...employee,
    zipCode: Number(employee.zipCode), 
    state: stateAbbreviationMap[employee.state] || employee.state, // Replace state name with abbreviation
  })).filter((employee) =>
    Object.entries(employee).some(([key, value]) => {
      const stringValue = typeof value === 'number' ? value.toString() : value.toLowerCase().trim();
      if (key === "startDate" || key === "dateOfBirth") {
        const formattedDate = dayjs(value).format("DD/MM/YYYY");
        return formattedDate.includes(searchString.toLowerCase().trim());
      }
      return stringValue.includes(searchString.toLowerCase().trim());
    })
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
    setCurrentPage(1); // Reset to first page when search changes
  };

  const handleEntriesChange = (value: string | number) => {
    setEntriesPerPage(Number(value));
    setCurrentPage(1); // Reset to first page when changing entries per page
  };

  const totalEntries = filteredEmployees.length;
  const startIndex = (currentPage - 1) * entriesPerPage;
  const paginatedEmployees = filteredEmployees.slice(startIndex, startIndex + entriesPerPage);

  interface Option {
    label: string;
    value: string;
  }

  const options: Option[] = [
    { label: "10", value: "10" },
    { label: "25", value: "25" },
    { label: "50", value: "50" },
    { label: "100", value: "100" },
  ];

  return (
    <>
      <div className="title_container">
        <h1>Current Employees</h1>
      </div>
      <div className="container">
        <div className="table_head">
          <div className="entries">
            <LabelUI text="Show" htmlFor="entries" />
            <SelectUI
              defaultValue={options[0]?.value}
              onChange={handleEntriesChange}
              options={options} // Pass options directly
            />
            <LabelUI text="entries" htmlFor="entries" />
          </div>
          <div className="search">
            <LabelUI text="Search:" htmlFor="search" />
            <InputUI
              name="search"
              type="text"
              value={searchString}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <TableUI data={paginatedEmployees} />
        <div className="table_foot">
          <p>Showing {startIndex + 1} to {Math.min(startIndex + entriesPerPage, totalEntries)} of {totalEntries} entries</p>
          <div className="pagination">
            <button
            className="next"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button
            className="next"
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, Math.ceil(totalEntries / entriesPerPage))
                )
              }
              disabled={currentPage === Math.ceil(totalEntries / entriesPerPage)}
            >
              Next
            </button>
          </div>
        </div>
        <Link to="/" className="back">Home</Link>
      </div>
    </>
  );
};

export default EmployeeList;
