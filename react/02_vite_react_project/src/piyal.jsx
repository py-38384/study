import React from 'react'
let reactElement = React.createElement(
    'a',
    {
        href:'https://google.com',
        target:'_blank'
    },
    'Click to goto google'
)
function Piyal(){
    return (
        <>
        <h3>Piyal is a good boy</h3>
        {reactElement}
        </>
        
    )
}
export default Piyal