import React, { useEffect, useState } from 'react'
import '../CSS/News.css'
import NewsItem from "./NewsItem";
import Sppiner from './Sppiner';

export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(true);

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a3a124cc7ec446f194b6d8eb6a8a5f0f&page=${page}&pageSize=${props.pageSize}`;
        const data = await fetch(url);
        const parseData = await data.json();
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
        console.log(parseData)
        console.log(page)
    }
    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [page])
    const previoushandle = async () => {
        console.log("Previous");
        setPage(page - 1);
        updateNews();
    }
    const nexthandle = async () => {
        console.log("Next");
        setPage(page + 1);
        updateNews();
    }
    return (
        <div>
            <div className="headline">
                <h1>Top-Headline</h1>
            </div>
            <div className="newsContainer">
                {loading && <Sppiner />}
                {!loading && articles.map((element) => {
                    return <div className="news" key={element.url}>
                        <NewsItem title={element.title} Urlimage={element.urlToImage} description={element.description} auther={element.author} newsUrl={element.url} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}
            </div>
            <div className="btns">
                {
                    page >1 &&
                    <button  type="button" className="btn" onClick={previoushandle}>&larr;Previos</button>
                }
                <button type="button" disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className="btn" onClick={nexthandle}>Next&rarr;</button> 
            </div>
            
           
        </div>
    )
}

