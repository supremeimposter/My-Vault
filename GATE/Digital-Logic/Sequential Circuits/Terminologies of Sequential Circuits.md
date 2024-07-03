---
pdf: 
module: 5
lecture: 
date: 2024-07-03T16:34:00
version:
  - DL-24
last-revision: 2024-07-03T16:34:00
notes-taken: true
tags:
  - DigitalLogic/SequentialCircuits
  - DigitalLogic/FlipFlop
  - DigitalLogic/Registers
---
# Terminologies of Sequential Circuits

## State of a Flip Flop

- The state or output of a flip flop is the data stored in the flip flop.
- A flip flop is a bi-stable device i.e. has two internal states.

![[Combinational Circuits vs Sequential Circuits-20240703105509640.webp]]

## State of a Sequential Circuit

- Circuits with [[Flip Flop]] are called sequential circuits.
- The output combination of the flip flops in a sequential circuit is called the state of the sequential circuit.

| No of flip flops | No of states | No of outputs |
| ---------------- | ------------ | ------------- |
| 1                | 2            | 1             |
| 2                | 4            | 2             |
| 3                | 8            | 3             |
| 4                | 16           | 4             |

- n flip flops have n-bits in the output and $2^n$ possible states.

## State of a Register

- The state of the [[Registers|register]] is the data combination stored in the flip flops.
- The data stored in each flip flop will be available at each of its output.

![[Combinational Circuits vs Sequential Circuits-20240703121257748.webp]]

- The inputs waiting at the input line will be stored in the register after the clock trigger.

## State Table and Diagram

A state diagram is a graph that shows the flip-flop's operations in terms of how it transitions from one state to another. The nodes are labeled with the states and the directed arcs are labeled with the input signals that cause the transition to go from one state to the next.

State table is same as characteristic table.

## Next State Equation

- Present state means before clock trigger.
- Next state means after clock trigger.

![[Combinational Circuits vs Sequential Circuits-20240703120433675.webp|Present state and next state for a positive edge-triggered flip flop]]

> [!tip] 
> When writing next state equation from state diagram, focus on going to 1.

- Next state equation can be obtained from state table or state diagram.
- Using k-map, a minimized next state equation can be obtained.

> [!example] 

Given the state diagram of SR flip flop,

![[Combinational Circuits vs Sequential Circuits-20240703125800967.webp]]
$$
\begin{split}
Q_{n} (Q, S, R) 
&= \overline{Q} . S . \overline{R} + Q . \overline{S} . \overline{R} + Q . S . \overline{R} \\
&= (\overline{Q} . S . \overline{R} + Q . S . \overline{R})  + Q . \overline{S} . \overline{R} \\
&= S . \overline{R} + Q . \overline{S} . \overline{R}
\end{split}
$$
![[Combinational Circuits vs Sequential Circuits-20240703123210791.webp]]
$$
\begin{split}
Q_{\text{next}} (Q, S, R) 
&= \overline{S} . \overline{R} . Q + S . \overline{R} . \overline{Q} + S . \overline{R} . Q \\
&= \overline{S} . \overline{R} . Q + (S . \overline{R} . \overline{Q} + S . \overline{R} . Q) \\
&= \overline{S} . \overline{R} . Q + S . \overline{R}
\end{split}
$$

![[Combinational Circuits vs Sequential Circuits-20240703123855175.webp]]

> [!example] 

![[Combinational Circuits vs Sequential Circuits-20240703160350041.webp]]

Since there are 2 flip flops in the given sequential circuits, then there are 2 outputs and 4 possible states.
$$
\begin{split}
A_{n} &= f \, (A, B) \\
B_{n} &= f \, (A, B)
\end{split}
$$
T-flip flops are used this sequential circuits, which retains the previous output if the input is $0$ and toggles the previous output if the input is $1$.

The characteristic table of the given sequential circuit is,

| $A$ | $B$ | $A_{n}$        | $B_{n}$        |
| --- | --- | -------------- | -------------- |
| 0   | 0   | $A$            | $\overline{B}$ |
| 0   | 1   | $\overline{A}$ | $\overline{B}$ |
| 1   | 0   | $\overline{A}$ | $B$            |
| 1   | 1   | $\overline{A}$ | $\overline{B}$ |

![[Combinational Circuits vs Sequential Circuits-20240703161034162.webp]]

The truth table of the given sequential circuit is,

| $A$ | $B$ | $A_{n}$ | $B_{n}$ |
| --- | --- | ------- | ------- |
| 0   | 0   | 0       | 1       |
| 0   | 1   | 1       | 0       |
| 1   | 0   | 0       | 0       |
| 1   | 1   | 0       | 0       |

The state diagram of the given sequential circuit can be obtained from the truth table.

![[Combinational Circuits vs Sequential Circuits-20240703162403528.webp]]

---