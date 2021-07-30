import React from 'react';
import DashboardChart from '../../components/Dashboard/Chart';
import DashboardTable from '../../components/Dashboard/Table';
import { Container, Grid, Paper } from '@material-ui/core';
import DashboardEvents from '../../components/Dashboard/Events';

import useStyles from './styles'

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
          <DashboardTable />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;