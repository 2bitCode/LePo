import React from 'react';
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'
import Body from './Components/Body'
import './Government.css'

function Investor() {
    return (
        <div className="government">
            <div className="gov-left">
                <Sidebar 
                    src="https://png.pngtree.com/png-vector/20191104/ourmid/pngtree-businessman-avatar-cartoon-style-png-image_1953664.jpg"
                    t1 = "Dashboard"
                    t2 = "Invest"
                    t3 = "Learning Resources"
                    t4 = " Your Portfolio"
                />
            </div>
            <div className="gov-right">
                <Header text="Investor" />
                <Body 
                    c11="Serivce-Based Business"
                    c21="Buy Equity"
                    c31="Lend Money"
                    c41="Investment Groups"
                    btn={false}
                    invest
                />
                <button>Load More</button>
            </div>
        </div>
    )
}

export default Investor
