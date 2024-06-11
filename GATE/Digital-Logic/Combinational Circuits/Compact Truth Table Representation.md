---
pdf: lec-1
module: 3
lecture: "1"
date: 2024-02-29T15:34:00
version:
  - DL-24
last-revision: 2024-06-03T22:58:00
notes-taken: true
tags:
  - DigitalLogic/BooleanAlgebra
---
# Compact Truth Table
Express the function below in the truth table in CSOP form,

| $a$ | $b$ | $f(a, b)$ |
| --- | --- | --------- |
| 0   | 0   | 0         |
| 0   | 1   | 1         |
| 1   | 0   | 1         |
| 1   | 1   | 0         |
$$
\begin{split}
f (a, b) &= \overline{a} . b + a . \overline{b}
\end{split}
$$
The same function can be expressed in another way as well,
$$
\begin{split}
f (a, b) &= (0) . \overline{a} . \overline{b} + (1) . \overline{a} . b + (1) . a . \overline{b} + (0) . a. b \\
&= \overline{a} . b + a . \overline{b}
\end{split}
$$

The above expression of the given function $f$ is same as the CSOP expression.

---

| $a$ | $b$ | $f(a, b)$ |
| --- | --- | --------- |
| 0   | 0   | x         |
| 0   | 1   | y         |
| 1   | 0   | z         |
| 1   | 1   | w         |
From the above truth table, a function can be expressed as follows,
$$
\begin{split}
f(a, b) = (x) .\overline{a} . \overline{b} + (y) . \overline{a} . b + (z) . a . \overline{b} + (w) .a.b
\end{split}
$$

<u>Verification:</u>
When $a = 0, b = 0$, then $f(0, 0) = x$
When $a = 1, b = 0$, then $f(1, 0) = z$

---
Consider the truth table,

| a   | b   | f(a, b)        |
| --- | --- | -------------- |
| 0   | 0   | 0              |
| 0   | 1   | 1              |
| 1   | 0   | $c$            |
| 1   | 1   | $\overline{c}$ |
$$
\begin{split}
f(a, b) &= (0) . \overline{a}. \overline{b} + (1).\overline{a}.b + (c).a.\overline{b} + (\overline{c}).a.b \\
&= \overline{a}.b + c.a.\overline{b} + \overline{c}.a.b
\end{split}
$$

<u>Verification:</u>
When $a = 0, b = 1$, then $f = 1$
When $a=1, b=1$, then $f = \overline{c}$

In this example, the value of the function depends on the variable $c$ as well. So this is not the complete truth table, it is a compact one.
The standard truth table of the above compact truth table is,

![[Compact Truth Table Representation-20240603193907696.webp]]

Compact truth table is one of the representations of [[Boolean Function]]. Compact truth tables are helpful in constructing combinational circuits.

---
> [!example] 
> ![[Compact Truth Table Representation-20240603210313609.webp]]

> [!tip] 
> While writing compact truth table, prefer to write in terms of constant boolean functions as possible and write the function in terms of variables only if it is the only way possible.

> [!pdf] More examples on mod-3/lec-01.pdf Pg. No. 18 - 28

| ![[Compact Truth Table Representation-20240603224356486.webp]] | ![[Compact Truth Table Representation-20240603224413418.webp]] |
| -------------------------------------------------------------- | ------------------------------------ |

k-maps can be constructed using compact truth table.

![[Compact Truth Table Representation-20240603225741191.webp]]

---
