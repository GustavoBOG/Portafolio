
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import ConstructionTwoToneIcon from "@mui/icons-material/ConstructionTwoTone";
import ContactPhoneTwoToneIcon from "@mui/icons-material/ContactPhoneTwoTone";
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon } from "@mui/material";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-scroll";



const Navbar = () => {
  const [open, setOpen] = useState(false)

  const links = [
    {
      id: "about",
      text: "About Me",
      icon: <AccountCircleRoundedIcon fontSize="large" className="me"/>,
    },
    {
      id: "skills",
      text: "Skills",
      icon: <EmojiObjectsTwoToneIcon fontSize="large" className="light"/>,
    },
    {
      id: "proyects",
      text: "Proyects",
      icon: <ConstructionTwoToneIcon fontSize="large" className="key"/>,
    },
    {
      id: "contact",
      text: "Contact",
      icon: <ContactPhoneTwoToneIcon fontSize="large" className="contact"/>,
    },
  ];

  return (
    <>
    <nav className="navbar">
      <div className="toolbar">
        <h1 className="tittle">Gustavo Bolivar</h1>
        <List className="menu">
          {links.map(({ id, text }, index) => (
            <Link
              key={index}
              to={id}
              spy={true}
              smooth={true}
              duration={900}
              offset={-90}
            >
              {/* offset nos da unos pixeles extra para que el titulo de cada link no quede debajo del navbar */}
              {text}
            </Link>
          ))}
        </List>
        <IconButton edge="end" className="menubutton" onClick={()=>setOpen(!open)}>
          <MenuIcon fontSize="large" />
        </IconButton>
      </div>
    </nav>
      <Drawer anchor="right" open={open} onClose={()=> setOpen(false)}>
        <IconButton  onClick={()=>setOpen(false)} >
          <CancelIcon className="cancelbutton" fontSize="large"></CancelIcon>
        </IconButton>
        <Divider/>
        {links.map(({ id, text, icon }, index) => (
            <Link
              key={index}
              className="sidebar"
              to={id}              spy={true}
              smooth={true}
              duration={900}
              offset={-90}
              >
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


export default Navbar;
