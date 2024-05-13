---
pdf: 
module: 
lecture: "1"
date: 2024-03-17T22:49:00
version:
  - LA-24
last-revision: 2024-03-17T22:49:00
notes-taken: false
tags:
  - LinearAlgebra
---
# Introduction to Linear Algebra

- LA is a tool to work with matrices which help the machines in understanding the data.

```merm
flowchart LR
A[Text\nDigital Data\nImage etc...] --> B[Matrices]
B --> C[Processed by\nMachines]
```

- Scalar – a number with magnitude 
- Vector – a number with magnitude and dimension

> [!NOTE]
> Scalar $\times$ Scalar = Scalar
> Vector $\times$ Vector = Vector
> Scalar $\times$ Vector = Vector (Vector gets scaled)

---
## Matrix Multiplication

a. Matrix multiplied by a vector is again a vector.
$$
\text {Matrix} \times \text{Vector} = \text{Vector}
$$
![[System of Linear Equations-20240319235038073.webp]]
When a matrix is hit by a vector, it is either transformed into a new vector or the vector gets scaled.

b. Matrix multiplied by a matrix is a matrix.
$$
\text {Matrix} \times \text{Matrix} = \text{Matrix}
$$
![[Introduction to Linear Algebra-20240319235405441.webp]]

![[Introduction to Linear Algebra-20240503124329792.webp]]

If the dot product of two matrices $A$ and $B$ is a zero matrix, then it does not mean that $A$ or $B$ is a zero matrix.
![[Introduction to Linear Algebra-20240513170745538.webp]]

The dot product of two column vectors $a$ and $b$ can be written as, 
$$
a . b = a^T . b
$$

---
