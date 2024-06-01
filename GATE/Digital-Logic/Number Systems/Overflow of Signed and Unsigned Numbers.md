---
pdf: 
module: 2
lecture: "5"
date: 2024-02-26T16:52:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/NumberSystem
---
# Overflow
> [!youtube] 
> [Lecture 5A - Overflow Definition, Detection in Signed Magnitude Representation | Digital Logic - YouTube](https://www.youtube.com/watch?v=GJvjGaiKbcA)

- Occurrence of Overflow depends on the representation of the numbers (unsigned and signed) and the operation (addition, subtraction, ...) that is performed on those numbers.
- If $a$ and $b$ are some numbers in $n$ bits, then overflow is when the correct representation of the output of the operation $a \# b$ cannot be represented in $n$ bits.
- Inputs must be within the range. 
- Overflow causes error in results even if the result is within the range.

![[Overflow-20240601122556872.webp]]
![[Overflow-20240601122609968.webp]]
## Addition of Unsigned Numbers

In single bit unsigned numbers, if there is a final carry at most significant bit, then there is a overflow.
![[Overflow-20240601220341146.webp]]
![[Overflow-20240601221514604.webp]]
The last addition cannot accomodate in a single bit, it requires 2 bits. So overflow occurs.

When multi-bit unsigned numbers are added, overflow occurs if there is a carry over from the left most significant bit.
![[Overflow-20240601220614667.webp]]

![[Overflow-20240601221413170.webp]]

## Addition of Signed Numbers
- With two operands of **opposite signs** within the range, overflow never occurs on adding signed numbers. This case is true for all the representations of signed numbers addition.

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
3. $a_{m} \not= b_{m}$, there may or may not be overflow.


> [!remember] 
> Magnitude is always unsigned in the signed magnitude system
> If the sign is same, then perform addition.
> If the sign is different, then perform subtraction.


> [!example] 
> ![[Overflow-20240601222440409.webp]]
> ![[Overflow-20240601222456699.webp]]


> [!discussion] Why there is no overflow when the signs are different?
> ![[Overflow-20240226184046987.webp]]

### 2's Complement Representation

There is <mark style="background-color: #fff88f; color: black">no overflow</mark>, if
1. both operands are positive and the sum is positive.
2. both operands are negative and the sum is negative.

There is <mark style="background-color: #1EFF00; color: black">overflow</mark>, if
1. both operands are positive and the sum is negative.
2. both operands are negative and the sum is positive.


> [!attention] Though the result is within the range, it is not the correct answer.
>> Bits = 4
>> Range : -8 to +7
>> The correct answer is $(+4) + (+4) = +8$
>> We can say there is an overflow just by looking at the MS bits of both the operands and the result.
> 
> ![[Overflow-20240601225846720.webp]]

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



### 1's Complement Representation

There is <mark style="background-color: #fff88f; color: black">no overflow</mark>, if
1. both operands are positive and the sum is positive.
2. both operands are negative and the sum is negative.

There is <mark style="background-color: #1EFF00; color: black">overflow</mark>, if
1. both operands are positive and the sum is negative.
2. both operands are negative and the sum is positive.


---

> [!summary] 

In case of unsigned addition, the overflow condition can be found only completely adding the given two unsigned numbers.

The overflow detection condition is the same in both 2's and 1's complement signed addition.
![[Overflow-20240601225544987.webp]]


> [!search] 
> See if there is anything regarding **Underflow**
