---
pdf: 
module: 
lecture: 
date: 2024-05-10T08:24:00
version:
  - LA-24
last-revision: 
notes-taken: false
tags:
  - LinearAlgebra/Determinants
---
# Crammer's Rule

If $\det(A) \not= 0$, then $A^{-1}$ exists i.e. unique solution.

$$
\begin{equation} 
\begin{split}
A x &= b \\ \\
x &= A^{-1} \; b \\ \\
x &= \frac{{\text{(co-factor matrix)}}^T}{\mid A \mid} \; b \\ \\
x &= \frac{1}{\mid A \mid} 
\begin{bmatrix}
C_{11}&C_{21}&C_{31} \\
C_{12}&C_{22}&C_{32} \\
C_{13}&C_{23}&C_{33}
\end{bmatrix} 
\begin{bmatrix}
b_{1} \\
b_{2} \\
b_{3}
\end{bmatrix} \\ \\
x &= \frac{1}{\mid A \mid} 
\begin{Bmatrix}
\mid A_{1} \mid  \\
\mid A_{2} \mid  \\
\mid A_{3} \mid
\end{Bmatrix}
\end{split}
\end{equation} 
$$
$$
A_{1} = 
\begin{bmatrix} 
b_{1} & a_{12} & a_{13} \\
b_{2} & a_{22} & a_{23} \\
b_{3} & a_{32} & a_{23}
\end{bmatrix} \\;
A_{2} = 
\begin{bmatrix} 
a_{11} & b_{1} & a_{13} \\
a_{21} & b_{2} & a_{23} \\
a_{31} & b_{3} & a_{23}
\end{bmatrix} \\;
A_{3} = 
\begin{bmatrix} 
a_{11} & a_{12} & b_{1} \\
a_{21} & a_{22} & b_{2} \\
a_{31} & a_{32} & b_{3}
\end{bmatrix} 
$$

Time complexity of Crammer's rule is $\mathcal{O}(n!)$

> [!NOTE] 
> Crammers rule is called as math of millionaires.

