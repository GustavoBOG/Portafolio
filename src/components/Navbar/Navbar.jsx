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

const links = [
  {
    id: "about",
    text: "About Me",
    icon: <AccountCircleRoundedIcon />,
  },
  {
    id: "skills",
    text: "Skills",
    icon: <EmojiObjectsTwoToneIcon />,
  },
  {
    id: "proyects",
    text: "Proyects",
    icon: <ConstructionTwoToneIcon />,
  },
  {
    id: "contact",
    text: "Contact",
    icon: <ContactPhoneTwoToneIcon />,
  },
];

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
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
          <CancelIcon className={classes.cancelbutton} onClick={()=>setOpen(false)}></CancelIcon>
        </IconButton>
        <Divider/>
        {links.map(({ id, text, icon }, index) => (
            <Link
              key={index}
              to={id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              >
              {/* offset nos da unos pixeles extra para que el titulo de cada link no quede debajo del navbar */}
              <ListItem>
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
      },
    },
  },
}));

export default Navbar;
