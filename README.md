# Full Stack App with React and a REST API

## Project Overview
This project consists in a front-end application for the school database REST API created [here](https://github.com/ewertonluna-inc/rest-api). The REST API is included in this repository so you won't need to go to the link above to download it.

The full stack application will provide a way for users to administer a school database containing information about courses: users can interact with the database by retrieving a list of courses, viewing detail for a specific course, as well as creating, updating and deleting courses in the database.

In addition, the project will require users to create an account and sign in to make changes to the database.

## Getting Started
### Server-side
To GET the client side working, make sure you first initiate the **back-end application**. In order to do this, you can follow the steps bellow. In the Terminal (macOs/Linux) or Command Prompt:
1. Make sure you're in the `api` folder;
2. Run `npm install` to install the required dependencies;
3. Run `npm run seed` to automatically instantiate and seed the `fsjstd-restapi.db` database with the default data;
4. Run `npm start` to run the Node.js application at `http://localhost:5000/`.

You can visit the [repository](https://github.com/ewertonluna-inc/rest-api) to read more about the REST API project.

### Client-side

Now you can start the front-end React application following the steps below. In the Terminal (macOs/Linux) or Command Prompt:
1. Make sure you're in the `client` folder;
2. Run `npm start` to start the create-react-app development which will automatically open the application in your browser. If the development server tarted but it didn't open in the browser, try manually browsing to it at `http://localhost:3000/`.

## Main tools and technologies
The client-side application consists mainly in:
* React - To build the user interface;
* React Router - To set up the routes;
* React Markdown Package;
* Fetch API.

CORS was enabled in the REST API so it can work properly withe the front-end being served from a different domain.