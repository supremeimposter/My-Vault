---
pdf: lec-34-36, lec-37-38, lec-39-40
module: 5
lecture: 35, 36, 37, 38, 39
date: 2023-10-21T14:45:00
version:
  - DM-24
last-revision: 
notes-taken: false
tags:
  - DM
  - DM/Sets
  - DM/Sets/Relations
---

> [!lecture] Lecture-35

# Hasse Diagram
- It is only for [[#Set Ordering#Partial Order Relation|POR]].

- In Hasse Diagram, there are NO horizontal edges to avoid confusion of relation between elements.
````col
```col-md
flexGrow=1
===
![[Pasted image 20231020165704.png|$aRb$ in Graph Representation]]

---
In Hasse Diagram, whenever there is a relation between $a$ and $b$, there is an upward path from $a$ to $b$
```
```col-md
flexGrow=1
===
![[Pasted image 20231020165738.png|$aRb$ in Hasse Diagram Representation]]
```
```col-md
flexGrow=1
===
![[Pasted image 20231021100230.png|$bRa$ in Hasse Diagram Representation]]
```
````

## Guidelines for Hasse Diagram construction


## Elements of POSET

### Maximal, Minimal, Greatest and Least 
> [!lecture] Lecture-36, 37

|  Elements of POSET            |  Definition                  |
|:------------------------------|:-----------------------------|
|  Maximal element              |  I am not related to anyone else  |
|  Minimal element              |  No one else is related to me     |
|  Greatest or maximum element  |  Everyone else is related to me   |
|  Least or minimum element     |  I am related to everyone else   |  

````col
```col-md
flexGrow=1
===
![[Pasted image 20231020194911.png|Maximal Element|200]]

![[Pasted image 20231020195056.png|Minimal Element|200]]
```
```col-md
flexGrow=1
===
![[Pasted image 20231020195119.png|Greatest Element|200]]

![[Pasted image 20231020194935.png|Least Element|200]]
```
````

- There can  atmost one Greatest element or Least element.
- Maximal and Minimal elements are a set of elements.
- If there are more than one minimal element and more than one maximal element, least element and greatest element cannot exist respectively.

### Upper Bound, Upper Bound, LUB AND GLB
> [!lecture] Lecture-38

- There can be a set of elements for both upper and lower bound of a set of elements.
- Least upper bound is the element that is related to every upper bound of the set.
- Greatest lower bound is the element to which every lower bound in the set is related to.
- Least upper bound and Greatest lower bound can be only a single element. It CANNOT be a set of elements.
- If there is no upper bound, then there is NO LUB and if there is no lower bound, then there is NO GLB.

> [!doubt] 
> 1. Least upper bound means **Least or minimum** element among the upper bound.
> 2. Greatest lower bound means **Greatest or maximum** element among the lower bound.

## Analysis of Elements of POSET
> [!lecture] Lecture-39

### LUB and GLB of a single element
> [!info]  LUB and GLB of a single element is the same element


### LUB and GLB of two elements
> [!point] Mostly we will find LUB and GLB for a pair of elements

1. If $aRb$, then what is LUB and GLB?
2. If $a \not R B$, then what is LUB and GLB?

> [!doubt] Why first unique meeting point when $a \not R b$?
> If there is no unique first point, then LUB does not exist.
> There should be only one unique joining or meeting point.


$$
LUB\{a, b\} = a\;\lor\;b = a\;\cup\;b = \text{Join}\{a, b\}
$$
$$
GLB\{a, b\} = a\;\land\;b = a\;\cap\;b = \text{Meet}\{a, b\}
$$

> [!think] Reason for join and meet is because of upward relationship in hasse diagram vertices


### Relation between LUB and GLB with the elements

### LUB and GLB of more than three elements

#### a, b, c are comparable

#### a, b are not comparable, but a and b are related to c

#### a, b are not comparable, but c is related to a and b

#### a, b, and c are not comparable


- For a POSET $P$,
	- $\bigcup P =$ LUB of all elements in $P =$ Greatest element of $P$
	- $\bigcap P =$ GLB of all elements in $P =$ Least element of $P$ 
