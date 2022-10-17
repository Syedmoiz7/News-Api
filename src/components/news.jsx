import "./news.css"

const NewsApi = ({author, content, description, source, title, url, urlToImage}) => (
    <div className="mainContainer">
        <div className="source">{source}</div>
        <div className="author">{author}</div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="url">{url}</div>
        <div className="urlToImage">{urlToImage}</div>
        <div className="content">{content}</div>
    </div>
) 

export default NewsApi;
