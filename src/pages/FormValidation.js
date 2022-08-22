import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const FormValidation = () => {

    const validationSchema = Yup.object({
        name: Yup.string().required('nama diperlukan'),
        email: Yup.string()
          .email('format email salah')
          .required('email diperlukan')
    });

    const formik = useFormik({
        initialValues: {
            name: 'purbojati',
            email: '',
        },
        validationSchema,
        onSubmit: (values, {resetForm}) => {
            console.log('onsubmit clicked', values);
            resetForm();
        },
    });

    return (
        <div>
            <h3>Form Validation Tutorial</h3>
            <form onSubmit={formik.handleSubmit}>
                <div style={{ margin: '16px' }}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id='name' 
                        name='name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    {
                        formik.touched.name && formik.errors.name && (
                            <div style={{ color: 'red' }}>{formik.errors.name}</div>
                        )
                    }
                </div>
                <div style={{ margin: '16px' }}>
                    <label htmlFor="email">email</label>
                    <input 
                        type="text" 
                        id='email' 
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {
                        formik.touched.email && formik.errors.email && (
                            <div style={{ color: 'red' }}>{formik.errors.email}</div>
                        )
                    }
                </div>
                <button type="submit">Submit Form</button>
            </form>
        </div>
    )
}

export default FormValidation