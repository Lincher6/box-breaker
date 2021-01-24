import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from 'react-redux';
import {appActions, appSelectors} from 'store/app';

export const useError = () => {
    const error = useSelector(appSelectors.error);
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(appActions.setError(false));
    }

    const errorModal = (
        <Dialog open={error} fullWidth>
            <DialogTitle style={{ color: 'red' }}>
                { error.type }
            </DialogTitle>
            <DialogContent>
                <DialogContentText align='center'>
                    { error.message }
                </DialogContentText>
                <DialogActions>
                    <Button onClick={closeModal} color='primary' variant='outlined'>
                        CANCEL
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )

    return { errorModal };
}