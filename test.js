const cypress = require('cypress');
const upload = require('./upload.js');

cypress.run({
  spec: ['./cypress/integration/sample1.spec.js', './cypress/integration/sample2.spec.js'],
})
  .then(() => {
    upload.uploadScreenshots();
    upload.uploadVideos();
  })
  .catch((err) => {
    console.error(err);
  })
