class myArr extends Array {
    isEmpty() {
      return this.length > 0;
    }
  }
  
  let arr = new myArr(10, 20, 30);
  console.log(arr.isEmpty());
  