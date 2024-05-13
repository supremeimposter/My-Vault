---
pdf: 
module: 
lecture: 
date: 2024-05-13T13:15:00
version:
  - LA-24
last-revision: 
notes-taken: true
tags:
  - LinearAlgebra/Determinants
  - LinearAlgebra/LUDecomposition
---
# LU Decomposition

$$
\begin{split}
A &= L \;U \\ \\
\begin{pmatrix}
a_{11}&a_{12}&a_{13}\\
a_{21}&a_{22}&a_{23}\\
a_{31}&a_{32}&a_{33}
\end{pmatrix}
&=
\begin{pmatrix}
1&0&0 \\
L_{21}&1&0 \\
L_{31}&L_{32}&1
\end{pmatrix}
\begin{pmatrix}
U_{11}&U_{12}&U_{13} \\
0&U_{22}&U_{23} \\
0&0&U_{33}
\end{pmatrix}
\end{split}
$$
The principal diagonal of the matrix $L$ has to be 1's. 

> [!header] Method 1

A matrix $A$ must be able to be reduced to row-echelon form $U$ without interchanging any rows.
No row exchange has to be done when performing row operations.

> [!attention] 
> The elementary row operation $R_{i} \rightarrow k R_{i} + R_{j}$ is prohibited here.

The resultant matrix is $U$ and the matrix $L$ is obtained from the elementary row operations.

> [!example] 
> ![[LU Decomposition-20240513163147435.webp]]

> [!header] Method 2

$$
\begin{split}
\begin{pmatrix}
a_{11}&a_{12}&a_{13}\\
a_{21}&a_{22}&a_{23}\\
a_{31}&a_{32}&a_{33}
\end{pmatrix}
&=
\begin{pmatrix}
1&0&0 \\
L_{21}&1&0 \\
L_{31}&L_{32}&1
\end{pmatrix}
\begin{pmatrix}
U_{11}&U_{12}&U_{13} \\
0&U_{22}&U_{23} \\
0&0&U_{33}
\end{pmatrix} \\ \\
\begin{pmatrix}
a_{11}&a_{12}&a_{13}\\
a_{21}&a_{22}&a_{23}\\
a_{31}&a_{32}&a_{33}
\end{pmatrix}
&= 
\begin{pmatrix}
U_{11}&U_{12}&U_{13}\\ 
L_{21} U_{11}& L_{21} U_{12} + U_{22} & L_{21}U_{13} + U_{23} \\
L_{31}U_{11} & L_{31}U_{12} + L_{32}U_{22} & L_{31}U_{13} + L_{32}U_{23} + U_{33}
\end{pmatrix}
\end{split}
$$
The elements of $L$ and $U$ matrices can be obtained by equating and solving the corresponding elements.

> [!tip] 
> To verify the matrices $L$ and $U$, multiply both of them and see if you get the matrix $A$.

---