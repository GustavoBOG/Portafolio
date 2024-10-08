import { Link, animateScroll as scroll } from "react-scroll";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import ConstructionTwoToneIcon from "@mui/icons-material/ConstructionTwoTone";
import ContactPhoneTwoToneIcon from "@mui/icons-material/ContactPhoneTwoTone";
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./Navbar.css";
import { useState } from "react";



const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const links = [
    {
      id: "about",
      text: "About Me",
      icon: <AccountCircleRoundedIcon fontSize="large" className={classes.me}/>,
    },
    {
      id: "skills",
      text: "Skills",
      icon: <EmojiObjectsTwoToneIcon fontSize="large" className={classes.light}/>,
    },
    {
      id: "proyects",
      text: "Proyects",
      icon: <ConstructionTwoToneIcon fontSize="large" className={classes.key}/>,
    },
    {
      id: "contact",
      text: "Contact",
      icon: <ContactPhoneTwoToneIcon fontSize="large" className={classes.contact}/>,
    },
  ];

  return (
    <>
    <nav className="navbar">
      <div className="toolbar">
        <h1 className="tittle">Gustavo Bolivar</h1>
        <List className={classes.menu}>
          {links.map(({ id, text }, index) => (
            <Link
              key={index}
              to={id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              {/* offset nos da unos pixeles extra para que el titulo de cada link no quede debajo del navbar */}
              {text}
            </Link>
          ))}
        </List>
        <IconButton edge="end" className={classes.menubutton} onClick={()=>setOpen(!open)}>
          <MenuIcon fontSize="large" />
        </IconButton>
      </div>
    </nav>
      <Drawer anchor="right" open={open} onClose={()=> setOpen(false)}>
        <IconButton>
          <CancelIcon className={classes.cancelbutton} onClick={()=>setOpen(false)} fontSize="large"></CancelIcon>
        </IconButton>
        <Divider/>
        {links.map(({ id, text, icon }, index) => (
            <Link
              key={index}
              className={classes.sidebar}
              to={id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              >
              {/* offset nos da unos pixeles extra para que el titulo de cada link no quede debajo del navbar */}
              <ListItem component="h4">
                <span>
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                </span>{text}
              </ListItem>
            </Link>
          ))
        }
      </Drawer>
      </>
  );
};




const useStyles = makeStyles((theme) => ({
  menu: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menubutton: {
    "&.MuiIconButton-root": {
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "block",
        color: "white",
        position: "absolute",
        top:12,
        right: 10,
          "&:hover":{
            color: "rgb(0,222,0)",
          }
      }
    },
  },
  me: {
    color: "#1d8bf0",
  },
  light: {
    color: "#edff00",
  },
  key:{
    color:"#b3b3b1",
  },

  contact:{
    color:"#5fadf4",
  },
  sidebar:{
    width: "50vw",
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#333",
    margin: theme.spacing(10,0,0,4),
    [theme.breakpoints.down("xs")]:{
      width:"70vw",
    },

  },
  cancelbutton:{
    color: "rgba(255, 0, 0, 0.5)",
    "&:hover": {
      color: "rgba(255, 0, 0, 0.7)",
  },
},
}));

export default Navbar;
