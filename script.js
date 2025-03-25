//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
    // Preventing the default form submission
    event.preventDefault();
    
    // Accessing the name and age fields
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;

    // Validate the inputs
    if(name === "" || age === "") {
        alert("Please enter valid details.");
        return;
    }

    // Create a promise
    let ageCheckPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(age >= 18) {
            resolve(`Welcome, ${name}. You can vote.`);
        } else {
            reject(`Oh sorry ${name}, you aren't old enough.`);
        }
    }, 4000); // 4 seconds delay
});

// Handle the promise
ageCheckPromise.then((message) => {
    alert(message);
}).catch((error) => {
    alert(error);
});
	</script>