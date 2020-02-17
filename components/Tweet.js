import Moment from 'moment'
import Octicon, {Heart,GitCompare} from '@primer/octicons-react'
const Tweet = (props) => {
    const time = Moment(props.data.created_at).format('dddd , MMMM do YYYY, h:mm:ss a');
return(
<div className='tweet'>
<div className='img-circle'>
            <img src={props.data.user.profile_image_url} className='profile-img'></img>
</div>
    <div className='tweet-container'>
        <div className='tweet-header'>
            <div className='user-name'>
            {props.data.user.name}
            </div>
            <div className='screen-name' >
            @{props.data.user.screen_name}
            </div>
            <div className='time'>{time}</div>
            
        </div> 
        <div className='tweet-text'>
            {props.data.full_text}
        </div>
        <div className='tweet-footer'>
            <div><Octicon icon={GitCompare}/>&nbsp;{props.data.retweet_count}</div>
            <div><Octicon icon={Heart}/>&nbsp;{props.data.favorite_count}</div>
        </div>
    </div>
    <style jsx>{`
    .tweet {
        padding-top:10px;
        padding-bottom:10px;
        border:1px inset #000;
        padding-left: 5px;
        background-color: #333;
        color:white;
        display:flex;
        flex-wrap:wrap;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif; 
    }

    .tweet-container {
        width:80%;
        padding-left:10px;
        display:flex;
        flex-wrap:wrap;
        flex-direction:column;
        justify-content:flex-start;
    }
    .img-circle {
        width:50px;
        height:50px;
        position:relative;
        overflow:hidden;
        border-radius: 50%;
    }
    .user-name {
        width:auto;
        font-size:15px;
        margin:auto;
        padding-bottom:0px;
        font-weight:700;
       
    }
    .screen-name {
        width:auto;
        color: gray;
        padding-bottom:0px;
        margin:auto;
        padding-left:5px;
        space
    }
    .time {
        width:auto;
        color: gray;
        padding-bottom:0px;
        margin:auto;
        padding-left:5px;
    }
    .profile-img {
        display:inline;
        margin: 0 auto;
        height:50px;
        width: auto;
    }
    .tweet-text {
        padding-left:10px;
        width:100%;
        flex-grow:1;
    }
    .tweet-header > div {
      float:left;
      padding-left:10px;
    }
    .tweet-footer {
        padding-left:10px;
        display:flex;
    }
    .tweet-footer > div {
        padding-right:10px;
    }
    `}</style>
</div>

)
};

export default Tweet