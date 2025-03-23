---
tags:
  - DiscreteMath/Combinatronics
---
# Distributing Objects into Boxes

Objects are distributed into boxes i.e. objects have the choices of boxes, and not the other way around.

## DODB

When we distribute distinguishable objects into distinguishable boxes, we’re assigning each object to a box, but since we’re just focusing on “which objects go into which box,” we **treat the objects inside the same box as indistinguishable** to avoid overcounting permutations.

![[Distributing Objects into Boxes-1742562562428.webp]]

The permutation of $a, b$ inside the box $B_{1}$ is not needed. Similarly for the other boxes.

$$
\begin{split}
&= 7_{C_{2}} \times 5_{C_{3}} \times 2_{C_{2}} \\
&= \frac{7!}{2! \times 3! \times 2!}
\end{split}
$$

The boxes have to be permuted as well, since any box can have 2, 3, 2 objects in any order

$$
\begin{split}
&= 5! \times \frac{7!}{2! \times 3! \times 2!}
\end{split}
$$

## DOIB


## IODB


## IOIB
