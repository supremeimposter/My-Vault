---
pdf: 
module: 4
lecture: "7"
date: 2024-03-04T16:07:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/CombinationalCircuits
---
# Adder

| Operation                                | Circuit                                      |
| ---------------------------------------- | -------------------------------------------- |
| Addition of two bits                     | Half Adder                                   |
| Addition of three bits                   | Full Adder                                   |
| Addition of two multi-bit binary numbers | Ripple Carry Adder or Carry Look Ahead Adder |

## Half Adder
![[Adder-20240304182909123.webp]]

> [!discussion] 
> ![[Adder-20240304165228441.webp]]

## Full Adder

- Inputs : $x, y, c_{in}$
- Outputs : $s, c_{out}$

![[Adder-20240304171518757.webp]]

- If it is **NOT** possible that two boolean expressions $\alpha$ and $\beta$ are 1 simultaneously, then $\alpha + \beta = \alpha \oplus \beta$
- If it is **NOT** possible that any two of three boolean expressions $\alpha$, $\beta$ and $\gamma$ are 1 simultaneously, then $\alpha + \beta + \gamma = \alpha \oplus \beta \oplus \gamma$ 
![[Adder-20240304174851806.webp]]

- Any function $f$ can be expressed as EXOR of true minterms, because any two minterms can never be simultaneously 1.


> [!discussion] 
> Slide 7B Pg. NO. 26
> ![[Adder-20240304182937620.webp]]


