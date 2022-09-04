# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

###  `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### App launch

To run Ke Tunez locally, clone down both this repo and the backend repo.

Then, navigate into the backend directory and run rake db:migrate to set up the database associations and bundle install to install all of the gems in the gemfile. Because RubyFlix is a proof of concept project, all of the data is hand crafted in the seeds.rb file. Run rake db:seed to fill the database with that seed data. Finally, run bundle exec rake server in the command line to launch the server for the frontend to make fetches to.

Now that the backend is set up, navigate into the frontend directory and run npm install. With the backend server running, run npm start from within the frontend directory to launch the application in the browser

### Inside The App
