
const agreement = document.getElementById("agreement");
const subjectivity = document.getElementById("subjectivity");
const confidence = document.getElementById("confidence");
const irony = document.getElementById("irony");


async function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value;
    const data = {formText};
    console.log("::: Form Submitted :::")

    if( Client.checkURL(formText)){
        Client.postData('http://localhost:8080/add', {url:formText})
            
        .then(function(res) {
            Client.userView();
        });
    } else {
        alert (' There is an error');
    }
};


export { handleSubmit }


