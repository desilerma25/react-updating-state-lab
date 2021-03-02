// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    changeBitrate = () => {
        this.setState({
            settings: {
                // use spread to leave other settings intact
                // prevents overwriting and eliminating other k/v pairs   
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    changeResolution = () => {
        this.setState({
            // use spread, leave unchanged key/values in tact
            settings: {
                ...this.state.settings,
                video: {
                    // go into video, use spread once again to get into settings
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }

        })
    }

    render() {
        return(
            <div>
                <button className='bitrate' onClick={this.changeBitrate}>Update Bitrate</button>
                <button className='resolution' onClick={this.changeResolution}>Update Resolution</button>
            </div>
        )
    }
}