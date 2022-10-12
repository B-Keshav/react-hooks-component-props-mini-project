import Article from "./Article";

function ArticleList({posts}){
    
    const renderArts = posts.map(article =>{
        return <Article key={article.id} title={article.title} date={article.date} preview={article.preview}/> 
    })
    return(
        <main>
            {renderArts}
        </main>
    )
}

export default ArticleList