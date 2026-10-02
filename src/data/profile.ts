const asset = (file: string) => `${import.meta.env.BASE_URL}asset/images/${file}`;

export const profile = {
  cvName: 'Mariam Eid',
  title: 'Software Engineering Student',
  location: 'Abu Dhabi, UAE',
  email: 'meid@student.42abudhabi.ae',
  phone: '+971 52 145 0585',
};

export const education = [
  {
    institution: '42 Abu Dhabi',
    degree: 'Software Engineering Program',
    period: '2023 - Present',
    description:
      'Intensive project-based curriculum focused on programming, algorithms, and software development. Completed projects including minishell, cub3d, ft_irc, Inception, and ft_transcendence (KiddoPath, in progress).',
    logo: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    cv: {
      title: '42 Abu Dhabi',
      detail: 'Software Engineering Program',
      period: '2023 - Present',
    },
  },
  {
    institution: 'high school graduate',
    degree: 'high school diploma',
    period: '2022 - 2023',
    description:
      'arned a high school diploma with a strong academic foundation, achieving a 98.6% overall score.',
    logo: asset('highscore.png'),
    cv: {
      title: 'High School Graduate',
      detail: 'High school diploma',
      period: '2022 - 2023',
    },
  },
];

export const experiences = [
  {
    position: 'Intern',
    company: 'Exelixi AI',
    location: 'Dubai, UAE',
    period: '2 months',
    description:
      'Developed a software system that communicates with hardware components. Independently handled a full project from development to delivery under real-world constraints.',
    achievements: [
      'Developed software system communicating with hardware components',
      'Independently handled a full project from development to delivery',
      'Delivered the project on time under real-world constraints',
    ],
    logo: asset('exelixi_logo.jpeg'),
    website: null,
    intro: null,
    cv: {
      role: 'Intern',
      org: 'Exelixi AI, Dubai',
      period: '2 months',
      bullets: [
        'Developed a software system communicating with hardware components',
        'Independently handled a full project from development to delivery',
        'Delivered the project on time under real-world constraints',
      ],
    },
  },
  {
    position: 'Club Organizer',
    company: 'AI & ML Club, 42 Abu Dhabi',
    location: 'Abu Dhabi, UAE',
    period: '2026 - Present',
    description:
      'Help keep the AI & ML Club running smoothly at 42 Abu Dhabi. I support event design and setup, work to keep members active and engaged, and have started contributing to the club website.',
    achievements: [
      'Helped design and set up club events on AI and ML topics',
      'Worked to keep members active and involved in peer learning',
      'Started contributing to the club website',
    ],
    logo: asset('AI&ML.png'),
    website: 'https://ai-ml-club-event-registration.vercel.app/',
    intro: 'https://drive.google.com/file/d/1n0je9k880Kidi6WlDTXzDWU2MdVDY1cW/view?usp=sharing',
    cv: {
      role: 'Club Organizer',
      org: 'AI & ML Club, 42 Abu Dhabi',
      period: '2026 - Present',
      bullets: [
        'Helped design and set up club events on AI and ML topics',
        'Worked to keep members active and involved in peer learning',
        'Started contributing to the club website',
      ],
    },
  },
  {
    position: 'Co-founder & CEO',
    company: 'RMC Labs',
    location: 'Abu Dhabi, UAE',
    period: 'MAY 2025 - Present',
    description:
      'Co-founded RMC Labs, a robotics startup building tailor-made robots for campuses and events. I lead the product roadmap, manage cross-functional teams, and oversee the development of our first robot, Roamio, an autonomous campus guide.',
    achievements: [
      'createing the first mvp of the robot',
      'be part of the five startups that represent 42 north star Dubai 2025',
      'Participated in the Dubai Startup Competition 2025 and won from the best innovative startups',
    ],
    logo: asset('RMC_logo.png'),
    website: null,
    intro: null,
    cv: {
      role: 'Co-founder & CEO',
      org: 'RMC Labs',
      period: 'May 2025 - Present',
      bullets: [
        'Co-founded a robotics startup building tailor-made robots for campuses and events',
        'Lead product roadmap and oversee Roamio, an autonomous campus guide robot',
        'Built the first MVP and represented 42 at North Star Dubai 2025',
        'Participated in the Dubai Startup Competition 2025',
      ],
    },
  },
  {
    position: 'Intern',
    company: 'RWT startup',
    location: 'Abu Dhabi, UAE',
    period: 'MAY 2025 - August 2025',
    description: 'worked with the startup RWT to developing some feachers for there existing website',
    achievements: [
      'create my first website from scratch, that can summrize text or file',
      'worked in the tester of there website',
    ],
    logo: asset('RWT_logo02.png'),
    website: null,
    intro: null,
    cv: {
      role: 'Intern',
      org: 'RWT startup',
      period: 'May 2025 - August 2025',
      bullets: [
        'Developed features for the existing company website',
        'Built a summarizer website from scratch for text and files',
        'Helped with website testing',
      ],
    },
  },
  {
    position: 'Discovery Piscine',
    company: '42 Abu Dhabi',
    location: 'Abu Dhabi, UAE',
    period: 'Jun 2024 - Aug 2024',
    description:
      'Working with 42 in the Two Discovery program enhanced my Python skills significantly. Through this experience, I not only deepened my understanding of the language but also learned how to effectively teach Python to younger learners. This opportunity helped me develop strong communication and mentoring skills while reinforcing my technical knowledge, allowing me to share the joy of coding with others.',
    achievements: [
      'Enhanced Python Skills through the Two Discovery Program',
      'Developed Teaching and Mentoring Skills',
      'Reinforced Technical Knowledge while Sharing the Joy of Coding',
    ],
    logo: asset('Discovery_Piscine.jpeg'),
    website: null,
    intro: null,
    cv: {
      role: 'Discovery Piscine',
      org: '42 Abu Dhabi',
      period: 'Jun 2024 - Aug 2024',
      bullets: [
        'Enhanced Python skills through the Two Discovery Program',
        'Developed teaching and mentoring skills with younger learners',
      ],
    },
  },
  {
    position: 'Mentor School Hackathon',
    company: 'PISA Charter School',
    location: 'Abu Dhabi, UAE',
    period: 'May 2025',
    description:
      'During the School Hackathon, I had the opportunity to mentor a team of four participants. Our mission was to guide our team to victory by leveraging AI tools, something I had become familiar with through my previous experiences. Thanks to my knowledge of AI, it was not too difficult to guide and teach the team members. We worked efficiently on the first day, allowing us to spend the second day primarily practicing for our presentation. This approach ultimately led us to win the hackathon.',
    achievements: [
      'Mentored a Team of Four Participants in the School Hackathon',
      'Utilized AI Expertise to Guide and Teach the Team',
      'Led the Team to Victory with Strategic Time Management',
    ],
    logo: asset('Pisa.jpeg'),
    website: null,
    intro: null,
    cv: {
      role: 'Mentor School Hackathon',
      org: 'PISA Charter School',
      period: 'May 2025',
      bullets: [
        'Mentored a team of four participants using AI tools',
        'Led the team to victory with focused planning and time management',
      ],
    },
  },
  {
    position: 'Bill labs Secretary',
    company: '42 Abu Dhabi',
    location: 'Abu Dhabi, UAE',
    period: 'September 2024 - 2025',
    description:
      'I am the Secretary of the Programming Competitive Club "Bill Labs", where we are responsible for organizing activities and encouraging participation in coding competitions. Our club plays a key role in bringing coding challenges to campus, either by hosting our own competitions or by bringing external ones to engage students. In my role, I strive to contribute by generating ideas and collaborating with my team to ensure smooth organization and execution of these events, fostering a competitive and inspiring environment for all participants.',
    achievements: [
      'Served as Secretary of the Programming Competitive Club "Bill Labs"',
      'Organized and Hosted Coding Competitions',
      'Fostered a Competitive and Inspiring Environment',
    ],
    logo: asset('Bell_labs.jpeg'),
    website: null,
    intro: null,
    cv: {
      role: 'Secretary',
      org: 'Bill Labs, 42 Abu Dhabi',
      period: 'September 2024 - 2025',
      bullets: [
        'Served as secretary of the programming club Bill Labs',
        'Organized and hosted coding competitions',
        'Helped build a competitive environment for students',
      ],
    },
  },
];

