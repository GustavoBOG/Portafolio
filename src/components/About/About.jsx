import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { makeStyles } from '@mui/styles';
import me from '../../assets/me.png';
import TypeWriterEffect from "react-typewriter-effect";
import pdf from '../../assets/gustavoCV.pdf';

const About = ({title, id}) => {
  const classes = useStyles();
  return (
  <div className={classes.section}>
    <div className={classes.sectioncontent} id={id}>
      <Typography variant='h2'>{title}</Typography>
      <Card className={classes.card}>
        <CardMedia image={me} className={classes.media} title="picture" />
        <CardContent className={classes.cardcontent}>
        <TypeWriterEffect
            text="Hola, soy Gustavo  Bolívar."
            textStyle={{ 
              fontSize: "2.5rem", 
              fontWeight: 800,
              color: "rgb(4, 37, 88)",
            }}
            cursorColor="#d4f0fc"
            startDelay={100}
            typeSpeed={70}
          />
          <TypeWriterEffect
            text="un apasionado del desarrollo y la tecnología."
            textStyle={{  
              fontSize: "1.4rem", 
              fontWeight: 600,
              color: "rgb(80, 124, 169)"
            }}
            cursorColor="rgb(25, 189, 243)"
            
            startDelay={2300}
            typeSpeed={70}
          />
            <Typography variant="h6" style={{ color: "rgb(76,75,75)"}}>
            Hasta hace poco, llevaba una vida como la de cualquier otra persona, con hobbies y aspiraciones.
            <br/>Seguí el camino tradicional: estudié, busqué trabajo y me adapté a lo que se esperaba...
            <br/>Pero un día decidí tomar un giro diferente y diseñar mi propio camino.
            <br/>Ahora, me he propuesto desarrollar y aprovechar al máximo todas mis habilidades en el mundo de la tecnología.<br/>
            <br/>¿Y adivina qué?<br/>
            <br/>El resultado ha sido increíblemente satisfactorio y gratificante.
            <br/>Me he convertido en un full stack developer motivado y comprometido a seguir creciendo. 
            <br/>Estoy decidido a convertirme en uno de los mejores en este campo, disfrutando cada paso del proceso.
            </Typography>
        </CardContent>
        <CardActions>
          <Button 
            variant="contained" 
            className={classes.pdfbutton}
            component="a" 
            href={pdf} 
            download
            style={{
              position: 'absolute', 
            }}><AssignmentIndIcon/>
          </Button>
          <Button 
            variant="contained" 
            className={classes.inbuttom}
            component="a" 
            href={pdf} 
            download
            style={{
              position: 'absolute', 
            }}><LinkedInIcon/>
          </Button>
          <Button 
            variant="contained" 
            className={classes.gitbuttom}
            component="a" 
            href={pdf} 
            download
            style={{
              position: 'absolute', 
            }}><GitHubIcon/>
          </Button>
          <Button 
            variant="contained" 
            className={classes.instabuttom}
            component="a" 
            href={pdf} 
            download
            style={{
              position: 'absolute', 
            }}><InstagramIcon/>
          </Button>
        </CardActions>
      </Card>
    </div>
  </div>
  )
};

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: "90px",
    minHeight: "100vh",
    background: "#01303f",
    color: "white",
  },

  sectioncontent: {
    maxWidth: "90vw",
    margin: "0 auto",
  },
  card: {
    background: "#d4f0fc !important",
    height: "80vh",
    display: "flex",
    marginTop: theme.spacing(5),
    position: "relative",
  },
  media: {
    width: "250px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "15px",
    margin: theme.spacing(2),

  },
  cardcontent: {
    marginTop: theme.spacing(10),
    "& h6" : {
      fontSize: "18px",
      marginTop:theme.spacing(3),
      '@media (max-width: 970px)': {
        fontSize: "15px",
      },
      '@media (max-width: 840px)': {
        fontSize: "14px",
      },
      '@media (max-width: 715px)': {
        fontSize: "13px",
      },
      '@media (max-width: 708px)': {
        fontSize: "12px",
      },
      '@media (max-width: 670px)': {
        display: 'none',
      },
    },
  },
 pdfbutton: {
  position: "absolute ",
  bottom: "2rem",
  right: "4rem",
  '@media (max-width:670px)': {
    bottom: "11rem",
    right: "1rem",
      },
 },
 inbuttom: {
  position: "absolute ",
  bottom: "2rem",
  right: "9rem",
  '@media (max-width: 670px)': {
    bottom: "8rem",
    right: "1rem",
      },    
 },
 gitbuttom: {
  position: "absolute ",
  bottom: "2rem",
  right: "14rem",
  '@media (max-width: 670px)': {
    bottom: "5rem",
    right: "1rem",
      },    
 },
 instabuttom: {
  position: "absolute ",
  bottom: "2rem",
  right: "19rem",
  '@media (max-width:670px)': {
    bottom: "2rem",
    right: "1rem",
      },
  '@media (max-width:300px)': {
    bottom: "8rem",
    right: "6rem",
      },    
 },
 
}));

export default About;


