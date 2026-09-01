
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function Project() {
  const projects = [
    {
      name: 'Q-less',
      description:
        "A live virtual waitlist app. Business owners sign up, get a shareable link for their queue, and manage walk-ins from a real-time dashboard. Customers join from their phone and watch their position update live no refreshing, no app download, no standing in line.",
      story: [
        "",
      ],
      Skills: "React (Vite), React Router, Node.js, Express, Supabase (Postgres), Resend, QR Server API, SweetAlert2",
      image: 'https://github.com/user-attachments/assets/555d4ccb-ec31-46cc-abf2-a303a8d7a182',
      github: 'https://github.com/Codedecblackmoon/queueless',
      live: 'https://queueless-hazel.vercel.app/login',
    },
    {
      name: 'ACB online store',
      description:
        'All Christian" embodies unity, faith, and compassion. This brand represents a community that shares Christian values, promoting love, kindness, and acceptance. It symbolizes a collective identity for Christians worldwide, fostering a sense of belonging and spiritual connection.',
      story: [
        '',
      ],
      Skills: "HTML, CSS, JavaScript, Paysharp AIP",
      image: 'https://github.com/user-attachments/assets/a2e80e54-2894-42e1-956e-0201d2169b52',
      github: 'https://github.com/Codedecblackmoon/All_Christian_Brand',
      live: 'https://codedecblackmoon.github.io/All_Christian_Brand/',
    },
    {
      name: 'Reubray Insurance & Financial Services Website',
      description:
        'Designed and developed a modern, responsive website for Reubray, a South African financial and insurance services provider, focused on building trust, educating customers, and generating qualified enquiries. The site features tailored journeys for individuals, SMEs, and corporate clients, with quote requests, advice forms, claims information, compliance resources, FAQs, and financial education. Built with React, TypeScript, and Tailwind CSS, with Base44 AI used as a development and design support tool.',
      story: [
        '',
      ],
      Skills: "React, Tailwind CSS, JavaScript, Bass 44",
      image: 'https://github.com/user-attachments/assets/07af1870-8a4d-4284-8f4a-2f1a08f2cf25',
      github: '',
      live: 'https://reubray-curated-finance.base44.app/',
    },
  ];

  const [index, setIndex] = useState(0);

  const goPrev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  const goNext = () => setIndex((prev) => (prev + 1) % projects.length);

  const project = projects[index];

  return (
    <>
      <section id="project">
        <div className="min-h-screen text-white flex items-center justify-center p-6 sm:p-10 border-t border-white/20">
          <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-6">
            {/* Left arrow - desktop only, flanks content */}
            <button
              onClick={goPrev}
              aria-label="Previous project"
              className="hidden md:flex shrink-0 w-10 h-10 rounded-full border-1 border-white items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start flex-1 w-full">
              {/* Left column: text */}
              <div>
                <h1
                  className="text-center md:text-left leading-none mb-6 md:mb-8"
                  style={{
                    fontFamily: '"Archivo Black", sans-serif',
                    fontOpticalSizing: 'auto',
                    fontWeight: 200,
                    fontStyle: 'normal',
                    WebkitTextStroke: '0.3px white',
                    color: 'transparent',
                    fontSize: 'clamp(2.25rem, 5.5vw, 6.5rem)',
                  }}
                >
                  PROJECTS
                </h1>

                <h2 className="text-2xl text-center md:text-left font-black tracking-tight mb-4">
                  {project.name}
                </h2>

                <p className="text-sm text-center md:text-left leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.story.map((paragraph, i) => (
                  <p key={i} className="text-sm text-center md:text-left leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}

                <p className="pt-4 text-sm text-center md:text-left leading-relaxed mb-4">
                  {project.Skills}
                </p>
              </div>

              {/* Right column: card */}
              <div className="border-1 border-white rounded-3xl p-4 sm:p-5 flex flex-col gap-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-2xl aspect-[4/3] w-full object-cover bg-gray-200"
                />

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-1 border-white rounded-full py-2 text-sm font-medium text-black bg-white text-center hover:bg-black hover:text-white transition-colors"
                  >
                    Github
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-1 border-white rounded-full py-2 text-sm font-medium text-white text-center hover:bg-white hover:text-black transition-colors"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={goNext}
              aria-label="Next project"
              className="hidden md:flex shrink-0 w-10 h-10 rounded-full border-1 border-white items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <ArrowRight size={18} />
            </button>
            <div className="flex md:hidden items-center justify-center gap-6 mt-2">
              <button
                onClick={goPrev}
                aria-label="Previous project"
                className="shrink-0 w-10 h-10 rounded-full border-1 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={goNext}
                aria-label="Next project"
                className="shrink-0 w-10 h-10 rounded-full border-1 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
    
  );
}

export default Project;