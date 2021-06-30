# Changelog

## Feature plan

### Frontend

-   pages:
    -   Homepage
        -   Logo
        -   Search bar
        -   Search button
        -   I'm feeling lucky
        -   nav bar
        -   footer
        -   search suggestion feature
    -   Results Page
        -   header
            -   logo
            -   search bar (filled with search request)
        -   10 results
        -   related searches
        -   search info box (right hand side)

### Backend

api endpoints:

-   GET /
    -   return "hello world"
-   GET /search
    -   requires a query string: search
    -   fetch from some search api
    -   process search results
    -   return processed results

## TODO

### Frontend

    [X]  create basic homepage
    [X]  create form for search bar
    [X]  fetch search results from backend
    [X]  stub results page
    []  impliment search buttons functionality
    []  style footer
    []  add non dead links to homepage
    []  style results page

### Backend

    [X]  create basic api
    [X]  create / endpoint
    [X]  stub /search endpoint
    []   write more test

### Misc

    [X]  write readme
    []  update changelog

## changes

### Frontend

### Backend

-   create initial files, dependencies.
-   create GET `/` end point
-   create GET `/search` using `express.Router()`
-   create `search.js` model using `npm google-it` module
