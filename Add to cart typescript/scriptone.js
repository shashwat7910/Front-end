var Info = /** @class */ (function () {
    function Info() {
    }
    Object.defineProperty(Info.prototype, "Service", {
        get: function () {
            return this.service;
        },
        set: function (Service) {
            this.service = Service;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Info.prototype, "Price", {
        get: function () {
            return this.price;
        },
        set: function (Price) {
            this.price = Price;
        },
        enumerable: false,
        configurable: true
    });
    return Info;
}());
function fun() {
    var ref = document.getElementById("tbody");
    //console.log(localStorage);
    var i;
    var total = 0;
    console.log(localStorage.length);
    var j = 0;
    var k = localStorage.length;
    var len = sessionStorage['index'];
    var info;
    for (i in localStorage) {
        if (j == k)
            break;
        info = new Info();
        var ite = localStorage[i];
        console.log(ite);
        var it = ite.split("+");
        info.service = it[0];
        info.price = parseInt(it[1]);
        total += parseInt(it[1]);
        console.log(it);
        var table = document.getElementById("table");
        var row = table.insertRow(j + 1);
        var cell2 = row.insertCell(0);
        var cell3 = row.insertCell(1);
        cell2.innerHTML = info.Service;
        cell3.innerHTML = info.Price.toString();
        j += 1;
    }
    var t = document.getElementById("table");
    var r = t.insertRow(j + 1);
    var c1 = r.insertCell(0);
    var c2 = r.insertCell(1);
    c1.innerHTML = "Total";
    c2.innerHTML = "Rs " + total;
}
