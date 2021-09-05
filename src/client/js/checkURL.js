function checkURL(url) {
    var site = url.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g);
    if(site == null){
    alert("Please add a valid URL");
        return false;
        
     } else {
        return true;
  }}
  
export { checkURL }
