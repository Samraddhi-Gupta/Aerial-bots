// counter design
document.addEventListener("DOMContentLoaded", () =>{
    function counter(id, start, end, duratiion){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() =>{
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1" , 0, 100, 58900);
    counter("count2" , 100, 1000, 68900);
    counter("count3" , 0, 12300, 78900);
    counter("count4" , 0, 133000, 88900);
})