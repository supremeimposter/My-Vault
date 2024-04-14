---
pdf: mod-1
module: 1
lecture: 6.a-6.d
date: 2023-10-24T19:36:00
version:
  - ALGO-24
last-revision: 
notes-taken: false
tags:
  - Algorithm
  - Algorithm/Recursion
---
# Change of Variable
- Change of variable is an intermediary step in solving recurrence relation using [[Masters Theorem|masters theorem]].

> [!attention] 
> When creating a new recurrence relation $S(m)$ from $T(m)$, only the function inputs should be changed, and the cost function should NOT be changed.

## Examples

> [!example] Example 1
> ![[Pasted image 20231024150216.png]]

- Bring a different variable and assume the below condition which creates a new recurrence relation.

````col
```col-md
flexGrow=1.5
===
![[Pasted image 20231024150305.png]]
```
```col-md
flexGrow=0.5
===
![[Pasted image 20231024150355.png]]
```
````

- Assume a different recurrent relation $S$ which is equal to the newly created recurrence relation in the following manner

![[Pasted image 20231024150632.png]]

- But the cost function of $S$ remains the same
![[Pasted image 20231024150654.png|cost function does not change]]

- [[Masters Theorem]] can be applied on relation $S$
![[Pasted image 20231024150916.png|comparison between $f(m)$ and $m^{log_b^a}$]]

- Since they cannot be compared polynomially, [[Masters Theorem#Generalised Masters theorem|Generalised Masters Theorem]] is applied.
![[Pasted image 20231024151011.png]]

- Now comparison is made between $S(m)$ and $T(n)$
![[Pasted image 20231024151436.png]]

![[Pasted image 20231024151527.png|Complexity of $T(n)$]]

---

> [!example] 
> ![[Pasted image 20231024153121.png]]

- Create a new recurrence relation $S(m)$ from $T(n)$ which can be solved by [[Masters Theorem]].
![[Pasted image 20231024153202.png]]

- Polynomial comparison test
	- Since polynomial comparison CANNOT be made, Generalised Masters theorem is used to find the complexity of $S(m)$

````col
```col-md
flexGrow=1
===
![[Pasted image 20231024153312.png]]
```
```col-md
flexGrow=1
===
Generalised Masters Theorem is used since there are no $m$ terms at least in one of the sides.

![[Pasted image 20231024153425.png]]
```
````

````col
```col-md
flexGrow=1
===
![[Pasted image 20231024153610.png]]
```
```col-md
flexGrow=1
===
![[Pasted image 20231024153627.png]]
```
````
- Complexity of $T(n) = \Theta((loglogn)^2)$

---


> [!example] 
> ![[Pasted image 20231024190926.png]]

![[Pasted image 20231024192918.png]]

![[Pasted image 20231024191000.png]]

---


> [!example] 
> ![[Pasted image 20231024191154.png]]

![[Pasted image 20231024191203.png]]
![[Pasted image 20231024191218.png]]

- A new recurrence relation $S(n)$ from $T(2^m)$
![[Pasted image 20231024193358.png]]

- Polynomial comparison can be made in $S(m)$
![[Pasted image 20231024191644.png]]
- Time Complexity is 
![[Pasted image 20231024191703.png]]

---


> [!example] 
> ![[Pasted image 20231024193900.png]]

![[Pasted image 20231024193938.png]]

---


> [!example] 
> ![[Pasted image 20231024195512.png]]

![[Pasted image 20231024195529.png]]

---

> [!example] GATE CSE 2006
> ![[Pasted image 20231024200309.png]]

![[Pasted image 20231024200331.png]]

---

> [!example] 
> ![[Pasted image 20231024201651.png]]

![[Pasted image 20231024201625.png]]

---

> [!example] 
> ![[Pasted image 20231024203459.png]]

![[Pasted image 20231024203537.png]]

- Recursion tree can be constructed
![[Pasted image 20231024203608.png]]
![[Pasted image 20231024203629.png]]
![[Pasted image 20231024203643.png]]

---

## More Variations

> [!lecture] Lecture-6.d

> [!example] 
> ![[Pasted image 20231025073624.png]]

![[Pasted image 20231025074137.png]]

![[Pasted image 20231025074228.png]]

---

> [!example] 
> ![[Pasted image 20231025091338.png]]

- Since $a$ is NOT a constant, masters theorem cannot be applied. 
![[Change of Variable or Domain Transformation-20240414091723069.webp]]
- Now the regular approach of change of variable can be followed
![[Pasted image 20231025092733.png]]
- Polynomial comparison cannot be made. So Generalised Masters theorem can be used.
````col
```col-md
flexGrow=1
===
![[Pasted image 20231025092334.png]]
```
```col-md
flexGrow=1
===
![[Pasted image 20231025092352.png]]
```
````

![[Pasted image 20231025092413.png]]

---
> [!example] 
> ![[Pasted image 20231025094120.png]]

````col
```col-md
flexGrow=1
===
![[Pasted image 20231025094219.png]]
```
```col-md
flexGrow=1
===
![[Pasted image 20231025094242.png]]
```
````

````col
```col-md
flexGrow=1
===
![[Pasted image 20231025094313.png]]

Polynomial comparison cannot be made. Hence Generalised Masters Theorem can be used.
```
```col-md
flexGrow=1
===
![[Pasted image 20231025094327.png]]
```
````

----


> [!example] 
> ![[Pasted image 20231101215408.png]]

![[Pasted image 20231101215430.png]]

- Since polynomial comparison cannot be made, generalised masters theorem can be used.

![[Pasted image 20231101215443.png]]

---

