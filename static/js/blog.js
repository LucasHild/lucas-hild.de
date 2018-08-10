document.addEventListener('DOMContentLoaded', function () {
    fetch('https://blog.lucas-hild.de/api/posts')
        .then(response => response.json())
        .then(data => {
            let wrapper = '';
            data.forEach((article, index) => {
                if (index < 3) {
                    wrapper += `
                        <div class="blog-article">
                            <a class="blog-article-image" href="https://blog.lucas-hild.de/${article.permalink}" style="background-image: url(https://blog.lucas-hild.de${article.image})" target="_blank">
                            <h3>${article.title}</h3>
                            <div class="button">Artikel lesen</div>
                            </a>
                            <p>${article.description}</p>
                        </div>`
                }
            })
            document.getElementById('blog-wrapper').innerHTML = wrapper
        })
        .catch(e => {
            throw new Error(e);
        })
})