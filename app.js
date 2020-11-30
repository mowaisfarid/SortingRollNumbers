
let arr1=[];
let Even=[];
let odd=[];

function add(){
    const userInput=document.getElementById("input").value;
    arr1.push(userInput);
    document.getElementById("showNumbers").innerHTML=arr1
    document.getElementById("input").value="";


}

function arrange(){

    for(i=0;i<arr1.length;i++){
        if(arr1[i] % 2 ===0){

            Even.push(arr1[i]);
            document.getElementById("evenRollnum").innerHTML=Even;
        }
        else{
            odd.push(arr1[i]);
            document.getElementById("oddRollnum").innerHTML=odd;
        }
    }
}