import React from "react";
import { Form, Field } from "formik";
function ContactForm({ errors, touched }) {
  return (
    <Form>
      <div className="form-group">
        <label className="col-form-label">FirstName</label>
        <Field
          name="FirstName"
          className={
            touched.FirstName
              ? `form-control ${errors.FirstName ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.FirstName && errors.FirstName && (
          <small className="text-danger">{errors.FirstName}</small>
        )}
      </div>
      <div className="form-group">
        <label className="col-form-label">LastName:</label>
        <Field
          name="LastName"
          className={
            touched.LastName
              ? `form-control ${errors.LastName ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.LastName && errors.LastName && (
          <small className="text-danger">{errors.LastName}</small>
        )}
      </div>
      <div className="form-group">
        <label className="col-form-label">Email:</label>
        <Field
          name="Email"
          className={
            touched.Email
              ? `form-control ${errors.Email ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.Email && errors.Email && (
          <small className="text-danger">{errors.Email}</small>
        )}
      </div>
      <div className="form-group">
        <label className="col-form-label">Phone:</label>
        <Field
          name="Phone"
          className={
            touched.Phone
              ? `form-control ${errors.Phone ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.Phone && errors.Phone && (
          <small className="text-danger">{errors.Phone}</small>
        )}
      </div>
      <div className="form-group">
        <label className="col-form-label">Message:</label>
        <Field
          as="textarea"
          name="Message"
          className={
            touched.Message
              ? `form-control ${errors.Message ? "invalid" : "valid"}`
              : `form-control`
          }
        ></Field>
        {touched.Message && errors.Message && (
          <small className="text-danger">{errors.Message}</small>
        )}
      </div>

      <div className="form-group text-center">
        <button
          type="submit"
          className="btn btn-primary my-3 text-center"
          style={{ backgroundColor: "#fd7e14" }}
        >
          Submit
        </button>
      </div>
    </Form>
  );
}
export default ContactForm;
