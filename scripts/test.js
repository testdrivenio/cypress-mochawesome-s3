const path = require('path');

const cypress = require('cypress');
const uuidv1 = require('uuid/v1');
const rimraf = require('rimraf');
const shell = require('shelljs');


const upload = require('./upload.js');
const combine = require('./combine.js');


cypress.run({
  spec: ['./cypress/integration/sample1.spec.js', './cypress/integration/sample2.spec.js'],
  // spec: []
})
  .then(() => {
    // generate mochawesome report
    const data = combine.combineMochaAwesomeReports();
    const uuid = uuidv1();
    combine.writeReport(data, uuid);
    rimraf(path.join(__dirname, '..', 'reports'), () => {});
    shell.exec(`./node_modules/.bin/marge ${uuid}.json  --reportDir mochareports`, (code, stdout, stderr) => {
      if (stderr) throw stderr;
      // upload to s3
      upload.uploadScreenshots();
      upload.uploadVideos();
      upload.uploadMochaAwesome();
      // cleanup
      rimraf(path.join(__dirname, '..', 'reports'), () => {});
      rimraf(path.join(__dirname, '..', `${uuid}.json`), () => {});
    });
  })
  .catch((err) => {
    /* eslint-disable no-console */
    console.error(err);
    /* eslint-enable no-console */
  });
