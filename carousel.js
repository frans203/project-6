 function Carousel(config){
    this.container = (typeof config.container === 'string') ? document.querySelector(config.container) :
    config.container 

    this.btnPrev = (typeof config.btnPrev === 'string')  ? document.querySelector(config.btnPrev) : config.container 

    this.btnNext = (typeof config.btnPrev === 'string') ? document.querySelector(config.btnNext) : config.btnNext 
   
    this.itens = (typeof config.itens === 'string') ? document.querySelectorAll(config.itens) : config.itens 
    console.log(this.btnNext, this.btnPrev,  this.container, this.itens)
    var _this = this;
    var currentSlide = 0;

    init()
    function init(){
        var _show =  _this.container.querySelectorAll('.show')
        console.log(_show)
        Array.prototype.forEach.call(_show,  function(sh){
            sh.classList.remove('show')
        }) 

        _this.itens[0].classList.add('show');
        addListeners()
    }

    function addListeners(){
        _this.btnPrev.addEventListener('click', prev) 
        _this.btnNext.addEventListener('click', next)
    }
    function next(){
        currentSlide++;
        showSlide()
    }

    function prev(){
        currentSlide--;
        showSlide();
    }
    
    function showSlide(){
        var qtd = _this.itens.length
        var slide = currentSlide % qtd 
        slide = Math.abs(slide)

        _this.container.querySelector('.show').classList.remove('show');
        _this.itens[slide].classList.add('show')

    }

}