import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import Nav from '../components/nav';
import { AddWorkorderForm } from '../components/add-workorder-form';
import { post } from '../lib/api/request';
import { AuthToken } from '../lib/api/constants';
import { Page } from '../lib/api/pages/constants';
import { Centered } from '../components/centered';

type Values = {
    title: string;
    description: string;
    category: string;
};

const validationSchema =
    Yup.object<Values>({
        title: Yup.string()
            .email()
            .required(),
        description: Yup.string()
            .email()
            .required(),
        category: Yup.string()
            .email()
            .required(),
    });

const addWorkorder = (token: AuthToken, data: Values) =>
    post(
        `${process.env.ROOT_URL}/api/add-workorder`,
        { token, data },
    );

const Home: Page = ({ token }) => (
    <Centered>
        <Formik
            initialStatus={{
                success: true,
            }}
            initialValues={{
                title: '',
                description: '',
                category: '',
            }}
            onSubmit={(data, form) =>
                addWorkorder(token, data)
                    .then(form.setStatus)
            }
            validationSchema={validationSchema}
        >
            {(form) => <AddWorkorderForm {...form} />}
        </Formik>
    </Centered>
);

export default Home
