# Calendarly

Social media content management portal.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Compilers used

1. The project is compiled using webpack. 
2. Gulp is used for temporary frontend tasks.

## Project Structure 

1. The main app bundling module is contained in app folder under the name app.module.

## Module structure

Feature modules:
1. Dashboard
2. Calendar
3. Profile
4. Post
5. Core
6. Layout

The core module contains the major shared modules and re-exports them to be made available to all.

Shared modules such as header, sidebar, chat are contained in core module.

## Post Module (feature module)

1. It contains 2 components:
    - Create Post Component
    - Post-View Component
    
2. Create Post Component:
    - Contains form which is shared in seveal other components.
    - Used to modularize the code.
    - Contains output property 'formSubmitted' and 'formUpdated' and input property 'postData'.
    - 


    