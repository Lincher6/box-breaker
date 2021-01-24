import React, {useEffect} from "react"
import { Layout } from 'containers/Layout';
import { Column } from 'globalStyles';
import {Pagination, SearchForm, UsersTable} from 'components/users';
import { useDispatch } from 'react-redux';
import { usersActions } from 'store/users';

export const AdminPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => dispatch(usersActions.clearUsers());
    }, [])

    return (
        <Layout>
            <Column>
                <h1>ADMIN PANEL</h1>
                <SearchForm/>
                <UsersTable/>
                <Pagination/>
            </Column>
        </Layout>
    )
}