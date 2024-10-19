import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import me from '../../assets/me.png'
import TypeWriterEffect from "react-typewriter-effect"
import pdf from '../../assets/gustavoCV.pdf'
import "./About.css";

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
            text="Hello, I’m Gustavo Bolívar"
            textStyle={{ fontSize: "2rem", fontWeight: 800  }}
            cursorColor="rgb(25, 189, 243)"
            startDelay={100}
            typeSpeed={100}
          />
          <TypeWriterEffect
            text="a passionate developer and technology enthusiast."
            textStyle={{ fontSize: "1.2rem", fontWeight: 600, color: "rgb(60,60,60)"  }}
            cursorColor="rgb(25, 189, 243)"
            startDelay={2600}
            typeSpeed={100}
          />
        </CardContent>
        <CardActions>
          <Button 
            variant="contained" 
            className={classes.pdfbutton}
            component="a" 
            href={pdf} 
            download
          >Dowload CV</Button>
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
    background: "#333",
    color: "#fff",
  },

  sectioncontent: {
    maxWidth: "80vw",
    margin: "0 auto",
  },
  card: {
    height: "70vh",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginTop: theme.spacing(6),
    position: "relative",
  },
  media: {
    width: "250px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "15px",
    margin: theme.spacing(5),

  },
  pdfbutton: {
    position: "absolute",
    top: "13rem",
  },
}));

export default About;


