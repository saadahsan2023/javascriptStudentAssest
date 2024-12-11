*Class 4*

Operators and Expressions (arithmetic, comparison, logical operators).

*In JavaScript, operators are special symbols or keywords used to perform operations on values (operands), while expressions are combinations of operands and operators that evaluate to a single value*

1. Arithmetic Operators
*Used for performing basic mathematical operations.*

*Operator*	Name	             Example	   Result
+	        Addition	           5 + 2	     7
-	        Subtraction	           5 - 2	     3
*	        Multiplication	       5 * 2         10
/	        Division	           5 / 2	     2.5
%	        Modulus (Remainder)	   5 % 2	     1

*Example*

let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
a++; 
console.log(a); // 11 
---------------------------------------------------------------
2. Comparison Operators
*Used to compare two values, returning a Boolean (true or false).*

*Operator*	Name	             Example	Result
==	      Equal to	              5=='5'	true
===	      Strict equal to	      5==='5'	false
!=	      Not equal to	          5!='5'	false
!==	      Strict not equal to	  5!=='5'	true
>	      Greater than	          5 > 3	    true
<	      Less than	              5 < 3	    false


*Example*

console.log(5 == "5");  // true (loose equality)
console.log(5 === "5"); // false (strict equality)
console.log(5 > 3);     // true
console.log(5 <= 5);    // true
---------------------------------------------------------------


3. Logical Operators
*Used for combining or inverting Boolean expressions*.

Operator	Name	         Example	        Result
&&	        Logical AND	     true && false	    false
||			Logical OR       true && false      true
!	        Logical NOT	     !true	            false 

*Example*

let x = true;
let y = false;

console.log(x && y); // false
console.log(x || y); // true
console.log(!x);     // false
------------------------------------------------------ 

*Falsy Values*

These values evaluate to false in Boolean contexts:
false
0 (zero)
-0 (negative zero)
"" (empty string)
null
undefined
NaN

*Truthy Values*

Everything not falsy is truthy, including:
Any non-zero number (1, -42, etc.)
Non-empty strings ("hello", " " (a space), etc.)
Objects ({}, [])
Infinity and -Infinity
Functions
true





