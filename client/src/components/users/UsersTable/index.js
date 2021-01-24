import React, {useEffect, useState} from "react"
import {Header, Table, TR, TD, Body, Container, Loader, Back} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { usersActions, usersSelectors } from 'store/users';
import { RoleSelect } from './RoleSelect';
import { Category } from './Category';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {NavLink} from 'react-router-dom';
import { Span } from 'globalStyles';

export const UsersTable = () => {
    const [loading, setLoading] = useState(false);
    const page = useSelector(usersSelectors.page);
    const sortParams = useSelector(usersSelectors.sortParams);
    const search = useSelector(usersSelectors.search);
    const currentUser = useSelector(usersSelectors.user);
    const users = useSelector(usersSelectors.users);
    const dispatch = useDispatch();

    useEffect(async () => {
        setLoading(true);
        await dispatch(usersActions.getUsers());
        setLoading(false);
    }, [page, sortParams, search]);

    return (
        <Container>
            {loading && <Loader size={120}/>}
            <Table>
                <Header>
                    <TR>
                        <Category name={'Id'}/>
                        <Category sortable={true} name={'Login'} value={'login'} />
                        <Category sortable={true} name={'Name'} value={'name'}/>
                        <Category sortable={true} name={'Hi-score'} value={'hiScore'}/>
                        <Category sortable={true} name={'Games Played'} value={'gamesPlayed'}/>
                        <Category name={'Role'} value={'role'}/>
                        <Category name={'User ip'} value={'userIp'}/>
                    </TR>
                </Header>
                <Body>
                    {
                        users.map(user => {
                            const isCurrentUser = user._id === currentUser._id;
                            return (
                                <TR key={ user._id } currentUser={isCurrentUser}>
                                    <TD>{ user._id }</TD>
                                    <TD>{ user.login }</TD>
                                    <TD>{ user.name }</TD>
                                    <TD>{ user.hiScore }</TD>
                                    <TD>{ user.gamesPlayed }</TD>
                                    <TD>
                                        <RoleSelect user={user} currentUser={currentUser}/>
                                    </TD>
                                    <TD>{ user.userIp }</TD>
                                </TR>
                            )
                        })
                    }
                </Body>
            </Table>
            <Back>
                <NavLink to='/'>
                    <Button variant='outlined' color='primary'>
                        <ArrowBackIcon/>
                        <Span>Back</Span>
                    </Button>
                </NavLink>
            </Back>
        </Container>
    )
}

