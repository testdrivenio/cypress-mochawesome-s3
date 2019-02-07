# Cypress + Mochawesome + S3 Upload

1. Generate a single [Mochawesome](https://github.com/adamgruber/mochawesome) report
1. Upload videos, screenshots, and reports to S3 after each test run

## Getting Started

1. Fork/Clone

1. Install dependencies:

    ```sh
    $ npm install
    ```

1. Set the following environment variables:

    ```sh
    $ export BUCKET_NAME=<YOUR_BUCKET_NAME>
    $ export AWS_ACCESS_ID=<YOUR_AWS_ACCESS_ID>
    $ export AWS_SECRET_KEY=<YOUR_AWS_SECRET_KEY>
    ```

1. Run the tests:

    ```sh
    $ node scripts/test.js
    ```

1. Skip S3 upload:

    ```sh
    $ node scripts/test.js local
    ```

## Parallel Test Run

1. Sign up for [CircleCI](https://circleci.com/) and create a new job for this project

1. Set the following environment variables in [CircleCI](https://circleci.com/docs/2.0/env-vars/):

    - BUCKET_NAME
    - AWS_ACCESS_KEY_ID
    - AWS_SECRET_ACCESS_KEY


WIP
