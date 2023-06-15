# Frontend Mentor - Results summary component solution

This is my solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
#### mobile
![](/src/assets/images/mb.png)

#### desktop
![](/src/assets/images/dt.png)

### Links

- Solution URL: [solution URL](https://github.com/roodhouse/frontend-mentor-results-summary-component)
- Live Site URL: [live site URL](https://results.rugh.us)

## My process

### Built with

- HTML5, CSS
- Mobile-first workflow
- React
- Tailwind

### What I learned

My biggest issue with this challenge was getting the icons from the data file. I made it a lot harder than it needed to be and I simply could not figure out how to add the icons in the img tag and src attribute. The rest of the info for the data file was easy to add. In the end I did some backflips and used this code:

```
import Data from '../data.json'
import ReactionIcon from '../assets/images/icon-reaction.svg';
import MemoryIcon from '../assets/images/icon-memory.svg';
import VisualIcon from '../assets/images/icon-visual.svg';
import VerbalIcon from '../assets/images/icon-verbal.svg'

function TheData(){
    
    const dataArr = Data
    
    const allData = dataArr.map((data, index) => (
        <div key={index} id={data.category + 'Wrapper'} className='rounded-xl mb-4 px-4 py-4 flex justify-between'>
            <div id='imageHead' className='flex items-center'>
                <div id={data.category + 'ImageContainer'}>
                    <img src={(data.category === 'Reaction' && ReactionIcon) || (data.category === 'Memory' && MemoryIcon)  || (data.category === 'Visual' && VisualIcon) || (data.category === 'Verbal' && VerbalIcon) || console.log("nope")} alt={data.category} />
                </div>
                <div id={data.category + 'HeadContainer'} className='pl-3 font-["HankenGrotesk"] font-medium text-base leading-[21px md:text-lg md:leading-[23px]'>
                    <h3>{data.category}</h3>
                </div>
            </div>
            <div id={data.category + 'ScoreContainer'} className='font-["HankenGrotesk"] font-bold text-base leading-[21px] text-right text-darkNavy md:text-lg md:leading-[23px]'>
                <p>{data.score} <span className='opacity-50'>/ 100</span></p>
            </div>
        </div>

    ))
    return allData
} 
```

A second challenge was using the gradient in Tailwind. Implement a gradient with Tailwind is not so bad, but making it the exact pixel perfect replica proved difficult for me.

## Author

- Website - [my site](https://rugh.us)
- Frontend Mentor - [@roodhouse](https://www.frontendmentor.io/profile/roodhouse)
- LinkedIn - [John Rugh](https://www.linkedin.com/in/john-m-rugh/)
.
