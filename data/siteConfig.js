module.exports = {
  siteTitle: "Daniel Russey",
  siteDescription: `Daniel Russey software engineer`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Daniel Russey',
  twitterUsername: 'danielrussey',
  githubUsername: 'drussey',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: 
    `I'm a software engineer using critical thinking and problem solving to develop
    backend application logic. I enjoy learning new technologies to add to my toolbox 
    for creating reliable backend software and infastructure for web sofware that can
    scale to handle consumer demand. I have experience in working creating and maintaining
    infastructure on cloud computing platforms and detecting and mitigating live production
    errors with both infastructure and application code.`,
  skills: [
    {
      name: 'PHP',
      level: 90,
    },
    {
      name: 'Java',
      level: 85,
    },
    {
      name: 'Smalltalk',
      level: 85,
    },
    {
      name: 'MySQL',
      level: 90,
    },
    {
      name: 'Oracle & PL/SQL',
      level: 75,
    },
    {
      name: 'Memcached',
      level: 70,
    },
    {
      name: 'Spring Framework',
      level: 85,
    },
    {
      name: 'Ethereum & Smart Contracts (solidity)',
      level: 30,
    },
  ],
  jobs: [
    {
      company: 'Visa',
      begin: {
        month: 'nov',
        year: '2015',
      },
      duration: null,
      location: 'San Francisco, CA',
      occupation: 'Backend Software Engineer',
      description:
        'At TrialPay.com / Visa I work with to create backend PHP code utilizing MySQL and memcached\
        to provide APIs and dynamic webpages to give users access to card-linked offers. I also\
        work with a variety of AWS technologies including EC2 instances, load balancers, S3 storage,\
        and the Cloudfront CDN to ensure site reliability on live production servers.\
        I also work with the Spring Framework, particularly Spring Boot as well as MySQL and kafka\
        to develop other backend APIs for the Visa Crypto team. For this team I have researched and\
        explored the functions of Ethereum smart contracts and work with Solidity to create proof of\
        concept smart contracts for Visa.',
    },
    {
      company: 'Northrop Grumman',
      begin: {
        month: 'jun',
        year: '2010',
      },
      duration: '3 years and 7 months',
      location: 'Irving, TX',
      occupation: 'Software Engineer',
      description:
        'At Northrop Grumman I worked as a developer to create a Smalltalk based application that\
        utilized an Oracle database to store and display manufacturing instructions. I developed new\
        modules within the application and bug fixes to support maintenance of the application. I also\
        utilized Oracle PL/SQL to develop scheduled stored procedures to do routine data processing.\
        Similarly, I created PL/SQL stored procedures that migrated data from legacy systems into the\
        newer manufacturing application.',
    },
  ],
  education: [
    {
      school: 'University of Texas, Arlington',
      degree: 'Bachelor\'s degree',
      field: 'Computer Science and Engineering',
      startYear: 2005,
      endYear: 2009,
    },
  ],
  social: {
    twitter: 'https://twitter.com/danielrussey/',
    linkedin: 'https://www.linkedin.com/in/danielrussey/',
    github: 'https://github.com/drussey/',
    stackoverflow: 'https://stackoverflow.com/users/5884896/drussey',
    email: 'drussey@gmail.com',
  },
  hobbies: [
    {
      name: 'Running',
      icon: 'FaRunning',
    },
    {
      name: 'Travel',
      icon: 'FaPlane',
    },
    {
      name: 'Outdoors',
      icon: 'FaHiking',
    },
    {
      name: 'Movies & Television',
      icon: 'FaTv',
    },
  ],
  siteUrl: 'https://danielrussey.com',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-187565337-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/favicon.png',
  //resume: '/resume_daniel_russey.pdf',
  headerLinks: [
    // {
    //   label: 'Alvaro Jimenez Martin',
    //   url: '/',
    // },
    {
      label: 'About',
      url: 'about',
    },
    {
      label: 'Skills',
      url: 'skills',
    },
    {
      label: 'Experience',
      url: 'experience',
    },
    {
      label: 'Education',
      url: 'education',
    },
    {
      label: 'Hobbies',
      url: 'hobbies',
    },
  ],
}
