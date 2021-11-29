import React, { useState } from 'react';
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
import { Component } from 'react';
import ImageUploading from 'react-images-uploading';
import Uploady, { useItemProgressListener } from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import { asUploadButton } from "@rpldy/upload-button";
import TusUploady from "@rpldy/tus-uploady";
import axios from 'axios';
import inputimage from '~/public/images/inputimage.png';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import unicamp from '~/public/images/unicamp.png';

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

function ProductDetail() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Head >
                <title>
                    {brand.starter.name}
                    &nbsp; - Detalhes
                </title>
            </Head>
            <CssBaseline />
            <section id="Add" />
            <div className={classes.mainWrap}>
                <Header />
                <main className={classes.containerWrap}>
                    <div className={clsx(classes.featureMore)}>
                        <ProductDetailHeaderDetail />
                        <Grid container spacing={6} className={classes.backgroundd}>
                            <Grid md={6} >
                                <ProductDetailLeftGrid />
                            </Grid>
                            <Grid md={6} >
                                <ProductDetailRightGrid />
                            </Grid>
                        </Grid>

                    </div>
                </main>
            </div>
        </React.Fragment>
    )
}

export default ProductDetail;

class ProductDetailLeftGrid extends React.Component {
    render() {
        return (
            <div className="container">

                <Container maxWidth="md">
                    <h1>
                        Kits ELISA DUOSET RDSYSTEM (humano)
                    </h1>
                    <Grid container spacing={3} alignItems="flex-end">
                        <Grid item md={2} xs={12}>
                            <label htmlFor="acceptTerms" className="form-check-label">Insumo</label>
                        </Grid>
                        <Grid item md={2} xs={12}>
                            <label htmlFor="acceptTerms" className="form-check-label">Livro</label>
                        </Grid>
                    </Grid>
                </Container>
                <style jsx>{`
              .container {
                margin: 50px;
              }
              label {
                color: green;
              }
              textarea {
                width: 600px;
                height: 150px;
              }
            `}</style>

                <Container maxWidth="md">
                    <h2>
                        Características
                    </h2>
                    <Grid container spacing={3} alignItems="flex-end">
                        <Grid item md={3} xs={12}>
                            <h4>Tipo de item</h4>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <h6>.......</h6>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} alignItems="flex-end">
                        <Grid item md={3} xs={12}>
                            <h4>Quantidade</h4>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <h6>.......</h6>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} alignItems="flex-end">
                        <Grid item md={3} xs={12}>
                            <h4>Atualizado em</h4>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <h6>.......</h6>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} alignItems="flex-end">
                        <Grid item md={3} xs={12}>
                            <h4>Data de validade</h4>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <h6>.......</h6>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="md">
                    <h2>
                        Descrição
                    </h2>
                    <Grid container spacing={3} alignItems="flex-end">
                        <Grid item xs={12}>
                            <text htmlFor="acceptTerms" className="form-check-label">Kits Elisa para detecção de IL-17, IL10, MMP9, TIMP1, RANKL, OPG, IL-12 para humanos.</text>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="md">
                    <h2>
                        Contato
                    </h2>
                </Container>
                <Grid item key={"123"} xs={30} sm={30} md={30}>
                    <Card className={"classes.card"}>
                        <CardContent className={"classes.cardContent"}>
                            <Grid container spacing={3} className={"classes.backgroundd"}>
                                <Grid item md={3}>
                                    <img src={unicamp} alt="logo" />
                                </Grid>
                                <Grid item md={6} >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        PARA QUEM?
                                    </Typography>
                                    <Typography>
                                        O serviço é destinado à comunidade acadêmico-científica das instituições de ensino superior do Brasil, credenciadas na Comunidade Acadêmica Federada (CAFe).
                                    </Typography>
                                </Grid>
                            </Grid>

                        </CardContent>
                    </Card>
                </Grid>
            </div>


        );
    }
}

class ProductDetailRightGrid extends React.Component {
    render() {
        return (
            <div className="container">
                <Container maxWidth="md">
                    <img src={inputimage} alt="logo" />
                </Container>
                <style jsx>{`
              .container {
                margin-bottom: 50px;
                margin-left: 50px;
                margin-right: 50px;
                margin-top: 50px;
              }
              p {
                color: gray;
              }
              textarea {
                width: 550px;
                height: 150px;
              }
            `}</style>
            </div>
        );
    }
}

class ProductDetailHeaderDetail extends React.Component {
    render() {
        return (
            <div className="container">
                <br />
                <p>Início / Catálogo / Detalhes da oferta</p>
                <h1 className="title">
                    <Link href="/">
                        <a>←</a>
                    </Link>
                    {' '}Detalhes da oferta
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
        );
    }
}