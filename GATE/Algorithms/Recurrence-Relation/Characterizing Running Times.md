---
pdf: CLRS
date: 2024-04-10T13:37:00
revision: 
tags:
  - Algorithms/RunningTime
books:
  - CLRS
  - chapter-3
notes-taken:
---
# Characterizing Running Times

For large enough inputs, the multiplicative constants and lower-order terms of an exact running time are dominated by the effects of the input size itself. Usually, an algorithm that is asymptotically more efûcient is the best choice for all but very small inputs.

## $\mathcal{O}$ Notation
$\mathcal{O}$-notation characterizes an asymptotic **upper bound** on the asymptotic behavior of a function. In other words, it says that a function grows no faster than a certain rate, based on the highest-order term.
$$
f(n) = \mathcal{O} (g(n))
$$
The upper bound of the function $f(n)$ is the function $g(n)$ for all sufficiently large values $n$ such that $n \ge n_0$.

$\mathcal{O} (g(n))$ is the set of all those functions whose upper bound is $g(n)$
$$
f(n) \le c \ast g(n)
$$
All the functions in the set $\mathcal{O} (g(n))$ must be asymptotically non-negative i.e. should never be negative for sufficiently large $n$ values, consequently the function $g(n)$ must also be asymptotically non-negative.

> [!definition] Asymtotically Positive function
> A function $f(n)$ that is positive for all sufficiently large $n$


## $\Omega$ Notation
$\Omega$-notation characterizes a asymptotic **lower bound** on the asymptotic behavior of a function. In other words, it says that a function grows at least as fast as a certain rate, based on the highest-order term.

$$
f(n) = \Omega (g(n))
$$
$\Omega(g(n))$ is the set of all those functions whose lower bound is $g(n)$
$$
f(n) \ge c \ast g(n)
$$

## $\Theta$ Notation
$\Theta$-notation characterizes a asymptotic **tight bound** on the asymptotic behavior of a function. It says that a function grows precisely at a certain rate, based on the highest order term.


![[Characterizing Running Times-20240410171442047.webp]]

