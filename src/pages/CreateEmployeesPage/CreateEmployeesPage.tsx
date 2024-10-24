import { Form } from "antd";
import ButtonUI from "../../components/Button/Button";
import DatePickerUI from "../../components/DatePicker/DatePickerUI";
import InputUI from "../../components/Input/InputUI";
import ModalUI from "../../components/Modal/ModalUI";
import SelectUI from "../../components/Select/SelectUI";
import { Link } from "react-router-dom";
import '../../App.css'

const CreateEmployeesPage: React.FC = () => {
  return (
    // <Flex gap="middle" vertical>
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
            <SelectUI />
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
            <SelectUI />
          </div>
        <ButtonUI />
      </Form>

      <ModalUI />
    </div>
    // </Flex>
  );
};

export default CreateEmployeesPage;
