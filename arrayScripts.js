var boys = ["Peter","lars","Ole"];
var girls = ["Janne","hanne","Sanne"]

var all = boys.concat(girls);
var string = all.reduce(function(first,second){return first+ "," + second});
var string = all.reduce(function(first,second){return first+ "-" + second});

console.log(string);

all.push("Lone","Gitte");
all.unshift("Hans","Kurt");
all.shift();
all.pop();
all.splice(3,2);
all.reverse();
all.sort();
all = all.map(function(item){return item.toUpperCase();});
var filtered = all.filter(function(item){return item.charAt(0) == "L" ||  item.charAt(0) ==="H"});
console.log(filtered);

