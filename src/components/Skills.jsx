import React from 'react';
import Container from '../modules/Container.jsx';
import Title_Desc from '../modules/Title_Desc.jsx';
import RectProgressBar from '../modules/RectProgressBar.jsx';

const Skills = () => {

  return (
    <section id='main__skills'>
      <Container className="skills">
          <div className='technical-skills'>
            <div>
              <Title_Desc title="Technical Skills" />
            </div>
            <div>
              <RectProgressBar 
                label="HTML" 
                percent="90"
                className="html"
              />
              <RectProgressBar 
                label="CSS" 
                percent="90"
                className="css"
              />
              <RectProgressBar 
                label="JavaScript" 
                percent="70"
                className="javascript"
              />
              <RectProgressBar 
                label="React" 
                percent="50"
                className="react"
              />
            </div>
          </div>
          
          <div className='professional-skills'>
            <div>
              <Title_Desc title="Professional Skills" />
            </div>
            <div>
              <RectProgressBar 
                label="Communication" 
                percent="70"
                className="communication"
              />
              <RectProgressBar 
                label="Team work" 
                percent="60"
                className="team-work"
              />
              <RectProgressBar 
                label="Time management" 
                percent="90"
                className="t-management"
              />
              <RectProgressBar 
                label="Detail-Oriented" 
                percent="70"
                className="d-oriented"
              />
            </div>
          </div>
          
      </Container>
    </section>
  )
}

export default Skills;