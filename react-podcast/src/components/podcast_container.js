import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTopTags} from '../actions/index';
import PodcastContainerItem from './podcast_container_item';

class PodcastContainer extends Component {

    componentDidMount() {
        this.props.fetchTopTags();
    }


    renderPodcastItems() {
        return (
            this.props.podcasts.map(podcast => {
               return <PodcastContainerItem title={podcast.title} tag={podcast.tag} logo_url_small={podcast.scaled_logo_url} />
            })
        );
    }
    render() {

        console.log(this.props.podcasts);
        return (
            <div className="container">
                <h1 className="my-4 text-center text-lg-left">Top Podcasts</h1>
                <div className="row text-center text-lg-left">
                    {this.renderPodcastItems()}
                </div>
            </div>
      
        );
    }
}

function mapStateToProps(state) {
    return {
        podcasts: state.podcasts
    }
}

export default connect(mapStateToProps, {fetchTopTags})(PodcastContainer);