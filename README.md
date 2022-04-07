# Sanity-Gatsby-test

A project made to learn the basics of Sanity and Gatsby. I followed the tutorial of [Learn With Jason](https://www.youtube.com/watch?v=SLGkyodumKI&t=1739s).
Check out https://www.sanity.io/ and https://www.gatsbyjs.com/ for more information.

## Table of contents

- [General info](#general-info)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Inspiration](#inspiration)
- [Contact](#contact)

## General info

How do Sanity and Gatby work together

## Screenshots

![Example screenshot](./planning/screenshot.jpg)

## Technologies

- Node 14.16.0
- Sanity 2.29.3
- Gatsby 2.1.105
- VSC code
- JavaScript

## Setup:

### backend
- in `sanity.json` change the `projectId`  
- `npm install -g @sanity/cli`   
- `cd backend`   
- `npm run start` 
 
You can view your content Studio compiled in the browser.    
⠀   
http://localhost:3333   
⠀   

### frontend
In `gatsby-config.js` use the `projectId` of Sanity  
- `cd ..` 
- `nvm use`
- `cd frontend`
- `npm run develop`

You can now view gatsby-starter-default in the browser.    
⠀   
  http://localhost:8000/   
⠀   
View GraphiQL, an in-browser IDE, to explore your site's data and schema.   
⠀   
  http://localhost:8000/___graphql    

## Code Examples

```js
export const query = graphql`{
    allSanityProject {
      edges {
        node {
          title
          description
          slug
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }  
  }
`;
```

## Features

List of features ready and Todos for future development

- backend made with Sanity
- frontend made with gatsby

To-do list:

- connect to sanity.studio
- use the Sanity projectId in Gatsby

## Status

Project is: _in progress_

## Inspiration

Build a Portfolio Site with Sanity.io and Gatsby — Learn With Jason

## Contact

By Bermarte
