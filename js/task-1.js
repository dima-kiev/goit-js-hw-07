const categories = document.querySelectorAll('#categories > li.item');

console.log(`Numbers of categories: ${categories.length}`);

categories.forEach((category) => {

    const title = category.querySelector('h2').textContent;
    const itemCount = category.querySelectorAll('ul > li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemCount}`);
});
