/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding 
// In global scope, '.this' is what the value window is-- Big object that communicate with the DOM. 

* 2. Implicit Binding
// when you invoke a method, look to the left where you invoke it

* 3. New Binding
//whenever a constructor function is used , this refers to the specific instance of the object that is created and returned by the constructor function.

* 4. Explicit Binding
//It is defined when the JS call or apply method is used.

* write out a code example of each explanation above
*/

/// Principle 1
// Window Binding

//It will always go to the Window Keyword: to prevent it by using strict 
// console.log(this);

// const hero = {
//     name: 'Alpha',
//     class: 'WhiteSmith',
//     char: function(){
//         console.log(`${name} is an MVP ${class}`) // syntaxerror: unexpected token }
//     }
// }

// hero.char();

//it will stop window binding from bubbling out if you use this:
// function someFunction(){
//     "use strict";
// }

//
// /// Principle 2
// //Implicit (automatic) Binding

// //Specifically to deal with objects
// let myHero = {
//   name: 'Alpha',
//   class: 'Whitesmith',
//   hero: function () {
//     console.log(`${this.class} is a strong class, named ${this.name}`); 
//   }
// }
// //implying binding of the context. It stops at window because of an Implicit Binding
// myHero.hero(); //when you invoke a method, look to the left where you invoke it

// 
/// Principle 3
// New Binding

// function Ghost(name) {
//     this.name = name;
//   }
  
//   let myGhost = new Ghost('Casper the friendly ghost');
  
//   console.log(myGhost.name);

//
/// Principle 4
//  Explicit Binding

// we can control where binding goes, it's with functions
//All binding of this tries to become window, unless we prevent it.

//Call: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
// const hero = {
//     name: 'Alpha'
// }

// const skills = ['ATK' , ' AGI',  ' DEX'];

// function introduce(skills){
// console.log(`I am an ${this.name} hero but I need my skills ${skills}`); 
// //string template interpolation not appearing********************now working -- check path
// }
// //if you define skills(arguement), you need to pass thru the param
// introduce.call(hero, skills);


//Apply: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
// const hero = {
//     name: 'Alpha'
// }

// const wiz = {
//     name: 'Bright'
// }

// const skills = ['ATK' , ' AGI',  ' DEX'];

// function introduce(skills1, skills2, skills3){

// console.log(`I am an ${this.name} hero but I need my skills: ${skills1}, ${skills2}, ${skills3}`); 

// }

// // introduce.call(hero, skills);
// introduce.apply(hero, skills);

//Bind:
// const hero = {
//     name: 'Alpha'
// }

// const wiz = {
//     name: 'Bright'
// }

// const skills = ['ATK' , ' AGI',  ' DEX'];

// function introduce(skills1, skills2, skills3){
// console.log(`I am an ${this.name} hero but I need my skills: ${skills1}, ${skills2}, ${skills3}`); 
// }

// const useLater = introduce.bind(hero, ...skills); 
// useLater();
//Bind: if you want to use it

// introduce.call(hero, skills);
//Bind is stored for later use

//Spread Rest operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// Ex: const useLater = introduce.bind(hero, ...skills); <---

////////////
//call() one argument list, 
//while apply() accepts a single array of arguments.

// function hero(){
//     console.log(this.name); 
//   }
  
//   let myHero = {
//     name: "Alpha",
//     class: "Whitesmith",
//   }
  
//   hero.call(myHero); 