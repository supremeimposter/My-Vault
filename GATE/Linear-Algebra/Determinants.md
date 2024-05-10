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
\begin{equation}
\begin{split}

\begin{vmatrix}
a+p&b+q \\
c+r&d+w
\end{vmatrix} & =
\begin{vmatrix}
a&b \\
c+r&d+w
\end{vmatrix} + 
\begin{vmatrix}
p&q \\
c+r&d+w
\end{vmatrix} \\ \\
& = \begin{vmatrix}
a&b \\
c&d
\end{vmatrix} + 
\begin{vmatrix}
a&b \\
r&w
\end{vmatrix} + 
\begin{vmatrix}
p&q \\
c&d
\end{vmatrix} + 
\begin{vmatrix}
p&q \\
r&w
\end{vmatrix}
\end{split}
\end{equation}
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

> [!attention] 
> This property does not apply to matrices. 
> $$
> m
> \begin{bmatrix}
> a&b \\
> c&d \\
> \end{bmatrix}=
> \begin{bmatrix}
> ma&mb \\
> mc&md \\
> \end{bmatrix}
> $$
> 

---

- $\text{det}(A + B) \not= \text{det}(A) + \text{det}(B)$
- If two rows (or columns) of $A$ are equal, then $\text{det}(A) = 0$
- This elementary row operation ($R_{i} \rightarrow R_{i} + c R_{j}$) leaves the $\det(A)$ unchanged.
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
- If a matrix $A$ has a row (or column) of zeros, then $\det(A) = 0$.
- Determinant of a diagonal matrix is the product of its principle diagonal elements.
- Determinant of a upper triangular or lower triangular matrix is the product of its principle diagonal elements.
- Row operations such as $R_{i} \rightarrow c_{1} R_{j} + c_{2} R_{k}$ changes $\\det(A)$.
- $\det(A) = \det(A^T)$
- $\det(AB) = \det(A) \ast \det(B)$
- $\mid A^n \mid = (\;\mid A \mid\;)^n$
- Determinant evaluated across any row or column is zero.
- $\det(c \; A) = c^n\; \det(A), c \in \mathbb{R}$ and $n$ is the dimension of $A$.

## Calculating Determinants
1. Calculate using permutations.
2. Convert given matrix to echelon form and calculate the product of pivot elements. Keep track of the interchanging of the rows(or columns).
$$
\det(A) = \pm \; d_{1} d_{2} \cdots d_{n}
$$
3. Calculate using co-factors.

### Calculating using Permutations
If a $n \times n$ determinant is expanded, then there are $n!$ determinants which will survive out of $n^n$ terms.

![[Determinants-20240509094718207.webp]]

````col
```col-md
flexGrow=1
===
![[Determinants-20240509112335483.webp]]
```
```col-md
flexGrow=1
===
For the determinant to survive, each row (or column) should have atleast one non-zero accordingly.

If $a$ is non-zero, then non-zero in the $2^{nd}$ row can be either $e$ or $f$, then if $e$ is non-zero, then non-zero in the $3^{rd}$ row can be only $i$.
```
````

![[Determinants-20240509112949647.webp|6 possible determinant patterns that survives the expansion(Boxes are non-zeros)]]

![[Determinants-20240505225625664.webp]]

The sign of a product term here is determined by the number of row interchanges made to obtain the diagonal matrix form.
$$
\begin{vmatrix}
0&a_{12}&0 \\
0&0&a_{23} \\
a_{31}&0&0
\end{vmatrix} = 
\begin{vmatrix}
a_{31}&0&0\\
0&0&a_{23} \\
0&a_{12}&0 \\
\end{vmatrix} = 
\begin{vmatrix}
a_{31}&0&0\\
0&a_{12}&0 \\
0&0&a_{23} \\
\end{vmatrix} = a_{31} \; a_{12} \; a_{23}
$$
The sign of the product term $a_{31} \; a_{12} \; a_{23}$ is positive.

$$
\det(A_{n \times n}) = \sum_{\text{all permutations}} \pm \;a_{1 \alpha} \; a_{2 \beta} \; a_{3 \gamma} \; a_{n \omega} 
$$

> [!example] 
> $$
> \begin{vmatrix}
> a&b&c \\
> x&y&z \\
> p&q&r
> \end{vmatrix} = 
> + ayr - azq - bxr + bzp - cyp + cxq
> $$
> 

Since the row operations such as $R_{i} \rightarrow c \;R_{i} + k\; R_{j}$ affects the value of the determinant. The original value of the determinant can be obtained by dividing the determinant by $c$.

### Pivot Formula
Convert the given matrix to echelon form and calculate the product of pivot elements. 
Keep track of interchanging of rows(or columns).
$$
\det(A) = \pm \; d_{1} d_{2} \cdots d_{n}
$$

### Cofactor Formula
Determinant is the dot product of any row (or column) $i$ of a matrix $A$ with its cofactors using other rows.

Cofactors are auxiliary values associated with each element of a matrix.

If $a_{ij}$ is an element of the matrix $A_{n \times n}$, then $A_{ij}$ is the co-factor of the element $a_{ij}$.
The sign of the co-factor of $a_{ij} = (-1)^{(i + j)}$
$C_{ij}$ does not depend on the element $a_{ij}$.

> [!tip] 
> Co-factor includes the sign as well. If the sign is excluded, then it is called minor.

The $\det(A)$ as the dot product of the first row is as follows,
$$
\det(A) = a_{11}\;A_{11} + a_{12}\;A_{12} + \dots + a_{1n}\;A_{1n}
$$

> [!example] 

