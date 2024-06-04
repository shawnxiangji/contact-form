import { useFormik } from "formik";
import { ErrorMessage } from "../enum/ErrorMessages";
import "./Form.css";

interface FormDataType {
  firstName: string;
  lastName: string;
  email: string;
  queryType: "general" | "support" | string;
  message: string;
  consent: boolean;
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
    const error = {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      consent: "",
    };
    if (!values) return;

    if (!values.firstName || values.firstName === "")
      error.firstName = ErrorMessage.required;

    if (!values.lastName || values.lastName === "")
      error.lastName = ErrorMessage.required;

    if (!values.email || values.email === "")
      error.email = ErrorMessage.required;

    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email))
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
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-row flex-wrap justify-center items-center gap-4"
    >
      <h1 className="w-full text-black text-4xl">Contact Us</h1>
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
            <input
              className="text-2xl"
              type="radio"
              checked={formik.values.queryType === "general"}
            />
            General Enquiry
          </button>
          <button
            className={`w-full lg:flex-1 button-radio ${formik.values.queryType === "support" ? "bg-green-light" : "bg-white"}`}
            onClick={(e) => {
              e.preventDefault();
              formik.setValues({ ...formik.values, queryType: "support" });
            }}
          >
            <input
              type="radio"
              checked={formik.values.queryType === "support"}
            />
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
      <div>
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={formik.values.consent}
          onChange={formik.handleChange}
        />
        <p>I consent to being contacted by the team</p>
        <p className="text-red-700">{formik.errors.consent}</p>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
