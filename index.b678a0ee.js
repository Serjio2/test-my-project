const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"Serjio",body:"CRUD is awesome"})};fetch("http://jsonplaceholder.typicode.com/posts",o).then((o=>o.json())).then((o=>console.log(o))).catch((o=>console.log(o)));
//# sourceMappingURL=index.b678a0ee.js.map
