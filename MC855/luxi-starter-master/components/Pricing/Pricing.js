import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './pricing-style';
import CardMedia from '@material-ui/core/CardMedia';
import comoColaborar from '~/public/images/comoColaborar.png';
const tiers = [
  {
    title: 'Enterprise',
    price: 'Nome do insumo',
    description: [
      'UNICAMP',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: 'Nome do insumo',
    description: [
      'UNICAMP',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: 'Nome do insumo',
    description: [
      'UNICAMP',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: 'Nome do insumo',
    description: [
      'UNICAMP',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'contained',
  }
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <Container maxWidth="10" component="main">
      <Typography gutterBottom variant="h3" align="center" display="block">
        Pricing and Plan
      </Typography>
      <Typography gutterBottom variant="body1" align="center" display="block">
        Curabitur egestas consequat lorem, vel fermentum augue porta id.
      </Typography>
      <div className={classes.pricingWrap}>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={3}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardMedia
                  className={classes.cardMedia}
                  image={comoColaborar}
                  title="Image title"
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h5" align="left" color="textPrimary">
                      oferta
                    </Typography>
                  </div>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h5" align="left" color="textPrimary">
                      {tier.price}
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="left" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}
