import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  
    middle: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 20,
      maxWidth: 1000,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: 250,
      borderRadius: '25px',
    },
  }));

export default useStyles