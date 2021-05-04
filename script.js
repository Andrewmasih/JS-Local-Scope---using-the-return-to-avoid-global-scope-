/* its good practice to avoid polluting the 'global scope' wherever possible. Try to keep to variables inside functions and pass around values using the 'RETURN' from your function rather than creating a global variable */

/* function scope - functions are only for function scope, function scope is inbetween the brackets {} */

/* {blockscope} -  loops are in the blockscope, 'if' or 'else' (condtional statements) e.g if (1 == 1) {
}*/

var a = 10;

function calc () {
  return number;

}

function calc () {
  let a = 10;
  return number;
  
};

/* caution!, the rule that appiles with gloabl/local scope access doesnt work with 'function scope' or 'blockscope' */

/* SO, LET and CONST fix this issues of functon, blcok scope access in relation to global and local scope*/

/* LET/CONST replaces VAR, it fixes this flaw */

