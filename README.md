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
    + [Header](#header)
    + [Landing page](#landing-page)
    + [Sign-up form](#sign-up-form)
    + [Sign-in form](#sign-in-form)
    + [Home Page](#home-page)
    + [Upload Posts](#upload-posts)
    + [Edit Posts](#edit-posts)
    + [Delete Posts](#delete-posts)
    + [Like Posts](#like-posts)
    + [Comments Form](#comments-form)
    + [Edit Comments](#edit-comments)
    + [Delete Comments](#delete-comments)
    + [Profile Page](#profile-page)
    + [Profile Image](#profile-image)
    + [Edit Profile](#edit-profile)
    + [Follow Profiles](#follow-profiles)
    + [Artist Profile](#artist-profile)
    + [Top Artists](#top-artists)
    + [Reviews](#reviews)
    + [Navigation and Pagination](#navigation-and-pagination)
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

For this project I used a method called Agile to keep track of my progress. For this I sed a combination of issues divided into epics and user stories.

The epics describe the most crucial features for the project and they have also been rated accordning to importance, with the most important epics being labeled with a milestone called "priority one". 

The user stories are all related to the epics and have themselves been divided into priority, using the MoSCoW method. This means that the most important features have the label "must-have", a less important but still important feature has the "should-have"-label, an even less important but nice-to-have feature has the "could-have"- label and a feature that has little to no impact on the project will be labeled with a "won't-have"- label.

## Planning

### Mockups

Initially I sketched wireframes on paper and later I made more detailed ones in Balsamiq to get an overview over the features which had the "must-have"- label assigned to them. This app was developed with the "mobile first" approach, which means it is highly accessible on a mobile device. 

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

Before the building of the front end part of this project, the data models were planned for the back end. The documentation for these models can be found here: [Virtual Art Gallery API](https://github.com/Dym077/drf-api02)

## Design

### Colours

### Fonts

## Features

### Header
The header contains the logotype and the navbar.

### Landing page
The landing page is the first page the user will see when navigating to the site.
The menu and the feed are visible on the page.

### Sign-up form
With the sign-up form, a new user can provide a unique username and a password. The user will be asked to confirm the password and can then use the sign-in form to access the page.

### Sign-in form
A returning user can use the sign-in form to access the page. By entering the username and the password, the user will be able to login.

### Home page
This is the page the user will be directed to after signing up or signing in. It looks alot like the landing page, but all the features are available to the signed in user. 

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

The DOM returns a NaN message when a user submits a comment on another user's post. The reason for this error is not to be found in the front end, but should be caused when the integer from the API isn't properly read by the DOM, believing it to be a string rather than an integer. The culprit was revealed to be the serializer in the Postserializer model for the backend API missed a comments_count field so the Post model was not annotated with comments_count field. Thanks to help from tutor support we were able to pinpoint this bug and fix it.

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
