---
pdf: 
module: 5
lecture: 
date: 2024-03-09T13:16:00
version:
  - DL-24
last-revision: 2024-06-30T23:05:00
notes-taken: true
tags:
  - DigitalLogic/SequentialCircuits
---
# JK Flip Flop

Similar to SR flip flop, but `11` input combination is used to toggle the previous output.
$$
\begin{split}
Q_{t+1} &= f\, (J, K, Q_{t})
\end{split}
$$

## Truth Table

![[JK Flip Flop-20240630190025721.webp]]

![[JK Flip Flop-20240630185054407.webp]]

The characteristic equation is,
$$
\begin{split}
Q_{t+1} &= J . \overline{Q_{t}} + \overline{K} . Q_{t} \\
Q_{n} &= J . \overline{Q} + \overline{K} . Q 
\end{split}
$$
![[JK Flip Flop-20240630185216506.webp]]

## Implementation

> [!header] MUX implementation

![[JK Flip Flop-20240630185357322.webp]]
![[JK Flip Flop-20240630185742700.webp]]

> [!header] SR flip flop of NOR gates implementation

![[JK Flip Flop-20240630224840066.webp]]

![[JK Flip Flop-20240630224435249.webp]]

![[JK Flip Flop-20240630225050828.webp]]

Assume $Q = 1$ previously,

![[JK Flip Flop-20240630225118368.webp]]

> [!header] SR flip flop of NAND gates implementation

![[JK Flip Flop-20240630212454312.webp]]

Assume $Q = 0$ previously,

![[JK Flip Flop-20240630225209131.webp]]

> [!NOTE]
> In SR Flip flop implementation of JK flip flop, 
> - $Q$ is feedbacked to $R$
> - $\overline{Q}$ is feedbacked to $S$.

## Characteristic Table

![[JK Flip Flop-20240630181100092.webp]]

## Excitation Table

![[JK Flip Flop-20240630190439975.webp]]

![[JK Flip Flop-20240630190639468.webp]]

![[JK Flip Flop-20240630190446776.webp]]

> [!header] K-map for J and K

![[JK Flip Flop-20240630191316960.webp]]

## State Diagram

![[JK Flip Flop-20240630193231295.webp]]

## Timing Diagram

![[JK Flip Flop-20240630231436594.webp|Positive edge-triggered flip flop]]

---