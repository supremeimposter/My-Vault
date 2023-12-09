---
pdf: mod-1
module: 1
lecture: 2.a, 2.b, 2.c, 3.a, 3.b, 3.c, 3.d
date: 2023-10-21T22:09:00
version:
  - ALGO-24
last-revision: 2023-11-01T21:33:00
notes-taken: false
tags:
  - ALGO/Recursion
---
# Recursive Relations
> [!lecture] Lecture-2.a

- $T(n)$ is a recursive function of $n {}$. 

## Recursion Rules
1. Always have at least once case that can be solved without using recursion.
2. Any recursive call must progress towards a base case.
3. Always assume that the recursive call works, and use this assumption to design your algorithms. 

## Misinterpretations between recurrence relation and computer program
- Computer program is different from recurrence relation

```c hl:3
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

```c hl:3
int B(n) {
	if (n <= 1) return 1;
	else return 2 * B(n / 2);
}
```

- In LINE 3, `2 * B(n - 1)` does NOT mean the function is called two times, it means `2` is multiplied to the result of that current recursion, which is just a constant amount of work.
- The equivalent recurrence relation of the code in LINE 3 is,
$$
T(n) = T\left( \frac{n}{2} \right) + 1
$$

```c hl:3
int C(n) {
	if (n <= 1) return 1;
	else return C(n / 2) + C(n / 2) + n;
}
```

- In LINE 3, there are two recursive calls to the function `C`
- The equivalent recurrence relation of the code in LINE 3 is,
$$
T(n) = 2 \;T\left( \frac{n}{2} \right) + 1
$$

---
## Solving Recurrence Relations

### [[Iteration Method (Repeated Substitution Method)]]
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
- For every call for the function, the work done is $n$ and the rest are recursive calls made.

- Recurrence relation $T_2(n)$,
$$
T_2(n) = T \Big( \frac{n}{3} \Big) + T \Big(\frac{2n}{3} \Big) + n^2
$$
- For every call for the function, the work done is $n^2$ and the rest are recursive calls made

- When there are two different dividing functions in a recurrence relation as in $T_1(n) {}$, then there is a lower bound and upper bound for that recurrence relation as the levels of the tree of different branches varies for those two different dividing functions.
- Each level of the tree is one recursion.

![[Time Complexity for Recursive Programs-20231209181242863.webp]]

- Since ${} k \lt l$ , so $log_3 \; n \lt log_{\frac{3}{2}}\; n$
- The left-most branch is of minimum height and the right-most branch is the of maximum height. Until the minimum height is the lower bound and until the maximum height is the upper bound.
- At each level, sum up the work done by all of the nodes in that level.

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

### [[Masters Theorem]]

### [[Change of Variable or Domain Transformation]]

---
