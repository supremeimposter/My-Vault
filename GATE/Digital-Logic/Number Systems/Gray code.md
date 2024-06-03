---
pdf: lec-7C-7D
module: 2
lecture: "7"
date: 2024-02-29T09:47:00
version:
  - DL-24
last-revision: 2024-06-03T19:20:00
notes-taken: true
tags:
  - DigitalLogic/NumberSystem
  - DigitalLogic/BinaryCodes
---
# Gray code

- Gray code is a unit distance code because only one bit changes between consecutive numbers. (hamming distance is 1).
- Gray codes are also called as Reflexive binary codes or reflected binary codes.
- Gray codes are not per decimal digit code like [[Binary Codes for Decimal Digits|BCD]].

The advantage of gray code over binary numbers is when going from one number to another, only one bit changes, whereas it is not the case in binary numbers.

![[Gray code-20240603110001905.webp]]

> [!header] Applications of Gray code.

Gray codes can be used in counting using switches.
When binary numbers are used, while changing from one state to another state, there will be many intermediate transitions and switches being physical devices will have some delays.

![[Gray code-20240603114148949.webp]]

Every decimal number next to each other in gray code change by only one bit, so it is easy to change states in switches.

Gray codes are used in Hypercube graphs and error detection or error correction.

## Recursive Construction
$G_{n}$ represents a gray code with $n$ bits.

![[Gray code-20240603144905482.webp]]

| $G_{n}$ | Description           | Table                                 |
| ------- | --------------------- | ------------------------------------- |
| $G_{1}$ | Gray code with 1 bit  | ![[Gray code-20240603114916468.webp]] |
| $G_{2}$ | Gray code with 2 bits | ![[Gray code-20240603114932788.webp]] |
| $G_{3}$ | Gray code with 3 bits | ![[Gray code-20240603114943369.webp]] |
| $G_{4}$ | Gray code with 4 bits | ![[Gray code-20240603145924716.webp]]  |

The first half of $G_{4}$ is $G_{3}$ with a prefix of 0 and the last half is the reverse of $G_{3}$ with a prefix of 1.

The first half of $G_{n}$ is $G_{n-1}$ with a prefix of 0 and the last half is the reverse of $G_{n-1}$ with a prefix of 1.

> [!observation] 
> In gray code of $n$ bits, you will also have the representation of those numbers that were accomodated in gray codes of $n-1$ bits, but with a leading zero.
>> [!example] 
>> Gray code of $4$ in 3 bits = $110$
>> Gray code of $4$ in 4 bits = $0110$

Recursive construction of gray codes method is time consuming, because for gray codes of any $n$ bits, you need to know the gray codes of $n-1$ bits. The efficient method to get the gray code is to convert a binary number $n$ to its equivalent gray code of $n$.

![[Gray code-20240229104826823.webp]]
## Binary and Gray code conversion

![[Gray code-20240603152604405.webp]]

> [!example] 
> ![[Gray code-20240603151711181.webp]]


![[Gray code-20240603160752044.webp]]

> [!example] 
> ![[Gray code-20240603152938968.webp]]

Gray code of a decimal number $m$ can be found by bitwise ExOR operation
$$(m)_{\text{gray code}} = (m)_{2} \oplus \left\lfloor  \frac{(m)_{2}}{2}  \right\rfloor$$

> [!example] 
> ![[Gray code-20240603170040937.webp]]

## Properties of $G_n$
Gray codes are reflexive codes.
The last and the first gray code in $n$ bits differ only by one bit i.e. gray codes are cyclic codes.

![[Gray code-20240603164850516.webp]]

Gray codes are similar to [[Minimization using K Map|k-maps]].

$G_{n}$ is the permutations of all bit strings of 0s and 1s over $n$ bits.
$G_{n}$ is the permutation of the numbers $0$ to $2^n - 1$. Each number appears exactly once in the list.

![[Gray code-20240603165000412.webp]]

When gray codes of $n$ bits should be represented in the truth table, k-maps can be used to fill out the truth table.

![[Gray code-20240603190956068.webp]]

> [!remember] 
> Minterms are based on an agreed order of the decimal value of the standard truth table.

---