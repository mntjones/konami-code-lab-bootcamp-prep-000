const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var check = []


function init() {
  // Write your JavaScript code inside the init() function
 
  var index = 0
  
  document.body.addEventListener('keydown', function(e) {
    
    var check = parseInt(e.detail || e.which)
    for (let i=0; i< code.length; i++) {
      if (check == array[index]){
        index ++ 
        if (index == code.length) {
          alert("Konami Code Master!")
          
          index = 0
        }
      }
      
      else { index = 0 }
    }
  })
  
   
}