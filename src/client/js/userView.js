
const agreement = document.getElementById("agreement");
const subjectivity = document.getElementById("subjectivity");
const confidence = document.getElementById("confidence");
const irony = document.getElementById("irony");

const userView= async()=>{
    const request =await fetch('/all');
    try{
        const allData= await request.json();
        agreement.innerHTML = 'Agreement:' + allData.agreement;
        subjectivity.innerHTML = 'Subjectivity: ' + allData.subjectivity;
        confidence.innerHTML = 'Confidence: ' + allData.confidence;
        irony.innerHTML = 'Irony: ' + allData.irony;
    }catch(error){
        console.log('error',error);
    }
}

export {userView}