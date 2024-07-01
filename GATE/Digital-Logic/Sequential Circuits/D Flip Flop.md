---
pdf: 
module: 5
lecture: 
date: 2024-03-09T08:47:00
version:
  - DL-24
last-revision: 2024-06-30T18:09:00
notes-taken: true
tags:
  - DigitalLogic/SequentialCircuits
  - DigitalLogic/FlipFlop
---
# D Flip Flop

Instead of changing two signals (S, R) to store a bit data like in [[SR Flip Flop|SR flip flop]], we can change only one signal to store one bit data in D flip flop.

![[D Flip Flop-20240630174031130.webp]]

In D flip flops,
$$
\begin{split}
Q_{t+1} &= f\, (\text{clk}, D, Q_{t}) \\
Q_{n} &= f\, (\text{clk}, D, Q)
\end{split}
$$
The characteristic equation of D-flip flop is,
$$
\begin{split}
Q_{t+1} &= D
\end{split}
$$
## Implementation

> [!header] SR flip flop implementation of D flip flop

![[D Flip Flop-20240630174524492.webp]]

There is no need for the retain functionality in D-flip flop, hence $S \not= R$ in D flip flop.

![[D Flip Flop-20240630154235322.webp|D flip flop implementation using SR flip flip of NOR implementation]]

![[D Flip Flop-20240630154314444.webp|D flip flop implementation using SR flip flip of NAND]]

## Truth Table

![[D Flip Flop-20240630153637873.webp]]

The previous output $Q$ is a dummy variable in D-flip flop.

## Characteristic Table

When the clock = 0, then there is no change in the circuit.

![[D Flip Flop-20240630173715027.webp]]

## Excitation Table

![[D Flip Flop-20240630153734389.webp]]

## State Diagram

![[D Flip Flop-20240630153910564.webp]]

## Timing Diagram

![[D Flip Flop-20240630174220284.webp|Positive level-triggered flip flop]]

![[D Flip Flop-20240701101634607.webp|Positive edge-triggered flip flop]]

## Clock Triggering in D Flip Flop

![[D Flip Flop-20240630180759129.webp]]

![[D Flip Flop-20240630180807591.webp]]

![[D Flip Flop-20240630180819209.webp]]

![[D Flip Flop-20240630180831925.webp]]

---