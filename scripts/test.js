const path = require('path');

const cypress = require('cypress');
const uuidv1 = require('uuid/v1');
const rimraf = require('rimraf');
const shell = require('shelljs');


const upload = require('./upload.js');
const combine = require('./combine.js');

const local = process.argv[2];

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
      if (!local) {
        /* eslint-disable no-console */
        console.log('\nUploading to S3');
        /* eslint-enable no-console */
        upload.uploadScreenshots();
        upload.uploadVideos();
        upload.uploadMochaAwesome();
      } else {
        /* eslint-disable no-console */
        console.log('\nLocal run - skipping Sp3 upload');
        /* eslint-enable no-console */
      }
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
