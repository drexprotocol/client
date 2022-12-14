import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import notify from '../../utils/notify'
import PriceActionGraph from './Misc/PriceActionGraph'

// Headings : DeFi -> Derivatives -> NFTs -> Perpetuals -> Crypto
const headings = [
  { label: 'DeFi', color: 'text-primary' },
  { label: 'Derivatives', color: 'text-secondary' },
  { label: 'NFTs', color: 'text-tertiary' },
  { label: 'Perpetuals', color: 'text-primary' },
  { label: 'Crypto', color: 'text-secondary' },
  { label: 'DeFi', color: 'text-primary' },
]

const styles = {
  headingText: 'font-thin ',
}

// https://static.vecteezy.com/system/resources/previews/002/007/846/mp4/shiny-wave-futuristic-technology-animation-abstract-background-free-video.mp4

const Section_1 = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col py-8 md:py-12 h-full md:h-[90vh]">
      <div className='grid grid-cols-1 md:grid-cols-2 w-full h-full gap-y-8 md:gap-y-16'>
        <div className='relative flex flex-col gap-y-8 h-fit'>
          <div className='flex flex-col tracking-wider font gap-y-4 text-[2.5rem] md:text-7xl'>
            <h1>Maximize</h1>
            <h1>the potential</h1>
            <h1 className='scroller'>of&nbsp; <span className='font-light'>{headings.map((heading, index) => {
              return (
                <span key={index}>
                  <span className={heading.color}>{heading.label}</span>
                  <br />
                </span>
              )
            })}</span>
            </h1>
          </div>
          <div className='flex flex-col gap-y-4'>
            <p className='md:text-2xl text-gray-400 font-light tracking-tight'>
              D-Rex is a decentralized derivatives exchange offering <span>Power Perpetuals</span> for your favorite cryptocurrencies
            </p>
          </div>
          <div className='flex flex-col justify-end md:h-fit w-full md:w-fit'>
            <button
              className='text-lg md:text-2xl font-light text-white w-fit md:w-full rounded px-8 py-3 transition-all hover:scale-105 duration-300 ease-in bg-primary hover:shadow-lg hover:shadow-teal-800'
              onClick={(e) => {
                e.preventDefault()
                router.push('/#coming-soon')
              }}
            >
              <h4>Join Waitlist</h4>
            </button>
          </div>
          {/* <div className="h-full opacity-50 -z-10 md:hidden">
            <video src="https://static.vecteezy.com/system/resources/previews/002/007/846/mp4/shiny-wave-futuristic-technology-animation-abstract-background-free-video.mp4" loop autoPlay muted></video>
          </div> */}
        </div>
        <div className='hidden md:flex flex-col w-[600px] h-[500px] justify-start p-2 bg-red-1000'>
          <PriceActionGraph options={options} />
        </div>
        <div className='flex md:hidden flex-col w-full h-[300px] justify-start mt-12 p-2 bg-red-1000'>
          <PriceActionGraph options={mobileOptions} />
        </div>
      </div>
    </div>
  )
}


const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: '% Change in Price',
        color: 'white',
        font: {
          family: 'Quantico',
          size: 20,
          weight: 'bold',
          lineHeight: 1.2,
        },
      },
      grid: {
        borderColor: '#d4d4d8',
        borderWidth: 4,
      },
      ticks: {
        color: 'white',
        font: {
          family: 'Comic Sans MS',
          size: 10,
          weight: 'bold',
          lineHeight: 1.2,
        },
      },
    },
    y: {
      min: -400,
      display: true,
      title: {
        display: true,
        text: '% Return',
        color: 'white',
        font: {
          family: 'Quantico',
          size: 20,
          weight: 'bold',
          lineHeight: 1.2,
        },
      },
      grid: {
        borderColor: '#d4d4d8',
        borderWidth: 4,
      },
      ticks: {
        color: 'white',
        font: {
          family: 'Comic Sans MS',
          size: 10,
          weight: 'bold',
          lineHeight: 1.2,
        },
      },
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        font: {
          family: 'Quantico',
          size: 20,
          weight: 'bold',
          lineHeight: 1.2,
        },
        color: 'white',
      },
    },
  },
};


const mobileOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: '% Change in Price',
        color: 'white',
        font: {
          family: 'Quantico',
          size: 15,
          weight: 'bold',
          lineHeight: 1.2,
        },
      },
      grid: {
        borderColor: '#d4d4d8',
        borderWidth: 4,
      },
      ticks: {
        color: 'white',
        font: {
          family: 'Comic Sans MS',
          size: 10,
          weight: 'bold',
          lineHeight: 1.2,
        },
      },
    },
    y: {
      min: -400,
      display: true,
      title: {
        display: true,
        text: '% Return',
        color: 'white',
        font: {
          family: 'Quantico',
          size: 15,
          weight: 'bold',
          lineHeight: 1.2,
        },
      },
      grid: {
        borderColor: '#d4d4d8',
        borderWidth: 4,
      },
      ticks: {
        color: 'white',
        font: {
          family: 'Comic Sans MS',
          size: 10,
          weight: 'bold',
          lineHeight: 1.2,
        },
      },
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        font: {
          family: 'Quantico',
          size: 12,
          weight: 'bold',
          lineHeight: 1.2,
        },
        color: 'white',
      },
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    //   color: 'white',
    //   font: {
    //     family: 'Comic Sans MS',
    //     size: 20,
    //     weight: 'bold',
    //     lineHeight: 1.2,
    //   },
    // },
  },
};

export default Section_1