function changeBodyColor(event,BGcolor){
    const TargetElement = event.target
    TargetElement.style.boxShadow = 'none'
    setInterval(()=>{
        TargetElement.style.boxShadow = '2px 3px 5px rgba(0,0,0,0.15)'
    },150)
    document.body.style.backgroundColor = BGcolor
}
function ColorButton({innerText = 'dark',color = '#242424',textColor = '#fff'}){
    return(
        <button onClick={(event)=>changeBodyColor(event,color)} style={{backgroundColor: color,color: textColor,padding: '10px',margin: '0 10px', borderRadius: '10px', boxShadow: '2px 3px 5px rgba(0,0,0,0.15)'}}>{innerText}</button>
    )
}
export default ColorButton