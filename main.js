(function(){
    var $body = document.querySelector('body') 
    $body.classList.remove('no-js')
    $body.classList.add('js') 
    
     var menu = new Menu({
         container: '.nav',
         button: '.header__btnMenu',
         widthEn: 1000 ,
     }) 
     console.log(menu)

     var Nquotes = new Carousel({
         container: '.quotes',
         btnPrev: '.prev',
         btnNext: '.next',
         itens : '.qt'
     })
 
})()
