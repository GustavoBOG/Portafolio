// import { Typography } from "@mui/material";
// import "./Skills.css";



// const Skills = ({ title, id }) => {
//   const technologies = [
//     {
//       category: 'Frontend',
//       technologies: ['HTML5', 'CSS', 'JavaScript', 'React', 'npm']
//     },
//     {
//       category: 'Backend',
//       technologies: ['MySQL', 'Node.js', 'Express']
//     },
//     {
//       category: 'Tools',
//       technologies: ['VS Code', 'MySQL', 'Postman', 'GitBash', 'GitHub', 'Slack']
//     }
//   ];

//   return (
//     <div className="Ssection">
//       <div className="Ssectioncontent" id={id}>
//         <Typography variant="h3">{title}</Typography>
//       </div>
//     </div>
//   );
// };


// export default Skills;


import { useState } from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import "./Skills.css";

const Skills = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML5', stars: 5 },
        { name: 'CSS', stars: 5 },
        { name: 'JavaScript', stars: 4 },
        { name: 'React', stars: 4 },
        { name: 'npm', stars: 5 }
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'MySQL', stars: 4 },
        { name: 'Node.js', stars: 3 },
        { name: 'Express', stars: 3 }
      ]
    },
    {
      category: 'Tools',
      technologies: [
        { name: 'VS Code', stars: 5 },
        { name: 'MySQL', stars: 5 },
        { name: 'Postman', stars: 4 },
        { name: 'GitBash', stars: 5 },
        { name: 'GitHub', stars: 5 },
        { name: 'Slack', stars: 3 }
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
    <div className="skills-container">
      <Typography variant="h2" component="h1" className="skills-title">
        Skills
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
                    <Typography variant="h6" component="h3">
                      {tech.name}
                    </Typography>
                    {renderStars(tech.stars)}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
