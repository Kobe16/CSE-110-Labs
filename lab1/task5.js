window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", displayAlertValue);
}    

function displayAlertValue() {
    let value = document.getElementById('email').value
    alert("Subscriber added: " + value);
}