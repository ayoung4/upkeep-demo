import * as React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import { FormikProps } from 'formik';

import { createErrorTag } from './create-error-tag';
import { createErrorIcon } from './create-error-icon';

type Values = {
    email: string;
    password: string;
};

export const LoginForm: React.FC<FormikProps<Values>> = ({
    isSubmitting,
    handleBlur,
    handleChange,
    submitForm,
    dirty,
    status,
    touched,
    errors,
}) => (
        <Form loading={isSubmitting}>
            <h1>{status.err || ''}</h1>
            <br/>
            <Form.Field>
                <label>Email:</label>
                <Form.Input
                    name='email'
                    type='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    icon={createErrorIcon('email', touched, errors)}
                    error={createErrorTag('email', touched, errors)}
                />
            </Form.Field>
            <Form.Field>
                <label>Password:</label>
                <Form.Input
                    name='password'
                    type='password'
                    icon={createErrorIcon('password', touched, errors)}
                    error={createErrorTag('password', touched, errors)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </Form.Field>
            <br />
            <Button
                fluid
                color='red'
                onClick={submitForm}
                type='submit'
                content='Sign In'
                disabled={!dirty}
            />
            {typeof status === 'string' && (
                <Message color='red'>{status}</Message>
            )}
        </Form>
    );