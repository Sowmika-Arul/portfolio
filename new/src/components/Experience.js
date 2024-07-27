import React from 'react';

const styles = {
  container: {
    display: 'flex',
    //height: '100vh',
    width:'500vh',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
    backgroundColor: '#121212',
  },
  
  mainContent: {
    padding: '20px',
    width: '100%',
  },
  
  mainContentTitle: {
    color: ' #00A97F',
  },
  experienceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  },
  experienceItem: {
    backgroundColor: '#1e1e1e',
    padding: '20px',
    borderRadius: '5px',
  },
  experienceItemTitle: {
    margin: '0',
  },
  experienceItemSubtitle: {
    margin: '5px 0 10px 0',
    color: ' #00A97F',
  },
};

function Experience() {
  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <h2 style={styles.mainContentTitle}>My Experience</h2>
        <p>These are my intern and implant experience as a Software Engineer</p>
        <div style={styles.experienceGrid}>
        <div style={styles.experienceItem}>
            <h3 style={styles.experienceItemTitle}>Optimus Technocrates (INDIA) Pvt.Ltd.</h3>
            <h4 style={styles.experienceItemSubtitle}>Front-End Development Intern</h4>
            <p>Had an experience of making an attractive UI Design using React framework and Bootstrap framework.</p>
          </div>
          <div style={styles.experienceItem}>
            <h3 style={styles.experienceItemTitle}>Codsoft</h3>
            <h4 style={styles.experienceItemSubtitle}>Full Stack Development Intern</h4>
            <p>Had an exerience of doing Full Stack Projects using MERN Stack and also using Flask Application.</p>
          </div>
          <div style={styles.experienceItem}>
            <h3 style={styles.experienceItemTitle}>SystimaNx</h3>
            <h4 style={styles.experienceItemSubtitle}>Machine Learning Intern</h4>
            <p>Well versed in training models and to predict the solutions accurately.</p>
          </div>
          <div style={styles.experienceItem}>
            <h3 style={styles.experienceItemTitle}>upcoming</h3>
            <h4 style={styles.experienceItemSubtitle}>upcoming</h4>
            <p>upcoming</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
