# PhoebeUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Run on OpenShift:
oc new-app centos/nodejs-6-centos7~https://github.com/bleathem/phoebe-ui.git

## Environment

Both the CLI and generated project have dependencies that require Node 6.9.0 or higher, together with NPM 3 or higher.

Install the project dependencies:

```
npm install
```

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `npm run ng generate component component-name` to generate a new component. You can also use `npm run ng generate directive|pipe|service|class|module`.

## Build

Run `npm run ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `npm run ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm run ng serve`.

## Further help

To get more help on the Angular CLI use `npm run ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
