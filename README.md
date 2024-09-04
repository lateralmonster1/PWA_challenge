PWA Challenge

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Description
The **PWA Challenge** is a Progressive Web Application designed as a simple, offline-capable text editor. Users can create notes or code snippets, and the application automatically stores content using IndexedDB for persistence. Even when offline, the editor ensures data is retained and can be accessed later. The PWA can be installed on a user's device, providing a native-like experience and quick access.

This application meets the criteria for a Progressive Web Application (PWA), ensuring users can install and access it even when they’re not connected to the internet. It also employs various data persistence strategies for reliability, even when certain storage mechanisms aren’t available in the browser.

## Installation

### 1. Clone the Repository
Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/text-editor-pwa.git
cd PWA_challenge
2. Install Dependencies
Install all necessary dependencies for both client and server by running the following from the project root:

```bash
Copy code
npm run install:all
3. Build the Application
To create a production build of the client:

```bash
Copy code
npm start
4. Start the Application
Start both the client and server in development mode using:

```bash
Copy code
npm run start
The server will run on http://localhost:3000.
The client (Webpack Dev Server) will run on http://localhost:8080.
Usage
Once the application is running, you can access the text editor in your browser:

Open the app: Navigate to http://localhost:8080 in your browser.
Enter text: Use the text editor to enter notes or code snippets.
Automatic saving: The editor automatically saves content using IndexedDB.
Offline functionality: The app can be used offline, and any edits made will be saved and accessible when you go back online.
Install the PWA: Click the "Install" button in the UI or use the browser's install prompt to install the web app on your device.
Features
PWA: Can be installed on your device for a native-like experience.
Offline Support: Operates fully offline with data persistence using IndexedDB.
Automatic Saving: Automatically saves content as you type.
Modern JavaScript: Uses modern JavaScript features like ES6 modules and async functions.
Service Worker: Registers a service worker to cache assets for offline use.
IndexedDB Integration: Data is stored in IndexedDB, ensuring persistence even if the app is closed or offline.
Technologies Used
Express: Backend framework for serving the app and handling API requests.
Webpack: Bundles JavaScript and CSS, handles static assets, and generates service workers.
IndexedDB: Client-side database used to store text editor content.
idb: A lightweight wrapper around the IndexedDB API for easier management.
Service Workers: Used for offline functionality and caching.
Workbox: Helps generate the service worker and manage caching strategies.
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
If you have any questions or feedback, feel free to reach out:

Email: xavier3435@icloud.com
GitHub: lateralmonster1
