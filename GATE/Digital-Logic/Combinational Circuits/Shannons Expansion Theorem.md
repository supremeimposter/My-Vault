---
pdf: 
module: 3
lecture: 
date: 2024-06-11T18:52:00
version:
  - DL-25
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/BooleanAlgebra
---
# Shannons Expansion Theorem
> [!youtube] [Shannon's Expansion Theorem | Decomposition of Switching Functions | GATE IT 2006 | Digital Circuit - YouTube](https://www.youtube.com/watch?v=Hn9MhOJs6F0&t=885s)

> [!NOTE] 
> This is similar to Compact Truth table.

## Decompose Function into Minterms

**For a two-variable function $f(a, b)$** 

| With respect to $a$                                            | With respect to $b$                                            |
| -------------------------------------------------------------- | -------------------------------------------------------------- |
| ![[Compact Truth Table Representation-20240611110752842.webp]] | ![[Compact Truth Table Representation-20240611110806478.webp]] |
| $f = \overline{a} . f(0, b) + a . f(1, b)$                     | $f = \overline{b} . f(a, 0) + b . f(a, 1)$                     |

**For a three-variable function $f(a,b,c)$** 

| With respect to $a$                                                                          | With respect to $b$                                            | With respect to $c$                                            |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| ![[Compact Truth Table Representation-20240611111249926.webp]]                               | ![[Compact Truth Table Representation-20240611111304663.webp]] | ![[Compact Truth Table Representation-20240611111315760.webp]] |
| $f = \overline{a} . f(0, b, c) + a. f(1, b, c)$                                              | $f = \overline{b} . f(a, 0, c) + b . f(a, 1, c)$               | $f = \overline{c} . f(a, b, 0) + c . f(a, b, 1)$               |

| With respect to $(a, b)$                                       | With respect to $(a, c)$                                       | With respect to $(b, c)$                                       |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| ![[Compact Truth Table Representation-20240611112545469.webp]] | ![[Compact Truth Table Representation-20240611112554909.webp]] | ![[Compact Truth Table Representation-20240611112603647.webp]] |
All of the above functions are the different expressions of the same function.


Any boolean function $f(w_{1}, w_{2}, w_{3}, \cdots, w_{n})$ can be written in the forms,
$$
\begin{split}
f(w_{1}, w_{2}, w_{3}, \cdots, w_{n}) 
&= 
\overline{w_{1}} . f(0, w_{2}, w_{3}, \cdots , w_{n}) +
w_{1} . f(1, w_{2}, w_{3}, \cdots , w_{n}) \\

f(w_{1}, w_{2}, w_{3}, \cdots, w_{n}) 
&= 
\overline{w_{2}} . f(w_{1}, 0, w_{3}, \cdots , w_{n}) +
w_{2} . f(w_{1}, 1, w_{3}, \cdots , w_{n}) \\

&\vdots \\

f(w_{1}, w_{2}, w_{3}, \cdots, w_{n}) 
&= 
\overline{w_{1}} . f(w_{1}, w_{2}, w_{3}, \cdots , 0) +
w_{n} . f(w_{1}, w_{2}, w_{3}, \cdots , 1) \\

\end{split}
$$

The given function $f$ is decomposed with respect to variables $w_{1},$ $w_{2},$ $\cdots,$ $w_{n}$ respectively.

> [!caution] 
> Generally when expressing a function, it is not mandatory to mention the value of the variables.
> $$
> \begin{split}
> G(a, b, c) &= \overline{a} . G + a . G  = (\overline{a} + a) . G = G\\
> &= \overline{a} . G(a, b, c) + a . G(a, b, c) \\
> &= \overline{a} . G(0, b, c) + a . G(1, b, c)
> \end{split}
> $$

> [!example] Using Shannons theorem, expand $F$ about the variable $d$
> ![[Different Representations of a Function-20240611140927260.webp]]

The given function $F(a, b, c, d)$ is decomposed with respect to the variable $d$ as follows,
$$
F(a, b, c, d) = \overline{d} . F(a, b, c, 0) + d . F (a, b, c, 1)
$$

$$
\begin{split}
F(a, b, c, 0) &= \overline{a} + a . \overline{c} . 1 + \overline{b} . c . 1 + a . 0 \\
&= (\overline{a} + a. \overline{c}) + \overline{b}  . c \\
&= \overline{a} + (\overline{c} + \overline{b} . c) \\
&= \overline{a} + \overline{b} + \overline{c} \\ \\

F(a, b, c, 1) 
&= \overline{a} + a . \overline{c} . 0 + \overline{b} . c . 0 + a . 1 \\
&= \overline{a} + a \\
&= 1
\end{split}
$$

| $d$ | $F(a, b, c, d)$                              |
| --- | -------------------------------------------- |
| $0$ | $\overline{a} + \overline{b} + \overline{c}$ |
| $1$ | 1                                            |
$$
\begin{split}
F(a, b, c, d) 
&= \overline{d} . F(a, b, c, 0) + d . F (a, b, c, 1) \\
&= \overline{d} . (\overline{a} + \overline{b} + \overline{c}) + 
d. (1)
\end{split}
$$

![[Shannons Expansion Theorem-20240611211846346.webp]]

---
## Decompose Function into Maxterms

| $a$ | $b$ | $f$ |
| --- | --- | --- |
| 0   | 0   | 0   |
| 0   | 1   | 1   |
| 1   | 0   | 1   |
| 1   | 1   | 0   |

The canonical POS expression of the above function $f$ is, 
$$
\begin{split}
f(a, b) &= \prod M\;(f = 0) \\
&= (a + b) . (\overline{a} + \overline{b})
\end{split}
$$

The function $f$ can also be expressed as,
$$
\begin{split}
f (a, b) 
&= (a + b + 0) . (a + \overline{b} + 1) . (\overline{a} + b + 1)  . (\overline{a} + \overline{b} + 0) \\

&= (a + b) . (1) . (1) . (\overline{a} + \overline{b}) \\

&= (a + b) . (\overline{a} + \overline{b})
\end{split}
$$
---
In general, a function $f$ can be expressed as a POS,

| $a$ | $b$ | $f$ |
| --- | --- | --- |
| 0   | 0   | w   |
| 0   | 1   | x   |
| 1   | 0   | y   |
| 1   | 1   | z   |

$$
\begin{split}
f(a, b)
&= (a + b + w) . (a + \overline{b} + x) . (\overline{a} + b + y)  . (\overline{a} + \overline{b} + z)
\end{split}
$$
---

![[Shannons Expansion Theorem-20240611191130551.webp]]

![[Shannons Expansion Theorem-20240611191138965.webp]]

![[Shannons Expansion Theorem-20240611191200200.webp]]

![[Shannons Expansion Theorem-20240611191245426.webp]]

![[Shannons Expansion Theorem-20240611211904841.webp]]

> [!summary] 

Shannon's expansion can be done with respect to either **minterms** or **maxterms**.

![[Shannons Expansion Theorem-20240611191236021.webp]]


> [!example] 
> ![[Shannons Expansion Theorem-20240611212310135.webp]]
> ![[Shannons Expansion Theorem-20240611212909986.webp]]

---