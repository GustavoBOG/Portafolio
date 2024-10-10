import { Typography } from '@mui/material';
import "./About.css";

const About = ({title,id}) => {
  
  return (
  <div className="Asection">
    <div className="Asectioncontent" id={id}>
      <Typography variant='h3'>{title}</Typography>
    </div>
  </div>
  )
};

export default About;
