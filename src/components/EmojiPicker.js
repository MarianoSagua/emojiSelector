import React, { forwardRef, useState } from 'react'
import { Button } from 'react-bootstrap';
import { data as emojiList } from "./data";
import EmojiButton from './EmojiButton';
import EmojiSearch from './EmojiSearch';

const EmojiPicker = (props, inputRef) => {
    const [isOpen, setIsOpen] = useState(false);
    const [emojis, setEmojis] = useState(emojiList);
    
    const handleSearch = (e)=>{
        const valor = e.target.value.toLowerCase();

        if(!!valor){
            const search = emojiList.filter((emoji)=>{
                return(
                    emoji.name.toLowerCase().includes(valor) || emoji.keyword.toLowerCase().includes(valor)
                )
            });

            setEmojis(search);
        }else{
            setEmojis(emojiList);
        }
    }

    const handleClickOpen = ()=>{
        setIsOpen(!isOpen);
    }

    const handleOnCLickEmoji = (emoji)=>{
        const cursorPosition = inputRef.current.selectionStart;
        const text = inputRef.current.value;
        const prev = text.slice(0, cursorPosition);
        const next = text.slice(cursorPosition);

        inputRef.current.value = prev + emoji.symbol + next;
        inputRef.current.selectionStart = cursorPosition + emoji.symbol.length;
        inputRef.current.selectionEnd = cursorPosition + emoji.symbol.length;
        inputRef.current.focus();
    }

  return (
    <div>
        <Button id='btnOpen' onClick={handleClickOpen}>😀</Button>

        {isOpen ? (
            <div className='emojiPickerSelector'>
                <EmojiSearch onSearch={handleSearch}/>
                <div className='emojisSelector'>
                    {emojis.map((item, idx)=>{
                        return(
                            <EmojiButton key={idx} emoji={item} onClick={handleOnCLickEmoji}/>
                        )
                    })}
                </div>
            </div> 
        ) : ("")}
    </div>
  )
}

export default forwardRef(EmojiPicker); 