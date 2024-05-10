let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel'); 
let listitemDom = document.querySelector('.carousel .list'); 
let thumbnailDom = document.querySelector('.carousel .thumbnail');
let runTimeout;

nextDom.onclick = function(){
    showSlider('next');
}

prevDom.onclick = function(){
    showSlider('prev');
}

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item'); 
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item'); 

    if(type === 'next'){
        listitemDom.appendChild(itemSlider[0]); 
        thumbnailDom.appendChild(itemThumbnail[0]); 
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listitemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeout);
    runTimeout = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, 500); // assuming timerunning is declared elsewhere
}


//for see more button (

document.getElementById('seeMore1').addEventListener('click', function() {
    // Handle click for the first "See More" button
    // For example, you can redirect to a specific page or show more information
    window.location.href = "Appointment"; // Redirect to a see more page
});

document.getElementById('seeMore2').addEventListener('click', function() {
    // Handle click for the second "See More" button
    // For example, you can redirect to a specific page or show more information
    window.location.href = 'Appointment'; // Redirect to a see more page
});

document.getElementById('seeMore3').addEventListener('click', function() {
    // Handle click for the third "See More" button
    // For example, you can redirect to a specific page or show more information
    window.location.href = 'Appointment'; // Redirect to a see more page
});
 
// this end for see more button )