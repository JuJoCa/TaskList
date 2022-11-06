import React from 'react';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as yup from 'yup';

const loginSchema = yup.object().shape(
    {
        email: yup.string().email('Invalid email format').required('Email is required'),
        password: yup.string().required('password is requires')
    }
)


const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    };

    return (
        <div>
        <h4>Login Form</h4>
            <Formik
                initialValues={ initialCredentials }
                validationSchema={ loginSchema }
                // El onsubmit se ejecuta cuando se hace un submit en el formulario
                onSubmit={async(values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', values)
                }}
            >

            { ( {errors, touched, isSubmitting } ) => (
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field id="email" type="email" name="email" placeholder="Email" />

                    { 
                        errors.email && touched.email && (
                            <ErrorMessage name='email' component='div'></ErrorMessage>
                        )
                    }

                    <label htmlFor="password">Password</label>
                    <Field id="password" type="password" name="password" placeholder="Password" />

                    { 
                        errors.password && touched.password && (
                            <ErrorMessage name='password' component='div'></ErrorMessage>
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

export default LoginFormik;
