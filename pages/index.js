
import React, {useState} from 'react'
import fetch from 'isomorphic-unfetch'
import Tweet from '../components/Tweet'
import WordVisualizer from '../components/WordVisualizer'

 function HomePage ({tweets}) {
 
    const tweetList =  tweets.map((tw,i) => <Tweet key={i} data={tw}/>)
    
 
    return (
        <div >
            <div className="header">
                Meshify
            </div>
            <div className='tweets-container'>
                {tweetList}
            </div>
            <div className='vis-container'>
                <WordVisualizer tweets={tweets}/>
            </div>
    <style jsx>{`
        .header {
            background-color:#333;
            height:80px;
            color:#fff;
            line-height: 80px;
            font-size:2em;
            padding-left:20px;
        }
        .tweets-container {
            padding-top:50px;
            padding-right:20px;
            padding-left:20px;
            background-color:#444;
        }
        .vis-container {
            position:fixed;
            right:0px;
            left:0px;
            bottom:0;
            padding-left: 20px;
            padding-right: 20px;
            height:350px;
            background-color:#444;
            
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
