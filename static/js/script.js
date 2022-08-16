function validate(e){
    e.preventDefault();
    const userName = document.getElementById('name').value;
    const rollNo = document.getElementById('roll-no').value;
    const userNameRegx = /^[a-zA-Z ]{3,}$/;
    const rollNoRegx = /^[0-9]{3}[A-Z]{1}[0-9]{4}$/;
    if(userNameRegx.test(userName) && rollNoRegx.test(rollNo)){
        alert('Valid');
    }
    else{
        alert('Invalid');
    }
}