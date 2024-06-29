---
pdf: 
module: 5
lecture: 
date: 2024-03-07T22:44:00
version:
  - DL-24
last-revision: 2024-06-29T21:21:00
notes-taken: true
tags:
  - DigitalLogic/SequentialCircuits
---
# $SR$ Latch

$SR$ Latch is an active high latch.

![[Memory Device-20240629123211415.webp]]

Main output is $Q = Q_{a} = Q_{R}$.

| Input Combination | Operation | $Q_{n}$ | Meaning                                                                                                              |
| ----------------- | --------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| $S = 1, R = 0$    | Set       | $1$     | Main output is 1                                                                                                     |
| $S = 0, R = 1$    | Reset     | $0$     | Main output is 0                                                                                                     |
| $S = 0, R = 0$    | Retain    | $Q$     | It retains the previous output                                                                                       |
| $S = 1, R = 1$    | Forbidden | $0$     | Though this operation is stable, the behaviour of the circuit is undefined or uncertain for any preceding operation. |

![[Cross Coupled NOR, NAND Gates-20240308120357547.webp]]

SR Latch is **not** a 2-bit storage device.

> [!question] Why do we even apply $0, 0$ combination after $1, 1$ combination in SR latch?
> To retain the data.

![[SR and S'R' Latch-20240629151203176.webp|A basic Latch]]

> [!header] Analysing a basic latch

The next state equation of an $SR$ latch is,
$$
\begin{split}
Q_{t+1} &= f\, (R, S, Q_{t})
\end{split}
$$
The truth table is,

![[SR and S'R' Latch-20240629233050668.webp]]

![[SR and S'R' Latch-20240629151429911.webp]]

![[SR and S'R' Latch-20240629152507375.webp]]

Characteristic table of a $SR$ latch,

![[SR and S'R' Latch-20240629152521100.webp]]

$Q_{a}$ and $Q_{b}$ are inverses of each other for the allowed input combinations.

> [!important] 
> If latches are given, think about whether these latches have previous inputs or this is the first input.

## Oscillations and Undesirable States in Latches

When $S = 1, R = 1$, both the outputs are $0$ i.e. $Q_{a} = Q_{b} = 0$ which is **undesirable** as the bigger circuits using basic latch are implemented based on the assumption that $Q_{a} = \overline{Q_{b}}$.

An even bigger problem occurs when we transition from $S=R=1$ to $S=R=0$. 
When $S=R=1$ we have $Q_{a}=Q_{b}=0$. After the transition to $S=R=0$, however, we get $Q_{a}=Q_{b}=1$, which would immediately cause $Q_{a}=Q_{b}=0$, and so on.

If the gate delays and the wire lengths are identical, then this **oscillation** will continue forever.
In practice, the oscillation dies down and the output settles into either $Q_{a}=1$ and $Q_{b}=0$ or $Q_{a}=0$ and $Q_{b}=1$.
The problem is that we can't predict which one of these two it will settle into.

---
# $\overline{S}\, \overline{R}$ Latch

$\overline{S}\, \overline{R}$ latch is an active low latch.
It is also called as $SR$ Latch with NAND gates or $RS$ flip flop.

![[SR and S'R' Latch-20240629205838208.webp]]

Main output is $Q_S$.

| Input Combination | Operation | $Q_{n}$ | Meaning                                                                          |
| ----------------- | --------- | ------- | -------------------------------------------------------------------------------- |
| $R = 0, S = 1$    | Reset     | $0$     | Main output is $0$                                                               |
| $R = 1, S = 0$    | Set       | $1$     | Main output is $1$                                                               |
| $R = 1, S = 1$    | Retain    | $Q$     | It retains the previous output                                                   |
| $R = 0, S = 0$    | Forbidden | $1$     | **After this operation**, the behaviour of the circuit is undefined or uncertain |

$\overline{S}, \overline{R}$ latch also suffers from the same oscillation problems and undesirable states as $SR$ latch.

![[Cross Coupled NOR, NAND Gates-20240308120411595.webp]]

The truth table of $\overline{S} \, \overline{R}$ latch is,

![[SR and S'R' Latch-20240629233401968.webp]]

---
# Summary of Latches

$SR$ latch is active high whereas $\overline{S}\, \overline{R}$ latch is active low.

![[SR and S'R' Latch-20240629210255019.webp]]

![[SR and S'R' Latch-20240629210435589.webp]]

In both the latches transition from forbidden input combinations to the retaining input combinations leads to uncertain behaviour.

---