
import React, {useState} from 'react'
import fetch from 'isomorphic-unfetch'
import Tweet from '../components/Tweet'
import CountTopWords from '../components/CountTopWords'
import WordVisualizer from '../components/WordVisualizer'

 function HomePage ({tweets}) {
    const [topwords,setTopWords] = useState(CountTopWords(tweets))
    const tweetList =  tweets.map((tw,i) => <Tweet key={i} data={tw}/>)
    
 
    return (
        <div>
            <div className='tweets-container'>
                {tweetList}
            </div>
            <div className='vis-container'>
                <WordVisualizer topwords={topwords}/>
            </div>
    <style jsx>{`
        .tweets-container {
            padding-left:20px;
            background-color:black;
        }
        .vis-container {
            position:fixed;
            bottom:0;
            display:flex;
            background-color:black;
        }
    `}</style>
    <style jsx global>
        {`
        body {
        margin:0;
        padding:0;
        height:100%;
    }`}
    </style>
        </div>
    )
}

HomePage.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/data.json')
    const json = await res.json()
    return {tweets:json}
}

export default HomePage
