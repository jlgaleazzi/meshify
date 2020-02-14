import Moment from 'moment'
const Tweet = (props) => {
    const time = Moment(props.data.created_at).format('dddd , MMMM do YYYY, h:mm:ss a');
return(
<div className='tweet'>
    <div>
        <div className='img-circle'>
            <img src={props.data.user.profile_image_url} className='profile-img'></img>
        </div>
        <div className='user-name'>
        {props.data.user.name}
        </div>
        <div className='screen_name' >
         {props.data.user.screen_name}
        </div>
        <div className='time'>{time}</div>
        
    </div> 
    <div>
        {props.data.full_text}
    </div>
    <div>
        retweets: {props.data.retweet_count}
        favorite: {props.data.favorite_count}
    </div>
    <style jsx>{`
    .tweet {
        background-color: black;
        color:white;
    }
    .img-circle {
        width:50px;
        height:50px;
        position:relative;
        overflow:hidden;
        border-radius: 50%;
    }
    .profile-img {
        display:inline;
        margin: 0 auto;
        height:50px;
        width: auto;
    }
    `}</style>
</div>

)
};

export default Tweet