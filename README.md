# Angular2-Stamplay-Starter

This project is a *work in progress* starter kit for developing an Angular 2 application and using Stamplay as a backend-as-a-service.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

In order to use this project for your Stamplay website, install the Stamplay CLI: `npm install -g stamplay-cli`

Change `stamplay.json` with your application id and api key that you'll find in the Stamplay website editor.

Set `Stamplay.init("#YOUR-APP-ID");` in index.html with your Stamplay app id.

Run `npm install` to install the packages.

Now you can start your application locally in two ways:

1) `ng serve` from the angular-cli, which includes LiveReload but you must set your Stamplay app to accept CORS from your localhost to access your Stamplay backend through the js sdk.

2) `ng build` and then run the content of the `dist` folder with `stamplay start`. This does not require to set the CORS.

Use `ng build -prod` or the experimental `ng build -prod --aot` with Ahead-of-time compilation (which drastically reduces the application size) to kick off the production build process in angular-cli.

Ultimately, use `stamplay deploy` to deploy your application (`dist` folder) and access it at `https://YOUR-APP-ID.stamplayapp.com/`

The styling is provided by [Material Design for Bootstrap](https://github.com/FezVrasta/bootstrap-material-design).

The .css and .js dependencies can be inserted in `angular-cli.json` which currently includes:

```javascript
styles": [
        "../fonts/roboto.css",
        "../fonts/material-icons.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css",
        "../node_modules/bootstrap-material-design/dist/css/ripples.min.css",
        "../node_modules/snackbarjs/dist/snackbar.min.css",      
        "styles.css"
      ],
      "scripts": [
        "../node_modules/jquery/dist/jquery.min.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js",
        "../node_modules/bootstrap-material-design/dist/js/material.min.js",
        "../node_modules/bootstrap-material-design/dist/js/ripples.min.js",
        "../node_modules/snackbarjs/dist/snackbar.min.js",
        "../node_modules/stamplay-sdk/dist/stamplay.min.js"
      ]
```
You can change the styling and provide your own Bootstrap theme by changing these css dependencies.