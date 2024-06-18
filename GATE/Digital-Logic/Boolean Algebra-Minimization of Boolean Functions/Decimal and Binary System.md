---
pdf: 
module: 1
lecture: "3"
date: 2024-02-18T17:05:00
version:
  - DL-24
last-revision: 2024-06-18T19:44:00
notes-taken: true
tags:
  - DigitalLogic/NumberSystem
---
# Decimal and Binary System
> [!youtube] 
> [Binary & Decimal Number System | Digital Logic | GO Classes - YouTube](https://www.youtube.com/watch?v=Isd4j1djAeA)

## Decimal System
Symbols (Digits) : $0, 1, 2, 3, 4, 5, 6, 7, 8, 9$
$$
(329)_{10} = 3 \times 10^2 + 2 \times 10^1 + 9 \times 10^0
$$

Lets consider a decimal number $1254$,
- 4 tells how many 1's we have counted
- 5 tells how many 10's we have counted
- 2 tells how many 100's we have counted
- 1 tells how many 1000's we have counte

## Binary System
Binary system is the computer number system.
Symbols (digits) : $0, 1$

Lets consider a binary number 1011,
- 1 tells how many 1's we have counted
- 1 tells how many 2's we have counted
- 0 tells how many 4's we have counted
- 1 tells how many 8's we have counted

- The basic unit of information in computers is the binary digit i.e. bit.
- $2^k$ different number of values can be represented using $k$ bits, because each bit has $2$ choices.

![[Introduction to Digital Logic-20240514111208196.webp]]

![[Binary System-20240514133643499.webp]]

$$
\begin{split}
(2)^n &= 1 \underbrace{000 \dots 0}_{n\text{ zeros}} \\
(2)^n - 1 &= \underbrace{111 \dots 1}_{n\text{ ones}}
\end{split}
$$

### Binary to Decimal Conversion

![[Decimal and Binary System-20240514131249306.webp]]

### Decimal to Binary Conversion

![[Decimal and Binary System-20240218200317458.webp|General form of Successive division by 2]]

![[Decimal and Binary System-20240514131949072.webp]]

---