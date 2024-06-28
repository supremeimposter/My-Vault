---
pdf: 
module: 3
lecture: "8"
date: 2024-03-05T18:22:00
version:
  - DL-24
last-revision: 2024-06-28T19:57:00
notes-taken: true
tags:
  - DigitalLogic/CombinationalCircuits
  - DigitalLogic/NumberSystem
  - DigitalLogic/Adder
---
# Adder for Signed Addition

So far we have discussed binary adders for multi-bit binary numbers ([[Ripple Carry Adder|RCA]], [[Carry Look Ahead Adder|CLA]]) adders in the perspective of unsigned multi-bit binary numbers.

For addition of signed binary numbers using binary adders, the inputs and the outputs are **interpreted** as in their respective signed representation. So it does not change the time complexity of adders.

## Adders for numbers in 1's complement representation

The given two numbers are added using adder and the final carry (end around carry) is added back to the adder again to get the output.

Consider two 4-bit numbers $A$ and $B$, where $I$ is the intermediate result and $S$ is the final result.
$$
\begin{split}
A + B &= I \\
I + C_{4} &= S
\end{split}
$$
![[Adder for Signed Addition-20240628192659923.webp|RCA for numbers in 1's complement representation]]

In 1's complement representation, the adder has to run twice for every addition in worst case.

## Adders for numbers in 2's complement representation

The given two numbers are added using adder as adding unsinged numbers, since the final carry is discarded in 2's complement representation.

Consider two 4-bit numbers $A$ and $B$, where $S$ is the final result.
$$
\begin{split}
A + B &= S
\end{split}
$$

The same circuit can be used to add or subtract, signed or unsigned numbers in [[Signed Binary Numbers#2's Complement Representation|2's complement representation]]. This is why 2's complement representation is used in computer systems.

> [!NOTE] 
> [[Signed Binary Numbers#Arithmetic of Signed Binary Numbers|Subtraction of signed numbers]] can be performed with the same adders.

---
