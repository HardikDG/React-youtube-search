    import React, { Component } from 'react';

    class VideoListItem extends Component {
        constructor(props) {
            super(props);

             this.video = this.props.video;
             this.selectedVideo = this.props.onVideoSelect;
        }

        render() {
            return(
                <li onClick={() => this.selectedVideo(this.video) } className="list-group-item"> 
                    <div className="video-list media"> 
                        <div className="media-left">
                            <img  className ="media-object" src={this.video.snippet.thumbnails.default.url}/>
                        </div>
                    </div>

                    <div className="media-body"> 
                        <div className="media-heading"> { this.video.snippet.title }
                        </div>
                    </div>
                </li>
            );
        }
    }

    export default VideoListItem;