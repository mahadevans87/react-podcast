import React, { Component } from 'react';

export default class PodcastContainerItem extends Component {
    render() {
        return (
            <div className="col-lg-2 col-md-2 col-xs-2">
            <a href="#">
              <img className="img-fluid img-thumbnail" src={this.props.logo_url_small} 
                    alt="" width="100" height="100" 
                    onError={(e)=>{e.target.src='/images/default_icon_small.png'}} />
            </a>
            <div className="podcast_container_item_title"> {this.props.title} </div>
          </div>
        );
    }
}