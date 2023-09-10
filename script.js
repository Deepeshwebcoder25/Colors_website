const getcolor = () => { 
    const randomenumber = Math.floor( Math.random  () * 16777215);
    // console.log(randomenumber);
    const hexcode = "#" + randomenumber.toString(16); 
    // console.log(hexcode , randomenumber)
    document.body.style.backgroundColor = hexcode;
}

document.getElementById ("btn").addEventListener ( "click", getcolor)


getcolor();