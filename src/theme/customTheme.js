import { createMuiTheme } from '@material-ui/core/styles';
import { esES } from '@material-ui/core/locale';

const theme = createMuiTheme(
	{
		palette: {
			primary: {
				main: '#0068d0',
			},
			secondary: {
				main: '#5D7185',
			},
		},
	},
	esES
);

export default theme;
