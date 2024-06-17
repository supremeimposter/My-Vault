---
pdf: post-functional-completeness-theorem
module: 4
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
1. at least one of the functions is **not** 0-preserving *and*,
2. at least one of the functions is **not** 1-preserving *and*,
3. at least one of the functions is **not** self dual *and*,
4. at least one of the functions is **not** linear *and*,
5. at least one of the functions is **not** monotonic.

Another perspective is, according to Emil Post's functional completeness theorem, $X$ is **not** functionally complete <mark class="hltr-green">iff</mark>,
1. all of the functions are 0-preserving *or*,
2. all of the functions are 1-preserving *or*,
3. all of the functions are self-dual *or*,
4. all of the functions are linear *or*,
5. all of the functions are monotonic.

> [!theorem] **Emil Post's Functional Completeness Theorem**
> A system of boolean functions is functionally complete if and only if this system does not entirely belong to any of $T_{0}, T_{1}, L, M, S$.

## Property 1 : 0-preserving functions
A boolean function $f(a_{1}, a_{2}, \cdots, a_{n})$ is 0-preserving iff $f(0, 0, \cdots, 0) = 0$.
0-preserving functions are checked on the first input row of the table.

The class of 0-preserving boolean functions are denoted by $T_{0}$. If a boolean function $f$ is a 0-preserving function, then $f \in T_{0}$. 

## Property 2 : 1-preserving functions
A boolean function $f(a_{1}, a_{2}, \cdots, a_{n})$ is 1-preserving iff $f(1, 1, \cdots, 1) = 1$.
1-preserving functions are checked on the last input row of the table.

The class of 1-preserving boolean functions are denoted by $T_{1}$. If a boolean function $f$ is a 1-preserving function, then $f \in T_{1}$. 

> [!observation] 
> There is no relationship between 0-preserving and 1-preserving functions.

## Property 3 : Self Dual functions
A boolean function $f$ is self dual, iff $f^d = f$.

The class of self dual boolean functions are denoted by $S$. If a boolean function $f$ is a self dual function, then $f \in S$ 

Constant functions `0` and `1` are **not** self dual functions.
$f(a) = a$, $f(b) = \overline{b}$ are self dual functions.

## Property 4 : Linear Boolean Functions
A boolean function $f$ is linear if one of the following statements holds for $f$,

- For every 1-value of $f$, the number of 1's in the corresponding input is odd, and for every 0-value of $f$, the number of 1's in the corresponding input is even, 
or
- For every 1-value of $f$, the number of 1's in the corresponding input is even, and for every 0-value of $f$, the number of 1's in the corresponding input is odd.

If one of the above two statements holds for $f$, then $f$ is linear i.e. $f \in L$. The class of linear boolean functions is denoted by $L$.

> [!attention] 
>> Before checking if a function is linear or not, minimize the function and create truth table without dummy variables.
> 
> ![[Emil Post's Functional Completeness Theorem-20240616230836976.webp]]

The constant functions `0` and `1` are linear functions, since on any number of variables, they are always constant functions making all of the variables dummy. For example, in the function $f(a, b, c, d) = 1$, all of the variables $a, b, c, d$ are dummy variables. 

ExOR, ExNOR, NOR are linear boolean functions.

If a function is linear, then there are equal number of 1s and 0s in the output (converse is not necessarily true). So (by contrapositive) if the function does not have equal number of 1s and 0s in the output, then the function is not linear.

![[Emil Post's Functional Completeness Theorem-20240617115111019.webp]]

> [!interesting] 
> In a truth table of any number of variables, the number of 1's on the input combinations are equally odd and even.
> Emil Post mentioned linear functions as **alternating functions** and some authors called it as **counting functions**.

## Property 5 : Monotonic Boolean Functions
A boolean function $f$ is monotonic iff increasing input combination by changing single input from 0 to 1, then $f$ must not decrease.

The class of monotone booelan functions are denoted by $M$ and if a function $f$ is a monotonic function then $f \in M$. The monotonicity of functions can be easily checked by looking at hasse diagrams.

Let us take a function $f(a)$ over 1 variable.

| $a$ | $f(a)$  |
| --- | ------- |
| $0$ | $x_{1}$ |
| $1$ | $x_{2}$ |

For the function $f(a)$ to be monotonic $x_{2} \ge x_{1}$ .

```sheet

| Different number of functions on 1 variable    |          <      |    <            |              <             |   <             |
| --- | -------------- | -------------- | ------------------------- | -------------- |
| $a$ | $f_{1}(a) = 0$ | $f_{1}(a) = a$ | $f_{1}(a) = \overline{a}$ | $f_{1}(a) = 1$ |
| 0   | 0              | 0              | 1                         | 1              |
| 1   | 0              | 1              | 0                         | 1              |
```

Constant boolean functions `0` and`1` are monotonic functions as the value of functions are fixed and they never decrease.
$f(a) = a$ is monotonic function, whereas $f(a) = \overline{a}$ is not a monotonic function.

---
Let us take a function $f(a, b)$ over 2 variables.

![[Emil Post's Functional Completeness Theorem-20240617101159757.webp]]

(The lattice of the input combinations which change by a single input is given above)

$f = a . \overline{b} + a . b$ is monotonic,
![[Emil Post's Functional Completeness Theorem-20240617101441117.webp]]

$f = \overline{a} . b + a. b$ is monotonic,
![[Emil Post's Functional Completeness Theorem-20240617101812337.webp]]

$f = \overline{a} . b$ is not monotonic,
![[Emil Post's Functional Completeness Theorem-20240617101922504.webp]]

$f = a \rightarrow b$ is not monotonic,
![[Emil Post's Functional Completeness Theorem-20240617102109182.webp]]

---
Consider a function $f(a, b, c)$ on 3 variables,

![[Emil Post's Functional Completeness Theorem-20240617103846290.webp]]

$f = a \oplus b \oplus c$ is not monotonic,
![[Emil Post's Functional Completeness Theorem-20240617112124867.webp]]

> [!tip] 
> To check if a boolean function is monotonic or not,
> 1. create a [[Lattice|lattice]] for the function
> 2. on every upward path, the value of the function must not decrease.

> [!pdf] 
> Some examples on post-functional-completeness-theorem.pdf Pg. No. 140

---
