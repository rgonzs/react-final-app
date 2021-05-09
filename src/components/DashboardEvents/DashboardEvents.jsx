import { CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    maxHeight: 180,
  },
});

const DashboardEvents = () => {
  const classes = useStyles();
  return (
    <>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Incidentes
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Estos momentos no hay incidentes en ningun servicio.
          </Typography>
        </CardContent>
      </CardActionArea>
    </>
  );
};

export default DashboardEvents;
