---
pdf: mod-4
module: 4
lecture: 
date: 2024-04-26T16:41:00
version:
  - ALGO-24
last-revision: 
notes-taken: false
tags:
  - Algorithm/DivideAndConquer
---
# Select Algorithm
In an unsorted array $A$ of $n$ elements and $k$,
SELECT($A, k$) : $k^{th}$ smallest element of $A$.

SELECT($A, 1$) = min
SELECT($A, \frac{N}{2}$) = median
SELECT($A, N$) = max

While partition of [[Quick Sort|quick sort]], the pivot element is put in its place. If it returns $k$, then it is the $k^{th}$ smallest element in the array.


> [!discussion] Pg. No. 191
> ![[Select Algorithm-20240426171557471.webp]]

An algorithm called median of medians, gives the approximate median in $\mathcal{O}(n)$.
The $k^{th}$ smallest element can be found in $\mathcal{O}(n)$.