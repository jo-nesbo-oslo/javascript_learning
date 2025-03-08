let str = `{
    "name": "GeeksforGeeks", 
    "CEO": "Sandeep Jain"
  }`;
  let res = JSON.parse(str);
  console.log(res);
  
  /* eval
  */

  let strEval = `{
    "name": "GeeksforGeeks", 
    "CEO": "Sandeep Jain"
  }`;
  let resEval = eval('(' + strEval + ')');
  console.log(resEval);
  console.log(resEval.name);
  console.log(resEval['CEO']);

  /* function constructor
  */
  let strFc = `{
    "name": "GeeksforGeeks", 
    "CEO": "Sandeep Jain"
  }`;
  let resFc = new Function('return ' + strFc)();
  console.log(resFc);
  console.log(resFc.name);
  console.log(resFc['CEO']);
  