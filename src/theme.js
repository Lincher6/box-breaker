import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00e5ff',
        },
        secondary: {
            main: '#ff6000',
        },
    },

    overrides: {
        MuiButton: {
            root: {
                fontWeight: `bold`,
                margin: `10px`
            }
        }
    }


});