---
pdf: 
module: 5
lecture: 
date: 2024-03-13T08:47:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/SequentialCircuits
  - TheoryOfComputation/FiniteAutomata
---
# Finite State Machine

> [!youtube] Finite State Machines
> [Digital Logic - Finite State Machines(FSM), Mealy, Moore Machines | Synchronous Sequential Circuits | GO Classes | GATE Overflow - YouTube](https://www.youtube.com/playlist?list=PLIPZ2_p3RNHjd6P9g6XoUm8E33CsUBqDv)

- A finite state machine is also called as **synchronous sequential** machine.
- Finite State Machines - Any machine with finite number of states with no additional memory.

- In a sequential circuit with $k$ flip flops, there are $2^k$ possible states. So any sequential circuit has finite number of possible states and hence a sequential circuit is a finite state machine.

```merm
flowchart TD
A[Finite State Machine] --> B[Finite\nAutomata]
B --> G[DFA]
B --> H[NFA]
A --> C[Transducer]
C --> D[Sequential \nCircuits]
C --> E[Mealy Machine]
C --> F[Moore Machine]
```

- Finite State Transducers compute functions i.e. for an input, you get an output. They are used in digital design.

![[Finite State Machine-20240703211809370.webp]]

- Finite Automata (DFA, NFA) are language acceptors. They are used in the study of formal languages.
- Mealy machine, Moore machine, [[Combinational Circuits vs Sequential Circuits#Sequential Circuits|Sequential circuits]] are Transducers.

> [!note] 
> - In [[Theory of Computation]], Finite state machines are Automata that recognize languages.
> - In [[Digital Logic]], Finite state machines are transducers that compute functions.

- A FSM can be represented either in the form of a state table or in the form of a state transition diagram.
- Finite state machines are deterministic.
$$
\begin{split}
FSM\;(Q, q_0, \Sigma, \Gamma, \delta, \omega) \\ \\
Q - \text{set of states} \\
q_{0} - \text{initial state} \\
\Sigma - \text{input alphabet} \\
\Gamma - \text{output alphabet} \\
\delta - \text{state transition function} \\
\omega - \text{output function}
\end{split}
$$
- There are no final states associated with a transducer, hence they are not acceptors.

---
## Mealy State Machine

- A Mealy machine is a finite state machine, where the output depends on the present state and current input.

![[Finite State Machine-20240703213157655.webp]]
$$
\begin{split}
Q &= f\, (\text{present state}, \text{present input})
\end{split}
$$
The output function is defined as,
$$
\begin{split}
\omega &: Q \times \Sigma \to \Gamma \\ \\
\omega &= f\, (Q, \Sigma)
\end{split}
$$
The state transition function is defined as,
$$
\delta : Q \times \Sigma \to Q
$$

![[Finite State Machine-20240703224920123.webp]]
![[Finite State Machine-20240704122046795.webp]]

![[Finite State Machine-20240703225411623.webp]]
![[Finite State Machine-20240703225424216.webp]]

> [!NOTE] 
> - State transition function - For an input on a state, what is the resultant state.
> - Output function - For an input on a state, what is the output.

> [!example] 
> ![[Finite State Machine-20240703225310669.webp]]
> ![[Finite State Machine-20240703230000715.webp]]

The transition edges are labelled with $\frac{a}{b}$ where $a$ is the current input and $b$ is the output produced by the transition.

> [!example] 
> ![[Finite State Machine-20240704113115304.webp]]
> ![[Finite State Machine-20240704113128501.webp]]

> [!example] 
> ![[Finite State Machine-20240704115329013.webp]]


> [!example] 
> ![[Finite State Machine-20240704121712672.webp]]

> [!problem]  
> A circuit to detect 3 or more 1's in a serial bit stream. The bits are applied serially in sync with clock. The output becomes 1 whenever it detects 3 or more consecutive 1's in the stream or else the output is 0. 

![[Finite State Machine-20240703195303040.webp]]
PS - Previous State; NS - Next State

Since there are 4 states in the state diagram, 2 flip flops are required to build this finite state machine.


> [!tip] 
> Take few strings and analyze the machine and find out the what the given machine is doing.

![[Finite State Machine-20240703190246886.webp]]

---
## Moore State Machine

- Moore state machine is a finite machine, where the output solely depends on the present state.

![[Finite State Machine-20240703214516045.webp]]
$$
\begin{split}
Q &= f\, (\text{present state})
\end{split}
$$
The output function is defined as,
$$
\omega : Q \to \Gamma
$$
The state transition function is defined as,
$$
\delta : Q \times \Sigma \to Q
$$

> [!NOTE] 
> The *only difference* between Mealy and Moore machine is that the output function $\omega$ differs.

![[Finite State Machine-20240704122119803.webp]]
![[Finite State Machine-20240704122131230.webp]]

> [!example] 
> ![[Finite State Machine-20240704112726796.webp]]
> ![[Finite State Machine-20240703230410985.webp]]

> [!NOTE] 
> Whether the pre-output is printed or not, it is author dependent.

> [!example] 

![[Finite State Machine-20240704121835416.webp]]

![[Finite State Machine-20240704121849347.webp]]

---

> [!pdf] More examples from lec-14.pdf pg. no. 160

---