import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  layout: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    borderRadius: '20px',
    width: 400,
  },
  formControl: {
    minWidth: 100,
    width: '100%',
    '& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      display: 'none',
    },
    '& input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },

    '& input[type=number]': {
      '-moz-appearance': 'textfield',
    },
  },

  ButtonControl: {
    minWidth: 100,
    width: '100%',
  },
}));
