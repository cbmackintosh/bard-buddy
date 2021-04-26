# Bard Buddy

<img src="https://img.shields.io/badge/LinkedIn-cameron--mackintosh-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0FBBD6"/>
<img src="https://img.shields.io/badge/Github-cbmackintosh-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>

## Abstract:

Bard Buddy is a study tool for high school and undergraduate students studying Shakespeare. The app organizes and displays the complete works of William Shakespeare, including Sonnets and Poems. From the home page, the user is greeted with a portrait of Shakespeare as well as a randomly selected quote from one of his plays, generated using the <a href="https://documenter.getpostman.com/view/13762589/TVmS6Zyj">Shakespeare Quotes API.</a> From here the user can explore Shakespeare's work via one of the four major genre buttons at the bottom of the page: histories, comedies, tragedies and poetry.

<img width="1431" alt="Screen Shot 2021-04-26 at 3 47 30 PM" src="https://user-images.githubusercontent.com/72054706/116155110-e6afe080-a6a6-11eb-93ca-42c91e06b10c.png">

Furthermore, users are able to click on individual lines of any work to highlight them, which will then save the selected passage to the Saved Passages section for later reference. Lines can be un-highlighted and unsaved by clicking on them again.

<img width="1435" alt="Screen Shot 2021-04-26 at 3 47 49 PM" src="https://user-images.githubusercontent.com/72054706/116155177-fd563780-a6a6-11eb-9136-df7d3e66b6d5.png">

<img width="1434" alt="Screen Shot 2021-04-26 at 3 47 59 PM" src="https://user-images.githubusercontent.com/72054706/116155221-0b0bbd00-a6a7-11eb-94ab-45e96f81c6d3.png">

The App was built with React and consumes an Express API which I built specifically for the project. Originally I had planned to use the Folger Shakespeare Library's free public API, but due to an outage on their site lasting several days I was forced to seek alternatives in order to meet the deadline for this project. I found a downloadable database containing all of Shakespeare's work at the <a href="https://www.opensourceshakespeare.org/downloads/">Open Source Shakespeare</a> website, which I then converted from SQL to JavaScript using postGres to facilitate app deployment on Heroku. The Bard Buddy API repo can be found here:
https://github.com/cbmackintosh/BardBuddy-API

## Installation Instructions:

## Technologies Used:

* ![React](https://camo.githubusercontent.com/4e4a3b5c3e9c00501ec866e2f2466c5a6032f838aca5f2cf3b14450e39e8a2f0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742532302d2532333230323332612e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642)
* ![ReactRouter](https://camo.githubusercontent.com/4f9d20f3a284d2f6634282f61f82a62e99ee9906537dc9859decfdc9efbb51ec/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f526f757465722d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d72656163742d726f75746572266c6f676f436f6c6f723d7768697465)
* ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
* ![Webpack](https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black)
* ![Cypress](https://img.shields.io/badge/cypress-04C38E.svg?&style=for-the-badge&logo=cypress&logoColor=white)
* ![Node](https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white)

## Future iterations:
