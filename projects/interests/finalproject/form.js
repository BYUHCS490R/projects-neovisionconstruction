document.getElementById('myform').addEventListener('submit',function(event) {
            event.preventDefault();

            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const gender = document.querySelector('input[name="gender"]:checked')?.value;
            const age = document.getElementById('age').value;
            const phone = document.getElementById('phone').value;
            const bio = document.getElementById("bio").value;


            
            if (!fullname || !email) {
                alert("you need a name and email.")
                return;
            }

            if (!age || age <15) {
                alert ("you need to be 15.")
                return;
            }
             if (!gender) {
              alert("Gender is required.")
               return;
             }
             if (!phone) {
             alert("Phone number is required.");
             return;
            }

             if (phone.length < 10) {
             alert("Enter a valid phone number.");
             return;
             }
              if (!bio || bio.length < 20) {
              alert("Please write at least 10 characters in the comments box.");
             return;
              }
            const formData = {
                name: fullname,
                email: email,
               gender: gender,
                age: age,
                phone: phone,
                bio: bio
            };
            
            console.log(formData);

            const xhr = new XMLHttpRequest();
            xhr.open("GET","submit.json",true);
            xhr.setRequestHeader("content-Type","application/json;charset=UTF-8");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    alert ("form sudmitted successfully");
                    
                    const response = JSON.parse(xhr.responseText);
                    console.log(response);
                    //document.getElementById('myform').reset();
                    document.getElementById('myform').innerHTML = '';
                    document.getElementById('message').innerText = response.message;
                } else if (xhr.readyState === 4) {
                    alert("Error sudmitting form.")
                }
                };
                xhr.send(JSON.stringify(formData));
            });