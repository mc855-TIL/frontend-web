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
import Link from 'next/link'

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
  return (
    <React.Fragment>
    <Head>
        <meta name="theme-color" content="#3c1742" />
      </Head>
      <h2>
        <Link href="/">
          <a>Voltar</a>
        </Link>
      </h2>
      
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