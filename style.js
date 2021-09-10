function btndemo(){
    const message = document.getElementById('writeMessage');
    const result = document.getElementById('messageResult');
    const btnClear = document.getElementById('send');
    btnClear.addEventListener('click' , () => {
      message.forEach(message => message.value = '');
    })

    result.innerHTML = `${message.value}`;
    document.getElementById('messageResult').style.display = 'block';
    
    // for (let i = 0; i <result.length );
}

let btnClear = document.querySelector('#send');
let inputs = document.querySelectorAll('#writeMessage');

btnClear.addEventListener('click', () => {
inputs.forEach(input => input.value = '');
});


function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  function textCloseNav(){
      document.getElementById('text').style.display = 'none';
  }
  
  
  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      document.getElementById('text').style.display = 'none';
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  