# Toronto Waste Lookup [![Build Status](https://travis-ci.org/nursh/Toronto-Waste-Lookup.svg?branch=master)](https://travis-ci.org/nursh/Toronto-Waste-Lookup)

## Description

Toronto Waste Lookup is a simple web application that looks up items based on keywords entered into a search bar.

The items to be searched are stored in a json file where they are queried using a GraphQL API. The API is implemented using Apollo-Server on a NodeJS(express) server written in  TypeScript. The front-end uses React and Redux for handling state and Apollo-Client for quering the backend API. The styling was done using SASS.

The user is able to enter a keyword for searching the backend API for possible matches. The backend returns a list of matching items or nothing which are rendered. The search results contain a title and a body field, where the title field is rendered with a star beside it. The star shows the status of the item.

A grey star means the item is not contained in the favourites list while a green star means the item is in the favourites list. When a grey star is clicked, it is added to the favourites list. When a green star is clicked, it is removed from the favourites list. The favourites list is maintained by redux and is rendered in the favourites section

## Tools 

* React (create-react-app)
* Redux
* Apollo-Client (front-end GraphQL)
* Sass - for styling front-end
* Apollo-Server (backend GraphQL)
* TypeScript
* NodeJS - Express
* Nginx for reverse proxy between frontend and backend
* TravisCI for Continuous Integration
* Docker

## Deployment Links

* [Toronto Waste Lookup](http://torontowastelookup-env.hfm2tumbem.us-east-2.elasticbeanstalk.com/)
* [GraphQL API](http://torontowastelookup-env.hfm2tumbem.us-east-2.elasticbeanstalk.com/graphql)