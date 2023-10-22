---
pdf: mod-1
module: 1
lecture: 2.a, 2.b, 2.c, 3.a, 3.b, 3.c, 3.d
date: 2023-10-21T22:09:00
version:
  - ALGO-24
last-revision: 
notes-taken: false
tags:
  - ALGO/Recursion
---
# Recursive Relations

> [!lecture] Lecture-2.a

- $T(n)$ is a recursive function of $n$. 

## Some common misinterpretations from program
- Computer program is different from recurrence relation from mathematics.

```c nums {3}
int A(n) {
	if (n <= 1) return 1;
	else return A(n - 1) + n;
}
```

- In LINE 3, `n` is just a constant. It does NOT add up to the complexity, since it just adds the value `n` to that recursion's output.
- The equivalent recurrence relation of the code in LINE 3 is,
$$
T(n) = T(n - 1) + 1
$$


```c nums {3}
int B(n) {
	if (n <= 1) return 1;
	else return 2 * B(n - 1);
}
```

- In LINE 3, `2 * B(n - 1)` does NOT mean the function is called two times, it means `2` is multiplied to the result of that current recursion, which is just a constant amount of work.
- The equivalent recurrence relation of the code in LINE 3 is,
$$
T(n) = T(n - 1) + 1
$$

## Solving Recurrence Relations

### Iteration Method
> [!lecture] Lecture-2.b, 2.c

> [!remember] Don't solve GP 
> It will anyways be a constant value (however high) after solving. We don't need exact answer for solving recurrence relation in Algorithms.
> 1. Decreasing GP with $\mid r \mid \lt 1$ almost gives the first term
> 2. Increasing GP with $\mid r \mid \gt 1$ almost gives the last term
> 3. Constant GP with $\mid r \mid = 1$ gives `n`


### Tree Method
> [!lecture] Lecture-3.a-3.d
- The examples in these lectures are recurrence relations and not computer program.

> [!intuition] If $a \lt b$ and $n$ is some number larger than both $a, b$
> $n / a \gt n / b$ 
>> [!example] $n = 100, a = 2, b = 5$
>> $n / a = 50$ and $n / b = 20$ i.e. $n / a \gt n / b$
>
> This idea can be extended to logarithms.
> $log_n \;a > log_n\; b$ if $b > a$

- Recurrence relation $T_1(n)$,
$$
T_1(n) = T \Big( \frac{n}{3} \Big) + T \Big(\frac{2n}{3} \Big) + n
$$
- For every call for the function, the work done is $n$ and the rest are recursive calls made

- Recurrence relation $T_2(n)$,
$$
T_2(n) = T \Big( \frac{n}{3} \Big) + T \Big(\frac{2n}{3} \Big) + n^2
$$
- For every call for the function, the work done is $n^2$ and the rest are recursive calls made

- When there are two different dividing functions in a recurrence relation as in $T_1(n)$, then there is a lower bound and upper bound for that recurrence relation as the levels of the tree of different branches varies for those two different dividing functions.
- Each level of the tree is one recursion.

![[Pasted image 20231022181751.png]]

- Since $k \lt l$ , so $log_3 \; n \lt log_{\frac{3}{2}}\; n$
- The left-most branch is of minimum height and the right-most branch is the of maximum height. Until the minimum height is the lower bound and until the maximum height is the upper bound.
- At each level, sum up the work done by all of the nodes in that level.

