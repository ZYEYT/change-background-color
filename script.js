const nextBTn = document.querySelector('.nextBTn');
const prevBTn = document.querySelector('.prevBTn');
const container = document.querySelector('.images');

let counter = 0;

nextBTn.addEventListener('click',nextSlide);
prevBTn.addEventListener('click',prevSlide);

function nextSlide(){
container.animate([{opacity:'0.1'},{opacity :'1.0'}],{duration:1000,fill:'forwards'});

counter++;
if(counter === 3){
    counter = 0;
}
container.style.backgroundImage = `url(img/bcg-${counter}.jpg`
}

function prevSlide(){
    container.animate([{opacity:'0.1'},{opacity :'1.0'}],{duration:1000,fill:'forwards'});   
    

    counter--;
    if(counter === -1){
        counter = 2;
    }

container.style.backgroundImage = `url(img/bcg-${counter}.jpg`
}