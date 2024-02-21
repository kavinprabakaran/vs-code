const req = new XMLHttpRequest();
req.open("Get","https://restcountries.com/v3.1/all")
req.send();
req.onload=function (){
  const obj=JSON.parse(this.response)
  for(let ind = 0; ind < obj.lenth; ind++){
    console.log(obj[ind].flag.png)
  }
}