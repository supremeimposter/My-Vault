---
pdf: lec-13-18, lec-21, lec-23A, lec-23B
module: 7
lecture: 15, 16, 17, 18, 21, 23-A, 23-B
date: 2023-11-03T10:55:00
version:
  - DM-24
last-revision: 
notes-taken: false
tags:
  - DM
  - DM/GroupTheory
  - DM/GroupTheory/AlgebraicStructure
---
# Group


## Properties of Group
> [!lecture] Lecture-18, 21
- The identity element is unique.
- The inverse of identity element is identity element itself.
- Only group structure has inverse property.
- Every element has unique inverse in a group.
- Group has both left and right cancellation property.
- $(a^{-1})^{-1} = a$ 
- $(ab)^{-1} = b^{-1}a^{-1}$ 
- Only in an abelian group, the below exists.
$$
\begin{align}
a \star b = b \star c \\
a \star b = c \star b \\ \\
\therefore a = c
\end{align}
$$

- $a\;x = b$ has a unique solution $x = a^{-1}\;b$
- $x\;a = b$ has a unique solution $x = b\;a^{-1}$
- If $a \star b = e$, then and b are inverses of each other.
![[Pasted image 20231104130358.png|Such case never happens in a group]]


## Cayley Table
> [!lecture] Lecture-23A

> [!lecture] Lecture-23B
>> [!youtube] [Practice Question Group Theory | Complete the Cayley Table for a Group | Discrete Mathematics - YouTube](https://www.youtube.com/watch?v=inpZ2_fzKx4)


---
## Examples
### Set of nth roots of unity under multiplication
> [!lecture] Lecture-16

#### 1's root of unity
$$
x = 1
$$

#### square root of unity
$$
x ^2 = 1
$$

#### cube roots of unity
$$
x ^ 3 = 1
$$

#### 4th roots of unity
$$
x^4 = 1
$$


#### nth roots of unity
$$x ^ n = 1$$

> [!summary] 
>  - For all $n \ge 1$ nth roots of unity are abelian group under multiplication.


### Additive Modulo n
> [!lecture] Lecture-17

