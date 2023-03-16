// console.log('script running...')
document.querySelector(".cross").style.display ="none";
document.querySelector(".hamburger").addEventListener("click", ()=>{
    document.querySelector(".sidebar").classList.toggle( 'sidebargo')
    if(document.querySelector(".sidebar").classList.contains( 'sidebargo')){
    document.querySelector(".ham").style.display='inline'
    document.querySelector(".cross").style.display='none'
    }else{
        document.querySelector(".ham").style.display='none'
        setTimeout(() => {
            document.querySelector(".cross").style.display='inline'

        }, 300);


    }
    
})

//       const cvButton = document.getElementById("cv");

// cvButton.addEventListener("click", function() {
//   const link = document.createElement("a");
//   link.href = "cv\Nabin Bhattarai-(CV).docx";
//   link.download = "nabin-cv.pdf";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// });



// const form = document.getElementById('contact-form');

// // Handle form submission
// form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent default form submission behavior

//     // Get form data
//     const formData = new FormData(form);
//     console.log('script is running')
//     // Send form data to server using fetch()
//     fetch('path/to/server/script', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Handle successful form submission
//         console.log(data);
//     })
//     .catch(error => {
//         // Handle form submission error
//         console.error(error);
//     });
// });