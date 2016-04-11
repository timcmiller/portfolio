const projects = [
    {
      _id: 4,
      title: 'Tropy',
      description: 'Academy Award mobile app, built to track film nominations for the 2016 Oscars. Available on the ExponentJS  platform for Android and iOS.',
      tech: ['JavaScript', 'React Native', 'Redux', 'ES6', 'ExponentJS', 'iOS', 'Android'],
      img: 'oscar-app.PNG',
      links: [
        {site: 'github', icon:'icon-github', link:'https://github.com/timcmiller/Trophy'}
        ],
      year: 2016
    },
    {
      _id: 3,
      title: 'Cadet',
      description: 'Learning Management System built for computer programing and code-driven education courses. Cadet heavily integrates with GitHub for streamlined course creation.',
      tech: ['JavaScript', 'SASS', 'React', 'Redux', 'Mocha/Chai', 'Babel', 'Gulp', 'Express', 'MongoDB', 'Webpack'],
      img: 'cadet.png',
      links: [
        {site:'web', icon:'icon-sphere', link:'http://cadet-lms.herokuapp.com/'},
        {site:'github', icon:'icon-github', link:'https://github.com/cf-lms'},
        {site:'npm', icon:'icon-npm', link:'https://www.npmjs.com/package/cadet-parser'}
      ],
      year: 2015
    },
    {
      _id: 2,
      title: 'Lingo Lemur',
      description: 'Multi-lingual, natural language processing web app that returns the hidden sentiment of plain text or tweets.',
      tech: ['JavaScript', 'Express', 'MongoDB', 'Mocha/Chai', 'TravisCI', 'Twitter API', 'Foundations'],
      img: 'lingo-lemur.png',
      links: [
        {site:'web', icon:'icon-sphere', link:'http://lingolemur.com'},
        {site:'github', icon:'icon-github', link:'https://github.com/timcmiller/lms'}
        ],
      year: 2015
    },
    {
      _id: 1,
      title: 'Sludgy Trucker Coffee',
      description: 'Node.js backend framework created to streamline HTTP server creation. Published as an npm package.',
      tech: ['JavaScript', 'Node.js', 'Gulp', 'Mocha/Chai'],
      img: 'stg.png',
      links: [
        {site:'github', icon:'icon-github', link:'https://github.com/timcmiller/sludgy-trucker-coffee'},
        {site:'npm', icon:'icon-npm', link:'http://npmjs.com/sludgy-trucker-coffee'}
        ],
      year: 2015
    }
  ];

  export default projects;
