    import React, { Component } from 'react';

    class VideoListItem extends Component {
        constructor(props) {
            super(props);

            const video = this.props.video;
            let imageUrl = video.snippet.thumbnails.default.url;
            console.log(video.snippet.thumbnails.default.url);
        }

        render() {
            return(
                <li className="list-group-item"> 
                    <div className="video-list media"> 
                        <div className="media-left">
                            <img  className ="media-object" src={this.props.video.snippet.thumbnails.default.url}/>
                        </div>
                    </div>

                    <div className="media-body"> 
                        <div className="media-heading"> { this.props.video.snippet.title }
                        </div>
                    </div>
                </li>
            );
        }
    }

    export default VideoListItem;