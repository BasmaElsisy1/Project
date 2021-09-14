async function handleSubmit(event) {
    event.preventDefault()

    // Check your input
    let formInput = document.getElementById('name').value;
     
    Client.checkURL(formInput);

    await fetch ("http://localhost:8080/add",{
        method: 'POST',
        mode: "cors",
        credentials: 'same-origin',
        body: JSON.stringify(formInput),
        headers:{
            "Content-Type": "application/json",
    }
});

    const sentiment = await fetch("http://localhost:808o/all");
    const sentimentJson = await sentiment.json();

    console.log(`returning ${sentiment}`);
    console.log(sentimentJson);

    Client.updateUI(sentimentJson);
}

export {
    handleSubmit
}
