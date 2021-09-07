function checkURL(url) {
  console.log ("::: Running checkURL" , url)
    const site = url.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g);
    if(site == null){
    alert("Please add a valid URL");
        return false;
        
     } else {
        return true;
  }}
  
export { checkURL }
