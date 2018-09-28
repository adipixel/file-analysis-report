# Overview

Lastline's analysis engine returns data based on all the information we have collected
from submitted or extracted malware. Part of this data contains all the file
reads and file writes that a subject has done. The application takes this
information and creates a UI that intuitively displays it to the user.

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

# Features

Two AngularJS components:

- `analysis-file-writes`
- `analysis-file-reads`

The idea is to design the reports to be intuitive and pleasant to read for the
user.

## Tests

Used `karma` and `jasmine`
Run the test suite in watch mode with `npm run karma`,
or `npm test` for a single run.

# API

For this project's API, we will load a static JSON file from `/api/files.json`.

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

