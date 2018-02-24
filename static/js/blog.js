$(window).ready(function() {
  $.get('https://blog.lucas-hild.de/wp-json/wp/v2/posts?per_page=3')
    .done(function(data) {
      var wrapper = `
      <div id="blog-article-1" class="blog-article">
        <a class="blog-article-image" href="${data[0].link}" style="background-image: url(${data[0].better_featured_image.source_url})" target="_blank">
          <h3>${data[0].title.rendered}</h3>
          <div class="button">Artikel lesen</div>
        </a>
        ${data[0].excerpt.rendered}
      </div>
      <div id="blog-article-2" class="blog-article">
        <a class="blog-article-image" href="${data[1].link}" style="background-image: url(${data[1].better_featured_image.source_url})" target="_blank">
          <h3>${data[1].title.rendered}</h3>
          <div class="button">Artikel lesen</div>
        </a>
        ${data[1].excerpt.rendered}
      </div>
      <div id="blog-article-3" class="blog-article">
        <a class="blog-article-image" href="${data[2].link}" style="background-image: url(${data[2].better_featured_image.source_url})" target="_blank">
          <h3>${data[2].title.rendered}</h3>
          <div class="button">Artikel lesen</div>
        </a>
        ${data[2].excerpt.rendered}
      </div>`;
      $('#blog-wrapper').html(wrapper);
    })
})
