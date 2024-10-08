import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Proyects from './components/Proyects/Proyects';
import { makeStyles, ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material';

const theme = createTheme();

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}> 
    <div className={classes.root}>
      <Navbar />
      <About title="About Me" id="about"/>
      <Skills title="My Skills" id="skills"/>
      <Proyects title="Proyects" id="proyects"/>
      <Contact title="Get in touch " id="contact"/>
    </div>
    </ThemeProvider>
  );
}
const useStyles = makeStyles(() => ({
  root:{

  }
}))

export default App;

