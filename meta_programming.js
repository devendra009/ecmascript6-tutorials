// Hooking into runtime-level object meta-operations.
let target = {
  foo: "Welcome, foo",
  world: "Hello Guys"
}
let proxy = new Proxy(target, {
  get (receiver, name) {
      return name in receiver ? receiver[name] : `Hello, ${name}`
  }
})
proxy.foo   === "Welcome, foo"
proxy.world === "Hello, world"
console.log(proxy.world);


// Make calls corresponding to the object meta-operations.
let obj = { a: 1 }
Object.defineProperty(obj, "b", { value: 2 })
obj[Symbol("c")] = 3
console.log(Reflect.ownKeys(obj)); // [ "a", "b", Symbol(c) ]

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 1;

console.log(Object.keys(my_obj)); // console ['foo']
console.log(Reflect.ownKeys(my_obj)); // console ['getFoo', 'foo']