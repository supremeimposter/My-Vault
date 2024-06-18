---
pdf: 
module: 
lecture: 
date: 2024-06-11T23:54:00
version:
  - C-24
last-revision: 2024-06-18T10:38:00
notes-taken: true
tags:
  - ProgrammingWithC/Types
---
# Signed and Unsigned in C

User can decide whether a data is signed or unsigned. signed or unsigned data type is to decide how the variable is handled.

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

> [!interesting] 
> ![[Signed and Unsigned in C-20240618092013429.webp]]

**Analysis on range of signed and unsigned**
Positive numbers are the same in both 2’s complement(signed) and in the unsigned range. 

The diagram below shows the similar bit patterns in both signed and unsigned numbers.

![[Signed and Unsigned in C-20240618160357676.webp]]

The arrow marks in between denotes that the *bit patterns* are similar but as the most significant bit is interpreted differently in both the representation, the value interpreted also changes.

## %d and %u specifiers

```ad-note
**%d** – always takes the **negative weight** of the MS bit.
**%u** – always takes the **positive weight** of the MS bit.
```

Both specifiers do not care about the type of data (unsigned or signed), they care only about the **bit pattern**.
Bit pattern is constant for a number(literals), the type of data (unsigned or signed) does not influence the bit pattern, it gives different perception of the bit pattern and specifies how the variables have to be handled.

`printf()` does not use the information about the type of variable. It sees the bit pattern and the format specifier used and prints the output.

![[Signed and Unsigned in C-20240612174701920.webp]]

Negative numbers cannot be represented in **%u** specifier, since it interprets the most significant bit of the bit pattern as positive weight.

![[Signed and Unsigned in C-20240617223701099.webp]]

![[Signed and Unsigned in C-20240617225706181.webp]]

## Extension

Extension is copying a number in lower bit representation to a higher bit representation.
- If the source is signed, then **sign extension** (copy the MS bit).
- If the source is unsigned, then **zero extension** (fill 0’s).

| source type | Decimal | 4-bits | 8-bits          | 16-bits                           |
| ----------- | ------- | ------ | --------------- | --------------------------------- |
| signed      | $+7$    | $0111$ | $0000\:\: 0111$ | $0000\:\: 0000\:\: 0000\:\: 0111$ |
| signed      | $-2$    | $1110$ | $1111\:\: 1110$ | $1111\:\: 1111\:\:1111\:\: 1110$  |
| unsigned    | $8$     | $1111$ | $0000\:\:1111$  | $0000\:\:0000\:\:0000\:\:1111$    |
| unsigned    | $41$    |        | $0010\:\:1001$  | $0000\:\:0000\:\:0010\:\:1001$    |

![[Signed and Unsigned in C-20240612182515529.webp]]

Extension happens based on the data-type of the source. Extension does not care about what kind of data type it is copied to.

> [!example] 
> ![[Signed and Unsigned in C-20240612182504608.webp]]
> 
> In LINE 8, the short int $a$ is copied to unsigned int $b$ which is larger in size (not to mention, when `short` used in an expression, it gets promoted to `int`), sign extension occurs because the source $a$ is a signed short int. The variable $b$ which is an unsigned type has no effect on the content of $a$ copied to $b$, it is interpreted as an unsigned int.

> [!example] 
> ![[Signed and Unsigned in C-20240617224424707.webp]]
> 
> In LINE 6, when a is copied into b, zero extension occurs.

> [!example] 
> ![[Signed and Unsigned in C-20240617230058682.webp]]
> 
> In all the cases, zero extension occurs because of the data-type of the source.

### Integer Promotion

- Whenever a small integer such as `char` or `int` is used in an expression (including function arguments such as `printf()`), it is **implicitly** promoted to `int`.

- `char`, `short` and `int` belong to the ‘int’ family.

![[Signed and Unsigned in C-20240617225231588.webp]]

> [!observation] 
> Integer promotion is implicit extension, so promotion depends on the data-type of the source variable.
>
> ![[Signed and Unsigned in C-20240617230815929.webp]]
> 
> ![[Signed and Unsigned in C-20240618091221336.webp]]

## Truncation

- Truncation is copying a number from higher bit representation to lower bit representation.
- Causes drastic change in sign and value.
- Truncates bytes regardless of source or destination, signed or unsigned.
- Truncation might cause loss of significant bits depending on the type it is truncated to.

> [!attention] 
> But anyways when `short` or `char` is used in an expression, it gets integer promoted to $32$ bits, and the promotion is based on the data-type of the source.

When a character is used in an expression, then it is promoted. When used in `printf()` also it gets promoted to 32 bits.

> [!example] 
> ![[Signed and Unsigned in C-20240617233917074.webp]]
> 
> In LINE 6, the value is 257 cannot be accomodated in the signed char a, so bits are truncated when stored in a.

> [!example] 
> ![[Signed and Unsigned in C-20240617234401233.webp]]
> 
> In LINE 5, the value 129 is interpreted as -127 by `%d` because of the bit pattern. When a is used in an expression in LINE 9, sign extension occurs.

> [!example] 
> ![[Signed and Unsigned in C-20240618082321489.webp]]
> 
> In LINE  6, the truncation occurs when x is copied to y. When y is used in `printf()` argument, it gets integer promoted to 32 bits (sign extension).

![[Signed and Unsigned in C-20240618090413184.webp]]

> [!example] 
> ![[Signed and Unsigned in C-20240618154840776.webp]]
> 
> In `LINE 6`, 32 bits are truncated to 16 bits. Now when `u` is used in an expression, then extension happens and the extension is based on the data-type of the source which is unsigned.

---

> [!summary] 

1. Specifiers only look at the bit patterns and interpret as they are specified to do so. `printf()` does not care about the data type of any variable.
2. Extension and integer promotion care about the data-type of the source.
3. Truncation just truncates the bits for the destination type to accomodate.
4. Truncation does not depend on the data-type of the source.
5. Computers use 2's complement system to store numbers in the hardware and they are fixed.

---