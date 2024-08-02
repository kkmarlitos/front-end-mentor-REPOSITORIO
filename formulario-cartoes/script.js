span_cvcCard.innerText = cvc
            numCard.innerText = num
            span_name.innerText = name
            span_date.innerText = `${mes}/${ano}`

            main.innerHTML = '<h1 class="main_script">Thank You! <p class="main_script" style="padding-bottom:40px">We have added your card detail<p> <input type="button" value="Continue" id="confirmar" style="margin: auto;">'