const TopWords = (props) => {
     const baseline = (250/props.base)*100;
    
     const value = Object.values(props.data)[0];

     const graphHeight = (baseline * value)/100;
    
     const barpos = baseline-graphHeight;
    return (
        <div className='word-container'>
        <div className='count'>
            {Object.values(props.data)}
        </div>
            <svg>
                <rect className='bar' x='0' y={barpos} width='100%' height={graphHeight}/>
                <text className='text'  x="50%" y='10'>{Object.keys(props.data)}</text>
            </svg> 
      
        <style jsx>{`
            .word-container {
                flex-basis:60px;
                height:100%;
                max-height:300px;
            }
            .bar {
                position:absolute;
                bottom:0;
                color:white;
                border-style:solid;
                border-color:black;
                background-color:${props.color};
                width:60px;
            }
          
            svg{
               fill:${props.color};            
               width:100%;
               max-width:60px;
               height:100%;
               writing-mode: vertical-lr;
            }
            .count {
                height:50px;
                color: #fff;
                text-align:center;
                padding-top: 10px;
            }
            .text {
                fill:#ccc;
                font-size:1.3em;
            }
                
            `}</style>
        </div>
    )
}
export default TopWords;