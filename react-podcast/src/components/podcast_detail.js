import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPodcastInfo } from '../actions/index';

class PodcastDetail extends Component {
    componentDidMount() {
        this.props.fetchPodcastInfo(decodeURIComponent(this.props.match.params.url));
    }

    render() {
        if(this.props.podcastInfo) {
            return (
                <div>   
                    {this.props.podcastInfo.title}
                </div>
            )
        } else {
            return ( 
                <div> Loading ...</div>
            );
        }
    }
} 

function mapStateToProps(state, ownProps) {

    return {
        podcastInfo : state.podcasts[decodeURIComponent(ownProps.match.params.url)]
    };
}

export default connect(mapStateToProps, { fetchPodcastInfo })(PodcastDetail);
