
function lineAnimation(element){
    lastBlock = element;
    const scroll = document.querySelector('.right-content').scrollTop
    const width = element.clientWidth
    const top = element.offsetTop - scroll
    const left =  element.offsetLeft;
    console.log(element.offsetWidth, element.offsetLeft)
    const heigth = element.offsetHeight
    line = document.getElementById('animation-line')
    // console.log(top)
    line.setAttribute('style',`
        display:inline-flex;
        top:${top}px;
        height:${heigth}px;
        width:${width}px;
        left:${left}px;
        `)
    setTimeout(function(){
        line.setAttribute('style',`
        transition:.4s;
        top:${top}px;
        height:${heigth}px;
        width:100vw;
        left:0px;
        `)
    },400)

    setTimeout(function(){
        line.setAttribute('style',`
        transition:.4s;
        top:${top+(heigth/2)};
        height:0vh;
        width:100vw;
        left:0px;
        `)
    },800)

    setTimeout(function(){
        line.setAttribute('class',element.ClassName+"  blur")
        line.setAttribute('style',`
        transition:.6s;
        top:0px;
        height:100vh;
        width:100vw;
        left:0px;
        `)

    },1200)

}

var lastBlock=false;

function hiddeContent(){
    element = lastBlock;
    const scroll = document.querySelector('.right-content').scrollTop
    const width = element.clientWidth
    const top = element.offsetTop - scroll
    const left =  element.offsetLeft;
    console.log(element.offsetWidth)
    const heigth = element.offsetHeight
    line = document.getElementById('animation-line')
    // console.log(top)
    line.setAttribute('style',`
        display:inline-flex;
        top:${top+(heigth/2)};
        height:0px;
        width:100vw;
        left:0px;
        `)
    setTimeout(function(){
        line.setAttribute('style',`
        transition:.4s;
        top:${top}px;
        height:${heigth}px;
        width:100vw;
        left:0px;
        `)
    },400)

    setTimeout(function(){
        line.setAttribute('class',element.ClassName+"no-blur")
        line.setAttribute('style',`
        transition:.6s;
        top:${top}px;
        height:${heigth}px;
        width:${width}px;
        left:${left}px;
        
        `)
    },800)

    setTimeout(function(){
        
        line.setAttribute('style',`
        display:none;
        `)

    },1400)
}

const blocks = Array.from(document.getElementsByClassName('block-generic'));
blocks.forEach( block => {
    block.addEventListener('click', function handleClick(){
        lineAnimation(block)
    })

})