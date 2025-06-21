
    function validateForm() {
        let name1 = document.getElementById("name1").value.trim();
        let name2 = document.getElementById("name2").value.trim();
        let email = document.getElementById("email").value.trim(eail);
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();
        let sendButton = document.getElementById("sendButton");

        if (name1 && name2 && email && subject && message) {
            sendButton.removeAttribute("disabled");
        } else {
            sendButton.setAttribute("disabled", "true");
        }
    }
