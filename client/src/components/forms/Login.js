import { useFormik } from "formik";
import React, {useState} from "react";
import {Form} from "./styles";
import TextField from "@material-ui/core/TextField";
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from "@material-ui/core/Button";
import { useHistory } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {actions} from "store";

export const Login = () => {
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const { handleSubmit, handleChange, handleBlur, values, errors, setErrors, touched } = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        onSubmit: async (values) => {
            setLoading(true);
            const response = await fetch('/login', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            setLoading(false);

            if (!response.ok) {
                const errors = await response.json();
                setErrors(errors);
            } else {
                const user = await response.json();
                dispatch(actions.setUser(user));
                history.push('/');
            }
        }
    })

    return (
        <Form onSubmit={handleSubmit}>
            <TextField id='login' name='login' type='text' label='Login'
                 required={true}
                 fullWidth
                 value={values.login}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 helperText={touched.login && errors.login}
                 error={!!(errors.login && touched.login)}
            />
            <TextField id='password' name='password' type='password' label='Password'
                 required={true}
                 fullWidth
                 value={values.password}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 helperText={touched.password && errors.password}
                 error={!!(errors.password && touched.password)}
            />
            <Button
                type='submit'
                
                color='secondary'
                disabled={loading}
            >
                Login
                {loading
                    ? <CircularProgress className='loader' size={30} />
                    : null}
            </Button>
        </Form>
    )
}