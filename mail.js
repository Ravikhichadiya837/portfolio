        (function(){
            emailjs.init("CqzxeRdhO_5GkFEZm");
        })();

        function sendMail() {
            let params = {
                name1: document.getElementById("name1").value,
                name2: document.getElementById("name2").value,
                email: document.getElementById("email").value,
                Subject: document.getElementById("Subject").value,
                message: document.getElementById("message").value
            };

            emailjs.send("service_84gza5g", "template_3bzlmi6", params)
            .then(response => {
                alert("Email sent successfully!");
            })
            .catch(error => {
                alert("Failed to send email.");
            });
        }