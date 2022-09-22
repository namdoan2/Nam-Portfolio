import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import ProjectCard from './components/ProjectCard';
import studioGhibli from './videos/studioGhibli.gif';
import kanyePage from './videos/kanyePage.gif';
import blogPage from './videos/blogPage.gif';
import vacaCheck from './videos/vacaCheck.gif';
import codingLanguagesList from './videos/codingLanguagesList.gif';
import workoutSplitCreator from './videos/workoutSplitCreator.gif';
import resume from './resume.pdf';

function App() {
  return (
    <main className="portfolio">
      <NavBar />
      <section id='home'>
        <div className='title'>
          <h1>Nam Doan</h1>
          <p>Front-End Web Developer</p>
          <div className='resume'>
            <a href={resume} target='blank'>Download Resume</a>
          </div>
        </div>
        <div className='boxes'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section id='about'>
        <h1>About Me</h1>
        <p>
        Hi, my name is Nam Doan. I'm a front-end web developer focused on building creative and amazing web applications.
        Reason being is that I am passionate about continually learning and growing, not only in my career but also in all aspects of life.
        Web development aligns perfectly with my beliefs, which is why I have grown so attracted to it.
        My main objective in this field is to be always learning new things and have the ability to turn my ideas into a reality.  
        </p>
      </section>
      <section id='skills'>
        <h1>Skills</h1>
          <div className='skill-icons'>
            <div className='html'>
              <h1><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='html icon'/></h1>
              <h1 style={{color: '#e34c26'}}>Html</h1>
            </div>
            <div className='css'>
              <h1><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='css icon'/></h1>
              <h1 style={{color: '#2965f1'}}>CSS</h1>
            </div>
            <div className='sass'>
              <h1><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt='sass icon'/></h1>
              <h1 style={{color: '#cc6699'}}>Sass</h1>
            </div>
            <div className='javascript'>
              <h1><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='javascript icon'/></h1>
              <h1 style={{color: '#f0db4f'}}>Javascript</h1>
            </div>
            <div className='react'>
              <h1><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react icon'/></h1>
              <h1 style={{color: '#61DBFB'}}>React.js</h1>
            </div>
            <div className='redux'>
              <h1><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt='redux icon'/></h1>
              <h1 style={{color: '#764abc'}}>Redux</h1>
            </div>
            <div className='node'>
              <h1><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt='node.js icon'/></h1>
              <h1 style={{color: 'rgb(156, 204, 101)'}}>Node.js</h1>
            </div>
            <div className='git'>
              <h1><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt='git icon'/></h1>
              <h1 style={{color: '#F1502F'}}>Git</h1>
            </div>
          </div>
      </section>
      <section id='projects'>
        <h1>Projects</h1>
        <div className='project-grid'>
          <div>
            <ProjectCard
            projectImage={kanyePage}
            title='Kanye West Fanpage'
            description='This was my first ever project. It is a Kanye West
            Fanpage that displays a short biography,
            his studio albums, and little about what
            he has done in the fashion industry.'
            tools='React, React Router, API'
            mainFocus='Pulling data from API,
            Getting better with React Router,
            Making Reusable Components'
            code='https://github.com/namdoan2/Kanye-Fanpage'
            website='https://kanyewestfan.netlify.app/'
            />
          </div>
          <div>
            <ProjectCard 
            projectImage={studioGhibli}
            title='Studio Ghibli Films'
            description='A website built for Studio
            Ghibli fans. It displays a summary of the
            film studio, the creators, and all the movies
            and characters ever created by the studio.'
            tools='React, React Router, API'
            mainFocus='Pulling data from API, 
            Displaying API data with React component,
            Getting better with React Router
            '
            code='https://github.com/namdoan2/Studio-Ghibli-Films'
            website='https://studioghiblifilmsandcharacters.netlify.app/'
            />
          </div>
          <div>
            <ProjectCard 
            projectImage={blogPage}
            title=' Blog Landing Page'
            description='A blog page that displays a large main article,
            4 smaller articles underneath, and a sidebar
            that can be used to display ads. Articles are displayed in
            a grid format.'
            tools='React'
            mainFocus=' Implementing CSS Grid, Responsive Design,
             Sliding Hamburger Menu, Creating a Contact Form'
            code='https://github.com/namdoan2/Blog-Landing-Page'
            website='https://essentialblog.netlify.app/'
            />
          </div>
          <div>
            <ProjectCard 
            projectImage={vacaCheck}
            title='Vacation Checklist'
            description='A checklist designed to assist you
            when packing for a vacation. It 
            helps you to never lose anything ever again while on vacation.
            You also can check the weather of your destination.'
            tools='React, API'
            mainFocus='Creating Add, Edit, and Delete
            Functions, Pulling data from API, 
            Displaying the time and date'
            code='https://github.com/namdoan2/Vacation-Checklist'
            website='https://vacationchecklist.netlify.app/'
            />
          </div>
          <div>
            <ProjectCard 
            projectImage={codingLanguagesList}
            title='Coding Languages List'
            description='An app that allows you to rank
            coding languages from best to worst. This was
            created to help people, who want to learn how to
            code, choose good, beginner-level languages.'
            tools='React, React DND'
            mainFocus='Learning a new React Library to
            create the drag-and-drop functionality'
            code='https://github.com/namdoan2/Coding-Languages-List'
            website='https://codinglanguageslist.netlify.app/'
            />
            </div>
            <div>
            <ProjectCard 
            projectImage={workoutSplitCreator}
            title='Workout Split Creator'
            description='An app that lets people create
            their own workout program. You can add what days
            you want to workout, the workouts themself, 
            and any notes you want to take
            for an optimal workout.'
            tools='React'
            mainFocus='Creating the Add and Delete Functions,
            Adding Dropdown Menus, Adding a State within a State'
            code='https://github.com/namdoan2/Workout-Split-Creator'
            website='https://workoutsplitcreator.netlify.app/'
            />
          </div>
        </div>
      </section>
      <section id='contact'>
        <h1>Contact Me</h1>
        <p>Email: namdoan2@gmail.com</p>
        <p>Second Email: namdoan510@yahoo.com</p>
        <div className='social-icons'>
        <a href='https://github.com/namdoan2' target='blank'><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
        <a href='https://www.linkedin.com/in/nam-doan-53107823a/' target='blank'><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
        </div>
        <a className='website-code' href='https://github.com/namdoan2/Nam-Portfolio' target='blank'>Website Code</a>
      </section>
    </main>
  );
}

export default App;
