---
pdf: mod-1
module: 1
lecture: 4.a-5.d
date: 2023-10-23T08:45:00
version:
  - ALGO-24
last-revision: 
notes-taken: false
tags:
  - Algorithm
  - Algorithm/Recursion
---
# Masters Theorem
> [!lecture] Lecture-4.a-4.c

- The recurrence relation of the following format can be solved by Masters theorem.
$$
T(n) = aT \bigg( \frac{n}{b} \bigg) + f(n)
$$
where $a, b$ are constants and $a \ge 1, b \gt 1$

- The cost of each node in the tree is function on $n$ at that level i.e. $f(n)$ 

![[Pasted image 20231024110731.png|$T(n) = aT \bigg( \frac{n}{b} \bigg) + f(n)$]]

> [!attention] Masters Theorem cannot give the exact complexity. 
> So when the options do not have asymptotic notations better use tree or substitution method.
>> [!example] ![[Pasted image 20231025095044.png|GATE IT 2008 Q.44]]
>> Here in this example, the options are for exact value and NOT asymptotic bound.


## Polynomial comparison
> [!lecture] Lecture-4.a
- The polynomially greater or smaller comparison is based on terms of $n$ 
- After cancelling out the common terms, if there is some polynomial still remaining, then it can be polynomial-ly greater or smaller.
- Transitivity can be applied if you are not sure about polynomial comparison for a given scenario.
- After cancelling out the common terms, if there is no polynomial terms left, then it cannot be polynomially compared.

> [!intuition] At least one of the sides must have the term $n$ for comparison
> If one of the sides has only $log n$ and the other has $1$, then also comparison CANNOT be made.

- Masters theorem CANNOT be applied if polynomial comparison cannot be made. In those cases, Generalised and Extended Masters theorems can be used.


## Proof of Masters Theorem
> [!lecture] Lecture-4.c

![[Pasted image 20231024093125.png|$T(n) = 3T(\frac{n}{4}) + cn^2$]]

> [!intuition] Understanding of GP is the core of masters theorem.


## Generalised Masters theorem
> [!lecture] Lecture-5.a

- This is the case when polynomial comparison CANNOT be made and $log\; n$ is in the numerator in the cost of a function.
$$
\Theta \;(f(n) \cdot log(n))
$$

## Extended Masters Theorem
> [!lecture] Lecture-5.b

- This is a super-set of Generalised Masters Theorem.
- This case is mostly when polynomial comparison CANNOT be made and the cost of a function has $log\;n$ in the denominator.

## Recurrences not solvable by Masters Theorem



> [!discussion] 
> ![[Pasted image 20231024120558.png|Lecture 5.d comments section]]
