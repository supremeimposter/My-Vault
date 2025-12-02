---
pdf: 
module: 3
lecture: "7"
date: 2024-03-04T21:07:00
version:
  - DL-24
last-revision: 2024-06-28T18:13:00
notes-taken: true
tags:
  - DigitalLogic/CombinationalCircuits
  - DigitalLogic/Adder
---
# Carry Look Ahead Adder

Initially we have the bits of the binary numbers and $C_{0}$. A separate circuit is designed for carry calculation.
$C_{0}$ does not have to be $0$ always, because 4-bit adders can be used in combination to perform 64-bit addition.

## Cases of Carry output

> [!header] When carry is generated?

Do not consider the carry input $C_{\text{in}}$ as we do not know what is the carry input at that moment.

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
## CLA construction

There are two variables defined for Carry Look-ahead Adder,
1. Carry Generate $G_i = a_i \,.\, b_i$ i.e. carry is generated when both bits are 1, independent of other stages.
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

### Carry Generator Circuit

Now we calculate the carry out $C_{i + 1}$ of the current stage $i$.

For carry out of the current stage $C_{i + 1}$ to be $1$, either carry has to be generated ($a_{i} . b_{i} = 1$) or the carry input which is $1$ to the current stage has to be propagated ($a \oplus b = 1$). to the next stage.
$$
\begin{split}
C_{i + 1} 
&= \underbrace{G_{i}}_{\text{either generated}} + \underbrace{P_{i} \,.\, C_{i}}_{\text{or propagated when previous carry-in is } 1}  \\ \\

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

Each $C_{i}$ has $(i + 1)$ product terms, so OR gate of each $C_{i}$ requires $(i + 1)$ inputs i.e. fan-in of the OR gate that sums up the product terms is $(i + 1)$. 

The maximum fan-in of an AND gate is $(i + 1)$, since one of the product terms will have $(i + 1)$ literals.

![[Carry Look Ahead Adder-20240627230204865.webp|Carry Generation circuit for $C2$]]

Each $C_{i}$ has only 1 OR gate and $i$ AND gates.

> [!perspective] 
> ![[Carry Look Ahead Adder-20240628082827930.webp]]

### Sum Generator Circuit

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
Each $S_{i}$ has only 1 ExOR gates, which can implemented as a single level ExOR circuit.

![[Carry Look Ahead Adder-20240627231355125.webp]]

![[Carry Look Ahead Adder-20240627232049409.webp|Logic Diagram for 4-bit carry look-ahead adder]]

## Propagational delay of CLA circuit

Assume that the propagational delay of basic gates is $t$ and the fan-in of any gates are unlimited (Practically they cannot be unlimited).

![[Carry Look Ahead Adder-20240628165155907.webp]]

$P_{i}$ is available after $3\,t$ and $G_{i}$ is available after $t$.

![[Carry Look Ahead Adder-20240628165204737.webp]]

The carry generator circuit is implemented in two level AND-OR implementation, it has a propagational delay of $2\,t$.

![[Carry Look Ahead Adder-20240628165217163.webp]]

Every carry is available after $5\,t$, if ExOR is implemented as 3-level NOT, AND, OR implementation.

Every sum is available after $(5 + 3)\,t = 8\,t$.

![[Carry Look Ahead Adder-20240628165711580.webp|Propgational delay of CLA when fan-in is unlimited]]

For any n-bit CLA, the propagational delay is $8\,t$ if the propagational delay of all the basic gates is $t$ and only basic gates with unlimited fan-ins are used to implement the circuit.

All the carry-bits are valid after $5\,t$ and all the sum-bits are valid after $8\,t$.

When fan-in is limited by $k$, then the propagational delay of the **carry generator circuit** in an $n$-bit CLA is $\mathcal{O}(\log_{k} \,n)$ and the rest of the circuits take constant time for any $n$-bits.

---