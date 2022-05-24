let navbar = document.getElementsByTagName("navbar")
for (let i=0; i<navbar.length; i++){
    navbar[i].style.cssText = `
        position: sticky;
        top: 0;
        left: 0;
        padding: 10px;
        box-shadow: 0px 0px 2px 2px #0002;
        width: 100%;
        display: block;
        z-index: 2;
        background-color: #f7f7f7;
    `
}

let row = document.getElementsByTagName("row")
for (let i=0; i<row.length; i++){
    row[i].style.cssText = `
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
    `
}

/* YOU CAN ADD CLASSES INSTEAD OF INLINE STYLE */
let card = document.getElementsByTagName("card")
for (let i=0; i<card.length; i++){
    console.log(i)
    card[i].classList.add("card")
}