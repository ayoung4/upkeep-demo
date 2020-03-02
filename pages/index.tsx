import React from 'react';
import * as Yup from 'yup';
import * as R from 'ramda';
import { Formik } from 'formik';
import Router from 'next/router';

import Nav from '../components/nav';
import { LoginForm } from '../components/login-form';
import { post } from '../lib/api/request';
import { Email, Password } from '../lib/api/constants';
import { Context } from './constants';

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
    post(
        `${process.env.ROOT_URL}/api/login`,
        { email, password },
    );

const Home: React.FC<{ context: Context }> = ({ context }) => {
    React.useEffect(() => {
        if (context.token !== '') {
            Router.push('/home');
        }
    })
    console.log(context.token);
    return (
        <div>
            <Nav></Nav>
            {process.env.ROOT_URL}
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
                        .then(R.tap(({ token }: any) => context.setToken(token)))
                        .then(form.setStatus)
                }
                validationSchema={validationSchema}
            >
                {(form) => <LoginForm {...form} />}
            </Formik>
        </div>
    );
};

export default Home
