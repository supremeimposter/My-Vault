---
pdf: 
module: 2
lecture: "2"
date: 2024-02-24T16:38:00
version:
  - DL-24
last-revision: 2024-06-23T11:31:00
notes-taken: true
tags:
  - DigitalLogic/NumberSystem
---
# Number System

Number system is a simple way to count things or ways to represent numbers.

The base of the number system is defined as the total number of symbols (digits) available in that number system i.e. the number of different values the set has before repeating itself.

## Base r

Any positive integer $r \gt 1$ can be chosen as the radix or base of a number system.
If the base is $r$, then there are $r$ symbols in the number system i.e. $\{0, 1, 2, \cdots, r - 1\}$.

A number $N$ in the base-$r$ system is,

![[Number Systems-20240528172442599.webp]]

where $a_{i}$ is the co-efficient of $R_{i}$ and $0 \leq a_{i} \leq R - 1$.

There can be as many as leading or trailing zeros which do not affect the value of a number.

![[Number Systems-20240623090914503.webp]]

---
## Number System Conversion

### r-ary to Decimal System
$$
(abcd.ef)_{r} = (\;a \times r^3 + b \times r^2 + c \times r^1 + d \times r^0 + e \times r^{-1} + f \times r^{-2} \;)_{10}
$$

> [!example] 
> ![[Number Systems-20240528165558875.webp]]
> ![[Number Systems-20240528165629539.webp]]

### Decimal to r-ary System

To convert decimal to r-ary number, 
- successive division by $r$ can be used for the integer part and 
- successive multiplication by $r$ can be used for fraction part.

> [!point] 
> Perform conversion on the integer part and the fraction part separately.
> Integer and fraction part are separated by the radix point.

Consider the number $N$ such that $(N)_{10} = (abcd.mno)_{r}$

Successive division by $r$ gives the digits in $r$ in reverse order.

![[Number Systems-20240623093333496.webp]]

Successive multiplication by $r$ gives the digits in $r$ in forward order.

![[Number Systems-20240623093356686.webp]]

![[Number Systems-20240528212552277.webp]]

> [!example] 
> ![[Number Systems-20240528181252730.webp]]
> 
> ![[Number Systems-20240528182502434.webp]]

> [!example] 
> ![[Number Systems-20240529083527215.webp]]
> ![[Number Systems-20240529083607870.webp]]

### r1-ary to r2-ary System

> [!trick] 
> ```mermaid
> flowchart LR
> A[Base r1] -- Expansion --> B[Base 10] 
> B -- Successive \n Division --> C[Base r2]
> ```

> [!example] 
> ![[Number Systems-20240529083659308.webp]]

---