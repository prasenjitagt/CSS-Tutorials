const cards = document.querySelectorAll('.card');


const firstPara = entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle('show',entry.isIntersecting)
        // if(entry.isIntersecting){
        //     observer.unobserve(entry.target)
        // }
    })


}

const observer = new IntersectionObserver(firstPara,{
    threshold:0.5,
    rootMargin:"-75px"
}
)


cards.forEach(card=>{
    observer.observe(card);
});