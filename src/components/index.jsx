import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import News from './news.jsx'

function NewsFeed() {
    const [news, setNews] = useState([])

    useEffect(() => {
        axios.get(`
        https://newsapi.org/v2/everything?q=tesla&from=2022-09-17&sortBy=publishedAt&apiKey=0061f7a5e9164b1e8d31397786595487`)
            .then(response => {
                console.log(response);
                setNews(response.data)
            })
            .catch(err => {
                console.log("error: ", err);
            })
    }, [])

    return (
        <div className="newsApi">
            <div className="heading">
            <h1>Calling News API</h1>
            </div>

            {news.map((eachNews, i) => (
                <div className="newsContainer">
                    <News
                        source={eachNews.source}
                        author={eachNews.author}
                    ></News>
                </div>

            ))
            }
        </div >
    )
}

export default NewsFeed;