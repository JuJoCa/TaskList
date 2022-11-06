import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { User } from '../../../models/user.class';
import { ROLE } from '../../../models/role.enum';

const RegisterFormik = () => {

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLE.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, '¡Username too short!')
                .max(12, '¡Username too long')
                .required('¡Username is required!'),
            email: Yup.string()
                .email('¡Invalid email format!')
                .required('¡Email is required!'),
            role: Yup.string()
                .oneOf([ROLE.USER, ROLE.ADMIN], 'You must select a Role: User/Admin')
                .required('¡Role is required!'),
            password: Yup.string()
                .min(8, '¡Password too short!')
                .required('¡Password is required!'),
            confirm: Yup.string()
                .when('password', {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref('password')],
                        '¡Password must match!'
                    )
                }).required('¡You must confirm the password!')
        }
    )

    const submit = (values) => {
        alert('Register User!!!');
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={ initialValues }
                validationSchema={ registerSchema }
                // El onsubmit se ejecuta cuando se hace un submit en el formulario
                onSubmit={async(values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', values)
                }}
            >

            {({values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur}) => (
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field id="username" type="username" name="username" placeholder="Your Username" />

                        { 
                            errors.username && touched.username && (
                                <ErrorMessage name='username' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@example.com" />

                        { 
                            errors.email && touched.email && (
                                <ErrorMessage name='email' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field id="password" type="password" name="password" placeholder="Your Password" />

                        { 
                            errors.password && touched.password && (
                                <ErrorMessage name='password' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="confirm">Confirm Password</label>
                        <Field id="confirm" type="password" name="confirm" placeholder="Confirm Password" />

                        { 
                            errors.confirm && touched.confirm && (
                                <ErrorMessage name='confirm' component='div'></ErrorMessage>
                            )
                        }

                        <button type="submit">Login</button>

                        { isSubmitting ? (<p>Login your credentials...</p>) : null }

                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default RegisterFormik;
