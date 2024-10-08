import { Typography } from '@mui/material';
import './Proyects.css'
import { makeStyles } from '@mui/styles';
const Proyects = ({title,id}) => {
  const classes = useStyles();
  return (
    <div className="Psection">
      <div className={classes.Psectioncontent} id={id}>
      <Typography variant='h3'>{title}</Typography>
      </div>
    </div>
  )
};

const useStyles = makeStyles(() => ({
  Asectioncontent: {

  },
}))

export default Proyects