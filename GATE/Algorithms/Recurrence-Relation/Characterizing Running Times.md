---
pdf: CLRS
date: 2024-04-10T13:37:00
revision: 
tags:
  - Algorithm/RunningTime
books:
  - CLRS
  - chapter-3
notes-taken: false
---
# Characterizing Running Times

For large enough inputs, the multiplicative constants and lower-order terms of an exact running time are dominated by the effects of the input size itself. Usually, an algorithm that is asymptotically more efficient is the best choice for all but very small inputs.

## Asymptotic Notations

Asymptotic notations provide the simplest and most precise bounds possible.

> [!definition] Asymtotically Positive function
> A function $f(n)$ that is positive for all sufficiently large $n$

### $\mathcal{O}$ Notation
$\mathcal{O}$-notation characterizes an asymptotic **upper bound** on the asymptotic behavior of a function. In other words, it says that a function grows no faster than a certain rate, based on the highest-order term.
$$
f(n) = \mathcal{O} (g(n))
$$
The upper bound of the function $f(n)$ is the function $g(n)$ for all sufficiently large values $n$ such that $n \ge n_0$ where $n_0 \gt 0$

$\mathcal{O} (g(n))$ is the set of all those functions whose upper bound is $g(n)$
$$
0 \le f(n) \le c \ast g(n)
$$
All the functions in the set $\mathcal{O} (g(n))$ must be asymptotically non-negative i.e. should never be negative for sufficiently large $n$ values, consequently the function $g(n)$ must also be asymptotically non-negative.


### $\Omega$ Notation
$\Omega$-notation characterizes a asymptotic **lower bound** on the asymptotic behavior of a function. In other words, it says that a function grows at least as fast as a certain rate, based on the highest-order term.

$$
f(n) = \Omega (g(n))
$$
$\Omega(g(n))$ is the set of all those functions whose lower bound is $g(n)$
$$
f(n) \ge c \ast g(n) \ge 0
$$

### $\Theta$ Notation
$\Theta$-notation characterizes a asymptotic **tight bound** on the asymptotic behavior of a function. It says that a function grows precisely at a certain rate, based on the highest order term.

$$
f(n) = \Theta(g(n))
$$

$$
0 \le c_1 \ast g(n) \le f(n) \le c_2 \ast g(n)
$$


> [!NOTE] 
> $\Theta(n)$ is the most precise and the most preferred.


![[Characterizing Running Times-20240410222808296.webp]]

### $o$ Notation
$o$ Notation is used to denote a upper bound that is not asymptotically tight.
$$
f(n) = o(g(n))
$$

For all constants $c \gt 0$, 
$$
0 \le f(n) \lt c \ast g(n)
$$
In $o$-Notation, the function $f(n)$ becomes insignificant relative to $g(n)$ as $n$ gets large.

$\lim_{n \to \infty} \frac{f(n)}{g(n)} = 0$

$f(n)$ is asymptotically smaller than $g(n)$ if $f(n) = o (g(n))$

### $\omega$ Notation
$\omega$ Notation is used to denote a lower bound that is not asymptotically tight.

For all constans $c \gt 0$,
$$
0 \le c \ast g(n) \lt f(n)
$$

In $\omega$-Notation, the function $f(n)$ becomes arbitrarily large relative to $g(n)$ as $n$ gets large.

$\lim_{n \to \infty} \frac{f(n)}{g(n)} = \infty$

$f(n)$ is asymptotically larger than $g(n)$ if $f(n) = \omega (g(n))$

## Comparing Functions
Many of the relational properties of real numbers apply to asymptotic comparisons as well.

### Transitivity
This applies to all of the five asymptotic notations.

$f(n) = \Theta(g(n))$ and $g(n) = \Theta(h(n))$ imply $f(n) = \Theta(h(n))$
$f(n) = \Omega(g(n))$ and $g(n) = \Omega(h(n))$ imply $f(n) = \Omega(h(n))$
$f(n) = \mathcal{O}(g(n))$ and $g(n) = \mathcal{O}(h(n))$ imply $f(n) = \mathcal{O}(h(n))$
$f(n) = \omega(g(n))$ and $g(n) = \omega(h(n))$ imply $f(n) = \omega(h(n))$
$f(n) = o(g(n))$ and $g(n) = o(h(n))$ imply $f(n) = o(h(n))$

### Reflexivity
Every function is its own upper, lower and tight bound

$f(n) = \Theta(f(n))$
$f(n) = \Omega(f(n))$
$f(n) = \mathcal{O}(f(n))$

### Symmetry
$f(n) = \Theta (g(n))$ if and only if $g(n) = \Theta(f(n))$

### Tranpose Symmetry
$f(n) = \mathcal{O}(g(n))$ if and only if $g(n) = \Omega(f(n))$


> [!tip] Trichotomy
> ![[Characterizing Running Times-20240411092606053.webp]]

