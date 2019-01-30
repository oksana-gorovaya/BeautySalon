let buttonList = document.querySelectorAll('li.serviceItem');
let frame = document.getElementById('serviceTable');

buttonList.forEach(function(button){
    button.addEventListener('click', function() {
        frame.src = '\/service_iframes\/' + this.id + '.html';
    });
});