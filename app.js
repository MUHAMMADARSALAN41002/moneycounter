// Not allowing user to choose 1 because if user choose 1 as desired note,
// few rupees cut off from amount during distribution. This is because,
// 1 rupees notes will not exceed the limit of 200 

const submit = () => {
    let amount = document.getElementById('amount').value;
    let currentAmount = amount;
    let fiveHun, hun, fifty, twenty, ten, five, one;

    if (amount >= 100 && amount <= 100000) {
        let choice = Number(prompt("Enter Choice Note among 5,10,20,50,100,500"));
        if (choice === 5 || choice === 10 || choice === 20 || choice === 50 || choice === 100 || choice === 500) {

            if (currentAmount > choice) {
                let length_of_chosen_note = currentAmount / choice;
                if (length_of_chosen_note > 200) {
                    currentAmount = currentAmount - (choice * 200)
                    choice === 5 ? five = 200 : choice === 10 ? ten = 200 : choice === 20 ? twenty = 200 : choice === 50 ? fifty = 200 : choice === 100 ? hun = 200 : choice === 500 ? fiveHun = 200 : false
                }
                else {
                    let less = Math.floor(length_of_chosen_note)
                    currentAmount = currentAmount - less * choice
                    choice === 5 ? five = less : choice === 10 ? ten = less : choice === 20 ? twenty = less : choice === 50 ? fifty = less : choice === 100 ? hun = less : choice === 500 ? fiveHun = less : false
                }
            }

            if (currentAmount >= 500 && choice !== 500) {
                fiveHun = Math.floor(currentAmount / 500);
                currentAmount = currentAmount - fiveHun * 500
            }

            if (currentAmount >= 100 && choice !== 100) {
                hun = Math.floor(currentAmount / 100)
                currentAmount = currentAmount - hun * 100
            }
            if (currentAmount >= 50 && choice !== 50) {
                fifty = Math.floor(currentAmount / 50);
                currentAmount = currentAmount - fifty * 50;
            }

            if (currentAmount >= 20 && choice !== 20) {
                twenty = Math.floor(currentAmount / 20)
                currentAmount = currentAmount - twenty * 20
            }

            if (currentAmount >= 10 && choice !== 10) {
                ten = Math.floor(currentAmount / 10);
                currentAmount = currentAmount - ten * 10;
            }

            if (currentAmount >= 5 && choice !== 5) {
                five = Math.floor(currentAmount / 5)
                currentAmount = currentAmount - five * 5
            }

            if (currentAmount >= 1) {
                one = currentAmount;
            }

            const documentstyle = {color:'red'}

           

            document.write(`<p style="margin-top: 50px; display:flex; flex-direction:coloum; justify-content: center; font-size:21px"> Your Amount = ${amount} </p>`)
            document.write(`<p style='display:flex; flex-direction:coloum; justify-content: center; font-size:20px; font-weight:bold'> Currency note : Number </p>`)
            fiveHun !== undefined ? document.write(`<p style="display:flex; flex-direction:coloum; justify-content: center; font-size:20px"> 500 : ${fiveHun} </p>`) : false
            hun !== undefined ? document.write(`<p style="display:flex; flex-direction:coloum; justify-content: center; font-size:20px"> 100 : ${hun} </p>`) : false
            fifty !== undefined ? document.write(`<p style="display:flex; flex-direction:coloum; justify-content: center; font-size:20px"> 50 : ${fifty} </p>`) : false
            twenty !== undefined ? document.write(`<p style="display:flex; flex-direction:coloum; justify-content: center; font-size:20px"> 20 : ${twenty} </p>`) : false
            ten !== undefined ? document.write(`<p style="display:flex; flex-direction:coloum; justify-content: center; font-size:20px"> 10 : ${ten} </p>`) : false
            five !== undefined ? document.write(`<p style="display:flex; flex-direction:coloum; justify-content: center; font-size:20px"> 5 : ${five} </p>`) : false
            one !== undefined ? document.write(`<p style="display:flex; flex-direction:coloum; justify-content: center; font-size:20px"> 1 : ${one} </p>`) : false

        }
        else {
            alert(" Warning !!! Enter Correct Choice")
        }
    }
    else {
        alert(' Warning !!! Enter amount less than RS: 100000 and greater than RS: 100')
    }
}