document.getElementById('myform').addEventListener('submit',function(event) {
            event.preventDefault();
            alert('here')

            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const age = document.getElementById('age').value;
            
            if (!fullname || !email) {
                alert("you need a name and email.")
                return;
            }

            if (!age || age <18) {
                alert ("you need to be 18.")
                return
            }

            const formData = {
                name: fullname,
                email: email,
                password: password,
                age: age
            };
            console.log(formData);

            const xhr = new XMLHttpRequest();
            xhr.open("GET", "submit.json", true);
            xhr.setRequestHeader("content-type", "application/json;charset=UFT-8");
            xhr.onreadystatechange = function(){
                if (xhr.readystate === 4 && xhr.status === 200) {
                    alert("Form submitted successfully");
                    const response = JSON.parse(xhr.responseText);
                    console.log(response);
                    //document.getElementById('myForm').reset();
                    document.getElementById('myForm').innerHTML ='';
                    document.getElementById('message').innerText = response.message;

                }else if (xhr.readystate ===4) {
                    alert("Error submitting form." );
                }
            };
            xhr.send(JSON.stringly(formdata));
            

        });