import React, { Component } from 'react';

export default class Newsitem extends Component {
	render() {
		let { title, description, url, imgurl, publishedAt, source } = this.props;
		return (
			<div className="card">
					<span className="badge rounded-pill bg-danger fs-6">{source}</span>
				<img src={imgurl} className="card-img-top" alt="Nothing to preview" />

				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					<p className="card-text">
						<b>Date</b>:<small className="mute-text"> {new Date(publishedAt).toUTCString()}</small>
					</p>
					<a target="_blank" rel="noreferrer" href={url} className="btn btn-outline-dark btn-sm">
						Read More
					</a>
				</div>
			</div>
		);
	}
}
