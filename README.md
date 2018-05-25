# Overview

Our analysis engine returns data based on all the information we have collected
from submitted or extracted malware. Part of this data contains all the file
reads and file writes that a subject has done. The task here is to take this
information and create a UI that intuitively provides it to the user.

# Installation

Simply clone this repo and run `npm install` (you'll need NodeJS and npm). The
post-installation script should fetch all frontend dependencies from the Bower
repositories. After it's done, you can start the server by running the `start`
script.

```
npm start
``` 

The server will then be available at `http://localhost:9000`.

Please note that the tooling provided is just for convenience. Feel free to make
adjustments that best fit your workflow.

# Specification

Create two AngularJS components:

- `analysis-file-writes`
- `analysis-file-reads`

These two directives must have an attribute binding that will take in the
`file_writes` and `file_reads` arrays, respectively. The parent component will
include these directives and pass these arrays. Note that the parent component
needs to load this data from the API -- please consider showing the user that
this data is loading.

The idea is to design these reports to be intuitive and pleasant to read for the
user. You can use any styling framework you are used to, but, for your
convenience, we have already provided Bootstrap.

## Tests

In addition to writing the specified components, please add some tests to your
code. You may use whatever approach that fits your needs, but we've provided a
simple `karma` and `jasmine` installation for convenience. Run the test suite in
watch mode with `npm run karma`, or `npm test` for a single run.

If you prefer a different approach to testing, please install the appropriate
dependencies and adjust the `npm test` script accordingly.

# API

For this project's API, we will load a static JSON file from `/api/files.json`.

To mimic the latency from a "real" network, an artificial delay of 2 seconds has
been added to the response. For developomoent, you can alter this delay by using
the alternative endpoint `/delay/:time/api/files.json`, where `:time` is
specified in milliseconds. For example, for a 10-second delay, make a request to
`/delay/10000/api/files.json`.

## Format specification

`{file_reads | file_writes}`
**Type:** list of files (see below)
A list of files read or written by the analysis subject

- `filename`
  - **Type:** String
  - **Example:** `"desktop.ini"`
  - **Description:** A file name. Could be an absolute or relative path
- `abs_path` (optional)
  - **Type:** String
  - **Example:** `"C:\Users\desktop.ini"`
  - **Description:** An absolute path to the file
- `ext_info` (optional)
  - **Type:** File-Info (see next section)
  - **Description:** Static file information
- `file_attributes` (optional)
  - **Type:** String[]
  - **Example:** `"FILE_ATTRIBUTE_ARCHIVE", "FILE_ATTRIBUTE_HIDDEN"`
  - **Description:** Attributes of the file
- `iostatus` (optional)
  - **Type:** String[]
  - **Example:** `"FILE_CREATED", "FILE_OPENED"`
  - **Description:** Completion status of the file operation

### Static file information

The analysis engine extracts static file information for most files manipulated
during the analysis run and associates it with all files in the report.

- `md5` (optional)
  - **Type:** Hexadecimal String
  - **Example:** `"33474600f048db4059171231d54279eb"`
  - **Description:** The MD5 hash of a file content
- `sha1` (optional)
  - **Type:** Hexadecimal string
  - **Example:** `"592897dab63847d349699fb51c33dc449052c6f8"`
  - **Description:** The SHA1 hash of the file content
- `file_info` (optional)
  - **Type:** String
  - **Example:** `"MS Windows shortcut"`
  - **Description:** A text description of the file type
- `size` (optional)
  - **Type:** Integer
  - **Example:** `1233`
  - **Description:** The file size in bytes

# Questions?

Feel free to email ggoncalves@lastline.com for any questions you may have.
