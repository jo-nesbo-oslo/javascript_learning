let o = {
    name: "Pranjal",
    age: 21
}
let a = [1, 2, 3, 4, 5]
let s = "Hello GFG"
function p() {
    console.log('My name is xyzabc')
}
Object.prototype.common = function () {
    console.log('I am a shared method from prototype')
}
o.common()
a.common()
s.common()
p.common()
