// import { Form } from "antd";
// import ButtonUI from "../../components/Atoms/Button/Button";
// import DatePickerUI from "../../components/DatePicker/DatePickerUI";
// import InputUI from "../../components/Atoms/Input/InputUI";
// import ModalUI from "../../components/Modal/ModalUI";
// import SelectUI from "../../components/Atoms/Select/SelectUI";
// import { Link } from "react-router-dom";
// import "../../App.css";
// import { useSelector } from "react-redux";
// import { selectDepartments } from "../../redux/slices/DepatementSlice";
// import { selectStates } from "../../redux/slices/StateSlice";
// import { useFormik } from "formik";



// interface FormValues {
//   firstName: string;
//   lastName: string;

// }

// const CreateEmployeesPage: React.FC = () => {

//     // Utilisation de useFormik pour gérer l'état et la validation du formulaire
//     const formik = useFormik<FormValues>({
//       initialValues: {
//         firstName: "",
//         lastName: "",
        
//       },
//       validate: (values) => {
//         const errors: Partial<FormValues> = {};

  
//         if (!values.firstName) {
//           errors.firstName = "First name is required";
//         } else if (values.firstName.length > 15) {
//           errors.firstName = "Must be 15 characters or less";
//         }
  
//         if (!values.lastName) {
//           errors.lastName = "Last name is required";
//         } else if (values.lastName.length > 20) {
//           errors.lastName = "Must be 20 characters or less";
//         }
  
//         return errors;
//       },
//       onSubmit: (values) => {
//         console.log("Form data", values);
//       },
//     });



//   const departments = useSelector(selectDepartments);
//   // console.log(departments);

//   const states = useSelector(selectStates);
//   // console.log(states)
//   // Extraire les noms des États
//   const stateNames = states.map((state) => state.name);
//   // console.log(stateNames)

//   if (
//     !departments ||
//     departments.length === 0 ||
//     !states ||
//     states.length === 0
//   ) {
//     return <div>Loading...</div>; 
//   }



//   return (
//     <div className="create_employee">
//       <div className="title_container">
//         <h1>HRnet</h1>
//         <Link to="/employee-list">Current Employees</Link>
//         <h2>Create Employee</h2>
//       </div>
//       <Form onFinish={formik.handleSubmit} className="employee_form">
//         <div className="input_item">
//           <label htmlFor="firstName">First Name</label>
//           <InputUI
//             name="firstName"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.firstName}
//             // rules={[{ required: true, message: "Ce champ est requis" }]}
//           />
//           {formik.touched.firstName && formik.errors.firstName ? (
//           <div>{formik.errors.firstName}</div>
//         ) : null}
//         </div>
//         <div className="input_item">
//           <label htmlFor="lastName">Last Name</label>
//           <InputUI
//             name="lastName"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.lastName}
//             // rules={[{ required: true, message: "Ce champ est requis" }]}
//           />
//           {formik.touched.lastName && formik.errors.lastName ? (
//           <div>{formik.errors.lastName}</div>
//         ) : null}
//         </div>
//         <div className="input_item">
//           <label htmlFor="employeeBirth">Date of Birth</label>
//           <DatePickerUI />
//         </div>
//         <div className="input_item">
//           <label htmlFor="employeeStartDate">Start Date</label>
//           <DatePickerUI />
//         </div>
//         <div className="adress_item">
//           <p className="adress_title">Address</p>
//           <div className="input_item">
//             <label htmlFor="employeStreet">Street</label>
//             <InputUI
//               name="employeStreet"
//               rules={[{ required: true, message: "Ce champ est requis" }]}
//               type="text"
//             />
//           </div>
//           <div className="input_item">
//             <label htmlFor="employeeCity">City</label>
//             <InputUI
//               name="employeeCity"
//               rules={[{ required: true, message: "Ce champ est requis" }]}
//               type="text"
//             />
//           </div>
//           <div className="input_item">
//             <label htmlFor="employeeState">State</label>
//             <SelectUI options={stateNames} />
//           </div>
//           <div className="input_item">
//             <label htmlFor="employeeZipCode">Zip Code</label>
//             <InputUI
//               name="employeeZipCode"
//               rules={[{ required: true, message: "Ce champ est requis" }]}
//               type="number"
//             />
//           </div>
//         </div>
//         <div className="input_item">
//           <label htmlFor="employeeDepartment">Department</label>
//           <SelectUI options={departments} />
//         </div>
//         {/* <button type="submit">save</button> */}
//         <ButtonUI />
//       </Form>

//       <ModalUI />
//     </div>
//   );
// };

// export default CreateEmployeesPage;



// // Dans Ant Design, les événements comme onSubmit ne sont pas automatiquement acceptés sur le composant Form natif. Pour résoudre cela, vous pouvez utiliser onFinish à la place, qui est la méthode Ant Design pour gérer la soumission de formulaire


import React from "react";
import EmployeePageTemplate from "../../components/Templates/EmployeePageTemplate";

const CreateEmployeesPage: React.FC = () => <EmployeePageTemplate />;

export default CreateEmployeesPage;