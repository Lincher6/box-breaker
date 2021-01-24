import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Form } from '../commonStyles';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch}  from 'react-redux';
import { usersActions } from 'store/users';
import { usersApi } from 'api';
import {Span} from '../../../globalStyles';

export const RegistrationForm = () => {
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const { handleSubmit, handleChange, handleBlur, values, errors, setErrors, touched } = useFormik({
        initialValues: {
            login: '',
            name: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: async (values) => {
            setLoading(true);
            const { user, token, errors } = await usersApi.register(values);
            setLoading(false);

            if (errors) {
                setErrors(errors);
                values.password = '';
                values.confirmPassword = '';
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
            <TextField id='name' name='name' type='text' label='Name'
                       required={true}
                       fullWidth
                       value={values.name}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       helperText={touched.name && errors.name}
                       error={!!(errors.name && touched.name)}
            />
            <TextField id='password' name='password' type='password' label='Password'
                       autoComplete="off"
                       required={true}
                       fullWidth
                       value={values.password}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       helperText={touched.password && errors.password}
                       error={!!(errors.password && touched.password)}
            />
            <TextField id='confirmPassword' name='confirmPassword' type='password'
                       label='Confirm password'
                       autoComplete="off"
                       required={true}
                       fullWidth
                       value={values.confirmPassword}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       helperText={touched.confirmPassword && errors.confirmPassword}
                       error={!!(errors.confirmPassword && touched.confirmPassword)}
            />
            <Button
                type='submit'
                color='secondary'
                variant='contained'
                disabled={loading}
            >
                <TagFacesIcon/>
                <Span>
                    Register
                </Span>
                {loading
                    ? <CircularProgress className='loader' size={30} />
                    : null}
            </Button>
        </Form>
    )
}