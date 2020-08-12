# company-bday-guests

company-bday-guests is an NodeJS application that is taking care for sending invitations to any company partner within 100km of our Sofia office for our company’s birthday celebration. 

## Running Locally

### Prerequisites

1. Make sure you have [Node.js](http://nodejs.org/) ( >= v10.15.1) and [npm](https://www.npmjs.com/) ( >= v6.4.1) installed.

### Steps

```sh
1. Install dependencies - npm i
2. Build the project - npm run bnw
3. Start the application - npm start

or just run these commands at once:

npm i && npm run bnw && npm start
```

Once the application is started, navigate to 
```
http://localhost:3001/sendInvitations
```
in order to see a list with nearby partners which will be invited.

Other endpoints:

* /_healthcheck - see if the application is up and running. It also prints the currenty version of the application.

## Running Unit Tests

```sh
npm run test 
or if you want to see the unit tests cove coverage:
npm run test:coverage
```

