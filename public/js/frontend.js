window.onload = function () {
    var grid = document.getElementById('images');
    var msnry = new Masonry(grid, {
        itemSelector: '.image',
        columnWidth: 400
    });
    var className = document.querySelector('.cssload-loader').className;

    document.querySelector('.container').className += ' show';
    document.querySelector('.cssload-loader').className = className.replace('show', '');

    lightGallery(document.getElementById('images'));
};