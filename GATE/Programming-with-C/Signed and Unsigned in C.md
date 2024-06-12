---
pdf: 
module: 
lecture: 
date: 2024-06-11T23:54:00
version:
  - C-24
last-revision: 
notes-taken: false
tags:
  - ProgrammingWithC/Types
---
# Signed and Unsigned in C

User can decide whether a data is signed or unsigned.

```ad-important
- Signed - MSB has Negative weight
	- MSB = 0 => positive number
	- MSB = 1 => negative number
- Unsigned - MSB has Positive weight
	- MSB = 0 => positive number
	- MSB = 1 => positive number
```

- By default, the data types are signed in C.
- Signed types are represented using 2's complement in C because it has more range than 1's complement system, every number has unique representation and it is a weighted representation.

```ad-caution
In C, it is not mandatory for signed numbers to use 2’s complement, so it has to be mentioned whether the given number is signed or unsigned.
But in case of MS bit being 0, we can say it is a positive number.
```

## Range of Unsigned and Signed Numbers
> [!help] 
> $2^n$ has $(n+1)$ bits
> 
> $2^n = 1\:\underbrace{0000}_{n} \quad$         i.e  $1$ followed by $n$ number of zeroes
> $2^{n}-1 = \underbrace{1111111}_{n} \quad$      i.e. $n$ number of $1$s
> 
> $2^{(n-1)} = 1\:\underbrace{00000}_{n-1} \quad$             i.e. $1$ followed by $(n-1)$ zeros
> $2^{(n-1)}-1 = \underbrace{1111111}_{n-1} \quad$                i.e. $(n-1)$ number of 1s

**Range of Unsigned numbers**

$U_{\text{min}} = \underbrace{0000\cdots 00}_{n \text{ bits}} = 0$ 
$U_{\text{max}} = \underbrace{1111\cdots 11}_{n \text{ bits}} = (2^{n} - 1)$ 

**Range of Signed numbers**
Since computers use 2's complement representation, the range of signed numbers are same as the signed numbers in [[Signed Binary Numbers#Range of Signed Binary Numbers|range of 2's complement representation]].

$T_{\text{min}} = \underbrace{1}_{\text{negative}}\underbrace{0000\cdots 00}_{n-1 \text{ bits}} = - 2^{n-1}$ 
$T_{\text{max}} = \underbrace{0}_{\text{positive}}\underbrace{1111\cdots 11}_{n-1 \text{ bits}} = +(2^{n-1} - 1)$ 


**Analysis on range of signed and unsigned**
Positive numbers are the same in both 2’s complement(signed) and in the unsigned range. 

![[Signed and Unsigned in C-20240612001740882.webp]]

The arrow marks in between denotes that the *bit patterns* are similar but as the most significant bit is interpreted differently in both the representation, the value interpreted also changes.

## %d and %u specifiers

```ad-note
**%d** – always takes the **negative weight** of the MS bit.
**%u** – always takes the **positive weight** of the MS bit.
```

- Both specifiers do not care about the type of data (unsigned or signed), they care only about the **bit pattern**.
- Bit pattern is constant for a number(literals), the type of data (unsigned or signed) does not influence the bit pattern, it gives different perception of the bit pattern and specifies how the variables have to be handled.

- `printf()` does not use the information about the type of variable. It sees the bit pattern and the format specifier used and prints the output.

![[Signed and Unsigned in C-20240612174701920.webp]]

Negative numbers cannot be represented in **%u** specifier, since it interprets the most significant bit of the bit pattern as positive weight.

- In the below code, the value is determined as per the type of the variable and the specifier used.

![[Signed and Unsigned in C-20240612182543154.webp]]

## Integer Promotion

- Whenever a small integer such as `char` or `int` is used in an expression (including function arguments such as `printf()`), it is **implicitly** promoted to int.
- `char`, `short` and `int` belong to the ‘int’ family.

## Extension

- Extension is copying a number in lower bit representation to a higher bit representation.
	- If the source is signed, then **sign extension** (copy the MS bit).
	- If the source is unsigned, then **zero extension** (fill 0’s).

| source type | Decimal | 4-bits | 8-bits          | 16-bits                           |
| ----------- | ------- | ------ | --------------- | --------------------------------- |
| signed      | $+7$    | $0111$ | $0000\:\: 0111$ | $0000\:\: 0000\:\: 0000\:\: 0111$ |
| signed      | $-2$    | $1110$ | $1111\:\: 1110$ | $1111\:\: 1111\:\:1111\:\: 1110$  |
| unsigned    | $8$     | $1111$ | $0000\:\:1111$  | $0000\:\:0000\:\:0000\:\:1111$    |
| unsigned    | $41$    |        | $0010\:\:1001$  | $0000\:\:0000\:\:0010\:\:1001$    |

![[Signed and Unsigned in C-20240612182515529.webp]]

- Extension happens based on the type of data of the source. Extension does not care about what kind of data type it is copied into.

![[Signed and Unsigned in C-20240612182504608.webp]]

In LINE 8, the short int $a$ is copied to unsigned int $b$ which is larger in size (not to mention, when `short` used in an expression, it gets promoted to `int`), sign extension occurs because the source $a$ is a signed int. The variable $b$ which is an unsigned type has no effect on the content of $a$ copied to $b$.

## Truncation

- Causes drastic change in sign and value.
- Truncates bytes regardless of source or destination, signed or unsigned.
- Truncation might cause loss of significant bits depending on the type it is truncated to.

> [!attention] 
> But anyways when `short` or `char` is used in an expression, it gets integer promoted to $32$ bits.

When a character is used in an expression, then it is promoted. When used in printf() also it gets promoted to 32 bits.

![[Pasted image 20230912211540.png]]

