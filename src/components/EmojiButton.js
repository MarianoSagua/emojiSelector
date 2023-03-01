import React from 'react'
import { Button } from 'react-bootstrap'

const EmojiButton = ({ emoji, onClick }) => {

    const handleClick = ()=>{
        onClick(emoji);
    }

  return (
    <div>
        <Button style={{margin: "10px", background: "none", border: "none"}} onClick={handleClick} variant='dark'>{emoji.symbol}</Button>
    </div>
  )
}

export default EmojiButton