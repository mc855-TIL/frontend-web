import React, { useState } from 'react';
import CountUp from 'react-countup';
import ReactWOW from 'react-wow';
import Typography from '@material-ui/core/Typography';
import IosLeafOutline from 'react-ionicons/lib/IosLeafOutline';
import IosBulbOutline from 'react-ionicons/lib/IosBulbOutline';
import IosIonitronOutline from 'react-ionicons/lib/IosIonitronOutline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from './counter-style';
import Image from 'next/image'

function Counter() {
  const classes = useStyles();
  const [play, setPlay] = useState(false);
  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );
  const handlePlay = () => {
    setTimeout(() => { setPlay(true); }, 500);
  };
  return (
    <div className={classes.counterWrap}>
      <Container fixed>
        <Grid container justify="center" alignItems="center" className={classes.root} spacing={6}>
          <Grid md={4} item>
            <ReactWOW animation="fadeIn" offset={300} callback={handlePlay}>
              <div className={classes.counterItem}>
                <IosLeafOutline />
              </div>
            </ReactWOW>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <IosBulbOutline />
            </div>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
            <IosBulbOutline />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Counter;
