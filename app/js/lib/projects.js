const projects = [
    {
      _id: 4,
      title: 'Oscar App',
      description: 'React Native mobile app available on the ExponentJS platform for both Android and iOS. Developed with Redux to help manage the state of the application.',
      tech: ['JavaScript', 'React Native', 'Redux', 'ES6', 'ExponentJS', 'iOS', 'Android'],
      img: 'oscar-app.PNG',
      links: [
        {site: 'github', icon:'icon-github', link:'https://github.com/timcmiller/oscar_app'}
        ],
      year: 2016
    },
    {
      _id: 3,
      title: 'Cadet',
      description: 'Learning Management System built for programming and code driven education programs requested by my alma mater, Code Fellows.',
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
      description: 'Node backed framework published as an npm package that streamlines http server creation.',
      tech: ['JavaScript', 'Gulp', 'Mocha/Chai'],
      img: 'stg.png',
      links: [
        {site:'github', icon:'icon-github', link:'https://github.com/timcmiller/sludgy-trucker-coffee'},
        {site:'npm', icon:'icon-npm', link:'http://npmjs.com/sludgy-trucker-coffee'}
        ],
      year: 2015
    }
  ];

  export default projects;
