---
pdf: lec-33, lec-34-36, lec-37-38
module: 5
lecture: 33, 34, 35, 36, 37, 38
date: 2023-10-18T20:51:00
version:
  - DM-24
last-revision: 
notes-taken: false
tags:
  - DM
  - DM/Sets
  - DM/Sets/Relations
---

# Set Ordering

- A relation $R$ on a set $A$ can be either partial order or total order, depending on the elements of the set $A$.

## Partial Order Relation (POR)

> [!lecture] Lecture-33
> > [!youtube] [Lecture 33 - Partial Order Relations - Motivation & Definition | Set Theory | Discrete Mathematics - YouTube](https://www.youtube.com/watch?v=CTnuuIQ3l7k)


- A relation $R$ is a Partial Order Relation iff $R$ is Reflexive, Anti-symmetric and Transitive.


> [!link] Why does a partially ordered set need to be reflexive?
> [relations - Why does a partially ordered set need to be reflexive? - Mathematics Stack Exchange](https://math.stackexchange.com/questions/2895169/why-does-a-partially-ordered-set-need-to-be-reflexive)
> ![[Pasted image 20231018222252.png|lec-33 comments section]]


## Total Order Relation

> [!lecture] Lecture-34

- A relation $R$ is total order relation if we have relation between every pair of elements in the set $A$ i.e. every two elements are comparable.
- If a relation is total order, then it is also partial order.
- If a relation is NOT partial order, then it is definitely NOT total order.


# Representation of Partial Order Relation
> [!lecture] Lecture-35

## Hasse Diagram
- It is only for [[#Set Ordering#Partial Order Relation|POR]].


````col
```col-md
flexGrow=1
===
![[Pasted image 20231020165704.png|$aRb$ in Graph Representation]]

---
In Hasse Diagram, whenever there is a relation between $a$ and $b$, there is an upward path from $a$ to $b$

---
In Hasse Diagram, there are NO horizontal edges to avoid confusion of relation between elements.
```
```col-md
flexGrow=1
===
![[Pasted image 20231020165738.png|$aRb$ in Hasse Diagram Representation]]
```
````

### Guidelines for Hasse Diagram construction


# Elements of POSET

## Maximal, Minimal, Greatest and Least 
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

## Upper Bound, Upper Bound, LUB AND GLB
> [!lecture] Lecture-38

- There can be a set of elements for both upper and lower bound of a set of elements.
- Least upper bound is the element that is related to every upper bound of the set.
- Greatest lower bound is the element to which every lower bound in the set is related to.
- Least upper bound and Greatest lower bound can be only a single element. It CANNOT be a set of elements.
- If there is no upper bound, then there is NO LUB and if there is no lower bound, then there is NO GLB.

> [!point] Mostly we will find LUB and GLB for a pair of elements


1. If $aRb$, then what is LUB and GLB
2. If $a \not R B$, then what is LUB and GLB