let nav_links = document.querySelectorAll(".nav_link")

nav_links.forEach((ele) =>{
    ele.addEventListener('click',()=>{
        document.querySelector(".active").classList.remove('active')
        ele.classList.add('active')
    })
})
