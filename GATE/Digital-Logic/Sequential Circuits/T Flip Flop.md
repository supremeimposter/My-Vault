---
pdf: 
module: 5
lecture: 
date: 2024-03-09T15:05:00
version:
  - DL-24
last-revision: 2024-06-30T23:49:00
notes-taken: true
tags:
  - DigitalLogic/SequentialCircuits
  - DigitalLogic/FlipFlop
---
# T Flip Flop

- If $T = 1$, the T flip flop will toggle the output $Q$ i.e. $Q_n = \overline{Q}$
- If $T = 0$, the output $Q$ will remain unchanged i.e. $Q_n = Q$

![[T Flip Flop-20240630232014964.webp]]
$$
\begin{split}
Q_{n} = f\, (T, Q)
\end{split}
$$

## Truth Table

![[T Flip Flop-20240630232449682.webp]]
$$
\begin{split}
Q_{n} 
&= \overline{T} . Q + T . \overline{Q} \\
&= T \oplus Q
\end{split}
$$
![[T Flip Flop-20240630233511902.webp]]

## Characteristic Table

![[T Flip Flop-20240630232820177.webp]]

## Excitation Table

![[T Flip Flop-20240630233134942.webp]]
$$
\begin{split}
T 
&= f\, (Q, Q_{n}) \\
&= Q \oplus Q_{n}
\end{split}
$$

## State Diagram

![[T Flip Flop-20240701190735804.webp]]

## Implementation

> [!header] MUX implementation

![[T Flip Flop-20240630233737107.webp]]

> [!header] JK flip flop implementation

![[T Flip Flop-20240630234103002.webp]]

## Timing Diagram

![[T Flip Flop-20240630234210065.webp|Positive edge-triggered T-flip flop]]

![[T Flip Flop-20240701101728205.webp|Positive edge-triggered flip flop]]

---