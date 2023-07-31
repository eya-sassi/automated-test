import React, { useState } from "react";
import { Formik } from "formik";

import ContactForm from "./ContactForm";
import * as Yup from "yup";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const ErrorSchema = Yup.object().shape({
    FirstName: Yup.string()
      .required("Please write your firstname")
      .matches(/^[a-zA-Z]+$/, "First name should only contain letters")
      .min(2, "Too short"),
    LastName: Yup.string()
      .required("Please write your lastname")
      .matches(/^[a-zA-Z]+$/, "Last name should only contain letters")
      .min(2, "Too short"),
    Email: Yup.string()
      .email("Invalid email")
      .required("Please write your Email"),
    Phone: Yup.number().required("Please write your Phone Number"),
    // .matches(
    //   /^\+216[-. ]?\d{2}[-. ]?\d{3}[-. ]?\d{3}$/,
    //   "Please enter a valid phone number"
    // ),
    Message: Yup.string()
      .required("Please write your Message")
      .min(5, "too short"),
  });
  const handleSubmit = (values) => {
    console.log(values); // Print form values to the console
    setIsSubmitted(true); // Set the form submission status to true
  };
  return (
    <div className="container pt-5">
      <div className="row justify-content-start pt-5">
        {/* row justify-content-sm-center pt-5 */}
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 " style={{ color: "#005985" }}>
            Contact Form
          </h1>
          {!isSubmitted ? ( // Render the form if it's not submitted
          <Formik
            initialValues={{
              FirstName: "",
              LastName: "",
              Email: "",
              Phone: "",
              Message: "",
            }}
            // onSubmit={(value) => {
            //   console.log(value);
            // }}
            onSubmit={handleSubmit}
            validationSchema={ErrorSchema}
            component={ContactForm}
          />
          ) : (
             // Render the success message if the form is submitted
             <div className="text-center text-success">Form submitted successfully!</div>
             )}
        </div>
        <div className="col-sm-6 shadow round pb-3 d-flex justify-content-center">
          <div className="row justify-content-start pt-5 ">
            {/* row justify-content-sm-center pt-5 */}
            {/* <div className="text-center"> */}
            <img
              src="/logo.png"
              alt=""
              style={{
                maxWidth: "100%",
                height: "100px",
                margin: "100px 0 0 0",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
