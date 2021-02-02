//Game information 

01/05/2021
//https://js13kgames.com/

//opengameart.org

//https://www.youtube.com/watch?v=R1S_NhKkvGA&t=376s

//https://www.youtube.com/watch?v=H3Fn33lYuE0&t=2s

//https://www.youtube.com/watch?v=8iNzUoUyuis

//https://www.caveofprogramming.com/images/capguy-walk.png

//https://codepen.io/martyhimmel/pen/drbpvZ



01/06/2021
//createElement ---> DOM node



/*
https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*

https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

https://developer.mozilla.org/en-US/docs/Web/Events

https://lucid.app  (flowchart)
*/

01/07/2021
//http://play2.textadventures.co.uk/Play.aspx?id=7nwoee9ope2_hvfrx8kjvw




Will

https://codepen.io/chriscoyier/pen/bJXNyy

/*
<svg class="icon icon-LeftArrow" viewBox="0 0 32 32">
            <path
              d="M23.808 32c3.554-6.439 4.153-16.26-9.808-15.932v7.932l-12-12 12-12v7.762c16.718-0.436 18.58 14.757 9.808 24.238z"
            ></path>
          </svg>
Corresponding CSS
.icon-LeftArrow:hover,
.icon-RightArrow:hover,
.icon-arrow-up:hover {
  fill: var(--color-icon-hover);
  width: 30px;
  height: 30px;
)
*/


//function for this part      
//button for link

//<div> Wrapper </div>
//<div> col </div> 
//<div> gameBoard </div>

//bootstrap will help with some of the layout depending on what you're doing


//the social dilemma - on Netflix related to stuff at Capital


textScene.options.forEach((option) => {
  if (showOption(option)) {
    const button = document.createElement("button");
    button.innerText = option.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectOption(option));
    optionButtonElement.appendChild(button);
  }
});
}



while (optionButtonElement.firstChild) {
  optionButtonElement.removeChild(optionButtonElement.firstChild);
}



https://docs.google.com/spreadsheets/d/1ZqqFOWFYgedxjtsY2x6j6sNIR13RcNMgXh8glGNYjUw/edit?usp=sharing