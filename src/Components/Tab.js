import React from 'react'
import './Tab.css'
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';

function Tab({text, clicked}) {
    return (
        <div className={`tab ${clicked && 'clicked'}`}>
            <a href={text=="Commute" && "https://discord.gg/My8w98Wm5D"}>{text}</a>
        </div>
    )
}

export default Tab
