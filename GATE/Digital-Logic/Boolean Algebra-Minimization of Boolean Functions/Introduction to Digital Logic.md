---
pdf: 
module: 1
lecture: "1"
date: 2024-02-18T13:50:00
version:
  - DL-24
last-revision: 
notes-taken: true
tags:
  - DigitalLogic/BooleanAlgebra
---
# Introduction to Digital Logic
> [!youtube] 
> [Lecture 1 - Introduction to Digital Logic & Boolean Algebra | Digital Logic | GO Classes - YouTube](https://www.youtube.com/watch?v=1GKgdOAT1To)

- We have binary system (base 2) in computers because of the hardware limitations (transistors). Computer is a binary digital system.
- When a capacitor is charged to 5V, then it holds the binary value `1`. With time, the charge starts to drop in the capacitor, so a range of volt is set to the both the states `0` and `1`.

![[Introduction to Digital Logic-20240514104406797.webp]]

````col
```col-md
flexGrow=1
===
### Boolean
Symbols used to represent two states of a digital circuit.
`0` is used to represent the OFF state of a circuit.

Boolean do not have a numerical representation.

Boolean operations are performed on the Boolean states.
`1` AND `1` = `1`
```
```col-md
flexGrow=1
===
### Binary
[[Binary System|Number system]] used to represent a numerical value.
$(15)_{10}$ is represented as $(1111)_2$.

Numerical operations are performed on the numerical values of binary.
$(10)_2$ + $(01)_2$ = $(11)_2$
```
````

- The basic unit of information is the binary digit i.e. bit.
- $2^k$ number of values can be represented using $k$ bits. 
![[Introduction to Digital Logic-20240514111208196.webp|2 choices in every bit]]

## Positive and Negative Logic System

Boolean Algebra has only `0` and `1`. It does not know about voltage or any other physical entity.

![[Introduction to Digital Logic-20240224074858492.webp]]

$P_1$ and $P_2$ are two persons studying the boolean algebra mapped to voltage differently.

![[Introduction to Digital Logic-20240224075130510.webp]]

Positive logic and Negative logic systems are dual of each other.

![[Introduction to Digital Logic-20240224082335788.webp]]

---
