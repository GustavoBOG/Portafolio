import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import "./Skills.css";

const Skills = ({ title, id }) => {
  const classes = useStyles();
  return (
    <div className="Ssection">
      <div className={classes.Ssectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  Ssectioncontent: {

  },
}))

export default Skills;
