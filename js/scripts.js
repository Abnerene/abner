
function lineAnimation(element){
    lastBlock = element;
    const scroll = document.querySelector('.right-content').scrollTop
    const width = element.clientWidth
    const top = element.offsetTop - scroll
    const left =  element.offsetLeft;
    const heigth = element.offsetHeight
    line = document.getElementById('container-1')
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
        line.querySelector('.inside-container').style.opacity = 1
        line.setAttribute('class',"scroll  blur")
        line.setAttribute('style',`
        transition:.6s;
        top:0px;
        height:100vh;
        width:100vw;
        left:0px;
        border:0px;
        `)

    },1200)
    line.style.borderRadius="0px !important"

}

var lastBlock = false;

var lastBuild = false
function hiddeContent(){
    element = lastBlock;
    const scroll = document.querySelector('.right-content').scrollTop
    const width = element.clientWidth
    const top = element.offsetTop - scroll
    const left =  element.offsetLeft;
    
    const heigth = element.offsetHeight
    line = document.getElementById('container-1')
    line.querySelector('.inside-container').style.opacity = 0

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
        line.setAttribute('class',"scroll")
        line.setAttribute('style',`
        transition:.6s;
        top:${top}px;
        height:${heigth}px;
        width:${width}px;
        left:${left}px;
        `)
        line.style.borderRadius="5px"

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
        loadContent(block.getAttribute('build'),this.getAttribute('build'));
        lineAnimation(block)
       
    })

})

const CONTAINER1 = document.getElementById('container-1');


async function loadContent(pathContent,build){
    const fullPath= `build/${pathContent}.html`
    
    

    const content = await fetch(fullPath).then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
        // This is the HTML from our response as a text string
            
        CONTAINER1.innerHTML = html
        if(lastBuild !== build){
            console.log('change')
            CONTAINER1.scrollTop = '0px'
        }else{
            console.log('same')
        }
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

    lastBuild = build
     
}


function rewindVideo(video){
    const actual = video.getAttribute('actual')
    const rewind = video.getAttribute('rewind')
    const original = video.getAttribute('original')
    
    if(actual !== rewind){
        video.src = rewind
        video.setAttribute('actual',rewind)
    }else{
        video.src = original
        video.setAttribute('actual',original)

    }
    video.play()
}