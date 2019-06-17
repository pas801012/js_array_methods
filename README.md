# JS Array Methods
This project directed to improve education process in computer programming.

Difficult topics will be described here explicitly as possible.

Main goal is to visually display business logic of most frequently used JS array methods.

Here is a list of frequently used Array methods:
- forEach
- map
- filter
- reduce

They have important advantages and benefits comparing to classic loops (for, while i.e.)

# forEach
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

# map
It used when each(or some by condition) element in array needs to be changed.

Map syntax:
```
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
