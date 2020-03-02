import React from 'react';
import * as Yup from 'yup';
import * as R from 'ramda';
import Head from 'next/head';
import Nav from '../components/nav';
import { Formik } from 'formik';

import { Form } from 'semantic-ui-react';
import { LoginForm } from '../components/login-form';
import { post } from '../lib/api/request';
import { Email, Password } from '../lib/api/constants';

type Values = {
    password: string;
    email: string;
};

const validationSchema =
    Yup.object<Values>({
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string()
            .min(7)
            .max(15)
            .required(),
    });

const signInWithPassword = (email: Email, password: Password) =>
    post('http://localhost:3000/api/login', {
        email,
        password,
    });

const Home = () => (
    <div>
        <Nav></Nav>
        <Formik
            initialStatus={{
                success: true,
            }}
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={({ password, email }, form) =>
                signInWithPassword(email as Email, password as Password)
                    .then(R.tap(console.log))
                    .then(form.setStatus)
            }
            validationSchema={validationSchema}
        >
            {(form) => <LoginForm {...form} />}
        </Formik>
    </div>
);

export default Home
