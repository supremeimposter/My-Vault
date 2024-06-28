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
---
# Finite State Machine

- A finite state machine is also called as synchronous sequential machine.
- Finite State Machines - Any machine with finite number of states with no additional memory.

- In a sequential circuit with $k$ flip flops, there are $2^k$ possible states. So any sequential circuit has finite number of possible states and hence a sequential circuit is a finite state machine.

- Finite State Transducers compute functions.
- Automata (DFA, NFA) are language acceptors.
- Mealy machine, Moore machine, [[Combinational Circuits vs Sequential Circuits#Sequential Circuits|Sequential circuits]] are Transducers.


> [!note] 
> - In [[Theory of Computation]], Finite state machines are Automata that recognize languages.
> - In [[Digital Logic]], Finite state machines are transducers that compute functions.

- A FSM can be represented either in the form of a state table or in the form of a state transition diagram.
- Finite state machines are deterministic.
$$
FSM\;(Q, q_0, \Sigma, \Gamma, \delta, \omega)
$$

```merm
flowchart TD
A[Transducers] --> B[Mealy Machine]
A --> C[Moore Machine]
```


> [!NOTE] 
> The only difference between Mealy and Moore machine is that the output function differs.

## Mealy State Machine
- A Mealy machine is a finite state machine, where the output depends on the present state and current input.


> [!tip] 
> Take few strings and analyze the machine and find out the what the given machine is doing.


## Moore State Machine
> [!NOTE] 
> Whether the pre-output is printed or not, it is author dependent.


