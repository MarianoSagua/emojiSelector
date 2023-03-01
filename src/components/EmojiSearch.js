import React, { useState } from 'react'

const EmojiSearch = ({onSearch}) => {
    const [value, setValue] = useState("");

    const handleChange = (e)=>{
      const data = e.target.value;
      setValue(data);
      onSearch(e);
    }

  return (
    <div>
        <input type="text" onChange={handleChange} value={value} />
    </div>
  )
}

export default EmojiSearch