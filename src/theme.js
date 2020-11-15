import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00e5ff',
        },
        secondary: {
            main: '#ff6000',
        },
        action: {
            disabledBackground: 'rgba(100, 100, 100, .5)',
            disabled: 'white'
        }
    },

    overrides: {
        MuiButton: {
            root: {
                fontWeight: `bold`,
                margin: `10px`,
                fontFamily: `DigitalClock`,
                fontSize: 24,
                minWidth: 120
            },
        }
    }


});