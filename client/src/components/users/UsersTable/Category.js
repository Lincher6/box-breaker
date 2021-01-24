import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { usersActions } from 'store/users';
import { TD } from './styles';
import ImportExportIcon from '@material-ui/icons/ImportExport';

export const Category = ({ name, value, sortable }) => {
    const [descending, setDescending] = useState(true);
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(usersActions.setSort({ [value]: descending ? -1 : 1 }));
        setDescending(!descending);
    }

    return (
        <TD
            sortable={sortable}
            onClick={sortable && clickHandler}
        >
            <div>
                {name}
                {sortable && <ImportExportIcon/>}
            </div>
        </TD>
    )
}