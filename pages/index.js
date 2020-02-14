
import React from 'react'
import fetch from 'isomorphic-unfetch'
import Tweet from '../components/Tweet'
import CountTopWords from '../CountTopWords'

 function HomePage ({tweets}) {
  
    console.log(CountTopWords(tweets))
    const tweetList =  tweets.map((tw,i) => <Tweet key={i} data={tw}/>
    );

    return (
        <div>
            {tweetList}
         </div>
         
    )
}

HomePage.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/data.json')
    const json = await res.json()
    return {tweets:json}
}

export default HomePage
