---
pdf: 
module: 5
lecture: 
date: 2024-03-08T20:48:00
version:
  - DL-24
last-revision: 2024-06-30T15:28:00
notes-taken: true
tags:
  - DigitalLogic/SequentialCircuits
---
# SR Flip Flop

- SR flip flop is a clocked and gated Latch.
- When clock = 0, flip flop does not respond to change in inputs.
- When clock = 1, flip flop works in a fixed behaviour.

## Implementation

SR flip flop can be implemented using either $SR$ latch with a clock or $\overline{S}\,\overline{R}$ latch with a clock.

> [!header] $SR$ latch implementation

![[SR Flip Flop-20240630114016259.webp]]

When the clock = 0, the $SR$ latch does not respond to any change in inputs $S, R$.

![[SR Flip Flop-20240630112014516.webp]]

When the clock = 1, the $SR$ latch does functions normally.

![[SR Flip Flop-20240630112444747.webp]]

> [!header] $\overline{S}\,\overline{R}$ latch implementation

![[SR Flip Flop-20240630114032791.webp]]

When the clock = 0, the $\overline{S}\,\overline{R}$ latch does not respond to any change in inputs $S, R$.

![[SR Flip Flop-20240630112352428.webp]]

When the clock = 1, the $\overline{S}\,\overline{R}$ latch does functions normally.

![[SR Flip Flop-20240630112418514.webp]]

> [!interesting] 
> Gated SR latch with NOR gates and gated SR latch with NAND gates have the same block diagram.
> 
> ![[SR Flip Flop-20240630123914284.webp]]

![[SR Flip Flop-20240630131036162.webp|Timing Diagram for SR flip flop]]

## Truth Table
$$
\begin{split}
Q_{t+1} 
&= f \, (Q, S, R, \text{clk})
\end{split}
$$

The truth table of SR flip flop has $16$ rows, since the function has $4$ inputs.

![[SR Flip Flop-20240630124731266.webp]]

The output of the forbidden input combination $S = 1, R = 1$ is considered as don't care, which is not the case in the basic latch.

![[SR Flip Flop-20240630124833366.webp]]
$$
\begin{split}
Q_{t+1} &= S + Q_{t} . \overline{R} \\
Q_{n} &= S + Q . \overline{R}
\end{split}
$$
![[SR Flip Flop-20240630125950149.webp]]

## Characteristic Table

In both of the implementations, SR flip flop has a fixed behaviour which is represented by the characteristic or behaviour table below.

![[SR Flip Flop-20240630105650653.webp]]

> [!important] 
> When clock is $0$, the outputs does not become $0$ unlike enable inputs in combinational circuits. The circuit just does not respond to the inputs i.e. the **outputs remain unchanged**.

When the clock = 0, transition from forbidden input combination to retaining input combination creates no issues, since the the SR flip flop does not respond to the input change.

## Excitation Table
> [!tip]
> Excitation table signifies what excites the output. It is from output point of view.

![[SR Flip Flop-20240630130058511.webp]]

![[SR Flip Flop-20240630130141265.webp]]

![[SR Flip Flop-20240630130154398.webp]]

## State Diagram

An SR flip flop has two states i.e. $Q = 0$ or $Q = 1$.

![[SR Flip Flop-20240630130942968.webp]]

---
