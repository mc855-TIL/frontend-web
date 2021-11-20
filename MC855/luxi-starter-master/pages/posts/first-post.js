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
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

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
          {brand.starter.name}
          &nbsp; - Adicionar
        </title>
      </Head>
      <CssBaseline />
      <section id="Add" />
      <div className={classes.mainWrap}>
        <Header />
        <div className="container">
          <p>Início / Catálogo / Ofertar um item</p>
          <h1 className="title">
            <Link href="/">
              <a>←</a>
            </Link>
            {' '}Ofertar um item
          </h1>
          <style jsx>{`
            .container {
              margin: 50px;
            }
            p {
              color: gray;
            }
          `}</style>
        </div>
        <Grid container spacing={6} className={classes.backgroundd}>
          <Grid md={6} >
            <FirstPostLeftGrid />
          </Grid>
          <Grid md={6} >
            <FirstPostRightGrid />
          </Grid>
        </Grid>
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

class FirstPostLeftGrid extends React.Component {
  render() {
    return (
      <div className="container">
        <Container maxWidth="md">
          <label>
            Nome do item
          </label>
          <form>
            <textarea />
          </form>
        </Container>

        <Container maxWidth="md">
          <label>
            Descrição do anúncio
          </label>
          <form>
            <textarea />
          </form>
          <p>
            Atenção: Não adicione seus dados de contato à descrição pública do
            anúncio. Ao invés disso, adicione uma forma de contato ao seu perfil
            de usuário aqui.
          </p>
        </Container>
        <style jsx>{`
              .container {
                margin: 50px;
              }
              p {
                color: gray;
              }
              textarea {
                width: 600px;
                height: 150px;
              }
              `}</style>
      </div>
    );
  }
}

class FirstPostRightGrid extends React.Component {
  render() {
    return (
      <div className="container">
        <Container maxWidth="md">
          <label>
            Nome do item
          </label>
          <form>
            <textarea />
          </form>
        </Container>

        <Container maxWidth="md">
          <label>
            Descrição do anúncio
          </label>
          <form>
            <textarea />
          </form>
          <p>
            Atenção: Não adicione seus dados de contato à descrição pública do
            anúncio. Ao invés disso, adicione uma forma de contato ao seu perfil
            de usuário aqui.
          </p>
        </Container>
        <style jsx>{`
              .container {
                margin: 50px;
              }
              p {
                color: gray;
              }
              textarea {
                width: 600px;
                height: 150px;
              }
              `}</style>
      </div>
    );
  }
}


