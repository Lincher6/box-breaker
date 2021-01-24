import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Form } from '../commonStyles';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { usersActions } from 'store/users';
import { usersApi } from 'api';
import {Span} from 'globalStyles';

export const LoginForm = () => {
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
            const { user, token, errors } = await usersApi.login(values);
            setLoading(false);

            if (errors) {
                setErrors(errors);
            } else {
                dispatch(usersActions.setUser(user));
                localStorage.setItem('token', token);
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
            <TextField id='password' name='password' type='password' label='Password' autoComplete="off"
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
                variant='contained'
                disabled={loading}
            >
                <LockOpenIcon/>
                <Span>Login</Span>
                {loading
                    ? <CircularProgress className='loader' size={30} />
                    : null}
            </Button>
        </Form>
    )
}