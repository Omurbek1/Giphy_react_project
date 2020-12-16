import React, { useState, useEffect } from 'react'
import './App.css'
import Search from './component/Seacrh';
import { API, KEY } from "./service";
import List from './component/List'

export default function App() {
    const [data, setData] = useState()
    useEffect(() => {
        searchByName('random')
    }, [])
    const searchByName = async (name) => {
        let resp = await fetch(API + name + KEY)
        let data = await resp.json()
        setData(data.data)
    }
    return (
        <div>
            <Search
                searchByName={searchByName}
            />

            <List
                data={data}
            />
        </div>
    )
}
