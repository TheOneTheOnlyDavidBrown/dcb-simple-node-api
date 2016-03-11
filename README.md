# dcb-simple-node-api

Simple node api designed to spin up for frontend testing when the backend doesn't have the data/endpoint yet. It allows a front end developer to quickly add an endpoint with mock data so there is minimal transition when a real endpoint is added.

###Installation

* `npm install dcb-simple-node-api`
* cd into installation directory
* Run `npm install`
* Run `npm run dev` for development environments (runs nodemon)
* Run `npm start` for production

Primary server file will be in `src/index.js` and is written in es6/2015

The default path will be http://localhost:8080/api/

The port can be configured in the .env file

#### TODO:
* make this a generator

Licensed under the MIT License

###Contributing

Information about contributing can be found [here](https://github.com/TheOneTheOnlyDavidBrown/contributing_guidelines/blob/master/CONTRIBUTING.md)
