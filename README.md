# Virtual Art Gallery

<p align="center">
    <img src=" " width=600>
</p>
<p align="center">
    Image generated using <a href="https://ui.dev/amiresponsive" target="_blank">https://ui.dev/amiresponsive</a>
</p>

## Project objective

Virtual Art Gallery is a social media website which allows for viual artists and afficionados of art to get together, interact and share their work and ideas. The primary objective of this site is to:
1) Let aspiring artists and creators of visual art (painting, drawing photography etc) to share and describe their work to the public.
2) Allow users of the site to view artwork, like and comment on artwork and each others posts. 
3) Provide a way for artists and other users to interact.
4) Let user review and provide feedback on published artwork.

## Table of contents
- [](#)
  * [Project Goals](#project-goals)
  * [Table of contents](#table-of-contents)
  * [User stories](#user-stories)
    + [Epics](#epics)
    + [User stories](#user-stories-1)
  * [Agile development methodology](#agile-development-methodology)
  * [Planning](#planning)
    + [Mockups](#mockups)
    + [Data models](#data-models)
  * [Design](#design)
    + [Colours](#colours)
    + [Fonts](#fonts)
  * [Features](#features)
    + [Landing page](#)
    + [Sign-up form](#sign-up-form)
    + [Sign-in form](#sign-in-form)
    + [Header](#header)
    + [CRUD functionality](#crud-functionality)
    + [Future improvements and features](#future-improvements-and-features)
      - [Short term future improvements](#short-term-future-improvements)
      - [Long term future features](#longer-term-future-features)
  * [Frameworks, libraries and dependencies](#frameworks--libraries-and-dependencies)
    + [React-Router-DOM](#react-router-dom)
    + [ReactDOM](#reactdom)
    + [Axios](#axios)
    + [React Bootstrap Icons](#react-bootstrap-icons)
    + [Custom hooks](#custom-hooks)
  * [Testing](#testing)
    + [Manual testing](#manual-testing)
    + [Validator testing](#validator-testing)
    + [W3C CSS validator](#w3c-css-validator)
    + [ESLint JavaScript validator](#eslint-javascript-validator)
    + [WAVE web accessability testing](#wave-web-accessability-testing)
    + [Lighthouse testing](#lighthouse-testing)
    + [Resolved bugs](#resolved-bugs)
    + [Unresolved bugs](#unresolved-bugs)
  * [Deployment](#deployment)
  * [Credits](#credits)
    + [Code](#code)
    + [Media](#media)
  * [Acknowledgements](#acknowledgements)


## User stories
All user stories and epics are listed in full in the [README for the API ](https://github.com/Dym077/drf-api02)

### Epics
The epics represent the main project parts that includes all related user stories. The epics were all started in the backlog, and then moved into the epics column, where they were elected according to priority(the most important were labelled with a must-have label and a milestone of priority one). During the start of the working process, the epics were moved into the "to-do" column, later to the "in progress" column and when they fill all acceptance criteria of the related user stiories, they were moved to the "done" column.

### User stories

## Agile development methodology

## Planning

### Mockups
#### Mobile wireframes

* Signup and signin page

<details>

![Mobile Signup](/documentation/mobile_signup.png)
![Mobile Signin](/documentation/mobile_signin.png)

</details>

* Landing page

<details>

![Mobile Landing](/documentation/mobile_landing.png)

</details>

* Profile page

<details>

![Mobile Profile](/documentation/mobile_profile.png)
![Mobil Edit Profile](/documentation/mobile_edit_profile.png)

</details>

* Reviews

<details>

![Mobile Reviews](/documentation/mobile_edit_review.png)

</details>

#### Desktop wireframes

* Signup and signup page

<details>

![Desktop Signup](/documentation/desktop_signup.png)
![Desktop Signin](/documentation/desktop_signin.png)

</details>

* Landing page

<details>

![Desktop Landing](/documentation/desktop_landing.png)

</details>

* Post feed

<details>

![Post feed](/documentation/desktop_feed.png)

</details>

* Profile page

<details>

![Profile Page](/documentation/desktop_profile.png)
![Edit Profile Page](/documentation/desktop_edit_profile.png)

</details>

* Comments

<details>

![Desktop Comments](/documentation/desktop_comment.png)

</details>

### Data models

## Design

### Colours

### Fonts

## Features

### Landing page

### Sign-up form

### Sign-in form


### CRUD functionality


### Future improvements and features

#### Short term future improvements

#### Long term future features


## Frameworks, libraries and dependencies


### React-Router-DOM


### ReactDOM

### Axios

### React Bootstrap Icons
- [React Bootstrap Icons](https://www.npmjs.com/package/react-bootstrap-icons) 


### Custom hooks

## Testing

### Manual testing


### Validator testing

### W3C CSS validator


### ESLint JavaScript validator


### Lighthouse testing

### Resolved bugs

### Unresolved bugs


## Deployment
Deployments to Heroku can be dome following theses steps:

- Fork or clone the repository in GitHub.
- If you have also cloned and deployed your own version of the backend API, you will need to ensure the value of `axios.defaults.baseURL` in `src/api/axiosDefaults.js` is set to the base URL for your API. Pull to your local development environment and push back to GitHub if necessary; otherwise, leave as is to use the original API.
- Log in to your Heroku account.
- Select 'Create new app' from the 'New' menu at the top right.
- Enter a name for the app and select the region you are located in.
- Select 'Create app'.
- Select the 'Deploy' tab at the top.
- Select 'GitHub' from the deployment method options to confirm you wish to deploy using GitHub. You may be asked to enter your GitHub password.
- Find the 'Connect to GitHub' section and use the search box to locate your repo.
- Select 'Connect' when you have found your repo.
- Optionally, you may choose the main branch under 'Automatic Deploys' and select 'Enable Automatic Deploys' if you want your deployed site to be automatically redeployed every time you push changes to GitHub.
- Find the 'Manual Deploy' section, choose 'main' as the branch to deploy and select 'Deploy Branch'.

When deployment is complete, you will be given a link to the deployed site.

## Credits

### Code

### Media

## Acknowledgements
