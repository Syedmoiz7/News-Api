import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
// import News from './news.jsx';

function NewsFeed() {
    const [news, setNews] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        function getTrendingNews() {
            const options = {
                method: 'GET',
                url: 'https://bing-news-search1.p.rapidapi.com/news',
                params: { safeSearch: 'Off', textFormat: 'Raw' },
                headers: {
                    'X-BingApis-SDK': 'true',
                    'X-RapidAPI-Key': '85KnnuP4HzmshYuCcfjg1sCMFdYkp18e8NojsnQP6hFvDHXrBr',
                    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
                }
            };
        

        axios.request(options).then(function (response) {
            console.log(response.data);
            setNews(response.data.value)
        })
            .catch(function (error) {
                console.error(error);
            });
        }

        getTrendingNews();

    }, [])





    //     useEffect(() => {
    //         axios.get(`
    //         https://newsapi.org/v2/everything?q=tesla&from=2022-09-17&sortBy=publishedAt&apiKey=0061f7a5e9164b1e8d31397786595487`)
    //             .then(response => {
    //                 console.log(response);
    //                 setNews(response.data)
    //             })
    //             .catch(err => {
    //                 console.log("error: ", err);
    //             })
    //     }, [])

    //     return (
    //         <div className="newsApi">
    //             <div className="heading">
    //             <h1>Calling News API</h1>
    //             </div>

    //             {news.map((eachNews) => (
    //                 <div className="newsContainer">
    //                     <News
    //                         source={eachNews.source}
    //                         author={eachNews.author}
    //                     ></News>
    //                 </div>

    //             ))
    //             }
    //         </div >
    //     )




}

export default NewsFeed;



// import { useState, useEffect } from "react";
// import './App.css';

// import axios from 'axios';
// import moment from 'moment';

// function App() {

//   const [data, setData] = useState([]);
//   const [query, setQuery] = useState("");
//   const [isLoading, setIsLoading] = useState(false);




//   useEffect(() => {

//     function getTrendingNews() {

//       const options = {
//         method: 'GET',
//         url: 'https://bing-news-search1.p.rapidapi.com/news',
//         params: { safeSearch: 'Off', textFormat: 'Raw' },
//         headers: {
//           'X-BingApis-SDK': 'true',
//           'X-RapidAPI-Key': '85KnnuP4HzmshYuCcfjg1sCMFdYkp18e8NojsnQP6hFvDHXrBr',
//           'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//         }
//       };

//       axios.request(options)
//         .then(function (response) {
//           console.log(response.data);

//           setData(response.data.value)

//         }).catch(function (error) {
//           console.error(error);
//         });
//     }

//     getTrendingNews();

//   }, [])




//   const getNews = (e) => {
//     e.preventDefault();


//     const options = {
//       method: 'GET',
//       url: 'https://bing-news-search1.p.rapidapi.com/news/search',
//       params: { q: query, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off' },
//       headers: {
//         'X-BingApis-SDK': 'true',
//         'X-RapidAPI-Key': '85KnnuP4HzmshYuCcfjg1sCMFdYkp18e8NojsnQP6hFvDHXrBr',
//         'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//       }
//     };

//     setIsLoading(true)
//     axios
//       .request(options)
//       .then(function (response) {
//         setIsLoading(false)
//         console.log(response.data.value);
//         setData(response.data.value)
//       })
//       .catch(function (error) {
//         setIsLoading(false)
//         console.error(error);
//       });
//   }


//   return (
//     <div>

//       <form onSubmit={getNews}>
//         <input
//           type="text"
//           placeholder="Enter your topic name"
//           onChange={(e) => {
//             setQuery(e.target.value)
//           }}
//         />
//         <button type="submit">Get News</button>
//       </form>

//       <div>
//         {(isLoading) ? "loading..." : ""}

//         {data.map(eachPost => (
//           <div className="post" key={eachPost?.name}>

//             <a
//               className="title"
//               href={eachPost?.url}
//               target="_blank" rel="noreferrer"
//             >
//               {eachPost?.name}
//             </a>

//             <span>{
//               moment(eachPost?.datePublished)
//                 .format('Do MMMM, h:mm a')
//             }</span>

//             <h3>{eachPost?.description}</h3>

//             <img src={
//               eachPost?.image?.thumbnail?.contentUrl
//                 .replace("&pid=News", "")
//                 .replace("pid=News&", "")
//                 .replace("pid=News", "")
//             } alt="" />

//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

// export default App;