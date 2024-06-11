import { useFormik } from "formik";
import { ErrorMessage } from "../enum/ErrorMessages";
import RadioSelected from "../assets/images/icon-radio-selected.svg?react";
import RadioEmpty from "../assets/images/icon-radio-empty.svg?react";
import "./Form.css";
import { Checkbox } from "@mui/material";
import { toast } from "react-toastify";
import Toast from "../components/Toast";

interface FormDataType {
  firstName: string;
  lastName: string;
  email: string;
  queryType: "general" | "support" | string;
  message: string;
  consent: boolean;
}

interface FormDataErrorType {
  firstName?: string;
  lastName?: string;
  email?: string;
  queryType?: "general" | "support" | string;
  message?: string;
  consent?: string;
}

const Form = () => {
  const initFormValue: FormDataType = {
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  };

  function FormValidator(values: FormDataType) {
    console.log(values);
    const error: FormDataErrorType = {};
    if (!values) return;

    if (!values.firstName || values.firstName === "")
      error.firstName = ErrorMessage.required;

    if (!values.lastName || values.lastName === "")
      error.lastName = ErrorMessage.required;

    if (!values.email || values.email === "")
      error.email = ErrorMessage.required;

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email))
      error.email = ErrorMessage.invalidEmail;

    if (!values.queryType || values.queryType === "")
      error.queryType = ErrorMessage.emptyQuery;

    if (!values.message || values.message === "")
      error.message = ErrorMessage.required;

    if (!values.consent) error.consent = ErrorMessage.consentNotChecked;

    return error;
  }

  const formik = useFormik<FormDataType>({
    initialValues: initFormValue,
    validate: FormValidator,
    onSubmit: () => {
      toast.success(
        <Toast
          title="Message Sent!"
          message="Thanks for completeing the form. We'll be in touch soon!"
        />,
        {
          position: "top-center",
          className: "bg-green-900",
          icon: false,
          closeButton: false,
        }
      );
      formik.resetForm();
    },
    validateOnChange: false,
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-row flex-wrap justify-center items-center gap-4"
      >
        <h1 className="w-full text-black text-4xl text-left">Contact Us</h1>
        <div className="w-full lg:flex-1 flex flex-col items-start gap-2">
          <label className="required">First Name</label>
          <input
            className={` input-text ${formik.errors.firstName && "border-error-red"} `}
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          <p className=" text-error-red">{formik.errors.firstName}</p>
        </div>
        <div className="w-full lg:flex-1 flex flex-col items-start gap-2">
          <label className="required">Last Name</label>
          <input
            className={` input-text ${formik.errors.lastName && "border-error-red"} `}
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          <p className="text-red-700">{formik.errors.lastName}</p>
        </div>
        <div className="w-full flex flex-col items-start">
          <label className="required">Email Address</label>
          <input
            className={` input-text ${formik.errors.email && "border-error-red"} `}
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <p className="text-red-700">{formik.errors.email}</p>
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <label className="required">Query Type</label>
          <div className="w-full flex flex-row flex-wrap gap-4">
            <button
              className={`w-full lg:flex-1 button-radio ${formik.values.queryType === "general" ? "bg-green-light" : "bg-white"}`}
              onClick={(e) => {
                e.preventDefault();
                formik.setValues({ ...formik.values, queryType: "general" });
              }}
            >
              {formik.values.queryType === "general" ? (
                <RadioSelected />
              ) : (
                <RadioEmpty />
              )}
              General Enquiry
            </button>
            <button
              className={`w-full lg:flex-1 button-radio ${formik.values.queryType === "support" ? "bg-green-light" : "bg-white"}`}
              onClick={(e) => {
                e.preventDefault();
                formik.setValues({ ...formik.values, queryType: "support" });
              }}
            >
              {formik.values.queryType === "support" ? (
                <RadioSelected />
              ) : (
                <RadioEmpty />
              )}
              Support Enquiry
            </button>
          </div>
          <p className="text-red-700">{formik.errors.queryType}</p>
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <label className="required">Message</label>
          <textarea
            className={` input-textarea w-full h-80 min-h-12 px-4 ${formik.errors.message && "border-error-red"} `}
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
          />
          <p className="text-red-700">{formik.errors.message}</p>
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <label className=" text-grey-darker required">
            <Checkbox
              id="consent"
              name="consent"
              sx={{
                color: "hsl(186, 15%, 59%)",
                "&.Mui-checked": {
                  color: "hsl(169, 82%, 27%)",
                },
              }}
              checked={formik.values.consent}
              onChange={formik.handleChange}
            />
            I consent to being contacted by the team
          </label>

          <p className="text-red-700">{formik.errors.consent}</p>
        </div>
        <div className="w-full">
          <button
            className="button-submit w-full bg-green-medium hover:bg-green-900"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
