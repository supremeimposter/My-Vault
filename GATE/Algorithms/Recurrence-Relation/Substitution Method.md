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
  - Algorithm/Recursion
  - Algorithm/DivideAndConquer
---
### Substitution Method
> [!lecture] Lecture-2.b, 2.c

> [!remember] Don't solve GP 
> It will anyways be a constant value (however high) after solving. We don't need exact answer for solving recurrence relation in Algorithms.
> 1. Decreasing GP with $\mid r \mid \lt 1$ almost gives the first term
> 2. Increasing GP with $\mid r \mid \gt 1$ almost gives the last term
> 3. Constant GP with $\mid r \mid = 1$ gives $n*c$

#### Examples

> [!example] 
> ![[Iteration Method (Repeated Substitution Method)-20240411193715389.webp]]

- Expand the relation by repeated substitution.
![[Iteration Method (Repeated Substitution Method)-20240411193724787.webp]]
- After `k` times, assume the base case has arrived. 
![[Substitution Method-20240412120419513.webp]]

---

> [!example] 
> ![[Substitution Method-20240411201348896.webp]]

![[Substitution Method-20240411201359141.webp]]

---

> [!example] 
> ![[Pasted image 20231101211455.png]]

![[Pasted image 20231101211509.png]]

![[Substitution Method-20240411201413584.webp]]

---

> [!example] 
> ![[Substitution Method-20240411202122586.webp]]

![[Substitution Method-20240411202131700.webp]]

---

> [!example] 
> ![[Substitution Method-20240411203610343.webp]]

![[Substitution Method-20240411203620207.webp]]

---

> [!example] 
> ![[Substitution Method-20240412095628249.webp]]

![[Substitution Method-20240412095642812.webp]]
![[Substitution Method-20240412095657381.webp]]

---
