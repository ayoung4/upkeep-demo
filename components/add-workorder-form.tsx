import * as React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import { FormikProps } from 'formik';

import { createErrorTag } from './create-error-tag';
import { createErrorIcon } from './create-error-icon';

type Values = {
    category: string;
    title: string;
    description: string;
};

export const AddWorkorderForm: React.FC<FormikProps<Values>> = ({
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
                <label>Category:</label>
                <Form.Select
                    name='category'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    options={[
                        { value: 'electrical', text: 'electrical'},
                        { value: 'damage', text: 'damage'},
                    ]}
                    icon={createErrorIcon('category', touched, errors)}
                    error={createErrorTag('category', touched, errors)}
                />
            </Form.Field>
            <Form.Field>
                <label>Title:</label>
                <Form.Input
                    name='title'
                    type='text'
                    icon={createErrorIcon('title', touched, errors)}
                    error={createErrorTag('title', touched, errors)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </Form.Field>
            <Form.Field>
                <label>Description:</label>
                <Form.TextArea
                    name='description'
                    icon={createErrorIcon('description', touched, errors)}
                    error={createErrorTag('description', touched, errors)}
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
                content='Submit Request'
                disabled={!dirty}
            />
            {typeof status === 'string' && (
                <Message color='red'>{status}</Message>
            )}
        </Form>
    );