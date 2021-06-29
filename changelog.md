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

    []  create basic homepage
    []  create form for search bar
    []  fetch search results from backend
    []  stub results page

### Backend

    [X]  create basic api
    [X]  create / endpoint
    []  stub /search endpoint

## changes

### Frontend

### Backend

-   create initial files, dependencies.
-   create GET `/` end point
