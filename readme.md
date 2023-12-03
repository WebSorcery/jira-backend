# Jira Wizard - Backend

Jira Wizard Backend is the server-side component of the Jira Wizard application. It is built with Node.js, Express.js, and TypeScript, and serves as the backend API for handling file uploads, data processing, and communication with the Jira API.

## Features

- Accepts file uploads (CSV or JSON) containing issue data
- Validates and processes the uploaded data
- Communicates with the Jira API to create issues
- Provides endpoints for handling file uploads and issue creation
- Implements error handling and response validation

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository: git clone https://github.com/ank1traj/jira-backend.git
2. Install the dependencies: npm install
3. Set up the environment variables: Create a `.env` file in the backend directory and configure the following variables: SECRET_KEY="SECRET_KEY"

## Server configuration
PORT=<server_port>

Replace the values in `<...>` with your own Jira API and server configuration.

## Usage

1. Start the backend server: npm start

The backend server will start running on the specified port (default: 3000).

2. Configure the frontend:

In the frontend codebase, update the configuration file with the backend server URL. This file can typically be found in the `src/config` directory of the frontend project.

```typescript
// src/config/index.ts

const config = {
  backendUrl: 'http://localhost:3000', // Replace with your backend server URL
  // Other configuration options
};

export default config;
```

Start the frontend:

Follow the instructions in the frontend README to start the frontend server and access the Jira Wizard application.

## API Endpoints
The backend provides the following API endpoints:
POST /api/user: Accepts JIRA domain, email and API token and get logged in.
POST /api/upload: Accepts file uploads (CSV or JSON) containing issue data and validates the file.
POST /api/issue: Processes the uploaded file data, communicates with the Jira API, and creates issues.
For detailed information about the request and response structures, refer to the API documentation.

### How to contribute?

Participating in open-source software (OSS) initiatives can provide a gratifying and satisfying experience. It offers an opportunity to acquire novel abilities while also contributing to a project that has a significant impact on the larger community.

> Here are some steps you can take to contribute to this project

- Remember to read [Code Of Conduct](/CODE_OF_CONDUCT.md) before contributing.
- Follow the [Contribution Documents](/contributing.md)
- Create an [issue](https://github.com/WebSorcery/jira-backend/issues/new/choose) to report bugs, and vulnerabilities or add a new feature.
- Remember to add a [good commit message](https://gitopener.vercel.app/guides/general-terminology/How-to-write-professional-commits).
- Don't spam if you do it your PR/issue will be closed.

### Tech stack used

Currently we are using NodeJS and ExpressJS framework for this project.

![Node](https://img.shields.io/badge/node.js-green?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express-white?style=for-the-badge&logo=express&logoColor=black)

### Contributors

We would like to extend our heartfelt gratitude to all the individuals who contributed to and supported this project. Your unwavering dedication, time, skills, and knowledge played a pivotal role in the success of this endeavor. Whether you offered code, documentation, testing, or provided valuable feedback and suggestions, please know that your contributions are highly valued and appreciated.

<a href="https://github.com/ank1traj/jira-backend/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ank1traj/jira-backend" />
</a>

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
