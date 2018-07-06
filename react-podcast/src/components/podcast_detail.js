import React, { Component } from 'react';
import { connect } from 'react-redux';

class PodcastDetail extends Component {
    componentDidMount() {
        this.props.fetchPodcastInfo(this.props.podcastTag);
    }

    render() {
        return (
            <div>
                {this.props.podcastInfo.title}
            </div>
        )
    }
} 

function mapStateToProps(state) {
    return {
        podcastInfo : state.currentPodcastInfo
    };
}

export default connect(mapStateToProps, { fetchPodcastInfo })(PodcastDetail);
