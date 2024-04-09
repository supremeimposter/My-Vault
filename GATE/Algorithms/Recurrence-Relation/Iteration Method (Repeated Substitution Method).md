---
pdf: mod-1
module: 1
lecture: 2.b, 2.c
date: 2023-11-01T22:20:00
version:
  - ALGO-24
last-revision: 2023-11-01T22:20:00
notes-taken: true
tags:
  - Algorithm
  - Algorithm/Recursion
---
### Iteration Method (Repeated Substitution Method)
> [!lecture] Lecture-2.b, 2.c

> [!remember] Don't solve GP 
> It will anyways be a constant value (however high) after solving. We don't need exact answer for solving recurrence relation in Algorithms.
> 1. Decreasing GP with $\mid r \mid \lt 1$ almost gives the first term
> 2. Increasing GP with $\mid r \mid \gt 1$ almost gives the last term
> 3. Constant GP with $\mid r \mid = 1$ gives $n*c$

#### Examples

> [!example] 
> ![[Pasted image 20231101210322.png]]

- Expand the relation by repeated substitution.
![[Pasted image 20231101210336.png]]
- After `k` times, assume the base case
![[Pasted image 20231101210435.png]]


> [!example] 
> ![[Pasted image 20231101210923.png]]

![[Pasted image 20231101211036.png]]


> [!example] 
> ![[Pasted image 20231101211455.png]]

![[Pasted image 20231101211509.png]]
![[Pasted image 20231101211741.png]]


> [!example] 
> ![[Pasted image 20231101212625.png]]

![[Pasted image 20231101212653.png]]


> [!example] 
> ![[Pasted image 20231101213046.png]]

![[Pasted image 20231101213113.png]]

> [!example] 
> ![[Pasted image 20231101221753.png]]

![[Pasted image 20231101221822.png]]
![[Pasted image 20231101221857.png]]


---
