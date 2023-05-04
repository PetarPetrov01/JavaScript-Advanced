function getArticleGenerator(articles) {
    let resultDiv = document.querySelector('#content')

    return function showNext() {
        let newArticle = document.createElement('article')
        if (articles.length) {
            newArticle.textContent = articles.shift()
            resultDiv.appendChild(newArticle)
        }
    }
}
