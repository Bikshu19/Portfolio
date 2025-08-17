import React from 'react';
import Typewriter from 'typewriter-effect';

const MyComponent = () => {
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '30px',
      position: 'relative',
      bottom: { xs: 10, sm: 10, md: 10 },
     }}>
      {/* Static heading */}
      <h1 style={{ fontSize: '4rem', marginBottom: '20px',color:'white',fontWeight:'bold' }}>'I'm Bikshu</h1>

      {/* Typewriter effect */}
      <Typewriter
        options={{
          strings: [
            'A Web Developer',
            'A Problem Solver',
            'A Debugger',
            'Creative Thinker',
            'Continuous Learner',
            'Fast Adopter'
          ],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50
        }}
      />
    </div>
  );
};

export default MyComponent;
