---
pdf: 
module: 3
lecture: "7"
date: 2024-03-04T18:46:00
version:
  - DL-24
last-revision: 2024-06-27T19:22:00
notes-taken: true
tags:
  - DigitalLogic/CombinationalCircuits
  - DigitalLogic/Adder
---
# Ripple Carry Adder

Ripple Carry adder is a combinational circuit that resembles our hand computation of binary addition.

To construct a n-bit binary adder, 4 full adders are connected in cascade. The carry input to the full adder in the least significant position is fixed to 0.

![[Ripple Carry Adder-20240627140847763.webp|Parallel Binary Adder using 4 Full Adders]]

The carry input ripples (**propagates**) through four full adders to result in the final output carry output.

> [!example] 
> ![[Ripple Carry Adder-20240627124710583.webp]]

Half adders alone cannot be used to construct binary adders. But only 1 half adder in the least significant position and 3 full adders can be cascaded to implement n-bit binary adder.

![[Ripple Carry Adder-20240627141115640.webp|Parallel Binary Adder using 3 Full Adders and 1 Half Adder]]

---
## Carry Propagation

![[Ripple Carry Adder-20240627140847763.webp]]

Initially $S_{3}, S_{2}, S_{1}, S_{0}$ and $C_{4}, C_{3}, C_{2}, C_{1}$ are invalid outputs.

All the bits of A and B are available for computation at the same time. In combinational circuits, the output will not be correct until signals are given **enough time** to propagate through the gates connected from input to output.

The longest propagation delay time in an adder is the time it takes the carry to propagate through the full adders.

### 2-level basic gate implementation of Full Adders

The signal form the carry input $C_{i}$ to the output carry $C_{i+1}$ propagates through an AND gate and an OR gate, which equals $2$ gate levels. 

![[Half Adder and Full Adder-20240627095531042.webp|Carry out in a Full Adder in 2-level basic gates implementation]]

If there are 4 full adders in the binary adder, the output carry $C_{4}$ would have $2×4=8$ gate levels, from $C_{0}$ to $C_{4}$.

For an $n$-bit adder, $2n$ gate levels for the carry to propagate form input to output are required.

Let us consider that the basic gates have a propagational delay of $t$.

![[Ripple Carry Adder-20240627143532935.webp]]

The carry output $C_{n}$ will be available after $(2n)\,t$.
The sum $S_{n-1}$ will be available after $(2n + 1)\, t$.
Hence, the propational delay of the ripple carry adder in 2-level basic gates implementation is $(2n + 1)\, t$.

### 2 Half adders and 1 OR implementation of Full Adders

Let us assume that the ExOR gate has a propagational delay of $2\,t$.

![[Ripple Carry Adder-20240627181852899.webp|Full Adder at the least significant position i.e. Position 0]]

$C_{1}$ is available after $4\, t$ and $S_{0}$ is available after $4\, t$.

The first half adder in every full adder does not depend on carry inputs. All the operands required as readily available. The first half adder in every full adder will compute parallelly when the circuit is turned on.

Every **first** half adder in all of the full adders gives valid outputs after $2\,t$. So, everytime a full adder does not have to wait for additional $2\,t$ for the first half adder.

$S_{0}$ is available after $(2 + 2)\,t = 4\,t$ and $C_{1}$ is available after $(2 + 1 + 1)\,t = 4\,t$.

![[Ripple Carry Adder-20240627182648336.webp]]

$C_{2}$ depends on $C_{1}$ and $A_{1}, B_{1}$,  wheras $S_{1}$ depends on $A_{1}, B_{1}$ which where already available.

$S_{1}$ is available after $(4 + 2)\,t = 6\,t$ and $C_{2}$ is available after $(4 + 1 + 1)\,t = 6\,t$.

Similarly,

$S_{2}$ is available after $(6 + 2)\,t = 8\,t$ and $C_{3}$ is available after $(6 + 1 + 1)\,t = 8\,t$.
$S_{3}$ is available after $(8 + 2)\,t = 10\,t$ and $C_{4}$ is available after $(8 + 1 + 1)\,t = 10\,t$.

The propagational delay of a Ripple Carry Adder in 2 Half adders and 1 OR gate implementation with basic gates having propagational delay of $t$ and ExOR gates having propagational delay of $2\,t$ is $10\,t$.

If the fan-in of the gates are limited, then the propagational delay of RCA for $n$-bit numbers is $\mathcal{O}(n)$.

---
## Drawbacks of Ripple Carry Adder

- The total delay is proportional to the number of bits n i.e. performance degrades for large values of n.  
- The main bottleneck is the carry, which propagates sequentially from one stage to the next.

![[Ripple Carry Adder-20240627223454174.webp|Addition of 64-bit binary numbers using RCA be like]]

This can be overcome by generating all the carry bits in parallel before the actual addition starts. After the initial delay, all the additions can be done in parallel. Time complexity reduces from $\mathcal{O}(n)$ to $\mathcal{O}(1)$. Hardware complexity increases rapidly with $n$. This is achieved by [[Carry Look Ahead Adder]].

---