(function () {
    var email = "riordanrugby8@gmail.com";
    var copyButtons = [
        document.getElementById("copyEmail"),
        document.getElementById("copyEmailSecondary")
    ];
    var savePdf = document.getElementById("savePdf");

    function setCopiedState(button) {
        if (!button) {
            return;
        }

        var originalText = button.textContent;
        button.textContent = "Email Copied";

        window.setTimeout(function () {
            button.textContent = originalText;
        }, 1800);
    }

    function fallbackCopy(button) {
        var tempInput = document.createElement("input");
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        setCopiedState(button);
    }

    function copyEmail(button) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).then(function () {
                setCopiedState(button);
            }).catch(function () {
                fallbackCopy(button);
            });
            return;
        }

        fallbackCopy(button);
    }

    copyButtons.forEach(function (button) {
        if (!button) {
            return;
        }

        button.addEventListener("click", function () {
            copyEmail(button);
        });
    });

    if (savePdf) {
        savePdf.addEventListener("click", function () {
            window.print();
        });
    }
}());
