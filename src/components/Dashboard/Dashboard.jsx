import React from 'react';
import DashboardChart from './../DashboardChart/DashboardChart';
import DashboardTable from './../DashboardTable/DashboardTable';
import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import DashboardEvents from './../DashboardEvents/DashboardEvents';

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
    height: 250
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Container className={(classes.root, classes.middle)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <DashboardChart />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
          <DashboardEvents />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          {/* <Paper className={classes.paper}> */}
          <DashboardTable  />
          {/* </Paper> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
