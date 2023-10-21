---
pdf: mod-1
module: 1
lecture: 2.a,
date: 2023-10-21T22:09:00
version:
  - ALGO-24
last-revision: 
notes-taken: false
tags:
  - ALGO/Recursion
---
# Recursive Relations
- $T(n)$ is a recursive function of $n$. 

## Some common misinterpretations

```c nums {3}
A(n) {
	if (n <= 1) return 1;
	else return A(n - 1) + n;
}
```

- In LINE 3, `n` is just a constant. It does NOT add up to the complexity, since it just adds the value `n` to that recursion's output.
$$
T(n) = T(n - 1) + 1
$$

```c nums {3}
B(n) {
	if (n <= 1) return 1;
	else return 2 * B(n - 1);
}
```

- In LINE 3, `2 * B(n - 1)` does NOT mean the function is called two times, it means `2` is multiplied to the result of that current recursion, which is just a constant amount of work.
$$
T(n) = T(n - 1) + 1
$$
