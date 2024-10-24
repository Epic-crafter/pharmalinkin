import React from 'react'
import Image from 'next/image'
import coinbase from "../../assets/coinbase.jpg"
import spotify from "../../assets/spotify.jpg"
// import slack from "../../assets/slack.jpg"
import slack from "../../assets/slack.jpg"
import adobe from "../../assets/adobe.jpg"
import webflow from "../../assets/webflow.jpg"
import zoom from "../../assets/zoom.jpg"

const TrustedBy = () => {
  return (
    <div className='lg:px-32 px-12 py-8 text-center flex flex-col items-center space-y-8 lg:mx-0 mx-auto'>
        <h2>Trusted by 4000+ companies</h2>
        <div className='flex justify-between items-center w-full xs:space-x-2'>
            <Image src={coinbase} alt='' className='lg:w-24 w-16' />
            <Image src={spotify} alt='' className='lg:w-24 w-16'/>
            <Image src={slack} alt='' className='lg:w-24 w-16'/>
            <Image src={adobe} alt='' className='lg:w-24 w-16'/>
            <Image src={webflow} alt='' className='lg:w-24 w-16'/>
            <Image src={zoom} alt='' className='lg:w-20 w-12'/>

            </div>
    </div>
  )
}

export default TrustedBy