---
pdf: post-functional-completeness
module: 
lecture: 
date: 2024-06-16T14:38:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/FunctionalCompleteness
---
# Emil Post's Functional Completeness Theorem

Let $X$ be a set of boolean functions $X = \{ f_{1}, f_{2}, \cdots, f_{n} \}$.

According to Emil Post's functional completeness theorem, $X$ is functionally complete <mark class="hltr-green">iff</mark>,
1. at least one of the functions is **not** 0-preserving and,
2. at least one of the functions is **not** 1-preserving and,
3. at least one of the functions is **not** self dual and,
4. at least one of the functions is **not** linear and,
5. at least one of the functions is **not** monotonic.

Another perspective is, according to Emil Post's functional completeness theorem, $X$ is **not** functionally complete iff,
1. all of the functions are 0-preserving and,
2. all of the functions are 1-preserving and,
3. all of the functions are self-dual and,
4. all of the functions are linear and,
5. all of the functions are monotonic.

## Property 1 : 0-preserving functions
A boolean function $f(a_{1}, a_{2}, \cdots, a_{n})$ is 0-preserving iff $f(0, 0, \cdots, 0) = 0$.
0-preserving functions are checked on the first input row of the table.

## Property 2 : 1-preserving functions
A boolean function $f(a_{1}, a_{2}, \cdots, a_{n})$ is 1-preserving iff $f(1, 1, \cdots, 1) = 1$.
1-preserving functions are checked on the last input row of the table.

> [!observation] 
> There is no relationship between 0-preserving and 1-preserving functions.

## Property 3 : Self Dual functions
A boolean function $f$ is self dual, iff $f^d = f$.

Constant functions `0` and `1` are not self dual functions.

## Property 4 : Linear Boolean Functions

A boolean function $f$ is linear if one of the following statements holds for $f$,

- For every 1-value of $f$, the number of 1's in the corresponding input is odd, and for every 0-value of $f$, the number of 1's in the corresponding input is even, 
or
- For every 1-value of $f$, the number of 1's in the corresponding input is even, and for every 0-value of $f$, the number of 1's in the corresponding input is odd.

If one of the above two statements holds for $f$, then $f$ is linear i.e. $f \in L$. The class of linear boolean functions is denoted by $L$.

> [!important] 
>> Before checking if a function is linear or not, minimize the function and create truth table without dummy variables.
> 
> ![[Emil Post's Functional Completeness Theorem-20240616230836976.webp]]

The constant functions `0` and `1` are linear functions, since on any number of variables, they are always constant functions making all of the variables dummy. For example, in the function $f(a, b, c, d) = 1$, all of the variables $a, b, c, d$ are dummy variables. 

ExOR, ExNOR, NOR are linear boolean functions.

If a function is linear, then there are equal number of 1s and 0s in the output (converse is not necessarily true). So (by contrapositive) if the function does not have equal number of 1s and 0s in the output, then the function is not linear.

![[Emil Post's Functional Completeness Theorem-20240616191430204.webp]]

> [!interesting] 
> In a truth table of any number of variables, the number of 1's on the input combinations are equally odd and even.
> Emil Post mentioned linear functions as **alternating functions** and some authors called it as **counting functions**.

## Property 5 : Monotonic Boolean Functions


Constant functions `0` and`1` are monotonic functions.


---