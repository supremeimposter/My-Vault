---
pdf: 
module: 2
lecture: 7A
date: 2024-02-27T11:04:00
version:
  - DL-24
last-revision: 2024-06-24T19:32:00
notes-taken: true
tags:
  - DigitalLogic/BinaryCodes
---
# Binary Codes for Decimal Digits

A binary code is a pattern of 1s and 0s. In most of the cases in computers, binary numbers represents some kind of coded information rather than binary numbers itself. There can be any number of binary codes.

We are studying about binary codes because of digital circuits.

> [!definition] Code
> A code is a representation of a data that was previously in some other representation.
> 
> ![[Binary Codes-20240602115718059.webp]]

In a single bit, 2 different numbers can be encoded,
$$
\begin{split}
\underline{0} = 0 \\
\underline{1} = 1
\end{split}
$$
In 2 bits, 4 different numbers can be encoded,
$$
\begin{split}
\underline{00} = 0 \\
\underline{01} = 1 \\
\underline{10} = 2 \\
\underline{11} = 3 
\end{split}
$$
and so on...

If we have to represent $m$ number of discrete set of finite elements in $n$ bits, then
$$
m \leq 2^n
$$
Since we can represent $2^n$ different elements in $n$ bits, $m$ (the number of elements we have to represent) must be less than or equal to $2^n$.
$$
\begin{split}
2^n &\geq m\\
n &\geq \log_{2} m\\
n &= \lceil \log_{2} m  \rceil
\end{split}
$$
For example, 
- to represent a set of $3$ elements, we require minimum $2$ bits.
- to represent a set of $6$ elements, we require minimum $3$ bits.
- to represent a set of $13$ elements, we require minimum $4$ bits.
- to represent a set of $2^n$ elements, we require minimum $n$ bits.

Each element should have an unique representation i.e. **code assignment must be unambiguous**.

Binary numbers themselves can be considered as a binary codes of decimal numbers.

There are many types of binary codes for decimal digits. Each decimal digit is encoded in 0s and 1s.

> [!youtube] 
> [Lecture 7B - BCD Code, 2421 Code, Self Complementary Binary Codes | Digital Logic - YouTube](https://www.youtube.com/watch?v=33sBA5oyXek)

## Binary Coded Decimal (BCD)

There are only 10 unique binary coded decimal digits since there are only 10 decimal digits (0 to 9) so each BCD digit requires minimum of 4 bits.

![[Binary Codes-20240602163059672.webp]]

Since there are 4 bits, there are 16 possible combinations and we need only 10 such combinations and 6 combinations are unassigned.

![[Binary Codes-20240602163359271.webp]]

Each decimal digit is mapped to a binary code of 4 bits. BCD is a binary coded Decimal number and not a binary number.

![[Binary Codes-20240602162923666.webp]]

> [!example] 
> 1. $(7531)_{10} = (0111\:\: 0101\:\: 0011\:\: 0001)_{\text{BCD}}$
> 2. $(312)_{10} = (0011\; 0001\; 0010)_{BCD}$

BCD numbers takes more space that its equivalent binary numbers, but it has its advantages. 
BCD code is also called as $8421$ code as **weight** can be assigned to each digit of the code.

## 2421 Code

The weight of the code is 2421. 

![[Binary Codes-20240602183602488.webp]]

2421 code is a self complementing code.

![[Binary Codes-20240602183826591.webp]]

> [!tldr] Doesn't have unique representation. How is it handled?

All the decimal digits don't have unique 2421 code. For example, $2$ can be written as $0010$ and $1000$ in 2421 code, but the **preferred code is which has lesser decimal value as a binary number**.

$0010$ has a lesser decimal value in binary i.e. $2$ , so it preferred over $1000$ which has larger decimal value in binary i.e. $8$.

## Excess-3 Code

Excess-3 code is obtained by adding BCD code of each digit with $0011$. Because of this Excess-3 code is not a weighted code.

![[Binary Codes for Decimal Digits-20240602190135469.webp]]

Excess-3 code is a self complementing code.

![[Binary Codes for Decimal Digits-20240602185738952.webp]]

> [!observation] 
> There won't be any final carry out while converting BCD to Excess-3 code.
>
> ![[Binary Codes for Decimal Digits-20240602191641914.webp]]

## 8, 4, -2, -1 Code

$8, 4, -2, -1$ is a Self Complementing Code.

![[Binary Codes for Decimal Digits-20240602190021888.webp]]


> [!summary] 

![[Binary Codes-20240227140520407.webp]]

![[Binary Codes for Decimal Digits-20240602191243554.webp]]

---