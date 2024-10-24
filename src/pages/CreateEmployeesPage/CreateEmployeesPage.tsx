import { Form } from "antd";
import ButtonUI from "../../components/Button/Button";
import DatePickerUI from "../../components/DatePicker/DatePickerUI";
import InputUI from "../../components/Input/InputUI";
import ModalUI from "../../components/Modal/ModalUI";
import SelectUI from "../../components/Select/SelectUI";
import { Link } from "react-router-dom";
import '../../App.css'
import { useSelector } from 'react-redux';
import { selectDepartments } from '../../redux/slices/DepatementSlice'
import { selectStates } from "../../redux/slices/StateSlice";



const CreateEmployeesPage: React.FC = () => {
  const departments = useSelector(selectDepartments);
  // console.log(departments);

  const states = useSelector(selectStates);
  // console.log(states)
  // Extraire les noms des États
  const stateNames = states.map(state => state.name);   
  // console.log(stateNames)

  if (!departments || departments.length === 0 || !states || states.length === 0) {
    return <div>Loading...</div>; // Ou un autre indicateur de chargement
  }


  return (
    <div className="create_employee">
      <div className="title_container">
        <h1>HRnet</h1>
      <Link to="/employee-list">Current Employees</Link>
        <h2>Create Employee</h2>  
      </div>
      <Form className="employee_form">
        <div className="input_item">
          <label htmlFor="employeeName">First Name</label>
          <InputUI
            name="employeeName"
            rules={[{ required: true, message: "Ce champ est requis" }]}
          />
        </div>
        <div className="input_item">
          <label htmlFor="employeeLastName">Last Name</label>
          <InputUI
            name="employeeLastName"
            rules={[{ required: true, message: "Ce champ est requis" }]}
          />
        </div>
        <div className="input_item">
          <label htmlFor="employeeBirth">Date of Birth</label>
          <DatePickerUI />
        </div>
        <div className="input_item">
          <label htmlFor="employeeStartDate">Start Date</label>
          <DatePickerUI />
        </div>
        <div className="adress_item">
          <p  className="adress_title">Address</p>
          <div className="input_item">
            <label htmlFor="employeStreet">Street</label>
            <InputUI
              name="employeStreet"
              rules={[{ required: true, message: "Ce champ est requis" }]}
              type="text"
            />
          </div>
          <div className="input_item">
            <label htmlFor="employeeCity">City</label>
            <InputUI
              name="employeeCity"
              rules={[{ required: true, message: "Ce champ est requis" }]}
              type="text"
            />
          </div>
          <div className="input_item">
            <label htmlFor="employeeState">State</label>
            <SelectUI options={stateNames}/>
          </div>
          <div className="input_item">
            <label htmlFor="employeeZipCode">Zip Code</label>
            <InputUI
              name="employeeZipCode"
              rules={[{ required: true, message: "Ce champ est requis" }]}
              type="number"
            />
          </div>
        </div>
        <div className="input_item">
            <label htmlFor="employeeDepartment">Department</label>
            <SelectUI options={departments}/>
          </div>
        <ButtonUI />
      </Form>

      <ModalUI />
    </div>
  );
};

export default CreateEmployeesPage;
