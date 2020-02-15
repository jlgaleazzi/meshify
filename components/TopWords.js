const TopWords = (props) => {
    
    return (
        <div className='word-container'>
            <svg viewBox='0 0 80 20'>
                <text  y='50%'>{`${Object.keys(props.data)} : ${Object.values(props.data)}` }</text>
                
            </svg> 
           
        
        <style jsx>{`
            .word-container {
                color:white;
                border-style:solid;
                border-color:black;
                background-color:${props.color};
                width: ${Number(Object.values(props.data)/props.total)*100}%;
                height:100%;
            }
            svg{
               width:100%;
               height:100%;
            }
            `}</style>
        </div>
    )
}
export default TopWords;