import React from 'react'

function TextBox({text, col}) {
  return (
        <div className="border-2 border-gray-500
          py-4 px-8 rounded-2xl ml-4"
        >
          <p className={`text-6xl font-semibold ${col}`}>{text}</p>
        </div>
  )
}

export default TextBox

