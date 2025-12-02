---
pdf: lec-6
module: 3
lecture: "6"
date: 2024-03-04T12:28:00
version:
  - DL-24
last-revision: 2024-06-25T22:45:00
notes-taken: true
tags:
  - DigitalLogic/CombinationalCircuits
  - DigitalLogic/SequentialCircuits
---
# Propagational Delay and Timing Diagrams

> [!youtube] 
> [Lecture 6 - Propagation Delay & Timing Diagrams | Digital Logic - YouTube](https://www.youtube.com/watch?v=L1XM3RXrtaE)

When the input to a logic gate is changed, the output will not change instantaneously. The transistors or other switching elements within the gate take a finite time to react to a change in input, so that the change in the gate output is delayed with respect to the input change.  

> [!analogy] 
> ![[Propagation Delay and Timing Diagrams-20240608143737916.webp]]
> The input may change suddenly, but output will take some time to react to the input.
﻿
If the change in output is delayed by time ɛ, with respect to the input, we say that this gate has a propagation delay of ɛ. The propagational delay is also denoted by $\delta$ or $\Delta$.

Consider a NOT gate (which is a digital circuit) which has a propagational delay of $2 \mathrm{ns}$.

![[Propagation Delay and Timing Diagrams-20240608173425453.webp]]

If a digital circuit has a propagational delay of $2 \mathrm{ns}$, then the ideal output waveform (waveform in which there is no propagational delay) is shifted by $2 \mathrm{ns}$.

There is always a negligible delay to change the inputs in the digital circuits.

![[Propagation Delay and Timing Diagrams-20240608150200959.webp]]

| Notation         | Description                                           |
| ---------------- | ----------------------------------------------------- |
| $T_{\text{P}}$   | Propagational Delay                                   |
| $T_{\text{PLH}}$ | Propagational Delay when output goes from low to high |
| $T_{\text{PHL}}$ | Propagational Delay when output goes from high to low |

Practically $T_{\text{PLH}} \not= T_{\text{PHL}}$ in digital circuits.

![[Pasted image 20240608171735.png]]

> [!example] 
> ![[Propagation Delay and Timing Diagrams-20240608173610848.webp]]

> [!example] 
> ![[Propagation Delay and Timing Diagrams-20240608174442582.webp]]
> ![[Propagation Delay and Timing Diagrams-20240608174425028.webp]]

> [!header] Assumptions about Propagation Delay

- We assume the wire propagation delay to be $0$ nanoseconds.
- We assume that inputs can be changed immediately (from low to high or from high to low) with no propagational delay.
- Practically $T_{\text{PLH}} \not= T_{\text{PHL}}$ but we assume that $T_{\text{PLH}} = T_{\text{PHL}} = T_{\text{P}}$

> [!header] Propagation Delay of the Circuit

- Maximum propagational delay is the **longest delay** between an input changing value and the output changing value. The path that causes this delay is called the critical path.

> [!example] 
>> From the input $A$ to the output $G_{2}$ is the longest delay which is the critical path
>
> ![[Propagation Delay and Timing Diagrams-20240608181908462.webp]]
>> The critical path of the circuit is $40$ ns.
>
> ![[Propagation Delay and Timing Diagrams-20240608182717375.webp]]

> [!example] 
> ![[Propagation Delay and Timing Diagrams-20240608182507915.webp]]
> 
> The propagational delay of the circuit is $3 t_{p}$ 

- The delay of the critical path is same as delay of the circuit since the critical path has the maximum delay.
- Critical path imposes limits on the speed of the circuit.

> [!intuition] 
> If the propagation delay of a circuit i.e. $t_{p}$ of the critical path is $n$ nanoseconds, then wait for at least $n$ nanoseconds before changing an input, for the circuit to behave in a stabilized manner.

> [!example] 
> ![[Propagation Delay and Timing Diagrams-20240608183443734.webp]]
>> From input $A$ to output $F$, the propagational delay is the most i.e. $t_{p} = 30 \mathrm{ns}$, which is the propagational delay of the circuit. 
> 
> ![[Propagation Delay and Timing Diagrams-20240608183648645.webp]]

> [!example] 
>> $X$ has two pulses, one is $2 \mu s$ wide and the other is $3 \mu s$ wide.
>> NAND gate has a propagational delay $\epsilon$.
>> $Y = X$ but its waveform is shifted by $1 \mu s$.
>
> ![[Propagation Delay and Timing Diagrams-20240608230921539.webp]]

> [!summary] 

- The propagational delay of the critical path is the propagational delay of the entire circuit.
- If the given circuit (however complex) has a propagation delay of $n$ nanoseconds, then the ideal output waveform shifts to right by $n$ nanoseconds.

---