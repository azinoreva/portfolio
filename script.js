// Get the modal
document.addEventListener('DOMContentLoaded', function() { 
    
    var modals = document.getElementsByClassName("modal");
     
     var btns = document.getElementsByClassName("modalBtn"); 
     var spans = document.getElementsByClassName("close"); 
     
     for (let i = 0; i < btns.length; i++) 
        { btns[i].onclick = function() {
             modals[i].style.display = "block"; 
            } 
        } 
     for (let i = 0; i < spans.length; i++) { 
        spans[i].onclick = function() { 
            modals[i].style.display = "none"; 
        } 
    } 
    window.onclick = function(event) { 
        for (let i = 0; i < modals.length; i++)
             { if (event.target === modals[i])
                 { modals[i].style.display = "none"; 

                 } 
                } 
            } 
        }
    );
// Scroll Event Handler
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  const icons = document.querySelectorAll('.icon-box');
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const icon = icons[index];
    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
      icon.classList.add('highlight');
    } else {
      icon.classList.remove('highlight');
    }
  });
});
