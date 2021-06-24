import React from 'react'

function SideDrawer({styling,clickHandler, show}) {
    return (
        <section className={styling} style={{
            transform: show ? "translateY(0)" : "translateY(-100vh)",
            opacity: show ? "1" : "0",
          }}>
            <span onClick={clickHandler}>&#215;</span>
            <ul>
                <li>personification</li>
                <li>personification</li>
                <li>personification</li>
                <li>personification</li>
            </ul> 
        </section>
    )
}

export default SideDrawer
