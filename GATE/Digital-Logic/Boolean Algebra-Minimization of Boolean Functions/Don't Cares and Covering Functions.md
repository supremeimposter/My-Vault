---
pdf: 
module: 1
lecture: 
date: 2024-06-21T10:26:00
version:
  - DL-24
last-revision: 2024-06-21T14:50:00
notes-taken: true
tags:
  - DigitalLogic/BooleanAlgebra
  - DigitalLogic/KMap
---
# Don't Cares
- For a boolean function or a digital circuit, some input combinations **can never occur**. For such input combinations, we do not care about the function values.
- For a boolean function or a digital circuit, some input combinations **can occur, but we do not care** about what happens for input combinations.

- By default, boolean functions are completely specified i.e. total functions.
- Functions with don't care combinations are incompletely specified functions or partial functions.

- Since each don't care is either 0 or 1, a partial function with $k$ don't cares corresponds to a class of $2^k$ functions.
- Every partial function is a class of functions.

![[Don't Cares and Covering Functions-20240621105154655.webp|Partial Function with $2$ don't cares corresponds to $2^2$ class of functions]]

## Don't Cares in K-Map

- Dont cares can be used in any way we desire (0 or 1). 
- Out of $2^k$ different class of functions, there can be some minimized SOP or minimized POS expressions for the given partial function.
- We should pick the interpretation that allows for the most simplification.

> [!example] 
> ![[Don't Cares in K Map-20240621104827093.webp]]
> 
> $f_{1}$ is the minimized SOP and POS expression.

> [!important] 
> ````col
> ```col-md
> flexGrow=1
> ===
> Since don't cares can be anything, we can utilize it to create cubes of appropriate size to create the minimized SOP and minimized POS.
>
>
> ![[Minimization using K Map-20240520192619472.webp]]
> ```
> ```col-md
> flexGrow=1
> ===
> ![[Minimization using K Map-20240520192637404.webp]]
> ![[Minimization using K Map-20240520192757190.webp]]
> ```
> ````

> [!example] 
> Look for redundant cubes after grouping cubes.
> ````col
> ```col-md
> flexGrow=1
> ===
> ![[Minimization using K Map-20240520193236952.webp]]
> ```
> ```col-md
> flexGrow=1
> ===
> ![[Minimization using K Map-20240520193248318.webp]]
> ```
> ````

---
# Covering Functions

- A function $f$ covers a function $g$ **iff** whenever $g = 1$, then $f = 1$ **or** whenever $f = 0$, then $g = 0$.
$$
f \text{ covers } g \equiv g \text{ implies } f \equiv g \rightarrow f \equiv g \subseteq f
$$
- There is no assignment of values to the variables that makes $g = 1$ and $f = 0$
- If $f$ covers $g$, then the true minterms of $g$ is a subset of true minterms of $f$.

- If $f$ covers $g$, then $f$ is the covering function of $g$ and either of these two conditions occur
````col
```col-md
flexGrow=1
===
If $g$, then $f$

|g|f|
| --- | --- |
|1|1|
|0|0 or 1|
```
```col-md
flexGrow=1
===
If $f$, then $g$

|f|g|
| --- | --- |
|0|0|
|1|0 or 1|
```
````

> [!intuition] 
> Covering of functions is defined on minterm point of view (1's point of view).

> [!example] 
> ![[Minimization using K Map-20240520200055750.webp]]
> ![[Minimization using K Map-20240520204746429.webp]]

> [!example]
>> $f = a \oplus b$ and $g = a + b$. Does $f$ cover $g$ or $g$ cover $f$ ?
>
 ![[Minimization using K Map-20240222105636186.webp]]

> [!example] 
> ![[Minimization using K Map-20240520204227217.webp]]
>
>> Covering functions are defined on minterm point of view.
>
> ![[Minimization using K Map-20240520204246521.webp]]
> ![[Minimization using K Map-20240520204334283.webp]]

## Analysis of Covering Functions

If $f$ covers $g$ and $g$ covers $f$, then $f$ and $g$ are the same functions i.e. $f = g$ 

![[Don't Cares and Covering Functions-20240621143757229.webp]]

In the below cases, consider the scenario $G$ covers $F$,

**Case 1**
If $F(a, b, c) = \sum_{m} (0, 5, 7)$, then the covering function of $F$ is,
$G = \sum_{m}(0, 5, 7) + d (1,2,3,4,6)$
The is because whenever $F = 1$, $G = 1$ and don't care about the remaining.

**Case 2**
If $F(a, b, c) = \prod_{m} (0, 5, 7)$, then the covering function of $F$ is,
Since $F = \sum_{m} (1, 2, 3, 4, 6)$, then $G = \sum_{m}(1,2,3,4,6) + d (0, 5, 7)$
This is because whenever $F = 1$, $G = 1$ and for the remaining inputs we don't care.

From understanding the above two cases,

> For any function $F$, the minimum SOP expression for the covering function of $F$ is 1

For example, $F(a, b, c) = \sum_{m} (0, 1, 2)$ and $G$ is the covering function of $F$.
$$
\therefore F \rightarrow G
$$
Whenever $F = 1$, $G = 1$.
$$
\begin{split}
G (a, b, c) &= \sum (0, 1, 2) \\
&= \sum (0, 1, 2) + d (3, 4, 5, 6, 7) \\ 
&= \sum (0, 1, 2, 3, 4, 5, 6, 7) \\ 
&= 1
\end{split}
$$
![[Don't Cares and Covering Functions-20240621142922921.webp]]

> For any function $F$, the minimum POS expression for the covering function of $F$ is 1.

Since 1 is itself a POS expression, hence it is the minimum POS expression for the covering function of $F$.

---
Smaller product terms cover larger product terms i.e. bigger product terms implies its subset product terms.

If $P_1$ and $P_2$ are two product terms, then $P_1 \rightarrow P_2$ iff literals ($P_2$) $\subseteq$ literals ($P_1$)

![[Don't Cares and Covering Functions-20240621144627037.webp]]

Bigger sum terms cover smaller sum terms i.e. smaller sum terms implies its superset sum terms.

If $S_1$ and $S_2$ are two sum terms, then $S_1 \rightarrow S_2$ iff literals ($S_1$) $\subseteq$ literals ($S_2$)

![[Don't Cares in K Map-20240520230636415.webp]]

---