import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    python,
    tailwind,
    mysql,
    git,
    docker,
    nlp,
    astha,
    w3,
    bytetrek,
    tripguide,
    postgresql,
    django,
    blog,
    ecommerce,
    live,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Engineer",
      icon: mobile,
    },
    {
      title: "Machine Learning Aspirant",
      icon: backend,
    },
    {
      title: "Data Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
        
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: 'Python',
      icon: python,

    },
    {
      name: 'Django',
      icon: django,

    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Dev BootCamp for Coding Champs",
      company_name: "Astha IT",
      icon: astha,
      iconBg: "#ffffff",
      date: "August 2022 - December 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Hands on Learning Platform",
        "Class based coding practice to make it more useful",
        "Debugging skills and knowledhe sharing",
      ],
    },
    {
      title: "Intern Software Engineer",
      company_name: "W3 Engineers Ltd.",
      icon: w3,
      iconBg: "#0d0705",
      date: "December 2022 - Feb 2023",
      points: [
        "Maintain Code Architecture.",
        "Doing projects from scratch and scaling it day by day.",
        "Following patterns as well as requirement analysis.",
        "Reviewing others code for better understanding.",
      ],
    },
    {
      title: "Junior Software Engineer",
      company_name: "Bytetrek Ltd.",
      icon: bytetrek,
      iconBg: "#ffffff",
      date: "Feb 2023 - Current",
      points: [
        "Working on existing projects.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers.",
        "Roaming around on Google Clound Console",
        "Working with reputation management system.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "A toy project for showcasing IMDB movie list while practicing react for learning purpose. It showcases movie name based on theire name on the search box.",
      live: live,
      source_code_link: "https://imdb-movie-list.netlify.app/",
    },
    {
      testimonial:
        "An image frame that has play and pause functionality. Groups of images swipes on random with their div on play and pause.",
      live: live,
      source_code_link: "https://image-frame-app.netlify.app/",
    },
    {
      testimonial:
        `An ecommerce website demo where user can select product based on the availability, can order product by providing user address, payment method as well 
        as can see order details.`,
      live: live,
      source_code_link: "https://karukuthi.vercel.app/",
    },
  ];
  
  const projects = [
    {
      name: "WSD in Bengali",
      description:
        `Word Sense Disambiguation is one of the most emergent tasks in this field. 
        This projcet is to detect the actual sense of an ambiguous word in a context. 
        For Bangla this is still a chanlenging task so far. This project is a contribution to get more insights for wsd in Bangla.`,
      tags: [
        {
          name: "nlp",
          color: "blue-text-gradient",
        },
        {
          name: "wsd",
          color: "green-text-gradient",
        },
        {
          name: "machine_learning",
          color: "pink-text-gradient",
        },
      ],
      image: nlp,
      source_code_link: "https://github.com/bipsec/Bengali-Word-Sense-Disambiguation",
    },
    {
      name: "Blog App",
      description:
        `This is a blog app done in django framework where user can create his/her profile as well as post what's in his/her mind. 
        It has registration feature as well as login-logout authentication. User can update and delete
        their post as well. Pagination is also done and user can see 4/5 post per page.`,
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/bipsec/Blog-App",
    },
    {
      name: "Ecommerce website",
      description:
        "An ecommerce website where user can create profile and add products to the cart. User can select product based on the availability. Apart from the product selection user can order product by providing user address, payment method as well as can see order details.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/bipsec/e-website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };