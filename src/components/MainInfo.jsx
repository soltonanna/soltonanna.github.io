import React from 'react';
import Container from '../modules/Container';
import Title_Desc from '../modules/Title_Desc';

const MainInfo = () => {
  return (
    <section id="main__main-info">
      <Container className="main-info">
        <Title_Desc 
            title="Sultanova Anahit"
            desc="Web developer"
        />
      </Container>
    </section>
  )
}

export default MainInfo;