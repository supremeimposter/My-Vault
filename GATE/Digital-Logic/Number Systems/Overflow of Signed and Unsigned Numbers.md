---
pdf: 
module: 2
lecture: "5"
date: 2024-02-26T16:52:00
version:
  - DL-24
last-revision: 2024-06-24T11:06:00
notes-taken: true
tags:
  - DigitalLogic/NumberSystem
---
# Overflow
> [!youtube] 
> [Lecture 5A - Overflow Definition, Detection in Signed Magnitude Representation | Digital Logic - YouTube](https://www.youtube.com/watch?v=GJvjGaiKbcA)

- Occurrence of Overflow depends on the representation of the numbers (unsigned and signed) and the operation (addition, subtraction, ...) that is performed on those numbers.
- Overflow indicates that the result was too large or too small to fit into the original data type.
- If $a$ and $b$ are some numbers in $n$ bits, then overflow is when the correct representation of the output of the operation $a \# b$ cannot be represented in $n$ bits.
- Inputs must be within the range. 

![[Overflow-20240601122609968.webp]]
## Addition of Unsigned Numbers

In single bit unsigned numbers, if there is a final carry at most significant bit, then there is a overflow.

![[Overflow of Signed and Unsigned Numbers-20240623164054356.webp]]

When multi-bit unsigned numbers are added, overflow occurs if there is a carry out from the left most significant bit.

![[Overflow-20240601220614667.webp]]

![[Overflow-20240601221413170.webp]]

## Addition of Signed Numbers

- With two operands of **opposite signs** within the range, overflow never occurs on adding signed numbers, assuming the operands are within the range. This case is true for addition of all the representations of signed numbers.

### Signed Magnitude Representation

- With two operands of same sign within the range, overflow occurs when there is a carry out of the MSB of the magnitude. 
- If both the MSB of the magnitude are 0s, then there is no overflow.

> [!example] 
> ![[Overflow-20240601221216190.webp]]

> [!header] Overflow condition for signed magnitude addition

![[Overflow-20240601221857033.webp]]

1. If $S_{A} \not= S_{B}$, then there is no overflow.
2. If $S_{A} = S_{B}$, then there is overflow iff there is a carry over from the MSbit of magnitude addition i.e. $M_{A} + M_{B}$

![[Overflow-20240601222836213.webp]]

$a_{m}$ and $b_{m}$ are the most significant bits of $A$ and $B$ respectively.
1. $a_{m} = b_{m} = 0$, then there is no overflow.
2. $a_{m} = b_{m} = 1$, then there is overflow. 
3. $a_{m} \not= b_{m}$, there may or may not be overflow depending on the carry in to most significant bits of magnitudes.

> [!remember] 
> Magnitude is always unsigned in the signed magnitude system
> If the sign is same, then perform addition.
> If the sign is different, then perform subtraction.

> [!example] 
> ![[Overflow-20240601222440409.webp]]
> ![[Overflow-20240601222456699.webp]]

### 2's Complement Representation

There is <mark style="background-color: #fff88f; color: black">no overflow</mark>, if
1. both operands are positive and the sum is positive.
2. both operands are negative and the sum is negative.

There is <mark style="background-color: #1EFF00; color: black">overflow</mark>, if
1. both operands are positive and the sum is negative.
2. both operands are negative and the sum is positive.

Consider the $4$ bits number,

![[Overflow-20240601230859892.webp]]

where $a_{3}$ is the most significant bit of $A$ and $b_{3}$ is the most significant bit of $B$.

- In 2's complement addition, overflow occurs iff
$$
\overline{a_{3}}\; \overline{b_{3}}\; r_{3} + a_{3}\; b_{3}\; \overline{r_{3}} = 1
$$

> [!header] Different cases of Overflow in 2's complement representation
> ![[Overflow of Signed and Unsigned Numbers-20240601232115960.webp]]
> ![[Overflow of Signed and Unsigned Numbers-20240601231922144.webp]]
> ![[Overflow of Signed and Unsigned Numbers-20240601231958942.webp]]
> ![[Overflow of Signed and Unsigned Numbers-20240601232016471.webp]]

> [!attention] 
>> Bits = $4$
>> Range : $-8$ to $+7$
>> The correct answer is $(+4) + (+4) = +8$
>> We can say there is an overflow just by looking at the MS bits of both the operands and the result.
> 
> ![[Overflow-20240601225846720.webp]]

An alternate method for overflow detection in 2s complement addition is,

![[Overflow of Signed and Unsigned Numbers-20240602101846152.webp]]
![[Overflow of Signed and Unsigned Numbers-20240602101906374.webp]]

In 2's complement addition, overflow occurs when both $C_{\text{in}}$ and $C_{\text{out}}$ are different i.e. Overflow occurs in 2's complement addition iff $C_{\text{in}} \oplus C_{\text{out}} = 1$

> [!caution] 
>> This alternate overflow detection condition is only for 2's complement addition, and not for 1's complement addition. Because in 1's complement addition, end around carry is added to obtain the final result unlike 2's complement addition.
> 
> ![[Overflow of Signed and Unsigned Numbers-20240602103522123.webp]]

### 1's Complement Representation

There is <mark style="background-color: #fff88f; color: black">no overflow</mark>, if
1. both operands are positive and the sum is positive.
2. both operands are negative and the sum is negative.

There is <mark style="background-color: #1EFF00; color: black">overflow</mark>, if
1. both operands are positive and the sum is negative.
2. both operands are negative and the sum is positive.

Consider the 4 bits number,

![[Overflow of Signed and Unsigned Numbers-20240624134149922.webp]]

The carry in and carry out of the MS bits cannot be used to infer anything about the overflow, since the final result in 1's complement addition is obtained after end-around carry.

> [!header] Different cases of Overflow in 1's complement representation
> ![[Overflow of Signed and Unsigned Numbers-20240602085405634.webp]]
> ![[Overflow of Signed and Unsigned Numbers-20240602085459756.webp]]
> ![[Overflow of Signed and Unsigned Numbers-20240602085529240.webp]]
> ![[Overflow of Signed and Unsigned Numbers-20240602085554996.webp]]
> ![[Overflow of Signed and Unsigned Numbers-20240602090838509.webp]]

---
> [!summary] 

Each representation has a different overflow detection condition.

In case of unsigned addition, the overflow condition can be found only completely adding the given two unsigned numbers.

The overflow detection condition is the same in both 2's and 1's complement signed addition.

![[Overflow of Signed and Unsigned Numbers-20240602105522914.webp]]
![[Overflow-20240601225544987.webp]]

> [!search] 
> See if there is anything regarding **Underflow**

---