import React from 'react'

const Settings = () => {
  return (
    <div className='flex flex-col w-full h-full justify-around lg:flex-row gap-4 p-4'>
        <div>
            <h1 className='text-2xl font-bold'>Settings</h1>
            <h2>account management</h2>
        </div>

        <div>
            <p>settings content</p>
            <p>account management content</p>
        </div>
    </div>
  )
}

export default Settings