import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ReactWOW from 'react-wow';
import useStyles from './feature-style';
import { useTextAlign } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Blog from '../Blog';

function MainFeature() {
  const classes = useStyles();
  const align = useTextAlign();
  return (
    <div className={clsx(classes.featureMore)}>
      <Grid container spacing={6}>
        <Grid md={6} item>
            <ReactWOW animation="fadeInLeft" duration="0.6s">
              <Typography variant="h3" className={classes.title}>
                Lorem ipsum dolor
              </Typography>
            </ReactWOW>
            <ReactWOW animation="fadeInLeft" delay="0.3s" duration="0.6s">
              <Typography variant="body1" className={classes.text}>
                111Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
              </Typography>
            </ReactWOW>
        </Grid>
        <Grid md={6} item>
            <ReactWOW animation="zoomIn" delay="0.3s" duration="0.6s">
              <div className={classes.deco1} />
            </ReactWOW>
            <ReactWOW animation="fadeInRight" delay="0.5s" duration="0.6s">
              <figure className={classes.img}>
                <img src={imgAPI.photo[5]} alt="img" />
              </figure>
            </ReactWOW>
        </Grid>
      </Grid>
      <section className={clsx(classes.spaceBottom, classes.spaceBottom)} id="blog">
        <Blog />
      </section>
      <Grid container spacing={6}>
        <Grid md={6} item>
            <ReactWOW animation="zoomIn" delay="0.3s" duration="0.6s">
              <div className={classes.deco1} />
            </ReactWOW>
            <ReactWOW animation="fadeInLeft" delay="0.5s" duration="0.6s">
              <figure className={classes.img}>
                <img src={imgAPI.photo[5]} alt="img" />
              </figure>
            </ReactWOW>
        </Grid>
        <Grid md={6} item>
            <ReactWOW animation="fadeInRight" duration="0.6s">
              <Typography variant="h3" className={classes.title}>
                Lorem ipsum dolor
              </Typography>
            </ReactWOW>
            <ReactWOW animation="fadeInRight" delay="0.3s" duration="0.6s">
              <Typography variant="body1" className={classes.text}>
                Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
              </Typography>
            </ReactWOW>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainFeature;
