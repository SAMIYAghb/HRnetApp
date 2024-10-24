import { Form } from "antd";
import ButtonUI from "../../components/Button/Button";
import DatePickerUI from "../../components/DatePicker/DatePickerUI";
import InputUI from "../../components/Input/InputUI";
import ModalUI from "../../components/Modal/ModalUI";
import SelectUI from "../../components/Select/SelectUI";

const CreateEmployeesPage: React.FC = () => {
  return (
    // <Flex gap="middle" vertical>
    <div className="createEmployee">
      <Form className="employeeForm">
        <label htmlFor="employeeName">First Name</label>
        <InputUI
          name="employeeName"
          rules={[{ required: true, message: "Ce champ est requis" }]}
        />

        <label htmlFor="employeeLastName">Last Name</label>
        <InputUI
          name="employeeLastName"
          rules={[{ required: true, message: "Ce champ est requis" }]}
        />

        <label htmlFor="employeeBirth">Date of Birth</label>
        <DatePickerUI />

        <label htmlFor="employeeStartDate">Start Date</label>
        <DatePickerUI />

        <div>
          <p>Address</p>
          <label htmlFor="employeStreet">Street</label>
          <InputUI
            name="employeStreet"
            rules={[{ required: true, message: "Ce champ est requis" }]}
            type="text"
          />
          <label htmlFor="employeCity">City</label>
          <InputUI
            name="employeCity"
            rules={[{ required: true, message: "Ce champ est requis" }]}
            type="text"
          />
          <SelectUI />
          <label htmlFor="employeStreet">Zip Code</label>
          <InputUI
            name="employeZipCode"
            rules={[{ required: true, message: "Ce champ est requis" }]}
            type="number"
          />
        </div>
        <ButtonUI />
      </Form>

      <ModalUI />
    </div>
    // </Flex>
  );
};

export default CreateEmployeesPage;
