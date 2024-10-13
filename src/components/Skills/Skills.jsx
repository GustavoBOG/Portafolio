import { useState } from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import htmlLogo from '../../assets/htmlLogo.png'
import cssLogo from '../../assets/cssLogo.png'
import jsLogo from '../../assets/jsLogo.png'
import reactLogo from '../../assets/reactLogo.png'
import npmLogo from '../../assets/npmLogo.png'
import mysqlLogo from '../../assets/mysqlLogo.png'
import nodejsLogo from '../../assets/nodejsLogo.png'
import expressLogo from '../../assets/expressLogo.png'
import vscodeLogo from '../../assets/vscodeLogo.png'
import postmanLogo from '../../assets/postmanLogo.png'
import gitbashLogo from '../../assets/gitbashLogo.png'
import githubLogo from '../../assets/githubLogo.png'
import slackLogo from '../../assets/slackLogo.png'
import "./Skills.css";

const Skills = ({ title, id }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  //-----OBJETO CON LAS TECNOLOGIAS 

  const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML5', stars: 5, logo: htmlLogo },
        { name: 'CSS', stars: 5, logo: cssLogo },
        { name: 'JavaScript', stars: 4, logo: jsLogo},
        { name: 'React', stars: 4, logo: reactLogo },
        { name: 'npm', stars: 5, logo: npmLogo }
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'MySQL', stars: 4, logo: mysqlLogo },
        { name: 'Node.js', stars: 3, logo: nodejsLogo },
        { name: 'Express', stars: 3, logo: expressLogo }
      ]
    },
    {
      category: 'Tools',
      technologies: [
        { name: 'VS Code', stars: 5, logo: vscodeLogo },
        { name: 'MySQL', stars: 5, logo: mysqlLogo },
        { name: 'Postman', stars: 4, logo: postmanLogo },
        { name: 'GitBash', stars: 5, logo: gitbashLogo },
        { name: 'GitHub', stars: 5, logo: githubLogo },
        { name: 'Slack', stars: 3, logo: slackLogo }
      ]
    }
  ];

  const renderStars = (count) => {
    return (
      <div className="stars-container">
        {[...Array(5)].map((_, index) => (
          index < count ? <StarIcon key={index} className="star-icon filled" /> : <StarBorderIcon key={index} className="star-icon" />
        ))}
      </div>
    );
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className='skills-page'>
    <div className="skills-container" id={id}>
      <Typography variant="h2"  className="skills-title">
      {title}
      </Typography>
      <div className="skills-grid">
        {skills.map((skillSet, index) => (
          <div key={index} className="skill-category">
            <Card 
              className={`skill-card category-card ${expandedCategory === skillSet.category ? 'expanded' : ''}`}
              onClick={() => toggleCategory(skillSet.category)}
            >
              <CardContent>
                <Typography variant="h5" component="h2" className="category-title">
                  {skillSet.category}
                </Typography>
                <div className="expand-icon">
                  {expandedCategory === skillSet.category ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </div>
              </CardContent>
            </Card>
            <div className={`technologies-grid ${expandedCategory === skillSet.category ? 'expanded' : ''}`}>
              {skillSet.technologies.map((tech, techIndex) => (
                <Card key={techIndex} className="skill-card tech-card">
                  <CardContent>
                    <div className='tech-info'>
                      <img src={tech.logo} alt={`${tech.name} logo`} className="tech-logo" />
                      <h3>{tech.name}</h3>
                    </div>
                    {renderStars(tech.stars)}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Skills;
