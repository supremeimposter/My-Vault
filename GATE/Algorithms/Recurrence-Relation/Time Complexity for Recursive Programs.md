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
  - Algorithm/Recursion
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
