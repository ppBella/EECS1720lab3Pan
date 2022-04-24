   var u = document.querySelector(ul');
   var text = document.querySelector('textarea");
   var btn = document.querySelector("button')
   btn.onclick = function() {
   if (text.value ==") {
    alert('you did not enter any thing')；
   return false;
   }else {
       var li = document.createElement('li');
       li.innerHTML = text.value ;
       ul.insertBefore(li,ul.children[0]);
   }
}

