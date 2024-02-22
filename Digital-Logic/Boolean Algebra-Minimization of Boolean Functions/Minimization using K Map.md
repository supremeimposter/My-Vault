---
pdf: 
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
> K-map is speacial visual representation of the truth table that makes minimization of boolean functions easier.

- K map (Karnaugh Map) is used to get the minimum SOP and minimum POS for any boolean function $f$.
- A function of $n$ variables have $2^n$ cells in the k-map.
- Every cell in a k-map is a minterm.

## Adjacent cells in a K Map
- The adjacent cells of a K-map differ just by one variable, but it is not the case in truth tables.

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

- A cube in a k-map is a group of $2^m$ ($m \ge 0$) cells such that every cell is adjacent to exactly $m$ cells in the group.

> [!example] Cube in K-map
> ![[Minimization using K Map-20240221164655809.webp]]


> [!header] Why $2^m$ cells in a cube of a k-map?

- One product term covers $2^k$ minterms, where $k$ is the number of variables missing in the product term.

| ![[Minimization using K Map-20240221173218571.webp]] | ![[Minimization using K Map-20240221173241538.webp]] |
| ---- | ---- |
| $2 = 2^1$ minterms | $4 = 2^2$ minterms |
| 1 variable is missing | 2 variables are missing |

## Minimized SOP
- $2^m$ cells are used in a cube, so a product term can be created for that cube.
- Try to create largest cube of 1's in a region to get the smallest product term.

![[Minimization using K Map-20240222122535497.webp]]

![[Minimization using K Map-20240222121738212.webp]]

![[Minimization using K Map-20240222121525080.webp]]

## Minimized POS
- Try to create largest cube of 0's in a region to get the smallest sum term.

![[Minimization using K Map-20240222122555676.webp]]

![[Minimization using K Map-20240222121952512.webp]]

![[Minimization using K Map-20240222122306722.webp]]

> [!discussion] 
> ![[Minimization using K Map-20240221232138898.webp]]

## Canonical Forms using K Map


## Don't Care
- For a boolean function or a digital circuit, some input combinations can never occur. For such input combinations, we do not care about the function values.
- For a boolean function or a digital circuit, some input combinations can occur, but we do not care about those input combinations.

- A partial function with $k$ don't care combinations corresponds to a class of $2^k$ functions.

- Dont cares can be used in any way we desire. We can try to create bigger cubes using don't cares to create minimized SOP and minimized POS.
- Since don't cares can be anything, we can utilize it to create cubes of appropriate size to create the minimized SOP and minimized POS.

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

