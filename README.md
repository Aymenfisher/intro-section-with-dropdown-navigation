# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshots
### Desktop: 
![Desktop 1](./screenshots/desktop-1.png)
![Desktop 2](./screenshots/desktop-2.png)
![Mobile 1](./screenshots/mobile-1.png)
![Mobile 2](./screenshots/mobile-2.png)
![Mobile 3](./screenshots/mobile-3.png)



### Links

- Solution URL: [Solution URL](https://your-solution-url.com)
- Live Site URL: [Live site](https://aymenfisher.github.io/intro-section-with-dropdown-navigation)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Responsive Design 
- Media Queries
- JavaScript DOM



### What I learned

- Creating Dropdown Menus By :
  - Making their position Absolute, so we can show / hide them and position them.

    ```css
    .dropdown-menu {
        padding: 15px 20px;
        position: absolute;
        border-radius: 10px;
        top: calc(100% + .5rem);
        background-color: white;
        box-shadow: 0px 4px 10px 0px rgb(201, 200, 200);
        display: grid;
        gap: 10px;
        display: none; /* will be changed onclick */
    }
    ```
- Get the element's next Sibling with the DOM :

    ```js
        let menu = e.target.nextElementSibling // the dropdown menu is the next sibling 
    ```
- Get the computed CSS Value : 
    ```js
    let menuComputedDisplay = window.getComputedStyle(menu).display;
    ```


## Author

- Github - [Aymen Boudabia](https://github.com/Aymenfisher)
- Frontend Mentor - [@aymenfisher](https://www.frontendmentor.io/profile/aymenfisher)
- Linkedin - [Aymen Boudabia](https://www.linkedin.com/in/aymen-boudabia/)

