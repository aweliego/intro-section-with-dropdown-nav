<p align="center">
  <img src="./src/images/gif.gif" alt="animated" />
</p>

# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- [Solution on Frontend Mentor](https://www.frontendmentor.io/solutions/intro-section-and-dropdown-nav-with-react-typescript-and-material-ui-g190sKeXHr)
- [Live Site](https://intro-section-with-drop-down-nav.netlify.app/)

## My process

- I first scaffolded the components and customized the Material UI theme. Then I went on with the creation and styling of the navbar and dynamically creating the nav items.
- Having the drop-down menus of the navbar fully functional was the next step, that part took a lot of figuring out. I created logic to dynamically create a drop-down menu if the category required one, assign the correct sub items to each menu, as well as changing the direction of the arrow icon of each drop-down based on their state.
- I continued with building the sidebar/drawer and its main open/close functionality, and adding some types to my previous work.
- I then decided to refactor the way the nav items data was organised and to extract the sidebar to a different component.
- At this point I realised that I was starting to, or was about to have some duplicate functions in the navbar and sidebar components. So I decided to add a React context to centralise all the functionality in one place. The typing part took quite some time here, so I took a step back to check out some tutorials on React Context with TypeScript, before going back to my project.
- Another faulty behaviour of the drop-down menus previously working well, which actually happened after I refactored the code earlier, caught my attention for a while. Turned out it resulted from all the back and forth with refactoring, commenting out code and trying different approaches, making me lose sight of an important detail causing the strange behaviour. Oh well!
- Once the bugs were fixed and the kernel of the context was ready, I started migrating all functions to the context and generally made sure all the data flowed from the context to other components. I also refactored a lot of states and kept on typing the context more and more as I added to it.
- With that done, I could move to the drop-down menus in the sidebar and finish up the styling there.
- Eventually, came the time to create the hero section and polish up all the styles and responsiveness.

### Built with

- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - For typing
- [Material UI](https://mui.com/core/) - React UI library

### What I learned

The biggest takeaways from this project is the hands-on practice I got with Material UI, React Context and TypeScript.

MUI is a library we used at my work, and coming from having handled styles mainly with pure CSS and having only poked a little bit at Bootstrap, the concept of having ready-to-use React components was in practice brand new to me - and I must say not very appealing. So at first, I was quite reluctant to use such library, but since I had to be comfortable with it at work, I decided to give it a go. I'm glad I did, as it turned out less convoluted than I had imagined. I'm not sure I would use it for personal purposes or to make a very unique website, but once you get the hand of it I can see how much time it saves and the result is very clean.

I was eager to learn more about React Context and followed some helpful follow-along tutorials before I decided to use it in this challenge. The concept was I thought fairly easy to grasp, but what I wasn't prepared for was how complex it would be to use it in combination with TypeScript! I even thought of doing away with one or the other because it was such a can of worms. I watched many tutorials and stared a lot of my screen, and at some point things unlocked themselves. Even if this was a small project, I think using context still benefited the readability of the code and its reusability.

This challenge was also a big step forward feeling less overwhelmed about TypeScript. I had to revisit the basics many times and I took the time to deepen my understanding on how to use TypeScript with React through various tutorials which were incredibly valuable. Even if I still find TypeScript a bit daunting (and sometimes a real hassle), I have now a much better sense of how to use it in a React app and I feel more confident about using it in future projects.

### Continued development

For future projects, I want to keepfocusing on React with TypeScript.

### Useful resources

- [The Net Ninja's Material UI Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58) - I followed along this tutorial prior to getting starting with the challenge. Although I'm using MUI v5 in the project and the tutorial is using MUI v4, it helped me demystify the library a lot, and the Net Ninja is a really gifted instructor.
- [Weibenfalk](https://www.youtube.com/@Weibenfalk) - All his tutorials on React/TypeScript and React context/TypeScript helped me getting unstuck and seeing real use cases was key!
- [Code 15 React Projects](https://www.youtube.com/watch?v=a_7Z7C_JCyo&ab_channel=freeCodeCamp.org) - Yet again the projects created by John Smilga helped me so much, in particular the ones using React Context, which is how I got my very first glimpse of the concept!
- [bobbyhadz blog](https://bobbyhadz.com/) - Everytime I would stumble upon a TypeScript error (which was a lot), I would google it and this is one of the first results Google would show. I found it broke down each error clearly and it helped me keep my sanity with TypeScript.
