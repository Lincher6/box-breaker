import React from "react"
import {Arrow, Container} from './styles';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import {useDispatch, useSelector} from 'react-redux';
import {usersActions, usersSelectors} from 'store/users';
import {Span} from 'globalStyles';
import {PRIMARY} from 'lib/constants';

export const Pagination = () => {
    const page = useSelector(usersSelectors.page);
    const pageSize = useSelector(usersSelectors.pageSize);
    const totalUserCount = useSelector(usersSelectors.totalUserCount);
    const dispatch = useDispatch();

    const lastPage = Math.ceil(totalUserCount / pageSize);

    const changePage = event => {
        const { type } = event.currentTarget.dataset;
        switch (type) {
            case 'first': {
                dispatch(usersActions.setPage(1));
                break;
            }
            case 'previous': {
                dispatch(usersActions.setPage(page - 1));
                break;
            }
            case 'next': {
                dispatch(usersActions.setPage(page + 1));
                break;
            }
            case 'last': {
                dispatch(usersActions.setPage(lastPage));
                break;
            }
            default: dispatch(usersActions.setPage(1));
        }
    }

    return (
        <Container>
            <Arrow
                variant='contained'
                color='secondary'
                onClick={changePage}
                data-type='first'
                disabled={page === 1}
            >
                <FirstPageIcon/>
            </Arrow>
            <Arrow
                variant='contained'
                color='secondary'
                onClick={changePage}
                data-type='previous'
                disabled={page === 1}
            >
                <KeyboardArrowLeftIcon/>
            </Arrow>
            <Span color={PRIMARY} weight={700}>
                {page}
            </Span>
            <Arrow
                variant='contained'
                color='secondary'
                onClick={changePage}
                data-type='next'
                disabled={page === lastPage}
            >
                <KeyboardArrowRightIcon/>
            </Arrow>
            <Arrow
                variant='contained'
                color='secondary'
                onClick={changePage}
                data-type='last'
                disabled={page === lastPage}
            >
                <LastPageIcon/>
            </Arrow>
        </Container>
    )
}