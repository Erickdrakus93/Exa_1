function generate_the_subarray(array){
  var less_array = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i]<array[i+1]){
       less_array.push(array[i]);
    }
  }
  return less_array;
}

function accumulate(a,b){
  var result = 0;
  while(a<b){
    result+=a;
    ++a;
  }
  return result;
}

function the_res(array, index_of_order){
  array.sort(function sort(a,b){
    return b-a
  });
  return array[index_of_order];
};

function exclude_of_repetitions(array){
   for (var i = 0; i < array.length; i++) {
     if(array[i]==array[i+1]){
       array.splice(i,i+1);
    }
  }
}

//here we define the next data Structure


class Stack {
  constructor() {
    this.items = [];

  };
  //functions to implement
  push(element){
    this.items.push(element);
  };
  pop(){
    if(this.items.length===0){
      return "underflow";
    };
    return this.items.pop();
  };
  peek(){
    return this.items[items.length - 1];
  };
  is_Empty(){
    return this.items === 0;
  };
  print_Stack(){
    var str = "";
    for (var i = 0; i <this.items.length; i++) {
    str+=this.items[i] + " ";
  };
  return  str;
};

function is_balanced(string){
  Stack st = new Stack();
  for(var char in string.split('')){
    switch (char) {
      case '{':
      case '(':
      case '[':
        st.push(char);
        break;
      case ']':
        if(st.is_Empty() || st.pop()!='['){
          return false;
        };
        break;
      case ')':
        if(st.is_Empty() || st.pop()!='('){
          return false;
        };
        break;
      case '}':
        if(st.is_Empty() || st.pop()!= '{'){
          return false;
        };
        break;
    }
  }
  return st.is_Empty();
};
