import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import "./Contact.css";

const Contact = ({ title, id }) => {
  const classes = useStyles();
  return (
    <div className="Csection">
      <div className={classes.Csectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  Asectioncontent: {},
}));

export default Contact;
