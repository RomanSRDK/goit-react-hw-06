import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import styles from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("name must be at least 3 characters")
    .min(3)
    .max(50),
  number: Yup.string()
    .required("number must be at least 7 characters")
    .min(7)
    .max(7),
});

function ContactForm({ addContact }) {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const emailFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    dispatch({
      type: "addContact",
      payload: values,
    });
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.fieldGroup}>
            <label htmlFor={nameFieldId} className={styles.label}>
              Name
            </label>
            <Field
              id={nameFieldId}
              name="name"
              type="text"
              className={styles.input}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor={emailFieldId} className={styles.label}>
              Number
            </label>
            <Field
              id={emailFieldId}
              name="number"
              type="text"
              className={styles.input}
            />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
          </div>

          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default ContactForm;
