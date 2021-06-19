Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};
let rgb_value = document.getElementById("rgb_value");
let result__text = document.getElementById("result__text");
let reset = document.getElementById("reset-btn");
let start = () => {
    result = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
    rgb_value.textContent = result;
    console.log(result);
    let arr = new Array();
    let color = new Array();
    let colorListen = new Array;
    for( let i =0 ; i < 5; i++)
    {
        arr[i] = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
        
    }
    arr.insert(Math.floor(Math.random()*5),result);
    console.log(arr);
    for( let i =0 ; i < arr.length; i++){
        color[i] = document.getElementById(`box${i+1}`);
        color[i].style.backgroundColor = arr[i];
    }
    for( let i =0 ; i < arr.length ; i++){
        colorListen[i] = color[i].addEventListener("click",()=>{
            if(result == color[i].style.backgroundColor){
                for( let j = 0 ; j < arr.length ; j++){
                    color[j].style.backgroundColor = result;
                }
                document.body.style.backgroundColor = result;
                document.getElementsByTagName("h1")[0].style.backgroundColor = result;
                document.getElementsByClassName("reset")[0].style.backgroundColor = result;
                result__text.textContent = "CORRECT";
                
            }
            else{
                color[i].style.backgroundColor = document.body.style.backgroundColor;
                result__text.textContent = "WRONG";
            }
        })
    }
reset.addEventListener("click",()=>{
    document.getElementsByTagName("h1")[0].style.backgroundColor = ""
    document.getElementsByClassName("reset")[0].style.backgroundColor = "";
    document.body.style.backgroundColor = "";
    start();
})
   

    
    
}
start();