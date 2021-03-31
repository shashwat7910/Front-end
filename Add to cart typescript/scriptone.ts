class Info{
    service : string;
    price : number;
    
    public get Service() : string {
        return this.service;
    }
    
    public set Service(Service : string) {
        this.service = Service;
    }
    
    public set Price(Price : number) {
        this.price = Price;
    }
    
    public get Price() : number {
        return this.price;
    }
    
    
}

function fun(){
   var ref = document.getElementById("tbody");
   var i : any;
   var total = 0;
   console.log(localStorage.length);
   var j=0;
   var k = localStorage.length;
   var len = sessionStorage['index'];
   var info:Info;
   for(i in localStorage)
   {
     if(j==k)
     break;
     info = new Info();
     var ite = localStorage[i];
     console.log(ite);
    var it = ite.split("+");
    info.service = it[0];
    info.price = parseInt(it[1]);
    total+=parseInt(it[1]);
     console.log(it);
     var table = document.getElementById("table") as HTMLTableElement;
     var row = table.insertRow(j+1);
     
     var cell2 = row.insertCell(0);
     var cell3  =row.insertCell(1);
     
     cell2.innerHTML = info.Service;
     cell3.innerHTML = info.Price.toString();
     j+=1;
    
      }
var t = document.getElementById("table") as HTMLTableElement;
var r = t.insertRow(j+1);
var c1 = r.insertCell(0);
var c2 = r.insertCell(1);

c1.innerHTML = "Total";
c2.innerHTML = "$ "+total;
}