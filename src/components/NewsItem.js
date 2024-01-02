import React from 'react'
import '../CSS/NewsItem.css';
// import { Link } from 'react-router-dom';

export default function NewsItem(props) {
  return (
    <>
          <div className="newsItem">
          <span className="source">{props.source}</span>
              <img src={props.Urlimage?props.Urlimage:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-13-2023/t_4de2ea6336774eceb249e6eec685461f_name_fox29_photo_op.jpg&w=1440"} width="350px" alt="picGayabhai" />
              <h5>{props.title?props.title.slice(0,30):"Unknown"}...</h5>
              <p>{props.description ? props.description.slice(0, 80) : "Unknown"}...</p>
              <button type="button" className="btn"><a href={props.newsUrl} rel="noreferrer" target="_blank">Read More</a></button>
              <p className="card-text"><small className="text-muted">by {!props.author ? "unknown" : props.author} on {new Date(props.date).toGMTString()}</small></p>
          </div>  
    </>
  )
}
