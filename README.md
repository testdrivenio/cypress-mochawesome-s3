# Cypress S3 Upload

Upload videos and screenshots to S3 after each test run.

## Getting Started

1. Fork/Clone

1. Install dependencies:

    ```sh
    $ npm i
    ```

1. Set the following environment variables:

    ```sh
    $ export BUCKET_NAME=<YOUR_BUCKET_NAME>
    $ export AWS_ACCESS_ID=<YOUR_AWS_ACCESS_ID>
    $ export AWS_SECRET_KEY=<YOUR_AWS_SECRET_KEY>
    ```

1. Run the tests:

    ```sh
    $ node test.js
    ```
