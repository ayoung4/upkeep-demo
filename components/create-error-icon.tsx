import { FormikErrors, FormikTouched } from 'formik';
import { Icon } from 'semantic-ui-react';

type CreateErrorIcon = <T>(
    name: keyof T,
    touched: FormikTouched<T>,
    errors: FormikErrors<T>,
) => any | undefined;

export const createErrorIcon: CreateErrorIcon =
    (name, touched, errors, ) =>
        !!touched[name] && !!errors[name]
            ? <Icon name='exclamation' />
            : undefined;
