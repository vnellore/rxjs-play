import { Observable, Subject, interval } from "rxjs";
import { skipUntil } from "rxjs/operators"
var obs1 = Observable.create((data: any) => {
  var i = 1
  setInterval(() => {
    data.next(i++)
  }, 1000)
})

var obs2 = new Subject();
setTimeout(() => {
  obs2.next('Hey')
}, 3000)

var newObs = obs1.pipe(skipUntil(obs2))

newObs.subscribe((x: any) => addItem(x))

function addItem(val:any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}