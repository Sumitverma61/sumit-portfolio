
import React from "react";
import profileImage from "./assets/sumitphoto.jpeg";

export default function Portfolio() {
  return (
    <main className="font-sans bg-gradient-to-br from-yellow-100 via-purple-100 to-pink-100 text-gray-800">
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-indigo-400 via-blue-300 to-purple-300 p-8 shadow-lg rounded-b-3xl">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-md mb-4">Sumit Verma</h1>
        <p className="text-2xl text-white">Aspiring SDE | Web & AI Enthusiast</p>
        <p className="mt-3 text-white">Lucknow, India | sumitver61@gmail.com | +91-6387915419</p>
        <div className="mt-4 flex gap-4">
          <a href="https://github.com/sumitver61" target="_blank" className="text-white underline hover:text-yellow-200">GitHub</a>
          <a href="https://linkedin.com/in/sumitver61" target="_blank" className="text-white underline hover:text-yellow-200">LinkedIn</a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-8 bg-white bg-opacity-90 rounded-xl shadow-md mt-10 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/3 flex justify-center">
          <img src={profileImage} alt="Sumit Verma" className="rounded-2xl w-60 h-60 object-cover shadow-lg" />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">About Me</h2>
          <p className="text-lg leading-7">
            I'm a Computer Science Engineering student at BBDNIIT, passionate about building innovative web
            applications and AI tools. Skilled in Python, C++, JavaScript, HTML, CSS, and frameworks like React and
            Node.js. I’ve led and volunteered in college events like Utkarsh and Khelo India, bringing strong teamwork,
            leadership, and communication skills to every project.
          </p>
        </div>
      </section>
    </main>
  );
}
