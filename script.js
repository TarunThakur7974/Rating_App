let form = document.querySelector('form');
let inputFeed = document.querySelector("input");
let dataDiv = document.querySelector('.dataDiv');
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');
let i = 0;
let sum = 0;
let num = 0;
let minusrating;
let minusratingdemo;
let ratingValue = 10;
inputFeed.focus();
let lilength = ul.children.length - 1
li[lilength].classList.add('bgclass');

let pickRating = (e) => {
    Array.from(li).forEach(() => {
        ratingValue = e.target.innerText

        ratingValue = Number(ratingValue)

        if (e.target.classList.contains('listitems')) {
            e.target.classList.add('bgclass')
        }
        i += 1
        if (li[i - 1].classList.contains('bgclass')) {
            li[i - 1].classList.remove('bgclass');

        }
    });

    i = 0
    inputFeed.focus();
}


reviews.innerText = `${dataDiv.children.length} Revives`
ul.addEventListener('click', pickRating)

let generateRating = (e) => {
    e.preventDefault();
    sum += ratingValue;
    avgRating.innerText = `Average Rating : ${(sum / (dataDiv.children.length + 1)).toFixed(2)}`
    reviews.innerText = `${dataDiv.children.length + 1} Revives`
    let cards = document.createElement('div')
    cards.className = 'cards';
    cards.innerHTML += `<p  class="rating bgclass">${ratingValue}</p> 
    <p class="Feedback"  contenteditable="true">${inputFeed.value}</p>
    <button class="btn" id="deletebtn">X</button>`
    dataDiv.className = "divStyle"
    dataDiv.append(cards)
    ratingValue = 10;
    form.reset();
    Array.from(li).forEach((e) => {
        e.classList.remove('bgclass')
    })
    li[lilength].classList.add('bgclass');
}

dataDiv.addEventListener('click', (e) => {


    if (e.target.classList.contains('btn')) {


        let listItem = e.target.parentNode;
        listItem.remove();

        reviews.innerText = `${dataDiv.children.length} Revives`
        let cards = document.querySelectorAll('.cards');
        minusrating = 0;
        minusratingdemo = 0;
        console.log(cards)
        cards.forEach((elem) => {
            let data = elem.querySelectorAll('.rating')
            data.forEach((element) => {
                minusrating += Number(element.innerText)
                console.log(minusrating)
            })

        })
        avgRating.innerText = `Average Rating : ${(minusrating / dataDiv.children.length).toFixed(2)}`
        if (cards.length === 0 ) {
            location.reload();
        }
    }

}
)

form.addEventListener('submit', generateRating)




   // console.log(e.target.previousElementSibling.previousElementSibling.innerText)
        // minusratingdemo = Number(e.target.previousElementSibling.previousElementSibling.innerText)
        // minusrating = minusrating + minusratingdemo;
