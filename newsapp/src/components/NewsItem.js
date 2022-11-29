import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, discription,imageUrl, newsUrl,author,date, source} = this.props
    return (
      <div className='my-3'>
      <div className="card">
          <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{ left: "90%", zIndex: "1"}}>{source}</span>
            <img src={!imageUrl ? "https://i.insider.com/6381462e785afd00189bca83?width=1200&format=jpeg" : imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{discription}</p>
                <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_main" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem