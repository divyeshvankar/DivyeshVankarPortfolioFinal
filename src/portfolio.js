/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Divyesh Vankar",
  title: "Hi all, I'm Divyesh",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web, Mobile and PC applications with JavaScript / Reactjs / Nodejs / Flutter / Virtual Basics / C++ / Java and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1WoQdYoslnaiRZiuLNJMQFa--mX-3f3DR/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/divyeshvankar",
  linkedin: "https://www.linkedin.com/in/divyeshvankar/",
  gmail: "vankardivyeshkumar@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@divyeshvankar.iitg",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Design and Develop highly interactive Front end / User Interfaces for your web , mobile and PC applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "visual-basics",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "c#",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: ".net",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nuxtjs",
      fontAwesomeClassname: "fab fa-nuxt"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fab fa-flutter"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "solidity",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "blockchain",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IIT Guwahati",
      logo: require("./assets/images/iitg_logo.png"),
      subHeader: "Bachelor of Technology in Computer Science Engineering",
      duration: "December 2021 - April 2025",
      desc: "Computer Science enthusiast with a passion for learning and building innovative solutions.",
      descBullets: [
        "Studied various core subjects including Data Structures, Algorithms, Database Management Systems, and Software Engineering.",
        "Engaged in hands-on projects and collaborated with peers to solve real-world problems.",
        "Participated in coding competitions and hackathons, honing problem-solving skills and fostering creativity.",
        "Actively involved in extracurricular activities, contributing to the vibrant campus community."
      ]

    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer Engineer Intern",
      company: "Barclays",
      companylogo: require("./assets/images/barclaysLogo.png"),
      date: "May 2024 – Present",
      desc: "Excited to join the Global Security team, where I'll be contributing my skills and expertise to ensure the safety and integrity of our systems and data.",
    },
    {
      role: "Software Developer Intern",
      company: "MedSolu",
      companylogo: require("./assets/images/medsoluLogo.png"),
      date: "May 2023 – March 2024",
      desc: "During my tenure at MedSolu, I actively contributed as a web developer utilizing Django and also honed my skills as a Flutter developer. Additionally, I showcased my creativity by designing intuitive user interfaces using Figma, ensuring a seamless user experience across platforms."
    },
    {
      role: "Fullstack Blockchain Developer Intern",
      company: "Kakr Labs",
      companylogo: require("./assets/images/kakrLogo.png"),
      date: "Nov 2022 – Jan 2023",
      desc: "As an intern at Kakr Labs, I spearheaded the development of a crowdfunding platform. Leveraging my expertise in C# .NET for the backend, along with Vue.js and Nuxt.js for the frontend, I ensured a seamless user experience. Additionally, I implemented Solidity to integrate blockchain technology, enhancing security and transparency within the platform."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/cabs4uLogo.png"),
      projectName: "Cabs4u",
      projectDesc: "Cabs4u is a thriving company based in Vadodara, Gujarat, India. It operates a cab service catering to a daily user base of 40 to 50 individuals who book cabs for packages averaging around ₹15,000. This results in a substantial daily turnover ranging from ₹600,000 to ₹750,000. The platform is built using React with Next.js for the frontend, Django for the backend, and SQLite for the database. Additionally, Google Ads have been implemented to enhance visibility and reach.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://cabs4u.in/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ImageLogo.png"),
      projectName: "Community-Based-Local-Services-Platform",
      projectDesc: "The Community-Based-Local-Services-Platform is a complex project developed by a university team. It is a PC software designed using Visual Basics for the frontend and backend. The database is managed using phpMyAdmin. The project was a collaborative effort and designed using Figma.",
      footerLink: [
        {
          name: "Visit Software Repository",
          url: "https://github.com/divyeshvankar/Community-Based-Local-Services-Platform"
        }
      ]
    },
    {
      image: require("./assets/images/votingDapp.png"),
      projectName: "Voting Dapp",
      projectDesc: "The Voting Dapp is a decentralized application developed using React, Node.js, Solidity, and Web3.js. This application allows users to create and participate in secure and transparent voting processes leveraging blockchain technology. The project aims to enhance the integrity and accessibility of voting systems.",
      footerLink: [
        {
          name: "Visit Voting Dapp Website",
          url: "https://votingdv.netlify.app/"
        }
      ]
    }    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7573853920",
  email_address: "vankardivyeshkumar@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "DivyeshVankar3", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
