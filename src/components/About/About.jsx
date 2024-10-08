import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import "./About.css";

const About = ({title,id}) => {
  const classes = useStyles();
  return (
  <div className="Asection">
    <div className={classes.Asectioncontent} id={id}>
      <Typography variant='h3'>{title}</Typography>
    </div>
  </div>
  )
};

const useStyles = makeStyles((theme) => ({
  Asectioncontent: {

  },
}))

export default About;
