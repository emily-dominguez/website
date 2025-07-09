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
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Emily Dominguez",
  title: "Hi, I'm Emily!",
  subTitle: emoji(
    "I'm a first-gen, recent college graduate from the University of Michigan with a B.S. in Computer Science and a B.B.A in finance. I've interned across product, engineering, and finance at Apple, Microsoft, Morgan Stanley, and early-stage startups. I'm passionate about building tech that empowers people."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/emily-dominguez",
  linkedin: "https://www.linkedin.com/in/emily~dominguez/",
  gmail: "emdomin@umich.edu",
  // medium: "https://medium.com/@saadpasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Story",
  subTitle: "a little bit about how i got here",
  skills: [
    "I grew up attending a limited-resourced highschool in Michigan, without much exposure to careers in tech or finance. I figured things out one YouTube video, cold email, and late night at a time. That curiosity led me to explore Sillicon Valley and Wall Street.",
    "I'm motivated by building tech that makes people’s lives easier — especially those who’ve been underserved. I founded GrowFi, a financial literacy app for students, and I’m always looking for ways to combine business, design, and engineering to spark upward mobility.",
    "Outside of work, you’ll find me watching anime, skimming through Zillow, trading on Robinhood, and making TikToks."
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
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
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
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    // {
    //   schoolName: "Harvard University",
    //   logo: require("./assets/images/harvardLogo.png"),
    //   subHeader: "Master of Science in Computer Science",
    //   duration: "September 2017 - April 2019",
    //   desc: "Participated in the research of XXX and published 3 papers.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Investment Banking Analyst Intern",
      company: "Morgan Stanley",
      companylogo: require("./assets/images/morgan_stanley.jpg"),
      date: "June 2024 – Aug 2024",
      desc: "",
      descBullets: [
        "Helped execute multiple live deals, including a $2.1B acquisition and  strategic work with brands in beauty tech, retail, and food/beverage.",
        "Built business development materials, join C Suite calls,  ran trading comps, and modeled some LBO/DCF.",
        "Learned to communicate clearly under pressure, stay ahead of shifting priorities, and delivering."
      ]
    },
    {
      role: "Product Engineering Intern",
      company: "Alza",
      companylogo: require("./assets/images/alza_logo.jpeg"),
      date: "Feb 2024 – May 2024",
      desc: "Loved it. A startup funded by Thrive Capital, Brex founders, Stripe exectives and more. A neobank for immigrants, offering U.S. bank accounts, debit cards, and remittance services to Latin America countries.",
      descBullets: [
        "Led onboarding improvements at a neobank serving immigrants, focusing on UX friction in KYC and welcome flows.",
        "Used Heap and Retool to analyze user drop-offs, uncovering that many users didn’t understand how to use the app.",
        "Specced and implemented (TypScript) a new welcome video and geolocation-based KYC solution, driving a 10% increase in active users."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Apple",
      companylogo: require("./assets/images/apple_logo.jpg"),
      date: "May 2023 – Aug 2023",
      descBullets: [
        "Interned on the Customer Analytics Platform team at Apple, where I built and benchmarked algorithms to anonymize sensitive user data across millions of devices.",
        "Worked in Python, Cassandra, and Snowflake and managed large-scale datasets to strengthen privacy infrastructure without sacrificing performance.",
        "Presented to VPs and engineering leads, contributing to broader conversations on data security and user trust."
      ]
    },
    {
      role: "New Tech (Software Engineer + PM Intern)",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoft_logo.jpeg"),
      date: "June 2022 – Aug 2022",
      descBullets: [
        "Interned on the M365 Core team, building a career exploration web app that helped high school students discover and navigate different careers.",
        "Designed product specs, defined success metrics, and conducted user interviews to shape early product direction.",
        "Built Tinder-style navigation in ReactJS and Redux, and scraped 350+ job listings using Python and BeautifulSoup"
      ]
    },
    {
      role: "Consulting Extern",
      company: "PwC",
      companylogo: require("./assets/images/pwc.jpg"),
      date: "Feb 2022 – April 2022",
      descBullets: [
        "Worked with the nonprofit Matriculate to improve student outreach and website engagement strategy.",
        "Conducted market research on 10+ education nonprofits to identify industry best practices and positioning.",
        "Recommended marketing and UX improvements (email campaigns, website design, corporate partnerships) projected to increase retention and traffic by 15%."
      ]
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
  title: "Side Projects",
  subtitle: "Some mini projects I've worked on that people got excited for",
  projects: [
    {
      image: require("./assets/images/growfi_logo.png"),
      projectName: "GrowFi",
      projectDesc: "Duolingo but for finances and the underserved",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://growfi.framer.website"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bump.png"),
      projectName: "Bump",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Prototype",
          url: "https://www.figma.com/proto/9BLxW94v6A9hyHAFNU0R5J/Bump--Copy-?node-id=14-301&p=f&t=qkrkYK2DrV841l2n-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=14%3A301"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Communities & Involvement",
  subtitle:
    "Investing in others the way others invested in me, through leadership, mentorship, and mission-driven communities.",

  achievementsCards: [
    {
      title: "Zell Early Stage Fund - Deal Team Lead",
      subtitle:
        "managed founder calls, due diligence, and $50K investment proposals in student-run VC",
      image: require("./assets/images/zesf.jpg"),
      imageAlt: "ZESF",
      footerLink: [
        {
          name: "What we do",
          url: "https://zli.umich.edu/zell-early-stage-fund/"
        }
      ]
    },
    {
      title: "BIPOC Builders - Co-founder/VP Partnerships",
      subtitle:
        "a community supporting Black and Hispanic students pursuing entrepreneurship (from small business owners to future startup founders)",
      image: require("./assets/images/bipoc.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Our socials",
          url: "https://www.instagram.com/bipocbuilders/"
        }
      ]
    },

    {
      title: "Mentor",
      subtitle:
        "mentor to first-gen and underrepresented students via ALPFA, SHPE, HeadStart, and 1st Gen.",
      image: null,
      imageAlt: "Mentor",
      footerLink: []
    },
    {
      title: "Fellow",
      subtitle:
        "selected for programs and scholarships such as MLT, SEO, PIMCO Scholars, Google LSLS, Meta CPS, ZLI Scholars, University of Michigan Regent Scholar, and more",
      imageAlt: "Fellow",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Coming Soon!",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  display: false // Set false to hide this section, defaults to true
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
  title: emoji("Contact Me "),
  subtitle:
    "Feel free to send me an email if you'd like to chat about anything here :)",
  email_address: "emdomin@umich.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
