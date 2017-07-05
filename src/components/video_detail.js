import React, { Component } from 'react';

class VideoDetail extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.video);
    }

    render() {
        const video = this.props.video;
        console.log("Render: " + this.props.video);
        var url = "";
        if(!this.props.video){
            return <div> Loading... </div>
         } else {
             url = `https://www.youtube.com/embed/${video.id.videoId}`
         }
        
        return(
            <div className="video-detail col-md-8"> 
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}> </iframe>
                </div>    
                <div className="details"> 
                    <div> { video.snippet.title } </div>
                    <div> { video.snippet.description } </div>
                </div>        
            </div>
        );
    }
}

// const VideoList = (props) => {
//     const videoItems = props.videos.map((video) => {
//         return <VideoListItem key={video.etag} video={video} />
//     });

//     return(
//              <ul className="col-md-4 list-group">
//                   { videoItems } 
//             </ul>
//         );
// };

export default VideoDetail;