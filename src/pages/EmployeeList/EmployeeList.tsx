import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TableUI from "../../components/Atoms/Table/TableUI";
import EmployeeTableHeader from "../../components/Organisms/EmployeeTableHeader";
import PaginationControls from "../../components/Organisms/PaginationControls";
import { setEmployees } from "../../redux/slices/EmployeeSlice";
import { selectStates } from "../../redux/slices/StateSlice";
import { RootState } from "../../redux/store";
import { Option } from "../../../types";

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

  const filteredEmployees = employees
    .map((employee) => ({
      ...employee,
      zipCode: Number(employee.zipCode),
      state: stateAbbreviationMap[employee.state] || employee.state, // Replace state name with abbreviation
    }))
    .filter((employee) =>
      Object.entries(employee).some(([key, value]) => {
        const stringValue =
          typeof value === "number"
            ? value.toString()
            : value.toLowerCase().trim();
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
  const paginatedEmployees = filteredEmployees.slice(
    startIndex,
    startIndex + entriesPerPage
  );


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
        <EmployeeTableHeader
          searchString={searchString}
          onSearchChange={handleSearchChange}
          onEntriesChange={handleEntriesChange}
          options={options}
        />
        <TableUI data={paginatedEmployees} />

        <PaginationControls
          currentPage={currentPage}
          totalEntries={totalEntries}
          entriesPerPage={entriesPerPage}
          onPrevious={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          onNext={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(totalEntries / entriesPerPage))
            )
          }
        />
        <Link to="/" className="back">
          Home
        </Link>
      </div>
    </>
  );
};

export default EmployeeList;
