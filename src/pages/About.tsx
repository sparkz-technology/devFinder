import React from 'react';
import { FaReact,  FaGithub, FaLinkedin } from 'react-icons/fa';
import {TbBrandRedux} from 'react-icons/tb';
import{SiTailwindcss,SiReactquery} from 'react-icons/si'

const About: React.FC = () => {
  return (
    <div className="p-8 text-gray-200 md:text-gray-300"> {/* Set the text color to a lighter shade */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6">About</h1>

      <p className="mb-6">
        Welcome to our application! Our mission is to provide a seamless experience for users to explore GitHub profiles.
        This About page serves as a gateway to information, presenting details about our platform and its features.
        Feel free to explore and discover GitHub users effortlessly using our user-friendly interface.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Technology Stack</h2>
        <p>Our application is built using the following technologies:</p>
        <ul className="list-disc pl-8 flex flex-wrap items-center">
          <li className="flex items-center mb-2 mr-4"><FaReact className="mr-2" />ReactJS</li>
          <li className="flex items-center mb-2 mr-4"><TbBrandRedux className="mr-2" />Redux</li>
          <li className="flex items-center mb-2 mr-4"><SiReactquery className="mr-2" />Tanstack Query (for remote data fetching)</li>
          <li className="flex items-center mb-2 mr-4"><SiTailwindcss className="mr-2" />Tailwind CSS</li>
          {/* Add more technologies if applicable */}
        </ul>
      </div>
      
      {/* for Author */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Author</h2>
        <p>Hi! I'm Sutharsan G</p>

        <p className="mb-4">
          I'm a software developer, and I love to build things. I'm also a tech enthusiast and always eager to learn new things.
        </p>
        <p className="mb-4 flex items-center">
          You can reach me on
          <a href="https://github.com/sparkz-technology" target="_blank" rel="noopener noreferrer" className="text-gray-300 ml-2 mr-4">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sparkz-technology-4b9b3b1b2/" target="_blank" rel="noopener noreferrer" className="text-gray-300">
            <FaLinkedin />
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
