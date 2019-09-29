<style>
.panel {
  margin-bottom: 27px;
  background-color: rgba(255,255,255,0.05);
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.05);
}
.panel-info {
  border-color: #bce8f1;
}
</style>

# JS Array Methods

This project directed to improve education process in computer programming.

Difficult topics will be described here explicitly as possible.

Main goal is to visually display business logic of most frequently used JS array methods.

Here is a list of frequently used Array methods:

- forEach
- map
- filter
- reduce

They have important advantages and benefits comparing to
classic loops (for, while i.e.)

TODO:

  1. describe reduce + concat issue which resulted in poor performance
  2. describe iterable objects( how use map,filter, i.e. with Object ):
      - conditions ( indexes and length )
      - obj = { 0: 1, 1: 2, 2: 3, one: 1, two: 2, three: 3, length: 3 }

## forEach

This method used instead of classic for loop in case:

- need to do something out of coverage other array methods;
- do not need to care about manual index increase;
- do not need to care about stop-loop condition (array length basicaly);
  
Need to take care about:

- function scope(this);
  
Example:

```javascript
var arr = [1,2,3,4];
var result = ''; 

arr.forEach( function( item, index, array ) {
  result += item;
});

console.log( result );  // "1234";
//same using for loop
for( var i = 0; i < arr.length; i++ ) {
  result += arr[i];
}
```

Possible issues in classic for loop:

- if "var " in "for(...)" condition is not specified (i.g. for( i = 0; i < arr.length; i++ ) )  "i" can be overriden if it already declared in current scope.
- posibility of mistake in condition (like , instead ;   lenght instead length;
- use index to get acces to array item;

## map

It used when each(or some by condition) element in array needs to be changed.

Map syntax:

```comment
map( callback [, scope] );
  - callback( item, index, thisArray )
  - scope( this ). Is optional;
```

Map returns new array after completion;

Unused callback arguments(i.e. index, array) can be skipped;

Example:

```javascript
var arr = [1,2,3,4];
var result = arr.map( function( item ) {
  return item * 2;
})
// result = [2,4,6,8];

//same using for loop
var result = [];
for( var i = 0; i < arr.length; i++ ) {
  result.push( arr[i] *2 );
}
```

Using arrow functions as callbacks makes your code more explicit.

It also reduce "field" for possible mistakes:

```javascript
var arr = [1,2,3,4];
var result = arr.map( item => item * 2 );  // result = [2,4,6,8];
```

<aside style="color:red">

You must replace `meowmeowmeow` with your personal API key.

</aside>
