// import { useState } from 'react';
// import react from './assets/r3.png'
// import Tyoescript from './assets/typ.png'
// import Tailwind from './assets/tailwind.png'
// import node from './assets/node.png'
// import git from './assets/git.png'
// import python from './assets/python.png'
// import superbase from './assets/superbase.png'
// import js from './assets/js.png'
// import api from './assets/rest.png'

// function Skills() {
//   const skills = [
//     { name: 'React', width: 'w-[30%]', image: react },
//     { name: 'TypeScript', width: 'w-[30%]', image: Tyoescript },
//     { name: 'Tailwind CSS', width: 'w-[45%]', image: Tailwind },
//     { name: 'Node.js', width: 'w-[30%]', image: node },
//     { name: 'Git', width: 'w-[28%]', image: git },
//     { name: 'Python', width: 'w-[28%]', image: python },
//     { name: 'Superbase', width: 'w-[28%]', image: superbase },
//     { name: 'javascript', width: 'w-[40%]', image: js },
//     { name: 'REAS API', width: 'w-[28%]', image: api },
//     { name: 'Adobe XD', width: 'w-[30%]', image: '/images/skills/adobe-xd.png' },
//     { name: 'Sketch', width: 'w-[28%]', image: '/images/skills/sketch.png' },
//   ];

//   const [selectedSkill, setSelectedSkill] = useState(skills[0]);

//   return (
//     <div className="min-h-screen text-white flex items-center justify-center p-10 border-t border-white/20">
//       <div className="w-full max-w-5xl grid grid-cols-2 gap-5 items-center">
//         {/* Left column: skill pills */}
//         <div className="flex flex-wrap gap-3">
//           {skills.map((skill) => (
//             <button
//               key={skill.name}
//               onClick={() => setSelectedSkill(skill)}
//               className={`${skill.width} text-center border rounded-md px-3 py-2 text-xs transition-colors ${
//                 selectedSkill.name === skill.name
//                   ? 'border-white bg-white text-black'
//                   : 'border-white/50 hover:border-white'
//               }`}
//             >
//               {skill.name}
//             </button>
//           ))}
//         </div>

//         {/* Right column: heading + image tied to the selected skill */}
//         {/* `relative` here creates the positioning context the absolute image anchors to */}
//         <div className="relative flex flex-col items-start min-h-[260px] mb-50">
//           <h1
//             className="leading-none relative z-0 "
//             style={{
//               fontFamily: '"Archivo Black", sans-serif',
//               fontOpticalSizing: 'auto',
//               fontWeight: 900,
//               fontStyle: 'normal',
//               WebkitTextStroke: '0.5px white',
//               color: 'transparent',
//               fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
//             }}
//           >
//             SKILLS
//             <br />
//             AUQUIRED
//           </h1>

//           <img
//             key={selectedSkill.name}
//             src={selectedSkill.image}
//             alt={selectedSkill.name}
//             className="absolute top-30 left-8 z-10 w-80 h-80 object-contain drop-shadow-[0_0_20px_rgba(80,140,255,0.6)] animate-slide-fade-in-right"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Skills;



import { useState } from 'react';
import react from './assets/r3.png'
import Tyoescript from './assets/typ.png'
import Tailwind from './assets/tailwind.png'
import node from './assets/node.png'
import git from './assets/git.png'
import python from './assets/python.png'
import superbase from './assets/superbase.png'
import js from './assets/js.png'
import api from './assets/rest.png'
import genai from './assets/genai.png'
import java from './assets/java.png'
import html from './assets/html.png'
import css from './assets/css.png'

function Skills() {
  const skills = [
    { name: 'React', image: react, width: 'w-[30%]' },
    { name: 'TypeScript', image: Tyoescript, width: 'w-[30%]' },
    { name: 'Tailwind CSS', image: Tailwind, width: 'w-[45%]' },
    { name: 'Node.js', image: node, width: 'w-[30%]' },
    { name: 'Java', image: java, width: 'w-[28%]' },
    { name: 'Html', image: html, width: 'w-[28%]' },
    { name: 'Css', image: css, width: 'w-[28%]' },
    { name: 'Git', image: git, width: 'w-[28%]' },
    { name: 'Python', image: python, width: 'w-[28%]' },
    { name: 'Superbase', image: superbase, width: 'w-[28%]' },
    { name: 'javascript', image: js, width: 'w-[40%]' },
    { name: 'REAS API', image: api, width: 'w-[28%]' },
    { name: 'Gen AI', image: genai, width: 'w-[28%]' },
  ];

  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-6 sm:p-10 border-t border-white/20">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 items-center">
        {/* Left column: skill pills */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {skills.map((skill) => (
            <button
              key={skill.name}
              onClick={() => setSelectedSkill(skill)}
              className={`${skill.width} flex-grow-0 basis-[calc(50%-0.375rem)] sm:basis-[calc(33%-0.5rem)] md:basis-auto md:min-w-[6.5rem] text-center border rounded-md px-3 py-2 text-xs transition-colors ${
                selectedSkill.name === skill.name
                  ? 'border-white bg-white text-black'
                  : 'border-white/50 hover:border-white'
              }`}
            >
              {skill.name}
            </button>
          ))}
        </div>

        {/* Right column: heading + image tied to the selected skill */}
        {/* `relative` here creates the positioning context the absolute image anchors to */}
        <div className="relative flex flex-col items-center md:items-start min-h-[220px] sm:min-h-[280px] md:min-h-[320px] mt-4 md:mt-0 mb-12 md:mb-24">
          <h1
            className="leading-none relative z-0 text-center md:text-left"
            style={{
              fontFamily: '"Archivo Black", sans-serif',
              fontOpticalSizing: 'auto',
              fontWeight: 900,
              fontStyle: 'normal',
              WebkitTextStroke: '0.5px white',
              color: 'transparent',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            }}
          >
            SKILLS
            <br />
            AUQUIRED
          </h1>

          <img
            key={selectedSkill.name}
            src={selectedSkill.image}
            alt={selectedSkill.name}
            className="absolute top-20 sm:top-24 md:top-30 left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0 z-10 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 object-contain drop-shadow-[0_0_20px_rgba(80,140,255,0.6)] animate-slide-fade-in-right"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;