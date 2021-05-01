import React from 'react'
import './Tab.css'
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';

function Tab({text, clicked}) {
    return (
        <div className={`tab ${clicked && 'clicked'}`}>
            {text}
        </div>
    )
}

export default Tab
