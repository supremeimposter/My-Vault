---
pdf: 
module: 2
lecture: 
date: 2024-02-26T11:56:00
version:
  - DL-24
last-revision: 2024-06-23T16:13:00
notes-taken: true
tags:
  - DigitalLogic/NumberSystem
  - DigitalLogic/Complement
---
# Subtraction of Unsigned Numbers
Given that $M$ and $N$ are unsigned numbers and both should have the same number of digits.

## Using Radix complement

> [!cases] $M \ge N$

$M = 82$ and $N = 64$ i.e. $M \ge N$

![[Subtraction of Unsigned Numbers-20240530133143042.webp]]

1. Add $M$ to the $r$'s complement of $N$ i.e. $M + (r^n -  N) = (M - N) + r^n$
2. Discard the final carry.

> [!example] 
> ![[Subtraction of Unsigned Numbers-20240530133319072.webp]]
> ![[Subtraction of Unsigned Numbers-20240530140555626.webp]]
> ![[Subtraction of Unsigned Numbers-20240530140732774.webp]]

> [!cases] $M \lt N$

$M = 20$ and $N = 78$ i.e. $M \lt N$ 

![[Subtraction of Unsigned Numbers-20240530134507688.webp]]

1. Add $M$ to the $r$'s complement of $N$ i.e $M + (r^n -  N) = (M - N) + r^n$ 
2. Since there is no final carry, find the $r$'s complement of the above sum and put a minus sign infront of it to get the final result.

> [!example] 
> ![[Subtraction of Unsigned Numbers-20240530134811028.webp]]


> [!summary] 

![[Subtraction of Unsigned Numbers-20240530135704865.webp]]

> [!observation] 
> You don't have to know if $M \ge N$ or $M \lt N$, because it can identified by whether the sum has a carry of not.

![[Subtraction of Unsigned Numbers-20240530142648506.webp]]

---
## Using Diminished Radix complement

> [!cases] $M \ge N$

![[Subtraction of Unsigned Numbers-20240530143620128.webp]]

1. Add $M$ to the $(r-1)$'s complement of $N$ i.e. $M + ((r^n-1) -  N) = (M - N) + (r^n-1)$
2. Remove the final carry and add $1$ to the above sum.

> [!NOTE] 
> Removing an end carry and adding 1 to the result is also called as end-around carry.

![[Subtraction of Unsigned Numbers-20240530143846566.webp]]

> [!cases] $M \lt N$

![[Subtraction of Unsigned Numbers-20240530173647222.webp]]

1. Add $M$ to the $(r - 1)$'s complement of $N$ i.e. $M + ((r^n-1) -  N) = (M - N) + (r^n-1)$
2. Since there is no final carry, find the $(r-1)$'s complement of the sum and put a minus sign infront of it.
 
> [!example] 
> ![[Subtraction of Unsigned Numbers-20240530154538729.webp]]

> [!summary] 

This is similar to subtraction of unsigned numbers using Radix complement. 
You don't have to know which number is larger, it can be identified by whether there is a carry or not.

![[Subtraction of Unsigned Numbers-20240530155927913.webp]]

> [!NOTE] 
> Even if you forget the algorithm of subtraction using radix or diminished radix complement, you can still follow the expansion method.

---