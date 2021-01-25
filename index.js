const linkCss =document.getElementById("css")

const changeCss =()=>{
  

    if(linkCss.attributes.href.textContent=="CSS/style.css"){
        linkCss.setAttribute('href',"CSS/styleTwo.css")
    }else{
        linkCss.setAttribute('href',"CSS/style.css")   
    }

    
}

