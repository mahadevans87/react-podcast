import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PodcastContainerItem extends Component {
    render() {
        return (            
            <div className="col-lg-2 col-md-2 col-xs-2">
            <Link to={`/podcast/${encodeURIComponent(this.props.url)}`}  >
              <img className="img-fluid img-thumbnail" src={this.props.logo_url_small} 
                    alt="" width="100" height="100" 
                    onError={(e)=>{e.target.src='/images/default_icon_small.png'}} />
            </Link>
            <div className="podcast_container_item_title"> {this.props.title} </div>
          </div>
        );
    }
}