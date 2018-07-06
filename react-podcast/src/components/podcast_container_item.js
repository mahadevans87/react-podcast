import React, { Component } from 'react';

export default class PodcastContainerItem extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-4 col-xs-6">
            <a href="#" className="d-block mb-4 h-100">
              <img className="img-fluid img-thumbnail" src={this.props.logo_url_small} alt="" width="100" height="100" />
            </a>
            <div>
                <h4> {this.props.title} </h4>
            </div>

          </div>
        );
    }
}