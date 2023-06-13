import React from 'react'
import Data from '../data.json'

function theData(){
    const dataArr = Data
    const allData = dataArr.map((data, index) => (
        <div key={index} id={data.category + 'Wrapper'} className='rounded-xl mb-4 px-4 py-4 flex justify-between'>
            <div id='imageHead' className='flex items-center'>
                <div id={data.category + 'ImageContainer'}>
                    <img src={data.icon} alt={data.category} />
                </div>
                <div id={data.category + 'HeadContainer'} className='pl-3 font-["HankenGrotesk"] font-medium text-base leading-[21px]'>
                    <h3>{data.category}</h3>
                </div>
            </div>
            <div id={data.category + 'ScoreContainer'} className='font-["HankenGrotesk"] font-bold text-base leading-[21px] text-right text-darkNavy'>
                <p>{data.score} <span className='opacity-50'>/ 100</span></p>
            </div>
        </div>

    ))
    return allData
} 

function Summary() {

  return (
    <div id='summaryWrapper' className='mx-[30px] mb-[30px]'>
        <div id='summaryContainer' className='flex flex-col mb-6'>
            <div id="summaryHeading" className='flex flex-col items-start pl-[2px] text-darkNavy font-bold text-lg leading-[23px] font-["HankenGrotesk"] mb-6'>
                <h2>Summary</h2>
            </div>
            <div id="summaryAttr">
                <div id="reactionContainer">
                    {theData()}
                </div>
            </div>
        </div>
        <div id='continueContainer' className='text-white bg-darkNavy font-bold text-lg leading-[23px] font-["HankenGrotesk"] flex flex-col justify-center items-center rounded-[128px]'>
            <button className='py-4'>Continue</button>
        </div>
    </div>
  )
}

export default Summary