function Menu(config){
   
    this.nav = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container 
    console.log(this.nav)
    this.btn = (typeof config.button === 'string') ?  document.querySelector(config.button) : config.button 
    console.log(this.btn)
    this.maxWidth = config.widthEn || false 
    console.log(this.maxWidth)

    var _this = this
    var _opened = false
    console.log(!_opened)
     this.btn.removeAttribute('style') 

    if(this.maxWidth){
        window.addEventListener('resize', e => {
            if(window.innerWidth > _this.maxWidth){
                 _this.nav.removeAttribute('style')
                //mudar o z-index do menu 
                _opened = true

            }else if(!this.nav.getAttribute('style')){
                close()
            }
        })

        if(window.innerWidth <= this.maxWidth){
            close()
        }
    }
    this.btn.addEventListener('click', openClose)
   


    function openClose(){
        if(!_opened){
            open()
        }else{
            close()
        }

    }

    function open(){
        var top = _this.nav.getBoundingClientRect().top + 'px'
        console.log(top)
        var _style = {
            maxHeight: 'calc(100vh - ' + top + ')',
            overflow: 'hidden',
           
        }
        applyToNav(_style)
        _opened = true;

    }

    function close(){
        var _style = {
            maxHeight: '0px',
            overflow: 'hidden',
            
        }
        applyToNav(_style)
        _opened = false;
    }


    function applyToNav(_style){
       
        Object.keys(_style).forEach(stl =>{
           _this.nav.style[stl] = _style[stl]
        })

    }
}