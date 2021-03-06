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
import Button from '@material-ui/core/Button';

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

function AddProduct() {
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
                <main className={classes.containerWrap}>
                    <div className={clsx(classes.featureMore)}>
                        <AddProductHeaderDetail />
                        <Grid container spacing={6} className={classes.backgroundd}>
                            <Grid md={6} >
                                <AddProductLeftGrid />
                            </Grid>
                            <Grid md={6} >
                                <AddProductRightGrid />
                            </Grid>
                        </Grid>
                    </div>
                </main>
            </div>
        </React.Fragment>
    )
}

export default AddProduct;

class AddProductLeftGrid extends React.Component {
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
                        Descri????o do an??ncio
                    </label>
                    <form>
                        <textarea>
                        </textarea>
                    </form>
                    <p>Aten????o: N??o adicione seus dados de contato ?? descri????o p??blica do
                        an??ncio. Ao inv??s disso, adicione uma forma de contato ao seu perfil
                        de usu??rio aqui.</p>
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

class AddProductRightGrid extends React.Component {
    render() {
        return (
            <div className="container">
                <Container maxWidth="md">
                    <label>
                        Imagem
                    </label>
                    <App></App>
                </Container>

                <Container maxWidth="md">
                    <Grid container spacing={3} alignItems="flex-end">
                        <Grid item md={6} xs={12}>
                            <TextField
                                id="standard-email"
                                label="Quantidade (opcional)"
                                className={"classes.textField"}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                id="standard-email"
                                label="Data de validade (opcional)"
                                className={"classes.textField"}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                </Container>

                <br />
                <Container maxWidth="md">
                    <label htmlFor="acceptTerms" className="form-check-label">Tipo de item</label>
                    <Grid container spacing={3} alignItems="flex-end">
                        <Grid item md={5} xs={12}>
                            <input name="acceptTerms" type="checkbox" id="acceptTerms" className={`form-check-input`} />
                            <label htmlFor="acceptTerms" className="form-check-label">Insumo</label>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <input name="acceptTerms" type="checkbox" id="acceptTerms" className={`form-check-input`} />
                            <label htmlFor="acceptTerms" className="form-check-label">Livro</label>
                        </Grid>
                    </Grid>
                </Container>

                <br />
                <Container maxWidth="md">
                    <label htmlFor="acceptTerms" className="form-check-label">??rea do cohecimento</label>
                    <Grid container spacing={3} alignItems="flex-end">
                        <Grid item md={3} xs={12}>
                            <input name="acceptTerms" type="checkbox" id="acceptTerms" className={`form-check-input`} />
                            <label htmlFor="acceptTerms" className="form-check-label">Biol??gicas</label>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <input name="acceptTerms" type="checkbox" id="acceptTerms" className={`form-check-input`} />
                            <label htmlFor="acceptTerms" className="form-check-label">Exatas</label>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <input name="acceptTerms" type="checkbox" id="acceptTerms" className={`form-check-input`} />
                            <label htmlFor="acceptTerms" className="form-check-label">Humanas</label>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <input name="acceptTerms" type="checkbox" id="acceptTerms" className={`form-check-input`} />
                            <label htmlFor="acceptTerms" className="form-check-label">Tecnol??gicas</label>
                        </Grid>
                    </Grid>
                </Container>

                <br />
                <Container maxWidth="md">
                    <label htmlFor="acceptTerms" className="form-check-label">Condi????o da oferta</label>
                    <Grid container spacing={3} alignItems="flex-end">
                        <Grid item md={5} xs={12}>
                            <input name="acceptTerms" type="checkbox" id="acceptTerms" className={`form-check-input`} />
                            <label htmlFor="acceptTerms" className="form-check-label">Dispon??vel para empr??stimo</label>
                        </Grid>
                    </Grid>
                    <p> Voc?? e o solicitante devem combinar o retorno do item.</p>
                </Container>
                
                <Container maxWidth="md">
                    <Grid container spacing={3} alignItems="flex-end">
                        <Grid item md={3} xs={12}>
                            <Button variant="contained" href="#">Cancelar</Button>
                        </Grid>
                        <Grid item md={5} xs={12}>
                            <Button variant="contained" color="secondary" href="#">Salvar e anunciar</Button>
                        </Grid>
                    </Grid>
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

class AddProductHeaderDetail extends React.Component {
    render() {
        return (
            <div className="container">
                <br />
                <p>In??cio / Cat??logo / Ofertar um item</p>
                <h1 className="title">
                    <Link href="/">
                        <a>???</a>
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
            a {
              text-decoration:none;
            }
          `}</style>
            </div>
        );
    }
}

class App extends Component {

    state = {

        selectedFile: null
    };

    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    onFileUpload = () => {
        const formData = new FormData();
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
        console.log(this.state.selectedFile);
        axios.post("api/uploadfile", formData);
    };

    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <div>
                    <p>Nome: {this.state.selectedFile.name}</p>
                    <p>Tipo: {this.state.selectedFile.type}</p>
                    <p>
                        ??ltima modifica????o:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <img src={inputimage} alt="logo" />
                </div>
            );
        }
    };

    render() {

        return (
            <div>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                </div>
                {this.fileData()}
            </div>
        );
    }
}