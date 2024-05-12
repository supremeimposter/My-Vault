---
pdf: 
module: 
lecture: 
date: 2024-05-12T19:29:00
version:
  - LA-24
last-revision: 
notes-taken: false
tags:
  - LinearAlgebra/Determinants
  - LinearAlgebra/EigenValues
  - LinearAlgebra/EigenVectors
---
# Cayley Hamilton Theorem
> [!theorem] 
> Every square matrix satisfies its own characteristic equation.

If the characteristic equation for a matrix $A$ is,
$$
p(\lambda) = \lambda^2 - \lambda + 5 = 0
$$
then $A$ satisfies the characteristic equation.
$$
p(A) = A^2 - A + 5 = 0
$$

Applications of Cayley Hamilton theorem,
1. To calculate the positive integral powers of a matrix e.g. $A^2, A^{12}$
2. To calculate the inverse of a square matrix $A$ e.g. $A^{-1}$

> [!example] 
![[Cayley Hamilton Theorem-20240512193937906.webp]]

Consider the matrix
$$
A = \begin{pmatrix}
3&0 \\
4&1
\end{pmatrix}
$$
The characteristic equation is,
$$
\begin{split}
\begin{vmatrix}
A - \lambda \mathcal{I}
\end{vmatrix} &= 0 \\ \\
\begin{vmatrix}
3 - \lambda & 0 \\
4&1-\lambda 
\end{vmatrix} &= 0 \\ \\
(3 - \lambda)\;(1-\lambda) &= 0 \\ \\
\lambda^2 - 4 \lambda + 3 &= 0
\end{split}
$$
To find the inverse of A using Cayley Hamilton theorem,
$$
\begin{split}
A^2 - 4 A + 3  &= 0 \\
A (A - 4 \mathcal{I}) + 3 \mathcal{I} &= 0 \\
A (A - 4\mathcal{I}) &= -3\mathcal{I} \\
A \bigg(\frac{A - 4\mathcal{I}}{-3}\bigg) &= -\frac{3\mathcal{I}}{-3} \\
A A^{-1} &= \mathcal{I} \\ \\
\therefore A^{-1} &= \bigg(\frac{A - 4\mathcal{I}}{-3}\bigg)
\end{split}
$$
To find any power of the matrix e.g. $A^4$
$$
\begin{split}
\lambda^2 - 4 \lambda + 3 &= 0 \\
A^2 - 4 A + 3 &= 0 \\
A^2 &= 4 A - 3 \\
A^2 &= 4 A - 3\mathcal{I} \\
{(A^2)}^2 = A^4 &= (4 A - 3\mathcal{I})(4 A - 3\mathcal{I}) \\
\end{split}
$$
---
