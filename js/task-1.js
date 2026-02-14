const categories = 
document.querySelectorAll('#categories .item');
console.log(`Кількість категорій: ${categories.length}`
 );

categories.forEach(category => {
     const title = category.querySelector('h2').textContent.trim();
     const itemsCount = category.querySelectorAll('li').length;

     console.log(`Категорія: ${title}`);
     console.log(`Кількість елементів: ${itemsCount}`);
});