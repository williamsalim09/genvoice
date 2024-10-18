import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings, FiLogOut } from 'react-icons/fi'; // react icons
import Navbar from '../components/Navbar'; // import the Navbar component

const Homescreen = ({ username, onLogout }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top Navigation Bar */}
      <Navbar onLogout={onLogout}/>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto p-6"> 
        <h2 className="text-2xl text-black font-bold mb-4">Welcome, {username}!</h2>
        <div className="text-black space-y-4 text-justify"> {/* Added text-justify */}
          <p>
            My full name is William Liem. I am an Indonesian born in 2003 in an island called Sulawesi. I studied Computer Science in SIM under the University of London program. It was a rigorous 3-year program where I learned many things from the basics of HTML and Javascript to Python and Machine Learning.
          </p>
          <p>
            Some notable projects I have built are a ReactJS and React Native application with the Spotify API and a CAD (Computer Aided Detection/Diagnosis) system. The React apps I built improved Spotify users’ music listening experience by showing them their music listening stats such as top songs and top artists and giving them new recommendations based on their stats. For the web app version, I applied tools such as Vite and TailwindCSS. Meanwhile, I utilized Expo, react-native-deck-swiper, and many more. In the CAD system I created, I processed over 3,000 mammography images and trained 2 AI models to detect and diagnose the images as either benign or malignant, averaging 70-80% accuracy. By the end of my studies, I have learned to not just work hard but also work smart. I learned to take advantage of the resources in front of me, and use them for my needs.
          </p>
          <p>
            Aside from my studies, I enjoy spending my time joining events and organizations which help build my soft skills. I joined SIM Student Ambassadors, where I led prospective students and parents on campus tours, while answering their queries. I joined other CCAs as well which I have detailed in my resume. Recently, I also volunteered in Plastify, where I learned the difficult process of recycling plastic and producing new items from them. These experiences have allowed me to grow mentally and to be adaptable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homescreen;
