---
pdf: lec-6A-6E
module: 1
lecture: "6"
date: 2024-02-21T13:39:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/BooleanAlgebra
---
# Minimization using K Map
> [!abstract] 
> K-map is special visual representation of the truth table that makes minimization of boolean functions easier without any boolean algebra theorems and equation manipulations.

K map (Karnaugh Map) is used to get the minimum SOP and minimum POS for any boolean function $f$.
MInimum SOP and minimum POS has the minimum number of product terms and sum terms and out of those minimum number of terms, there should be minimum number of literals.
Minimum SOP and minimum POS are not unique.

Minimization using k-map leads the circuit to a 2-level implementation.
![[Minimization using K Map-20240520083035353.webp]]
With k-maps, expressions upto 4 variables are easily minimized.

- A function of $n$ variables have $2^n$ cells in the k-map.
- Every cell in a k-map is a minterm.
- K-map contains all the minterms for the function.

The adjacent cells of a K-map differ just by one variable, but it is not the case in truth tables.
![[Minimization using K Map-20240520092116865.webp]]

Two minterms can be combined or reduced only if only one variable changes. When started with canonical SOP, K-map gives a visual representation of which two minterms to choose and reduce.

![[Minimization using K Map-20240520084946109.webp]]

> [!example] Examples of K-Maps
>> 2 variable k-map
> 
> ![[Minimization using K Map-20240221163003465.webp|300]]
>> 3 variable k-map
>
> ![[Minimization using K Map-20240221162641417.webp]]
>> 4 variable k-map
> 
> ![[Minimization using K Map-20240221164127415.webp]]

When the order of the variables in the k-map are changed, then it gives the equivalent minimal expression. It does not matter which order of the variables is followed in the k-map.

A cube in a k-map is a group of $2^m$ ($m \ge 0$) cells such that every cell is adjacent to exactly $m$ cells in the group.

> [!example] Cube in K-map
> ![[Minimization using K Map-20240221164655809.webp]]

> [!header] Why $2^m$ cells in a cube of a k-map?

One product term covers $2^m$ minterms, where $m$ is the number of variables missing in the product term.
![[Minimization using K Map-20240520103520956.webp|On expanding a product term, we get $2^m$ minterms]]

![[Minimization using K Map-20240520103749005.webp]]

| ![[Minimization using K Map-20240221173218571.webp]] | ![[Minimization using K Map-20240221173241538.webp]] |
| ---------------------------------------------------- | ---------------------------------------------------- |
| $2 = 2^1$ minterms                                   | $4 = 2^2$ minterms                                   |
| 1 variable is missing                                | 2 variables are missing                              |


One sum term covers $2^k$ maxterms, where $k$ is the number of missing variables in the sum term.
![[Minimization using K Map-20240520103854665.webp]]

> [!important] 
> The variable are missing since they are the ones that change.

For a function $F$ on $n$ variables has a cube of $2^m$ cells,
1. variables that change $= m$
2. variables that do not change $= (n-m)$

Product term or Sum term contains $(n-m)$ literals since those variables that change will be reduced.

If we take the smallest cubes of 1( or 0) for SOP (or POS), we will get only larger product term (or sum term).

## Minimized SOP
- $2^m$ cells are used in a cube, so a product term can be created for that cube.

> [!important] 
> Try to create less number of large cubes of 1's in a region to get the smallest product term.
> $a = 1$ and $\overline{a} = 0$

![[Minimization using K Map-20240222122535497.webp]]

![[Minimization using K Map-20240222121738212.webp]]

![[Minimization using K Map-20240520110706172.webp]]


> [!example] 
> ![[Minimization using K Map-20240520112223656.webp]]
> ![[Minimization using K Map-20240520112243390.webp]]
> ![[Minimization using K Map-20240520134218400.webp]]

If the given expression is in SOP, then convert it to canonical SOP for visualizing it in k-map
![[Minimization using K Map-20240520124422571.webp]]

![[Minimization using K Map-20240520125753551.webp]]

> [!attention] 
> ![[Minimization using K Map-20240520133916609.webp]]

## Minimized POS

> [!important] 
> Try to create less number of large cubes of 0's in a region to get the smallest sum term.
> $\overline{a} = 1$ and $a = 0$

![[Minimization using K Map-20240520134550794.webp]]

![[Minimization using K Map-20240520134453584.webp]]

![[Minimization using K Map-20240520134638525.webp]]


> [!example] 
>> [!attention] 
>>Remember to write 0 as $a$ and 1 as $\overline{a}$
>
> ![[Minimization using K Map-20240520143519865.webp]]
> ![[Minimization using K Map-20240520144021135.webp]]

If a minimized SOP of an expression $F$ is not unique, then it is not necessarily true that the minimized POS of $F$ is also not unique.

## Canonical Forms using K Map

For canonical SOP, take every singe cell which is 1 as a cube and add the minterms.

![[Minimization using K Map-20240520153306532.webp]]

For canonical POS, take every singe cell which is 0 as a cube and multiply the maxterms.

![[Minimization using K Map-20240520153319420.webp]]

## Don't Care
- For a boolean function or a digital circuit, some input combinations **can never occur**. For such input combinations, we do not care about the function values.
- For a boolean function or a digital circuit, some input combinations **can occur, but we do not care** about what happens to those input combinations.

> [!NOTE] 
> By default, boolean functions are completely specified i.e. total functions

- Functions with don't care combinations are incompletely specified functions or partial functions.
![[Minimization using K Map-20240520175648429.webp]]
- A partial function with $k$ don't care combinations corresponds to a class of $2^k$ functions, since don't cares can be either 0 or 1.
- Every partial function is a class of functions.

- Dont cares can be used in any way we desire. We can try to create bigger cubes using don't cares to create minimized SOP and minimized POS.

> [!tip]
> Since don't cares can be anything, we can utilize it to create cubes of appropriate size to create the minimized SOP and minimized POS.

## Covering Functions
- A function $f$ covers $g$ iff whenever $g = 1$, then $f = 1$ or whenever $f = 0$, then $g = 0$.
$$
f \text{ covers } g \equiv g \text{ implies } f \equiv g \rightarrow f
$$

- If $f$ covers $g$, then $f$ is the covering function of $g$ and
````col
```col-md
flexGrow=1
===
|g|f|
| --- | --- |
|1|1|
|0|0 or 1|
```
```col-md
flexGrow=1
===
|f|g|
| --- | --- |
|0|0|
|1|0 or 1|
```
````


> [!example]
>> $f = a \oplus b$ and $g = a + b$. Does $f$ cover $g$ or $g$ cover $f$ ?
>
 ![[Minimization using K Map-20240222105636186.webp]]

- If $f$ covers $g$ and $g$ covers $f$, then $f$ and $g$ are the same functions.

> [!tip]
> Covering of functions is defined on minterm point of view (1's point of view).

- If $P_1$ and $P_2$ are two product terms, then $P_1 \rightarrow P_2$ iff literals ($P_2$) $\subseteq$ literals ($P_1$)
- If $S_1$ and $S_2$ are two sum terms, then $S_1 \rightarrow S_2$ iff literals ($S_1$) $\subseteq$ literals ($S_2$)

