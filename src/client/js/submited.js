const submitUserInput = async (url = '', data = {}) => {
    console.log(data); 
    const response = await fetch( url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
  });

    try {
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('error', error);
    }
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

export { submitUserInput, updateUI }