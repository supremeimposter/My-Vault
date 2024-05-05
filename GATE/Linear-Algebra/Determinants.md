---
pdf: 
module: 
lecture: 
date: 2024-05-05T13:07:00
version:
  - LA-24
last-revision: 
notes-taken: false
tags:
  - LinearAlgebra/Determinants
---
# Determinants

> [!NOTE] 
> All the matrices in this chapter are square matrices

Determinant of a matrix is a scalar.

## Axioms of Determinants

**Property 1 :** Determinant of any $n \times n$ identity matrix is 1.
$$
\begin{vmatrix}
1&0& \cdots &0\\
0&1& \cdots &0 \\
0&0& \cdots &0\\ 
\vdots&\vdots&\ddots&\vdots\\
0&0& \cdots &1
\end{vmatrix} = 1
$$

**Property 2 :** Determinant changes sign when two rows (or two columns) are interchanged.

**Property 3 :** Linearity for one row (one column) at a time.
$$
\begin{vmatrix}
ta&tb \\
c&d \\
\end{vmatrix}=
t
\begin{vmatrix}
a&b \\
c&d
\end{vmatrix}
$$
$$
\begin{vmatrix}
a+a'&b+b' \\
c&d
\end{vmatrix} = 
\begin{vmatrix}
a&b \\
c&d
\end{vmatrix} + 
\begin{vmatrix}
a'&b' \\
c&d
\end{vmatrix}
$$
$$
\begin{vmatrix}
a+p&b+q \\
c+r&d+w
\end{vmatrix}=
\begin{vmatrix}
a&b \\
c+r&d+w
\end{vmatrix} + 
\begin{vmatrix}
p&q \\
c+r&d+w
\end{vmatrix}
$$
$$
\begin{vmatrix}
ta&tb \\
tc&td \\
\end{vmatrix} = t
\begin{vmatrix}
a&b \\
tc&td
\end{vmatrix} = t^2
\begin{vmatrix}
a&b \\
c&d
\end{vmatrix}
$$

This property does not apply to matrices. 
$$
m
\begin{bmatrix}
a&b \\
c&d \\
\end{bmatrix}=
\begin{bmatrix}
ma&mb \\
mc&md \\
\end{bmatrix}
$$

---

1. $\text{det}(A + B) \not= \text{det}(A) + \text{det}(B)$
2. If two rows (or columns) of $A$ are equal, then $\text{det}(A) = 0$
3. This elementary row operation ($R_{i} \rightarrow R_{i} + c R_{j}$) leaves the $\det(A)$ unchanged.
$$
\begin{vmatrix}
a&b \\
c-la&d-lb
\end{vmatrix} =
\begin{vmatrix}
a&b \\
c&d
\end{vmatrix} +
\begin{vmatrix}
a&b \\
-la&-lb
\end{vmatrix} =
\begin{vmatrix}
a&b \\
c&d
\end{vmatrix} + -l
\begin{vmatrix}
a&b \\
a&b
\end{vmatrix} =
\begin{vmatrix}
a&b \\
c&d
\end{vmatrix}
$$
4. If a matrix $A$ has a row (or column) of zeros, then $\det(A) = 0$.
5. Determinant of a diagonal matrix is the product of its diagonal elements.
6. Determinant of a upper triangular or lower triangular matrix is the product of its diagonal elements.
7. Row operations such as $R_{i} \rightarrow f R_{j} + e R_{k}$, where $f \in \mathbb{R}$, makes the $\\det(A) = 0$.
8. $\det(A) = \det(A^T)$

---
