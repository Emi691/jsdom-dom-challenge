document.addEventListener("DOMContentLoaded", function() {
    let timer1 = setInterval(timer, [1000])
    function timer(){
        const time = document.querySelector('h1#counter').innerText
        let number = parseInt(time) + 1
        document.querySelector('h1#counter').innerText = number.toString();
    }

    function antiTimer(){
        const time = document.querySelector('h1#counter').innerText
        let number = parseInt(time) - 1
        document.querySelector('h1#counter').innerText = number.toString();
    }

    const buttonPlus = document.querySelector('button#plus')
    const buttonMinus = document.querySelector('button#minus')

    buttonPlus.addEventListener("click", function(){
        timer()
    })

    buttonMinus.addEventListener("click", function(){
        antiTimer()
    })

    const buttonHeart = document.querySelector('button#heart')

    buttonHeart.addEventListener("click", function(){
        const time = document.querySelector('h1#counter').innerText 
        let i
        if(document.querySelector(`#t${time}`)){
             i = parseInt(document.querySelector(`#t${time}`).innerText.split(" ")[2]) + 1
             document.querySelector(`#t${time}`).innerText = `${time} has ${i} like(s)`
        }else{i = 1
            const element = document.createElement("li")
            element.setAttribute('id', `t${time}`)
            const message = document.createTextNode(`${time} has ${i} like(s)`) 
            const likes = document.querySelector(".likes")
            element.append(message)
            likes.appendChild(element)
        }
    })

    const buttonSubmit = document.querySelector('button#submit')
    const buttonPause = document.querySelector('button#pause')

    buttonPause.addEventListener("click", function(){
        let buttonText = buttonPause.innerText
        if (buttonText === "pause"){
            console.log('clicked')
            clearInterval(timer1)
            buttonPlus.disabled = true
            buttonMinus.disabled = true
            buttonHeart.disabled = true
            buttonSubmit.disabled = true
            buttonPause.innerText = "resume"
        }else{
            timer1 = setInterval(timer, [1000])
            buttonPlus.disabled = false
            buttonMinus.disabled = false
            buttonHeart.disabled = false
            buttonSubmit.disabled = false
            buttonPause.innerText = "pause"
        }
    })

    document.addEventListener("submit", function(event){
        let input =  document.querySelector('input#comment-input').value
        const comment = document.createTextNode(`${input}`)
        const paragraph = document.createElement("p")
        const div = document.querySelector('div#list.comments')
        paragraph.append(comment)
        div.appendChild(paragraph)
        event.preventDefault();
    })
    
});