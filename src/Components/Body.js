import React from 'react'
import Box from './Box'
import './Body.css'

function Body({h1, c11, c12, c13, c14, h2, c21, c22, c23, c24, h3, c31, c32, c33, c34, h4, c41, c42, invest, btn}) {
    return (
        <div className="body">
            <div className="col1">
                <Box 
                    head={h1}
                    c1={c11}
                    c2={c12}
                    c3={c13}
                    c4={c14}
                    invest={invest}
                />
                <Box 
                    head={h2}
                    c1={c21}
                    c2={c22}
                    c3={c23}
                    c4={c24}
                    invest={invest}
                />
            </div>
            <div className="col2">
                <Box 
                   head={h3}
                   c1={c31}
                   c2={c32}
                   invest={invest}
                />
                <Box 
                    head={h4}
                    c1={c41}
                    btn={btn}
                    invest={invest}
                />
            </div>
        </div>
    )
}

export default Body
