import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .required('Your name is required.'),
    email: yup.string()
        .email('Must be a valid email address')
        .required('Email is required.'),
    password: yup.string()
        .min(8, 'Your password must be at least 8 characters long')
        .required('Password is required.'),
    tos: yup.boolean()
        .oneOf([true], 'You must agree to the Terms of Service.')
})

export default formSchema