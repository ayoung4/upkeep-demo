import { FormikErrors, FormikTouched } from 'formik';

export const createErrorTag = <T>(
    name: keyof T,
    touched: FormikTouched<T>,
    errors: FormikErrors<T>,
) => (!!errors[name] && !!touched[name] && {
    content: errors[name],
    pointing: 'above'
}) || undefined;
