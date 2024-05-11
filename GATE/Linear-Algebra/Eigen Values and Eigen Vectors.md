---
pdf: 
module: 
lecture: 
date: 2024-05-10T16:41:00
version:
  - LA-24
last-revision: 
notes-taken: false
tags:
  - LinearAlgebra/EigenVectors LinearAlgebra/EigenValues
---
# Eigen Values and Eigen Vectors

When a matrix $A$ is multiplied by a vector $x$, then are certain possibilities,
1. The vector gets transformed into a new vector.
$$
Ax = b
$$

![[Eigen Values and Eigen Vectors-20240510164558947.webp]]


2. The vector remains in the same direction i.e. the vector is scaled (shrunk or stretched or reversed or remains the same).
$$
Ax = \lambda x
$$

![[Eigen Values and Eigen Vectors-20240510164620740.webp]]


The vector $x$ which remains in the same direction after multiplying with $A$ is called the eigen vector of the matrix $A$. The value $\lambda$ associated with the eigen vector is called the eigen value.

$\lambda$ can be $0$ i.e. $Ax = 0 x$ meaning that the eigen vector is in null space.
Eigen vectors are non-zero vectors by definition.

> [!observation] 
> Eigen vectors makes sense only for square matrices.
> 
> $$
> \underset{m \times n}{A} \cdot \underset{n \times 1}{x} = \lambda \cdot \underset{m \times 1}{x}
> $$
> The vector $x$ on LHS $\in \mathbb{R}^n$, but the resultant vector $x$ on RHS $\in \mathbb{R}^m$. Hence $m = n$ i.e. $A$ is a square matrix.

Identity matrix of any vector space $n$ can have infinitely many eigen vectors, but there are only $n$ LI eigen vectors that can span the entire vector space $\mathbb{R}^n$.
$$
\begin{bmatrix}
1&0&0&\dots&0 \\
0&1&0&\dots&0 \\
0&0&1&\dots&0 \\
\vdots&\vdots&\vdots&\ddots&\vdots \\
0&0&0&\dots&1
\end{bmatrix}
\begin{bmatrix}
a \\
b \\
c \\
\vdots \\
d
\end{bmatrix} = 
\begin{bmatrix}
a \\
b \\
c \\
\vdots \\
d
\end{bmatrix}
$$

> [!interesting] 
> There are infinitely many eigen vectors for any matrix.

If $x$ is an eigen vector for a matrix $A$, then any non-zero multiple of eigen vector $x$ is also an eigen vector for the same matrix $A$, with $\lambda$ being the eigen value.

If $x$ is an eigen vector or $A$, then 
$$
Ax = \lambda x
$$
If $kx$, where $k \in \mathbb{R} - \{0\}$ is a eigen vector of $A$, then 
$$
\begin{equation}
\begin{split}
A (kx) &= k \; Ax\\
&= k \; \lambda x\\
&= \lambda \; (kx)
\end{split}
\end{equation}
$$
## Characteristic Equation
Since both the eigen values and eigen vectors are unknown in the equation $Ax=\lambda x$, characteristic equation is solved to find $\lambda$ and $x$.
$$
\begin{equation} 
\begin{split}
Ax &= \lambda x\\
Ax - \lambda x &= 0\\
(A - \lambda \mathcal{I})\; x &= 0\\
\end{split}
\end{equation}
$$
Since $\lambda$ is a scalar, it is multiplied with identity matrix $\mathcal{I}$ to represent it as a matrix.
In the above homogenous system, only non-trivial solution is possible, since eigen vector $x$ is a non-zero vector i.e. $\exists c_{i} \not= 0$ in $x$. Hence the columns of $(A - \lambda \mathcal{I})$ are LD.

Since the columns of $(A - \lambda \mathcal{I})$ are LD,
$$
\begin{equation}
\mid A - \lambda \mathcal{I} \mid\; = 0
\end{equation}
$$
The above characteristic equation can be solved to obtain the eigen vector $\lambda$ and then $\lambda$ can be substituted back in $(A - \lambda \mathcal{I})\; x = 0$ to obtain the eigen value $x$. 

Since $\mid A - \lambda \mathcal{I} \mid\; = 0$, rank ($\;\mid A - \lambda \mathcal{I} \mid\; = 0$) is always $\lt n$ and free variables always exist.

![[Eigen Values and Eigen Vectors-20240511093730179.webp|Solve eigen value problem for $n \times n$ problem]]

Eigen vectors from different eigen values are linearly independent.
