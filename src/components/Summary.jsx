import React from 'react'
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

function Summary() {

  return (
    <div id='summaryWrapper' className='w-full max-w-[375px] mb-[30px] md:mb-0 md:max-w-[368px] md:h-[512px] md:pt-[43px]'>
        <div id='summaryContainer' className='flex flex-col mb-6 mx-[30px] md:ml-0 md:mr-10 md:mb-10'>
            <div id="summaryHeading" className='flex flex-col items-start pl-[2px] text-darkNavy font-bold text-lg leading-[23px] font-["HankenGrotesk"] mb-6 md:text-2xl md:mb-[28px]'>
                <h2>Summary</h2>
            </div>
            <div id="summaryAttr">
                <div id="reactionContainer">
                    {TheData()}
                </div>
            </div>
        </div>
        <div id='continueContainer' className='text-white bg-darkNavy font-bold text-lg leading-[23px] font-["HankenGrotesk"] flex flex-col justify-center items-center rounded-[128px] mx-[30px] md:ml-0 md:mr-10 hover:bg-gradient-to-b from-gradientOneFirst from-0% via-gradientOneSecond via-0.01% to-gradientOneThird to-100% cursor-pointer'>
            <button className='py-4'>Continue</button>
        </div>
    </div>
  )
}

export default Summary