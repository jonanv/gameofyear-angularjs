// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/gameofyear-angularjs/us-central1/',
  firebase: {
    apiKey: 'AIzaSyAHcvyb8uwLEVqpEjFC8i0PtnVxmiGqjSA',
    authDomain: 'gameofyear-angularjs.firebaseapp.com',
    projectId: 'gameofyear-angularjs',
    storageBucket: 'gameofyear-angularjs.appspot.com',
    messagingSenderId: '372140837746',
    appId: '1:372140837746:web:84884c3b9867adff476beb',
    measurementId: 'G-Y816T0T6EL'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
