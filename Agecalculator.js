function calculateAge() {
    var birthdate = document.getElementById('birthdate').value;
    
    if (birthdate) {
        var today = new Date();
        var birthDate = new Date(birthdate);
        
        var age = today.getFullYear() - birthDate.getFullYear();
        var month = today.getMonth() - birthDate.getMonth();
        
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        document.getElementById('result').innerHTML = "Your age is: " + age;
    } else {
        document.getElementById('result').innerHTML = "Please enter your birthdate";
    }
}
