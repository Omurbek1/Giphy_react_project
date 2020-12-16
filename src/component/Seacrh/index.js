import React, { useState } from 'react'


export default function Search(props) {
    const [value, setValue] = useState(' ')
    const getValueOnInput = event => {
        event.preventDefault()
       
        props.searchByName(value)
        setValue(' ')
    }
    return (
        <div>
            <form onSubmit={getValueOnInput}>
                <input type="text"
                    value={value}
                    onChange={
                        (event) => {
                            setValue(event.target.value)
                        }} />
                <button>Search</button>
            </form>
        </div>
    )
}
