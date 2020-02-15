import TopWords from './TopWords'
const WordVisualizer = (props) => {
    const colors = ['#80FF00','#92FF38','#A1FF6B','#2E5C00','#3D6129',
    '#376115','#54A800','#63AD26','#346900','#3F6E18',
    '#214200','#294710','#63AD26','#346900','#3F6E18',
    '#214200','#294710','#63AD26','#346900','#3F6E18']

    const total = props.topwords.reduce((a,b) => a + Number(Object.values(b) || 0),0)
    const words = props.topwords.map((word,i) => 
    <TopWords key={i} data={word} total={total} color={colors[i]}/>)
    return (
        <div className='visualizer'>
                {words}
                <style jsx>
                    {`
                    .visualizer {
                        display:flex;
                        flex-wrap:wrap;
                        align-content: stretch;
                        padding-left:20px;
                    }
                    `}
                </style>
        </div>
    )

}

export default WordVisualizer