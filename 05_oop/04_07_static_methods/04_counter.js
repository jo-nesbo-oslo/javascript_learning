class Count {
    static c = 0;
    static inc() {
        return ++Count.c;
    }
    
    static reset() {
        Count.c = 0;
    }
}
console.log(Count.inc()); 
console.log(Count.inc()); 
Count.reset();
console.log(Count.inc()); 
