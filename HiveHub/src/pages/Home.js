// Home Page
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
    // Home page implementation will go here
    return (
        <div>
            <h1>Welcome to HiveHub</h1>
            {/* Display projects */}
            <ProjectCard />
        </div>
    );
};

export default Home;
