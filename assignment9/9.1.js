function checkScope() {
    if (true) {
      var varScope = "I am accessible anywhere inside this function";
      let letScope = "I am only accessible inside this block";
      const constScope = "I am also block-scoped and cannot be changed";
    }
  
    console.log(varScope); //  Works (Function Scope)
    console.log(letScope); //  Error (Block Scope)
    console.log(constScope); //  Error (Block Scope)
  }
  
  checkScope();
  