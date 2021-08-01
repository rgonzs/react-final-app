import { makeStyles } from '@material-ui/core/styles';

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
      minHeight: 200,
      borderRadius: '20px',
    },
  }));

export default useStyles