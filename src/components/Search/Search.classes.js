import { makeStyles } from "@material-ui/core";

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
      width: 300,
    },
    formControl: {
      minWidth: 100,
      width: '100%',
    },
  
    ButtonControl: {
      minWidth: 100,
      width: '100%',
    },
  }));