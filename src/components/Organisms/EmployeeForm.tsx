import React from "react";
import InputField from "../Molecules/InputField/InputField";
import SelectField from "../Molecules/SelectField/SelectField";
import ButtonUI from "../Atoms/Button/Button";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { selectDepartments } from "../../redux/slices/DepatementSlice";
import { selectStates } from "../../redux/slices/StateSlice";
import DatePickerField from "../Molecules/DatePickerField/DatePickerField";
import dayjs, { Dayjs } from "dayjs";
import * as Yup from "yup";

const EmployeeForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: null,
      startDate: null,
      street: "",
      city: "",
      zipCode: "",
      department: "",
      state: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      dateOfBirth: Yup.date().nullable().required("Date of birth is required"),
      startDate: Yup.date().nullable().required("Start date is required"),
      street: Yup.string().required("Street is required"),
      city: Yup.string().required("City is required"),
      zipCode: Yup.number().required("Zip Code is required"),
      department: Yup.string().required("Department is required"),
      state: Yup.string().required("State is required"),
    }),
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  const departments = useSelector(selectDepartments);
  // console.log(departments);
  const departmentOptions = departments.map((dep) => ({
    label: dep,
    value: dep,
  }));

  const states = useSelector(selectStates);
  // console.log(states)
  // Extraire les noms des États
  const stateOptions = states.map((state) => ({
    label: state.name,
    value: state.name,
  }));
  // console.log(stateOptions);

  if (
    !departments ||
    departments.length === 0 ||
    !states ||
    states.length === 0
  ) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={formik.handleSubmit} className="employee-form">
      <InputField
        label="First Name"
        name="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.firstName && formik.errors.firstName
            ? formik.errors.firstName
            : ""
        }
      />

      <InputField
        label="Last Name"
        name="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.lastName && formik.errors.lastName
            ? formik.errors.lastName
            : ""
        }
      />

      <DatePickerField
        label="Date of Birth"
        name="dateOfBirth"
        value={
          formik.values.dateOfBirth ? dayjs(formik.values.dateOfBirth) : null
        } // Conversion en Dayjs
        onChange={(date: Dayjs | null) => {
          formik.setFieldValue("dateOfBirth", date ? date.toISOString() : null); // Convertir la date en ISO pour stocker dans Formik
        }}
        error={
          formik.errors.dateOfBirth && formik.touched.dateOfBirth
            ? formik.errors.dateOfBirth
            : ""
        }
      />

      <DatePickerField
        label="Start Date"
        name="startDate"
        value={formik.values.startDate ? dayjs(formik.values.startDate) : null} // Conversion en Dayjs
        onChange={(date: Dayjs | null) => {
          const isoDate = date ? date.toISOString() : null;
          formik.setFieldValue("startDate", isoDate); // Convertir la date en ISO pour stocker dans Formik
        }}
        error={
          formik.errors.startDate && formik.touched.startDate
            ? formik.errors.startDate
            : ""
        }
      />

      <div className="adress_item">
        <p className="adress_title">Address</p>
        <InputField
          label="Street"
          name="street"
          value={formik.values.street}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.street && formik.errors.street
              ? formik.errors.street
              : ""
          }
        />

        <InputField
          label="City"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.city && formik.errors.city ? formik.errors.city : ""
          }
        />

        <SelectField
          label="State"
          value={formik.values.state}
          options={stateOptions}
          onChange={(value) => formik.setFieldValue("state", value)}
        />

        <InputField
          label="Zip Code"
          name="zipCode"
          value={formik.values.zipCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.zipCode && formik.errors.zipCode
              ? formik.errors.zipCode
              : ""
          }
        />
      </div>

      <SelectField
        label="Department"
        value={formik.values.department}
        options={departmentOptions}
        onChange={(value) => formik.setFieldValue("department", value)}
      />

      <ButtonUI text="Save" />
    </form>
  );
};

export default EmployeeForm;
