import React, { useRef } from 'react'
import EmojiPicker from './EmojiPicker'

const EmojiPickerInput = () => {
    const refInput = useRef(null);

  return (
    <div className='container__emojiPicker'>
      <h1>Emoji Selector</h1>
      <p>Select your favorite emoji and added.</p>

      <div className='container__emojiPicker--input'>
        <input ref={refInput} type="text" />
        <EmojiPicker id="emojiPicker" ref={refInput} />
      </div>
    </div>
  )
}

export default EmojiPickerInput