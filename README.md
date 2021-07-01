# Google Clone Coding Challenge

The project is a simple clone of the google home and results pages.

## Specification

-   Your version of Google should have a homepage, with a logo, search bar and two buttons.
-   Upon pressing one button an API call should be executed and users should be shown a page with ten results.
-   Upon pressing the other, users should be taken to the page of one of the results.

## Installation & Usage

### Installation

-   clone or download the repo.
-   open terminal and navigate to `server` folder.
-   Run `npm install` to install server dependecies.
-   open terminal and navigate to `client` folder.
-   Run `npm install` to install client dependecies.


### Usage

-   Run `npm start` to launch the server.
-   Run `npm start` to launch the client.


## Technologies

### Frontend

-   HTML
-   CSS
-   JavaScript

### Backend

-   Javascript / NodeJs
-   NPM
    -   Express
    -   Cors
    -   Morgan
    -   Google-it
    -   Nodemon
    -   Jest
    -   Supertest

## API Endpoints

-   GET `/`
    -   returns `Hello World!`
-   GET `/search`
    -   requires `search` query parameter
    -   responsds with JSON:

```js
{
	results: [
		{
			title: 'string title',
			link: 'string href',
			snippet: 'string snippet',
		}, // ...
	];
}
```

## Wins & Challenges

### Wins

-   Finding Google-it simplified the back-end

### Challenges

## Licence

none
