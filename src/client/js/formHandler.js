const agreement = document.getElementById("agreement");
const subjectivity = document.getElementById("subjectivity");
const confidence = document.getElementById("confidence");
const irony = document.getElementById("irony");



function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const data = {formText}
    console.log("::: Form Submitted :::")
    
    

    if( Client.checkURL(formText)){
    fetch('http://localhost:8080/add',
    {
        method: 'POST',
        credentials: 'same-origin',
       mode: 'cors',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
    })
        
    .then(res => res.json())
    .then(function(res) {
        agreement.innerHTML = 'Agreement:' + res.agreement;
        subjectivity.innerHTML = 'Subjectivity: ' + res.subjectivity;
        confidence.innerHTML = 'Confidence: ' + res.confidence;
        irony.innerHTML = 'Irony: ' + res.irony;
    })
} else {
    alert (' There is an error')
}
}

export { handleSubmit}
