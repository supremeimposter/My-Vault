---
pdf: 
module: 1
lecture: "3"
date: 2024-04-11T20:12:00
version:
  - ALGO-24
last-revision: 
notes-taken: false
tags:
  - Algorithm/Recursion
  - Algorithm/DivideAndConquer
---
# Tree Method

> [!lecture] Lecture-3.a-3.d
- The examples in these lectures are recurrence relations and not computer program.
- When there are more than one recursive call in a recurrence relation, it is better to go for the tree method, since [[Substitution Method|substitution]] method becomes messy in this case.

> [!intuition] If $a \lt b$ and $n$ is some number larger than both $a, b$
> $n / a \gt n / b$ 
>> [!example] $n = 100, a = 2, b = 5$
>> $n / a = 50$ and $n / b = 20$ i.e. $n / a \gt n / b$
>
> This idea can be extended to logarithms.
> $log_n \;a > log_n\; b$ if $b > a$
> ![[Tree Method-20240412173509379.webp]]

- Recurrence relation $T_1(n)$,
$$
T_1(n) = T \Big( \frac{n}{3} \Big) + T \Big(\frac{2n}{3} \Big) + n
$$
- For every call for the function, the work done is $n$ and the rest are recursive calls made. The cost of computing and combining the output of this recursion is `n` and it can be anything as of in $T_2(n)$

- Recurrence relation $T_2(n)$,
$$
T_2(n) = T \Big( \frac{n}{3} \Big) + T \Big(\frac{2n}{3} \Big) + n^2
$$
- For every call for the function, the work done is $n^2$ and the rest are recursive calls made

- When there are two different dividing functions in a recurrence relation as in $T_1(n) {}$, then there is a lower bound and upper bound for that recurrence relation as the levels of the tree of different branches varies for those two different dividing functions.
- Each level of the tree is one recursion.

![[Time Complexity for Recursive Programs-20231209181242863.webp]]

- Since ${} \frac{3}{2} \lt 3$ , so $log_3 \; n \lt log_{\frac{3}{2}}\; n$
- The left-most branch is of minimum height and the right-most branch is the of maximum height. Until the minimum height is the lower bound and until the maximum height is the upper bound.
- At each level, sum up the work done by all of the nodes in that level.

> [!analogy] 
> Work got completed quicker in the first case when the base is larger. Work took time in the second case when the base is smaller.
> ![[Tree Method-20240412173648568.webp]]

- Recurrence Relation $T_3(n)$,
$$
T_3(n) = T \Big( \frac{n}{3} \Big) + T \Big(\frac{2n}{3} \Big) + 1
$$
- For every recursive call, the amount of work done is constant

#### General Formula for Tree Method
$$
T(n) = a T \Big( \frac{n}{b} \Big) + cn^k
$$

---
