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
> - 2 variable k-map
> ![[Minimization using K Map-20240221163003465.webp|300]]
> - 3 variable k-map
> ![[Minimization using K Map-20240221162641417.webp]]
> - 4 variable k-map
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

![[Minimization using K Map-20240221211559100.webp]]

![[Minimization using K Map-20240221213146633.webp]]

![[Minimization using K Map-20240221213722735.webp]]

## Minimized POS
- Try to create largest cube of 0's in a region to get the smallest sum term.





> [!discussion] 
> ![[Minimization using K Map-20240221232138898.webp]]

## Canonical Forms using K Map


> [!timer] 00:21:50

