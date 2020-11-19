let selectproductone=document.getElementById('product1');
let selectproducttwo=document.getElementById('product2');
let selectproductthree=document.getElementById('product3');
let shopping_articles=document.getElementById('number_articles');

let totalquantity=0;

let articleone_quantity = 0;
let articletwo_quantity = 0;
let articlethree_quantity = 0;

let bagshop=document.getElementById('bag-shop');

selectproductone.addEventListener("click", function() {
articleone_quantity = articleone_quantity + 1;
totalquantity=totalquantity+1;
shopping_articles.textContent=totalquantity;
});

selectproducttwo.addEventListener("click", function() {
  articletwo_quantity = articletwo_quantity + 1;
  totalquantity=totalquantity+1;
  shopping_articles.textContent =totalquantity;
});

selectproductthree.addEventListener("click", function() {
  articlethree_quantity = articl0three_equantity + 1;
  totalquantity=totalquantity+1;
  shopping_articles.textContent=totalquantity;
});

let
