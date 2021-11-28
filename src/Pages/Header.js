import React from 'react'

const Header = () => {
    return (
        <div className="bg-blue-500 h-12 text-center flex flex-row items-center justify-end">
            <button className="font-medium bg-white rounded p-2  text-red-500 mr-10 ">Results</button>
            <button className="font-medium bg-green-500 rounded p-2 text-white  mr-10 ">Candidates</button>
        </div>
    )
}

export default Header
