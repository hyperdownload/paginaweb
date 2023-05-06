const onSearch = ()=>{
    const input =document.querySelector("#search");
    const filter = input.ariaValueMax.toUpperCase();

    const list = document.querySelectorAll("#list li");

    list.forEach((el)=>{
        const text = el.textContent.toUpperCase();


        text.indexOf(filter) > -1
            ?  (el.style.display="")
            : (el.style.display="none");
    });
};