Consider the determinant $A$,
$$
A = \begin{vmatrix}
2&-3&5 \\
6&0&4 \\
1&5&-7
\end{vmatrix}
$$
- Co-factor of $2$ is,
$$
+ \begin{vmatrix}
0&4 \\
5&-7
\end{vmatrix}
$$
- Co-factor of $4$ is, 
$$
- \begin{vmatrix}
2&-3 \\
1&5
\end{vmatrix}
$$

$$
\det(A) = 2 \;\begin{vmatrix}
0&4 \\
5&-7
\end{vmatrix} - (-3) \;
\begin{vmatrix}
6&4 \\
1&-7
\end{vmatrix} + 5\;
\begin{vmatrix}
6&0 \\
1&5
\end{vmatrix} = 52
$$
---
Consider the matrix $B$,
$$
B = \begin{bmatrix}
a_{11}&a_{12}&a_{13} \\
a_{21}&a_{22}&a_{23} \\
a_{31}&a_{32}&a_{33}
\end{bmatrix}
$$
then, the determinant $\Delta = a_{21}\; C_{11} + a_{22} \;C_{12} + a_{23}\; C_{13}$ is represented as,
$$
B = \begin{vmatrix}
a_{21}&a_{22}&a_{23} \\
a_{21}&a_{22}&a_{23} \\
a_{31}&a_{32}&a_{33}
\end{vmatrix}
$$

> [!observation] 
> If elements of a row (or column) are mulitplied with co-factors of any other rows (or columns), then their sum is $0$.
> $a_{21}\; C_{11} + a_{22} \;C_{12} + a_{23}\; C_{13} = 0$
> $a_{13}\; C_{12} + a_{23} \;C_{22} + a_{33}\; C_{32} = 0$
> $a_{31}\; C_{21} + a_{32} \;C_{22} + a_{33}\; C_{23} = 0$
>> [!note] 
>> But we cannot comment on anything about the sum of products of elements of a **row** and the cofactors of another **column**.
>> $a_{12}\; C_{21} + a_{22} \;C_{22} + a_{32}\; C_{23}$ may or may not be zero.

---
## Inverse of Matrices

Consider the matrix $A$,
$$
A = \begin{bmatrix}
a_{11}&a_{12}&a_{13} \\
a_{21}&a_{22}&a_{23} \\
a_{31}&a_{32}&a_{33}
\end{bmatrix}
$$
And another matrix $E$ whose columns are co-factors of rows of matrix $A$,
$$
E = \begin{bmatrix}
C_{11}&C_{21}&C_{31} \\
C_{12}&C_{22}&C_{32} \\
C_{13}&C_{23}&C_{33}
\end{bmatrix}
$$
And another matrix $F$ whose rows are co-factors of columns of matrix $A$,
$$
F = \begin{bmatrix}
C_{11}&C_{21}&C_{31} \\
C_{12}&C_{22}&C_{32} \\
C_{13}&C_{23}&C_{33}
\end{bmatrix}
$$

$$
A E =
\begin{bmatrix}
a_{11}&a_{12}&a_{13} \\
a_{21}&a_{22}&a_{23} \\
a_{31}&a_{32}&a_{33}
\end{bmatrix} 
\begin{bmatrix}
C_{11}&C_{21}&C_{31} \\
C_{12}&C_{22}&C_{32} \\
C_{13}&C_{23}&C_{33}
\end{bmatrix} = 
\begin{bmatrix}
\mid A \mid & 0 & 0 \\
0 & \mid A \mid & 0 \\
0 & 0 & \mid A \mid \\
\end{bmatrix} = 
\;\;\mid A \mid \;I_{3}
$$

$$
F A =
\begin{bmatrix}
C_{11}&C_{21}&C_{31} \\
C_{12}&C_{22}&C_{32} \\
C_{13}&C_{23}&C_{33}
\end{bmatrix} 
\begin{bmatrix}
a_{11}&a_{12}&a_{13} \\
a_{21}&a_{22}&a_{23} \\
a_{31}&a_{32}&a_{33}
\end{bmatrix} =
\begin{bmatrix}
\mid A \mid & 0 & 0 \\
0 & \mid A \mid & 0 \\
0 & 0 & \mid A \mid \\
\end{bmatrix} = 
\;\;\mid A \mid \;I_{3}
$$

> [!NOTE] 
> The matrices $E$ and $F$ are both the same (transpose of the cofactor matrix of $A$), but the way we see them both is different.

$$
A \cdot E = \;\mid A \mid \; I \;\Rightarrow A \cdot \bigg(  \frac{1}{\mid A \mid} \cdot E \bigg) = I \Rightarrow A A^{-1} = I
$$
$$
F \cdot A = \;\mid A \mid \; I \;\Rightarrow \bigg(  \frac{1}{\mid A \mid} \cdot F \bigg) \cdot A = I \Rightarrow A^{-1} A = I
$$

> [!definition] 
> Inverse of a matrix $A$ is the one that is multiplied to $A$ to get the identity matrix $I$.

Since the above two equations are equal, 
$$
A^{-1} = \frac{1}{\mid A \mid} \cdot E 
$$
where $E$ is the transpose of the cofactor matrix.
$$
A^{-1} = \frac{1}{\mid A \mid} \;
\begin{bmatrix}
C_{11}&C_{12}&C_{13} \\
C_{21}&C_{22}&C_{23} \\
C_{31}&C_{32}&C_{33}
\end{bmatrix} ^ T
$$
$$
A^{-1} = \frac{1}{\mid A \mid} \; \text{adj}(A)
$$
**Adjoint** of a matrix $A$ is the transpose of its co-factor element matrix.
$$
\text{adj}(A) = \; \mid A \mid A^{-1}
$$
$$
\mid A^{-1} \mid \;= \frac{1}{\mid A \mid} 
$$

Since the matrix $E$ is the adjoint of the matrix $A$,
$$
A \cdot \text{adj}(A) = \; \mid A \mid \; I
$$
---
