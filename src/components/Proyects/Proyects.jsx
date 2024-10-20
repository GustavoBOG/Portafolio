import { Card, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import mockData from '../../mockData'; 
import './Proyects.css'



const Proyects = ({title,id}) => {
  const classes = useStyles();
  return (
    <div className="Psection">
      <div className={classes.Psectioncontent} id={id}>
      <Typography variant='h3'>{title}</Typography>
      <Grid container className={classes.grid}>
        {
          mockData.map(({title,image, link}, index)=>(
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia 
                image={image} 
                className={classes.caratula} 
                title="caratula"
                />
                <CardContent
                className={classes.enlace} 
                >
                  <Link href={link} color="primary" target="_blank" rel="noopener noreferrer" >
                    {title}
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))
        }

      </Grid>
      </div>
    </div>
  )
};

const useStyles = makeStyles((theme) => ({
  Psectioncontent:{
    maxWidth:"90vw",
    margin: "0 auto",
  },
  grid: {
    marginTop : theme.spacing(20),
  },
  card: {
    maxWidth: 345,
    minHeight: 275,
    margin: theme.spacing(3),
    transition: 'transform 0.50s ease-in-out',
    backgroundColor:'rgb(194,232,255) !important',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 4px 15px rgb(124, 157, 198)',
    }
  },
  caratula: {
    height: 0,
    paddingTop: '76%',
    objectFit: 'contain',
  },
  enlace:{
    textAlign: 'center',
    fontSize: '25px',
    fontWeight: "bold",
    color: 'rgb(4, 37, 88)',
    '& a': {
      textDecoration: 'none',
    },
  },
}))

export default Proyects;