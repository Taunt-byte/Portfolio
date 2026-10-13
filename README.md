# Personal Portfolio

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![Next.js](https://img.shields.io/badge/Next.js-Framework-black?logo=next.js)
![React](https://img.shields.io/badge/React-Library-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Styling-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)

My personal portfolio website, built to showcase my projects, technical interests, skills, and ongoing development journey.

The project is continuously evolving as I learn new technologies, build applications, and improve my development skills.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Running Locally](#running-locally)
- [Production Build](#production-build)
- [Deployment](#deployment)
- [GitHub API](#github-api)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [Contact](#contact)

## Overview

This portfolio serves as a central place to present my work and document my progress as a developer.

It includes information about me, selected projects, and my interests in software development and game development.

**Main goals:**

- Showcase personal and academic projects.
- Present my technical skills and areas of interest.
- Provide easy access to my source code on GitHub.
- Build a professional online presence.
- Continuously improve my frontend development skills.

## Features

- **Personal introduction:** Information about me and my development journey.
- **Project showcase:** A collection of projects with descriptions and source code links.
- **Skills and technologies:** An overview of the tools and technologies I work with.
- **Hobbies and interests:** A section about my interests beyond programming.
- **GitHub integration:** Uses the GitHub API to display repository or contribution information.
- **Responsive design:** Designed to adapt to different screen sizes.
- **Modern interface:** Built with Next.js, React, and Tailwind CSS.

*Note: The project is still under development, so features and layout may change.*

## Technologies

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) | React framework and application structure |
| [React](https://react.dev/) | Component-based user interfaces |
| [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Application logic |
| [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) | Page structure |
| [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) | Styling and visual presentation |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [GitHub REST API](https://docs.github.com/en/rest) | Retrieving GitHub information |
| [Vercel](https://vercel.com/) | Deployment and hosting |

## Getting Started

Follow these steps to run the project on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) — use Node.js 24.x to match the current deployment configuration.
- npm — included with Node.js.
- [Git](https://git-scm.com/) — for cloning the repository.

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Taunt-byte/Portfolio.git
```

**2. Navigate to the project directory**

```bash
cd App
```

**3. Install dependencies**

```bash
npm install
```

## Running Locally

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to:

http://localhost:3000

The development server supports hot reloading, allowing you to see changes as you edit the source code.

## Production Build

To create an optimized production build, run:

```bash
npm run build
```

To start the production server locally after building:

```bash
npm run start
```

Make sure the build completes successfully before deploying changes.

## Deployment

The project is configured for deployment with [Vercel](https://vercel.com/).

To deploy your own version:

1. Fork or import the repository into your GitHub account.
2. Import the repository into Vercel.
3. Configure the project settings and environment variables, if required.
4. Deploy the application.

For the original portfolio, visit the live deployment linked in the repository description, once the production URL is configured.

## GitHub API

The portfolio uses the GitHub API to retrieve information about my repositories and contributions.

Official documentation:

https://docs.github.com/en/rest

If the integration requires authentication or environment variables, configure them according to the implementation in the source code. Never commit access tokens, passwords, or other secrets to the repository.

## Project Structure

The application follows a Next.js project structure. Depending on the current implementation, the main directories may include:

```text
Portfolio/
├── public/          # Static assets
├── src/
│   └── app/         # Application routes and pages
├── package.json     # Dependencies and scripts
├── package-lock.json
├── tsconfig.json    # TypeScript configuration
└── README.md
```

The exact structure may vary depending on the files currently present in the repository.

## Future Improvements

Planned improvements may include:

- [ ] Refine the responsive layout and user experience.
- [ ] Improve project descriptions and documentation.
- [ ] Add more projects as development progresses.
- [ ] Improve accessibility and SEO.
- [ ] Expand GitHub API integration.
- [ ] Continue improving performance and maintainability.

## Contact

**Lucas Neves**

- GitHub: [@Taunt-byte](https://github.com/Taunt-byte)
- Portfolio source code: [Taunt-byte/Portfolio](https://github.com/Taunt-byte/Portfolio)
- LinkedIn: Add your LinkedIn profile URL here.

Feel free to explore the repository and follow my progress as I continue learning and building new projects.

---

**Status:** In development

**Maintained by:** Lucas Neves