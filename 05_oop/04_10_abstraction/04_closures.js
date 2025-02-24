function Count() {
    let c1 = 0;
    return {
        inc: function() {
            c1++;
            console.log(c1);
        }
    };
}

const c2 = Count();
c2.inc(); 
c2.inc(); 
