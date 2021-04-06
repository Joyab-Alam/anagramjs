
var result = document.getElementById('answer');
 
var button = document.getElementById('check');
     button.addEventListener('click', isAnagram);
function isAnagram (){
  
  var s = document.getElementById('word1').value;
  var t = document.getElementById('word2').value;
  s = s.toUpperCase().split('').sort().join('');
  t = t.toUpperCase().split('').sort().join('');
 if(s===t) {
      result.innerHTML = "Strings is anagrams.";
    }
    else{
       result.innerHTML = "Strings is not anagrams.";
    }
    
}
