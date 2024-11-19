

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import CreateEmployeesPage from "./pages/CreateEmployeesPage/CreateEmployeesPage";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
// import { Modal } from "antd";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<CreateEmployeesPage />}/>
            <Route path='/employee-list' element={<EmployeeList />}/>
            {/* <Route path='/modal' element={<Modal />}/> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
