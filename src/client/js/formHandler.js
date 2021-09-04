function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test'),
    {
        method: 'POST',
        credentials: 'same-origin',
       mode: 'cors',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({formText: formText}),
        
    }
    .then(res => res.json())
        
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

const updateUI = async () => {
    const request = await fetch('/all');
    try{
        const allData = await request.json();
        console.log(allData) 
        document.getElementById('agreement').innerHTML = allData.agreement;
        document.getElementById('subjectivity').innerHTML = allData.subjectivity;
        document.getElementById('confidence').innerHTML = allData.confidence;
        document.getElementById('irony').innerHTML = allData.irony;

    } catch(error){
        console.log('error', error);
    }
}

export { handleSubmit , updateUI }
