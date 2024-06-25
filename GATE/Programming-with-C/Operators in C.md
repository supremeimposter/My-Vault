---
pdf: 
module: 
lecture: 
date: 2024-06-22T20:10:00
version:
  - C-24
last-revision: 
notes-taken: false
tags:
  - ProgrammingWithC/Operators
---
# Operators in C

![[Operators in C-20240622201510103.webp]]

> [!trick] PUMAS REBL TAC
> 

## Arithmetic Operators in C

![[Operators in C-20240622203330483.webp]]

Two left to right passes are done while evaluating an expression with arithmetic operators.
1. First pass - high priority operators
2. Second pass - low priority operators

> [!example] 
> ![[Operators in C-20240622203155066.webp]]


## Relational Operators in C

![[Operators in C-20240622203400715.webp]]

A series of relational operators as evaluated as boolen values.

```c
a = 10, b = 20, c = 30;

if (a < b < c) {
	printf("True");
} else {
	printf("False");
}
```

`a < b < c` is evaluated as,
$$
\begin{split}
a < b < c &= (a < b) < c \\
&= (10 < 20) < 30 \\
&= (0) < 30 \\
&= 1
\end{split}
$$

Now the condition is evaluated to true

![[Operators in C-20240622204434264.webp]]

> [!tip] 
> It is a good programming practice to use logical operators to connect two or three relational operators.

## Logical Operators in C

![[Operators in C-20240622204511341.webp]]

![[Operators in C-20240622204716500.webp]]



