const btns = document.querySelectorAll('.panel');

function showAnswear (e) {
    let question = e.target;
    var answear = question.nextElementSibling;

    if (!question.classList.contains('active')) {
        question.classList.add('active');       
        answear.style.display = 'block';
        } else {
            question.classList.remove('active');
            answear.style.display = 'none';
        }
  }


btns.forEach(element => {
    element.addEventListener('click', function (e) {showAnswear(e); true});
});

    
