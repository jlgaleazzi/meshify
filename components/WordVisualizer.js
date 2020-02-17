import TopWords from './TopWords'
import CountTopWords from './CountTopWords'
const WordVisualizer = (props) => {
    const colors = ['#80FF00','#92FF38','#A1FF6B','#2E5C00','#3D6129',
    '#376115','#54A800','#63AD26','#346900','#3F6E18',
    '#214200','#294710','#63AD26','#346900','#3F6E18',
    '#214200','#294710','#63AD26','#346900','#3F6E18']
    const topwords = CountTopWords(props.tweets);
    const baseline = Object.values(topwords[0])[0];
    const words = topwords.map((word,i) => 
    <TopWords key={i} data={word}  color={colors[i]} base={baseline}/>)
    return (
        <div>
            <div className='vis-header'>
                Word Frequency
            </div>
            <div className='visualizer'>
                    {words}
            </div>
            <style jsx>
                        {`
                        .visualizer {
                            width:100%;
                            display:flex;
                            flex-wrap:no-wrap;
                            justify-content:center;
                            background-color:#222;
                        }
                        .vis-header{
                            border:1px solid #000;
                            height:40px;
                            padding-left:20px;
                            color:#fff;
                            line-height: 40px;
                            font-size:1.3em;
                        }
                        `}
                    </style>
        </div>
    )

}

export default WordVisualizer