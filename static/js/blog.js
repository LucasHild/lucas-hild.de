$(window).ready(function () {
    $.get('https://blog.lucas-hild.de/api/posts')
        .done(function (data) {
            var wrapper = `
                <div id="blog-article-1" class="blog-article">
                    <a class="blog-article-image" href="https://blog.lucas-hild.de/${data[0].permalink}" style="background-image: url(https://blog.lucas-hild.de${data[0].image})" target="_blank">
                    <h3>${data[0].title}</h3>
                    <div class="button">Artikel lesen</div>
                    </a>
                    <p>${data[0].description}</p>
                </div>
                <div id="blog-article-2" class="blog-article">
                    <a class="blog-article-image" href="https://blog.lucas-hild.de/${data[1].permalink}" style="background-image: url(https://blog.lucas-hild.de${data[1].image})" target="_blank">
                    <h3>${data[1].title}</h3>
                    <div class="button">Artikel lesen</div>
                    </a>
                    <p>${data[1].description}</p>
                </div>
                <div id="blog-article-3" class="blog-article">
                    <a class="blog-article-image" href="https://blog.lucas-hild.de/${data[2].permalink}" style="background-image: url(https://blog.lucas-hild.de${data[2].image})" target="_blank">
                    <h3>${data[2].title}</h3>
                    <div class="button">Artikel lesen</div>
                    </a>
                    <p>${data[2].description}</p>
                </div>`;
            $('#blog-wrapper').html(wrapper);
        })
})
