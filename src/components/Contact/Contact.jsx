import { makeStyles } from "@mui/styles";
import { Button, Paper, Radio, TextField, Typography } from "@mui/material";
import "./Contact.css";
import { useState } from "react";

const Contact = ({ title, id }) => {
  const classes = useStyles();
  const [value, setValue] = useState("say hi")

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className={classes.section}>
        <Typography variant="h2">{title}</Typography>
      <div className={classes.sectioncontent} id={id}>
        <Paper className={classes.root}>
            <div className={classes.tituloandchoices}>
              <Typography variant="h4">Contact me </Typography>
              <div className={classes.choice}>
                <span>Say Hello</span>
                <Radio
                 value="say hi"
                 checked={value==="say hi"}
                 onChange={handleChange}
                />
                <span>Get a Quote</span>
                <Radio
                 value="Get a Quote"
                 checked={value==="Get a Quote"}
                 onChange={handleChange}
                />
              </div>
            </div>
            <form className={classes.form} autoComplete="off">
              <TextField label="Your Name"/>
              <TextField label="Email"/>
                {
                  value === "Get a Quote" ? (
                    <>
                    <TextField label="Needed Services"/>
                    <TextField label="Stimated budget"/>
                    </>
                  ) : null
                }
              <TextField label="Write a message"/>
            </form>
            <Button variant="contained">Submit</Button>
        </Paper>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    background: "rgb(194, 232, 255)",
    color:"rgb(1, 16, 35)"
  },
  sectioncontent: {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
  },
  root:{
    width: "50vw",
    backgroundColor:"rgb(124,157,198) !important",
    marginTop: theme.spacing(4) ,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(4) ,
    "& button":{
      fontSize: "1.5rem",
      margin: theme.spacing(1),

    },
    "& button:hover": {
      backgroundColor:"rgb(4,37,88)",
    }
  },
  tituloandchoices:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  form:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    "& label":{
      padding:theme.spacing(1),
    },
  },
  


}));

export default Contact;
