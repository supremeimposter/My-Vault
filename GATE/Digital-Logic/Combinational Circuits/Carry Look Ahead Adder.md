---
pdf: 
module: 3
lecture: "7"
date: 2024-03-04T21:07:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/CombinationalCircuits
---
# Carry Look Ahead Adder

Initially we have the bits of the binary numbers and $C_{0}$. A separate circuit is designed for carry calculation.

> [!header] When carry is generated?

Do not consider the carry input as we do not know what is the carry input at that moment.

![[Carry Look Ahead Adder-20240627215042582.webp]]

When $a = 1 \cap b = 1$, $C_{out} = 1$.
A carry is generated when $a = 1$ and $b = 1$.

> [!header] When carry is propagated?

A carry from the previous stage is propagated to the next stage when both $a$ and $b$ are different.

![[Carry Look Ahead Adder-20240627215126534.webp]]

When $a \oplus b = 1$, then $C_{in} = C_{out}$.

> [!header] When carry is killed?

When both $a$ and $b$ are $0$, then $C_{out} = 0$ even if $C_{in} = 0$ or $1$.
When $\overline{a} . \overline{b} = 1$, then $C_{out} = 0$.

![[Carry Look Ahead Adder-20240627215147076.webp]]

---

There are two variables defined for Carry Look-ahead Adder,
1. Carry Generate $G_i = a_i \,.\, b_i$ i.e. carry is generated when both bits are 1
2. Carry Propagate $P_i = a_i \oplus b_i$ i.e. carry input propagates to the next stage when both bits are different.

> [!convention] 
> $C_{i}$ is the carry input of the current stage.
> $C_{i + 1}$ is the carry output of the current stage and carry input of the next stage.

Both of these variables can be calculated without waiting for anything.
````col
```col-md
flexGrow=1
===
$$
\begin{split}
G_{0} &= a_{0} . b_{0} \\
G_{1} &= a_{1} . b_{1} \\
G_{2} &= a_{2} . b_{2} \\
G_{3} &= a_{3} . b_{3} \\
\end{split}
$$

```
```col-md
flexGrow=1
===
$$
\begin{split}
P_{0} &= a_{0} \oplus b_{0} \\
P_{1} &= a_{1} \oplus b_{1} \\
P_{2} &= a_{2} \oplus b_{2} \\
P_{3} &= a_{3} \oplus b_{3} \\
\end{split}
$$
```
````
Assume that the propagational delay of NOT, AND, OR gates are $t$.
The propagational delay of $G_{i} = t$ and the propagational delay of $P_{i} = 3\,t$ if variables are not available in complementary form.

> [!header] Carry Generator Circuit

Now we calculate the carry out $C_{i + 1}$ of the current stage $i$.

For carry out of the current stage $C_{i + 1}$ to be $1$, either carry has to be generated ($a_{i} . b_{i} = 1$) or the carry input which is $1$ has to be propagated ($a \oplus b = 1$).
$$
\begin{split}
C_{i + 1} 
&= G_{i} + P_{i} \,.\, C_{i} \\ \\

C_{1} 
&= G_{0} + P_{0} \, . \, C_{0} \\ \\

C_{2} 
&= G_{1} + P_{1} \, . \, C_{1} \\
&= G_{1} + P_{1} \, . \, (G_{0} + P_{0} \, . \, C_{0}) \\
&= G_{1} + P_{1} . G_{0} + P_{1} . P_{0} . C_{0} \\ \\

C_{3}
&= G_{2} + P_{2} \, . \, C_{2} \\
&= G_{2} + P_{2} \, . \, (G_{1} + P_{1} . G_{0} + P_{1} . P_{0} . C_{0}) \\
&= G_{2} + P_{2} . G_{1} + P_{2} . P_{1} . G_{0} + P_{2} . P_{1} . P_{0} . C_{0} \\ \\

C_{4}
&= G_{3} + P_{3} \,.\, C_{3} \\
&= G_{3} + P_{3} \,.\, (G_{2} + P_{2} . G_{1} + P_{2} . P_{1} . G_{0} + P_{2} . P_{1} . P_{0} . C_{0}) \\
&= G_{3} + P_{3} . G_{2} + P_{3} . P_{2} . G_{1} + P_{3} . P_{2} . P_{1} . G_{0} + P_{3} . P_{2} . P_{1} . P_{0} . C_{0}
\end{split}
$$

All of the $C_{i}$ can be calculated using the data available at initial stage, but the hardware requirements increases proportional to the number of bits.

Carry generator circuit can be implemented as a 2-level AND, OR circuit to find each $C_{i}$.

![[Carry Look Ahead Adder-20240627232020643.webp]]

Each $C_{i}$ has $(i + 1)$ product terms, so each $C_{i}$ requires $(i + 1)$ inputs i.e. fan-in of the OR gate that sums up the product terms is $(i + 1)$.

![[Carry Look Ahead Adder-20240627230204865.webp|Carry Generation circuit for $C2$]]

Each $C_{i}$ has only 1 OR gate and $i$ AND gates.

Since we know the equation of sum,
$$
\begin{split}
S_{i} 
&= a_{i} \oplus b_{i} \oplus  C_{i} \\ 
&= (a_{i} \oplus b_{i}) \oplus  C_{i} \\ 
S_{i} &= P_{i} \oplus  C_{i} \\  \\

S_{0}
&= P_{0} \oplus  C_{0} \\

S_{1}
&= P_{1} \oplus  C_{1} \\

S_{2}
&= P_{2} \oplus  C_{2} \\

S_{3}
&= P_{3} \oplus  C_{3} \\
\end{split}
$$
Each $S_{i}$ has only 2 ExOR gates, which can implemented as a single level ExOR circuit.

![[Carry Look Ahead Adder-20240627231355125.webp]]

![[Carry Look Ahead Adder-20240627232049409.webp|Logic Diagram for 4-bit carry look-ahead adder]]


> [!discussion] 
>> Lec-07F Pg No. 12
>
> ![[Carry Look Ahead Adder-20240305172414432.webp]]



---