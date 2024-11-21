import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className=' h-screen flex flex-col items-center justify-center align-middle'>
        <Image
        src='/assets/icons/loader.svg'
        alt='loader'
        width={32}
        height={32}
        className='animate-spin'
        />
    </div>
  )
}

export default Loader