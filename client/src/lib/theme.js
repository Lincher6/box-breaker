import {createMuiTheme} from '@material-ui/core/styles';
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
                position: "relative",
                fontWeight: `bold`,
                margin: `10px`,
                fontFamily: `DigitalClock, serif`,
                fontSize: '1.5rem',
                minWidth: 130,
                disabled: {
                    opacity: .6
                },
                ['@media(max-width: 1000px)']: {
                    padding: '0 10px',
                    minWidth: 0
                }

            },
            sizeSmall: {
                minWidth: "initial",
                padding: `0 10px`,
                fontSize: `18px`
            }
        },
        MuiTextField: {
            root: {
                marginBottom: 20
            }
        },
        MuiDialogTitle: {
            root: {
                textAlign: 'center'
            }
        }
    }
});