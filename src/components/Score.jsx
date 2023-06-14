import React from 'react'

function Score() {
  return (
    <div id='scoreWrapper' className='w-full max-w-[375px] bg-gradient-to-b from-gradientOneFirst from-0% via-gradientOneSecond via-0.01% to-gradientOneThird to-100% shadow-[0_30px_60px_rgba(61,108,236,0.15)] rounded-[0_0_32px_32px] mb-6 md:mb-0 md:max-w-[368px] md:h-[512px] md:rounded-[32px]'>
        <div id='scoreContainer' className='flex flex-col justify-center items-center'>
            <div id='resultContainer' className='py-6 font-["HankenGrotesk"] font-bold text-lg leading-[23.45px] text-center text-lightBlue opacity-10'>
                <h1 id='result'>Your Result</h1>
            </div>
            <div id='yourScoreContainer' className='flex flex-col justify-center items-center bg-gradient-to-b from-gradientTwoFirst from-0% via-gradientTwoSecond via-100% to-gradientTwoThird to-100% w-[140px] h-[140px] pb-6 rounded-[50%]'>
                <div id='theScore' className='font-["HankenGrotesk"] text-[56px] leading-[72px] text-white pt-[42px] font-extrabold'>
                    <p>76</p>
                </div>
                <div id='outOf' className='font-["HankenGrotesk"] text-lightBlue text-base leading-[21px] opacity-[0.52] font-bold pb-7'>
                    <p>of 100</p>
                </div>
            </div>
            <div id='feedbackContainer' className='pt-6 pb-10'>
                <div id='feedbackHeading' className='text-white font-["HankenGrotesk"] font-bold text-2xl text-center pb-6'>
                    <h2>Great</h2>
                </div>
                <div id='feedbackNote' className='text-lightBlue font-medium text-base leading-[21px] text-center max-w-[260px]'>
                    <p>Your performance exceed 65% of the people conducting the test here!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Score