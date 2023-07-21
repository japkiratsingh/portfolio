import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello, and welcome to my portfolio! I am a <strong>frontend developer </strong>
           with expertise in React JS, Tailwind CSS, and Material UI.
          <br />Allow me to introduce myself and share a bit about my journey and passion for web development.Throughout my career, I have gained extensive experience and a deep understanding of building dynamic and user-friendly web applications using the power of React JS. React JS is my go-to JavaScript library for developing modern, scalable, and efficient web applications.

          In addition to React, I am well-versed in utilizing two popular UI libraries: Tailwind CSS and Material UI. Tailwind CSS provides a utility-first approach to styling, enabling me to rapidly build custom designs with its extensive set of pre-defined classes. It offers flexibility and empowers me to create visually stunning interfaces while maintaining a responsive layout.

        </p>

        <br />

        <p className="text-xl">
          As a problem solver in data structures and algorithms, I am driven by a deep passion for tackling complex challenges and finding efficient solutions. Here is an overview of my approach and skills as a problem solver in this domain:
<br />
          In summary, my strong foundation in data structures and algorithms, analytical thinking, ability to handle problems of varying complexity, commitment to continuous learning, emphasis on efficient implementation, collaboration skills, and practical application experience make me an effective problem solver in this domain. I am confident in my ability to contribute to solving challenging problems and making a positive impact on any team or project.


        </p>
      </div>
    </div>
  );
};

export default About;