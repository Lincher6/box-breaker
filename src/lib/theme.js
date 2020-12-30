import { createMuiTheme } from '@material-ui/core/styles';
import {PRIMARY, SECONDARY} from "./constants";

export const theme = createMuiTheme({
    palette: {
        type: `dark`,
        primary: {
            main: PRIMARY,
        },
        secondary: {
            main: SECONDARY,
        },
        action: {
            disabledBackground: 'rgba(100, 100, 100, .5)',
            disabled: 'white'
        },
        background: {
            paper: `#182533`
        },
    },

    overrides: {
        MuiButton: {
            root: {
                fontWeight: `bold`,
                margin: `10px`,
                fontFamily: `DigitalClock, serif`,
                fontSize: 24,
                minWidth: 130,
            },
        }
    }


});