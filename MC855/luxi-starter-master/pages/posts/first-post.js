import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import Head from 'next/head';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '~/components/Header';
import AnimateSlider from '~/components/AnimateSlider';
import Feature from '~/components/Feature';
import Counter from '~/components/Counter';
import Testimonials from '~/components/Testimonials';
import Pricing from '~/components/Pricing';
import Blog from '~/components/Blog';
import Subscribe from '~/components/Subscribe';
import Footer from '~/components/Footer';
import PageNav from '~/components/PageNav';
import Notification from '~/components/Notification';
import brand from '~/public/text/brand';
import Link from 'next/link';
import MoreFeature from '~/components/Feature/MoreFeature';
import Grid from '@material-ui/core/Grid';
import ReactWOW from 'react-wow';
import conhecaSolidariedade from '~/public/images/conhecaSolidariedade.png';
import insumosMateriais from '~/public/images/insumosMateriais.png';
import Typography from '@material-ui/core/Typography';

const sectionMargin = margin => (margin * 15);
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  spaceBottom: {
    marginBottom: 0
  },
  spaceTop: {
    paddingTop: sectionMargin(theme.spacing()),
    background: "#ffffff"
  },
  containerWrap: {
    marginTop: theme.spacing(10)
  },
}));

function FirstPost() {
    const classes = useStyles();
  return (
    <React.Fragment>
      <Head >  
        <title>
          { brand.starter.name }
          &nbsp; - Adicionar
        </title>
      </Head>
      <CssBaseline />
      <section id="Add" />
      <div className={classes.mainWrap}>
        <Header />
        <main className={classes.containerWrap}>
        <div className={clsx(classes.featureMore)}>
      <Grid container spacing={6} className={classes.backgroundd}>
        <Grid md={6} >
            <ReactWOW animation="zoomIn" delay="0.3s" duration="0.6s">
              <div className={classes.deco1} />
            </ReactWOW>
            <ReactWOW animation="fadeInLeft" delay="0.5s" duration="0.6s">
                <img src={conhecaSolidariedade} />
            </ReactWOW>
        </Grid>
        <Grid md={6} item>
            <ReactWOW animation="fadeInRight" duration="0.6s">
              <Typography variant="h3" className={classes.title}>
              Conheça o Solidariedade
              </Typography>
            </ReactWOW>
            <ReactWOW animation="fadeInRight" delay="0.3s" duration="0.6s">
              <Typography variant="body1" className={classes.text}>
              O Solidariedade à Pesquisa é a plataforma que facilita a comunicação entre alunos e professores das instituições   de   ensino   superior,   com o   objetivo de otimizar  o uso de recursos públicos para o desenvolvimento de pesquisas.

A colaboração entre os participantes é a essência do Solidariedade à Pesquisa, aproximando quem tem com quem precisa de insumos
              </Typography>
            </ReactWOW>
        </Grid>
      </Grid>
      
      <section className={clsx(classes.spaceBottom, classes.spaceBottom)} id="blog">
        <Blog />
      </section>

      <Grid container className={classes.background}>
        <Grid md={6} item>
            <ReactWOW animation="fadeInLeft" duration="0.6s">
              <Typography variant="h3" className={classes.title}>
              INSUMOS E MATERIAIS
              </Typography>
            </ReactWOW>
            <ReactWOW animation="fadeInLeft" delay="0.3s" duration="0.6s">
              <Typography variant="body1" className={classes.text}>
              As ofertas podem variar de acordo com a disponibilidade dos pesquisadores de cada instituição. É possível encontrar livros e reagentes até papel e toner para impressão.
              </Typography>
            </ReactWOW>
        </Grid>
        <Grid md={6} >
            <ReactWOW animation="fadeInRight" delay="0.5s" duration="0.6s">
                <img src={insumosMateriais} />
            </ReactWOW>
        </Grid>
      </Grid>
    </div>
        </main>
      </div>
    </React.Fragment>
  )
}

FirstPost.getInitialProps = async () => ({
    namespacesRequired: ['common'],
  });
  
FirstPost.propTypes = {
onToggleDark: PropTypes.func.isRequired,
onToggleDir: PropTypes.func.isRequired,
};

export default FirstPost;