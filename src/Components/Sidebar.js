import React from 'react'
import Tab from './Tab'
import './Sidebar.css'

function Sidebar({t1, t2, t3, t4, t5, src}) {
    return (
        <div className="sidebar">
            <img 
                src={src}
                alt="oops"
            />
            <Tab text={t1} clicked/>
            <Tab text={t2}/>
            <Tab text={t3}/>
            <Tab text={t4}/>
            <Tab text={t5}/>
        </div>
    )
}

export default Sidebar
