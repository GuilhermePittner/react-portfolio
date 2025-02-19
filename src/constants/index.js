import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a curious developer, always striving to improve myself and my applications.  
For the past three and a half years, I've been honing my skills in both front-end and back-end technologies, including React, TypeScript, Python, and Flask.  
My goal is to constantly push my limits—learning new things, applying them to my code, and delivering exceptional user experiences while innovating solutions.  
I have dual citizenship (Austrian and Brazilian) and speak English and Portuguese. Currently, I'm practicing Spanish.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "August/24 - November/24",
    role: "English Student",
    company: "New College Group - Liverpool UK",
    description: `Completed a 12-week English course in Liverpool, focusing on language development and teamwork. Achieved a C1 Advanced level through immersive learning, engaging daily with friends, teachers, locals, and tourists.`,
    technologies: ["English", "Teamwork"],
  },
  {
    year: "2022 - Present",
    role: "Jr. Developer",
    company: "EtherCity",
    description: `Developed internal company tools using Flask, ensuring they remained up to date over time, along with some internal APIs and integration projects. Focused on automating processes to save employees time and improve efficiency.`,
    technologies: ["HTML", "CSS", "JQuery", "Flask", "Python", "PostgreSQL"],
  },
  {
    year: "2021 - 2022",
    role: "Intern",
    company: "Ethercity",
    description: `Worked as an intern, getting to know some of the company's products and figuring out ways to automate them, such as report generation, form filling, and availability tracking.`,
    technologies: ["HTML", "CSS", "JQuery", "Python", "GoogleScript", "Playwright"],
  },
];

export const PROJECTS = [
  {
    title: "Responsive Landing Page",
    image: project1,
    description:
      'A fully responsive landing page built with React and styled using Tailwind CSS. Developed as a practice project to refine my frontend development skills.',
    technologies: ["React", "Tailwind"],
    link: 'https://react-landing-pearl.vercel.app/',
  },
  {
    title: "Tic-Tac-Toe",
    image: project2,
    description:
      "A Tic-Tac-Toe game built with React and TypeScript, styled with Tailwind. Scores are saved locally, but players can reset them at any time.",
    technologies: ["React", "Tailwind", "Typescript"],
    link: 'https://tic-tac-toe-react-hazel-seven.vercel.app/',
  },
  {
    title: "Team Display",
    image: project3,
    description:
      "A project that allows users to manage workers across different teams. My first React project, developed alongside Alura.",
    technologies: ["React"],
    link: 'https://typescript-team-display.vercel.app/',
  }
];

export const CONTACT = {
  phoneNo: "",
  email: "guilhermepittner123@gmail.com",
};
