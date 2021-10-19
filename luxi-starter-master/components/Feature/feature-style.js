import { makeStyles } from '@material-ui/core/styles';

const decoration = theme => ({
  background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
  borderRadius: '50%',
  width: 250,
  height: 250,
  position: 'absolute',
  top: -20,
  left: 60,
  opacity: 0.5
});

const featureStyles = makeStyles(theme => ({
  pageSection: {
    marginBottom: theme.spacing(20)
  },
  featureWrap: {
    position: 'relative'
  },
  icon: {},
  featureList: {
    textAlign: 'center',
    '& h5': {
      margin: `${theme.spacing(3)}px 0`
    },
    '& $icon': {
      fill: theme.palette.primary.main,
      width: 100,
      height: 100
    }
  },
  title: {},
  text: {},
  img: {},
  imgFull: {},
  last: {},
  featureMore: {
    position: 'relative',
    '& $title': {
      marginBottom: theme.spacing(3)
    },
    '& $text': {
      fontSize: 22
    },
    '& $img': {
      position: 'relative',
      width: 400,
      maxWidth: '98%',
      '& img': {
        width: '100%'
      }
    },
    '& $imgFull': {
      position: 'relative',
      textAlign: 'center',
      maxWidth: 800,
      margin: '0 auto',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '98%',
      },
      marginTop: theme.spacing(5),
      '& img': {
        width: '100%'
      }
    },
  },
  featureItem: {
    position: 'relative',
    marginBottom: theme.spacing(20),
    '&$last': {
      marginBottom: 0,
    }
  },
  // deco1: {
  //   ...decoration(theme)
  // },
  // deco2: {
  //   ...decoration(theme),
  //   width: 450,
  //   height: 450,
  //   top: 40,
  //   left: 'calc(50% - 350px)',
  // }
}));

export default featureStyles;
