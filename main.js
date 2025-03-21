let inputs = document.getElementById('Entered-inp');
        let buttons = document.querySelectorAll(".num");
        let evalutate = "";
        buttons.forEach(button => {
            button.addEventListener("click", myFunction);
        }
        )

        function myFunction(e) {
            let val = e.target.textContent;

            if (inputs.value === "Error") {
                inputs.value = "";
            }

            if (val == 'CE') {
                inputs.value = "";
                evalutate = ""
            }
            else if (val == '=') {
                try {
                    if (evalutate !== "") {
                        inputs.value = eval(evalutate);
                        evalutate = inputs.value;

                    }

                }
                catch (err) {
                    inputs.value = "Error";
                    evalutate = "";
                }

            }
            else {
                evalutate += val;
                inputs.value += val;
            }
        }