type Skill = {
  name: string;
  level: number;
  cvName?: string;
};

export const skillCategories: {
  title: string;
  icon: 'code' | 'globe' | 'server' | 'database' | 'cpu' | 'layers';
  cvLabel: string;
  showOnPage: boolean;
  skills: Skill[];
}[] = [
  {
    title: 'Programming Languages',
    icon: 'code' as const,
    cvLabel: 'Programming',
    showOnPage: true,
    skills: [
      { name: 'C', level: 80 },
      { name: 'Python', level: 60 },
      { name: 'C++', level: 40 },
    ],
  },
  {
    title: 'Robotics',
    icon: 'globe' as const,
    cvLabel: 'Robotics',
    showOnPage: true,
    skills: [
      { name: 'ROS2', level: 80 },
      { name: 'Electronics', level: 50 },
      { name: '3D Printing', level: 80 },
      { name: 'Hardware', level: 70 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: 'server' as const,
    cvLabel: 'DevOps & Tools',
    showOnPage: true,
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'Linux', level: 80 },
    ],
  },
  {
    title: 'Ai',
    icon: 'database' as const,
    cvLabel: 'AI',
    showOnPage: true,
    skills: [
      { name: 'Ai tools', level: 80, cvName: 'AI tools' },
      { name: 'API Usage', level: 70, cvName: 'API usage' },
      { name: 'Agentic ai', level: 30, cvName: 'agentic AI' },
    ],
  },
  {
    title: 'Web Development',
    icon: 'cpu' as const,
    cvLabel: 'Web',
    showOnPage: true,
    skills: [
      { name: 'Backend with Django', level: 60, cvName: 'Django' },
      { name: 'Frontend with typescript', level: 20, cvName: 'TypeScript' },
    ],
  },
  {
    title: 'Soft Skills',
    icon: 'layers' as const,
    cvLabel: 'Soft skills',
    showOnPage: true,
    skills: [
      { name: 'Time Management', level: 90 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Team Collaboration', level: 85 },
      { name: 'Communication', level: 80 },
      { name: 'Adaptability', level: 85 },
    ],
  },
  {
    title: 'game Development',
    icon: 'globe' as const,
    cvLabel: 'Game development',
    showOnPage: true,
    skills: [
      { name: 'Unity', level: 20 },
      { name: 'Blender', level: 50 },
    ],
  },
  {
    title: 'Computer Science',
    icon: 'layers' as const,
    cvLabel: 'Computer Science',
    showOnPage: false,
    skills: [
      { name: 'Data Structures', level: 0 },
      { name: 'Algorithms', level: 0 },
      { name: 'OS', level: 0 },
      { name: 'Networking', level: 0 },
    ],
  },
];

export const projects = [
  {
    title: 'Lattice',
    description:
      'An IntelliJ IDEA plugin built with Ivan Pyhtin for the JetBrains Hackathon at 42 Abu Dhabi, where we won 1st place. Lattice helps developers see how files, changes, teammates, and AI agents connect. You type a task in IntelliJ, Lattice starts Claude Code and loads ECC into that run, then records each edit so the team can watch agents, activity, and GitHub updates.',
    technologies: ['IntelliJ IDEA', 'Claude Code', 'AI agents', 'Teamwork'],
    image: asset('lattice.jpg'),
    github: null,
    demo: null,
    date: 'Oct 2026',
    cv: {
      name: 'Lattice',
      summary: '1st place JetBrains Hackathon plugin for watching AI agents in IntelliJ, with Ivan Pyhtin',
    },
  },
  {
    title: 'Call Me Maybe (42 School)',
    description:
      'An introduction to LLMs: how tokenization works, how a model picks the next token, and how to limit which tokens are allowed. The decoder forces a valid function-call JSON object, including the function name and parameter types, then stops when the object closes.',
    technologies: ['Python', 'LLM', 'Constrained decoding'],
    image: asset('call_me_maybe.png'),
    github: 'https://github.com/mariame42/Call-Me-Maybe',
    demo: null,
    date: 'Sep 2026',
    cv: {
      name: 'Call Me Maybe',
      summary: 'Constrained decoding so an LLM emits a valid function-call JSON object',
    },
  },
  {
    title: 'ft_transcendence (42 School) – In Progress',
    description:
      "Developing Kido Path, a kids' productivity platform inspired by a real parenting challenge. The application empowers children to manage their own tasks while allowing parental supervision, using a scalable microservices architecture.",
    technologies: ['Microservices', 'Docker', 'Django', 'TypeScript', 'Teamwork'],
    image: asset('kiddoPath.png'),
    github: 'https://github.com/nasqnik/Transcendence',
    demo: null,
    date: 'In Progress',
    cv: {
      name: 'KiddoPath (ft_transcendence)',
      summary: "Kids' productivity platform with microservices (in progress)",
    },
  },
  {
    title: 'ft_irc (42 School)',
    description:
      'Collaborated with a team to develop an IRC server in C++, using SOLID principles to design a reusable, modular, and maintainable architecture.',
    technologies: ['C++', 'Networking', 'SOLID', 'Teamwork'],
    image: asset('irc.jpeg'),
    github: 'https://github.com/mariame42/IRC',
    demo: null,
    date: '2025',
    cv: {
      name: 'ft_irc',
      summary: 'IRC server in C++ with a modular SOLID-inspired architecture',
    },
  },
  {
    title: 'Inception (42 School)',
    description:
      'Built a multi-container application using Docker and Docker Compose, developing practical skills in containerization and service orchestration.',
    technologies: ['Docker', 'Docker Compose', 'NGINX', 'WordPress', 'MariaDB'],
    image: asset('inception.jpg'),
    github: 'https://github.com/mariame42/Inception',
    demo: null,
    date: '2025',
    cv: {
      name: 'Inception',
      summary: 'Multi-container Docker stack (NGINX, WordPress, MariaDB)',
    },
  },
  {
    title: 'Roamio',
    description:
      'Roamiois a robot I am developing with the startup RMC Labs. It is designed to guide people at 42 and answer there questions powered by AI. I worked in the hardware part and now i focusing in the chatbot.',
    technologies: ['Ros 2', 'Linix', 'Ai'],
    image: asset('roamio.jpeg'),
    github: null,
    demo: 'https://drive.google.com/file/d/1KHMLbSQVb_f5TJUjYPzLXIbUjAefOdq9/view?usp=sharing',
    date: 'May 2025 - Present',
    cv: {
      name: 'Roamio',
      summary: 'Campus guide robot powered by AI, with RMC Labs',
    },
  },
  {
    title: 'cub3d',
    description:
      'me and my collegue we create this game with c lanugage using the raycasting prenceble to mimch how old games were rendered',
    technologies: ['C', 'Raycasting', 'Teamwork'],
    image: asset('cube3d_screenshot.png'),
    github: 'https://github.com/mariame42/cub3d',
    demo: 'https://drive.google.com/file/d/1e331Rg4jDpDuAeIuFCsnaTx6JyAqVwui/view?usp=sharing',
    date: 'August 2025',
    cv: {
      name: 'cub3d',
      summary: 'Raycasting game in C, built with a teammate',
    },
  },
  {
    title: 'ai summarizer website',
    description: 'my first website that i build from scratch, it can summrize text or file',
    technologies: ['api calls', 'Django', 'Typescript'],
    image: asset('sum_web.jpg'),
    github: 'https://github.com/mariame42/last_ai_sum',
    demo: 'https://drive.google.com/file/d/1uJ0lEqVA9BTl1Etr-6bTBYMqmIOgl9rg/view?usp=sharing',
    date: 'August 2025',
    cv: {
      name: 'AI summarizer',
      summary: 'Website that summarizes text or a file',
    },
  },
  {
    title: 'para_legal_news',
    description:
      'Me and my team we started this website, which features an AI agent, during the SambaNova hackathon, and we have been continuously developing it to become a fully functional website.',
    technologies: ['Ai', 'Data Base', 'Algorithms', 'Teamwork'],
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    github: 'https://github.com/madihanazar/para_legal_news',
    demo: null,
    date: 'Nov 2024',
    cv: {
      name: 'para_legal_news',
      summary: 'Legal AI agent website',
    },
  },
  {
    title: 'minishell',
    description:
      'A simplified shell implementation in C, featuring command execution, pipes, redirections, and environment variable management.',
    technologies: ['C', 'Unix', 'Process Management'],
    image:
      'https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    github: 'https://github.com/nasqnik/minishell',
    demo: null,
    date: 'Feb 2025',
    cv: {
      name: 'minishell',
      summary: 'Simplified shell implementation in C',
    },
  },
  {
    title: 'Personal Portfolio',
    description: 'A responsive portfolio website for Learning to learn modile',
    technologies: ['TypeScript', 'Ai'],
    image: asset('new_portfolio.png'),
    github: 'https://github.com/mariame42/mariame42.github.io',
    demo: null,
    date: 'May 2025',
    cv: {
      name: 'Personal Portfolio',
      summary: 'Responsive portfolio website',
    },
  },
];
