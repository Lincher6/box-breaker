import { useFormik } from 'formik';
import React from 'react';
import { Form, Button } from './styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { usersActions } from 'store/users';

export const SearchForm = () => {
    const dispatch = useDispatch();

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            search: '',
        },
        onSubmit: async ({ search }) => {
            dispatch(usersActions.setSearch(search));
        }
    })

    return (
        <Form onSubmit={handleSubmit}>
            <TextField id='search' name='search' type='text' label='search'
                       fullWidth
                       value={values.search}
                       onChange={handleChange}
            />
            <Button>
                <SearchIcon/>
            </Button>
        </Form>
    )
}