function is_balanced(str){
  Stack stc = new Stack();
  for(var c in str.split('')){
    if(c === '{' || c==='[' || c==='('){
      stc.push(c);
    }else{
      if(stc.is_Empty()){
         return false;
      }
      if(corresponding_Close_Bracket(stc.peek()!=c{
        return false;

      }
    }
  }
  return stc.is_Empty();//this is the default manner as we can call inside the call
};

function corresponding_Close_Bracket(char){
  if(char==='{'){
    return '}';
  }
  if(char === '['){
    return ']';
  }
  return ')';

}
