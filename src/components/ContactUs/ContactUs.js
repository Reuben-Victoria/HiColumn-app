import React from 'react';
import style from './ContactUs.module.scss';
// import { useForm } from 'react-hook-form';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Buttons from '../Buttons/Buttons';
import api from '../../api';

function ContactUs() {
  const sendMessageSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(15, 'Too Long').required('Name is Required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    subject: Yup.string().min(2, 'Too Short!').max(50, 'Too Long').required('Subject is Required'),
    message: Yup.string().min(2, 'Too Short!').max(100, 'Too Long').required('Message is Required')
  });

  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // const [inputValues, setInputValues] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // });
  // function handleOnChange(e) {
  //   const { name, value } = e.target;
  //   setInputValues({ ...inputValues, [name]: value });
  // }

  // function postFormData() {}

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={sendMessageSchema}
      onSubmit={(values, { resetForm }) => {
        api
          .post('/users/create_user', {
            email: values.email,
            content: values.message,
            name: values.name,
            subject: values.subject
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        resetForm({ values: '' });
      }}>
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className={style.contactUs}>
            <div className={style.contactUs__contact}>
              <h1>Contact Us</h1>
            </div>
            <div className={style.contactUs__infoContainer}>
              <div className={style.contactUs__infoContainer__info}>
                <div className={style.contactUs__infoContainer__info__container}>
                  <h2>Got questions?</h2>

                  <h4>Telephone</h4>
                  <p>
                    <span>WhatsApp:</span>
                    <span>0704 210 4302</span>
                  </p>
                  <p>
                    <span>SMS:</span> <span>0902 062 8943</span>
                  </p>

                  <h4>Email Address</h4>
                  <p>info@hicolumn.com</p>

                  <h4>Office Address</h4>
                  <p>2 Kudirat Abiola way, First bank bus stop, Oregun, Ikeja, Lagos, Nigeria.</p>
                </div>
                <div className={style.contactUs__infoContainer__info__formContainer}>
                  <form onSubmit={formik.handleSubmit}>
                    <div>
                      <p>
                        Name <span>*</span>
                      </p>

                      <input
                        type="text"
                        id="name"
                        placeholder="Kingsley Omin"
                        name="name"
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                      />
                      {touched.name && errors.name && <p id="errors">{errors.name}</p>}
                    </div>
                    <div>
                      <p>
                        Email address <span>*</span>
                      </p>
                      <input
                        type="text"
                        id="email"
                        placeholder="eg kingsleyomin@gmail.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {touched.email && errors.email && <p id="errors">{errors.email}</p>}
                    </div>
                    <div>
                      <p>
                        Subject <span>*</span>
                      </p>
                      <input
                        id="subject"
                        type="text"
                        placeholder="eg. Facilitator Enquiry"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {touched.subject && errors.subject && <p id="errors">{errors.subject}</p>}
                    </div>
                    <div>
                      <p>
                        How can we help you <span>*</span>
                      </p>
                      <textarea
                        placeholder="Enter message here"
                        value={formik.values.message}
                        id="message"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}></textarea>
                      {touched.message && errors.message && <p id="errors">{errors.message}</p>}
                    </div>

                    <Buttons
                      text="Send Message"
                      type="submit"
                      theme="blue"
                      disabled={!(dirty && isValid)}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default ContactUs;
