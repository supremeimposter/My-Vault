---
tags:
  - DiscreteMath/Combinatronics
---
# Combinatorial Identities

> [!question] 
> ![[Combinatorial Identities-1742112497542.webp]]

Let's consider a small example, A = {a, b, c}, |A| = 3

LHS = n choose r and then choose 1 leader out of this r chosen elements and do this over subsets of size 0 to n

Let us use a notation (x, X) where x is the leader chosen and X is a set, where x belongs to X

subsets of size 0:
nC0 x 0 = 1 x 0 = 0
we are choosing nothing, which results in an empty and it is physically impossible to pick a leader out of 0 elements (this is where counting nothing becomes 0)

subsets of size 1:

number of ways to choose 1 element out of 3 = 3C1 = 3
the 3 subsets of size-1 are {a}, {b}, {c}
In the subset {a}, we can choose a leader in only 1 way, which is 'a' itself. Similarly for those other 2 sets

nC1 x 1 = 3C1 x 1 = 3 x 1 = 3

(a, {a}), (b, {b}), (c, {c})

subsets of size 2:

number of ways to choose 2 elements out of 3 = 3C2 = 3
the 3 subsets of size-2 are {a, b}, {a, c}, {b, c}

In the subset {a, b}, there are 2 ways to choose a leader, either 'a' or 'b'. Similarly for those other 2 sets

nC2 x 2 = 3C2 x 2 = 3 x 2 = 6

(a, {a, b}), (a, {a, c}),
(b, {a, b}), (b, {b, c}),
(c, {a, c}), (c, {b, c})

subsets of size 3:

number of ways to choose 3 elements out of 3 = 3C3 = 1

the only subset of size-3 is {a, b, c}

In the subset {a, b, c}, there are 3 ways to choose a leader, either 'a' or 'b' or 'c'.

nC3 x 3 = 3C3 x 3 = 1 x 3 = 3

(a, {a, b, c}),
(b, {a, b, c}),
(c, {a, b, c})

LHS = 0 + 3 + 6 + 3 = 12

RHS = n x ( 2^(n-1) )

we have 3 choices to pick a leader first out of {a, b, c}, then for the remaining 2 elements, they can be picked P or not picked N

n x ( 2^(n-1) ) = 3 x (2^2) = 3 x 4 = 12

if 'a' is chosen as the leader first, 
(a, {}), (a, {b}), (a, {c}), (a, {b, c}) = 4 possible subsets

if 'b' is chosen as the leader first, 
(b, {}), (b, {a}), (b, {c}), (b, {a, c}) = 4 possible subsets

if 'c' is chosen as the leader first, 
(c, {}), (c, {b}), (c, {a}), (c, {b, a}) = 4 possible subsets

4 + 4 + 4 = 12

LHS = RHS

But in simple terms, 
LHS is choosing r out of n elements step-by-step with picking a leader out of r and
RHS is choosing a leader first and picking the team next

In both the cases, leader is a part of the team as well. Both count the same thing.

