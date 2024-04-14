---
pdf: mod-2
module: 2
lecture: 7A, 7B, 7C, 7D, 7E
date: 2023-10-25T10:18:00
version:
  - ALGO-24
last-revision: 
notes-taken: false
tags:
  - Algorithm/DivideAndConquer
---
# Divide and Conquer
The divide-and-conquer method is a powerful strategy for designing asymptotically efficient algorithms.

For divide and conquer, the problems are solved *recursively*.
Base case is solved without recursion. Recursion ends when it reaches a base case and is solved without recursion.

There are 3 characteristics for a recursive case.
1. Divide the problems into two or more sub-problems
2. Conquer (solve) the sub-problems recursively
3. Combine the solutions to the sub-problems

$$
T(n) = \text{dividing cost } + \text{ cost of solving sub-problems } + \text{ combining cost} 
$$

A **recurrence** is an equation that describes a function in terms of its value on other, typically smaller, arguments.

A recurrence $T(n)$ is algorithmic, if for every sufficiently large threshold constant $n_0 \gt 0$, the following properties hold:
1. $\forall_{n \lt n_0} \; T(n) = \Theta(1)$ and
2. $\forall_{n \ge n_0}$ every path of recursion ends in a defined base case within a finite number of recursive invocations. 

If the threshold is sufficiently large, then at least there is one sub-problem that can be solved that is of size less than $n_0$.

> [!tip] 
> An algorithmic recurrence has a well defined base case and recursive cases that end in a base case

Whenever a recurrence is stated without an explicit base case, we assume that the recurrence is algorithmic. The choice of the threshold constant does not matter, it can be any range where $T(n) = \Theta(1)$.
Sometimes, it is productive to divide a problem of size $n$ into sub-problems of different sizes. But most of efficient divide-and-conquer problems are divided into sub-problems of constant fraction of the size of the original problem.

