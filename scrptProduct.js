$(document).ready(function() {
  
    function handleButtonClick(buttonClass, productListClass) {
        
        $('.buttons-section button').removeClass('active');
        
        $(buttonClass).addClass('active');
        
  
        $('.product-list').removeClass('visible');

        $(productListClass).addClass('visible');
    }

   
    $('.button-All').click(function() {
        handleButtonClick('.button-All', '.product-list.all');
    });

    $('.button-kids').click(function() {
        handleButtonClick('.button-kids', '.product-list.kids');
    });

    $('.button-adults').click(function() {
        handleButtonClick('.button-adults', '.product-list.adults');
    });

    handleButtonClick('.button-All', '.product-list.all');
});
