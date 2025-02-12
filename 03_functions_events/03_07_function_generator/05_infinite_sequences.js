function* infiniteSeq() {
    let i = 0;
    while (true) {
        yield i++;
    }
}
const sequence = infiniteSeq();
console.log(sequence.next().value); 
console.log(sequence.next().value); 
console.log(sequence.next().value); 
