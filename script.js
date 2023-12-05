const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset &&  top < offset + height) {
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        
        }
    })
}
function getDogImage() {
            // เรียกใช้ API โดยใช้ fetch ใน JavaScript
            fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => response.json())
                .then(data => {
                    // เรียกข้อมูลภาพสุนัขที่ได้จาก API
                    let imageUrl = data.message;
                    
                    // แสดงภาพสุนัขในหน้า HTML
                    let dogImageElement = document.getElementById('dogImage');
                    dogImageElement.src = imageUrl;
                })
                .catch(error => console.error('Error fetching data:', error));
        }
function myFunction() {
        fetch("https://catfact.ninja/fact")
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                let txt = " ";
                for (let x in data) {
                    txt += data[x] + " ";
                    document.getElementById("demo2").innerHTML = txt;
                };

                return data;
            })


    }