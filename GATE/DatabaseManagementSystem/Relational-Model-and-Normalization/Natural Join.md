---
pdf: lec-7A-7C
module: 1
lecture: 7A
date: 2023-11-12T16:50:00
version:
  - DBMS-24
last-revision: 2024-07-12T18:52:00
notes-taken: true
tags:
  - DBMS/RelationalAlgebra
  - DBMS/Queries
  - DBMS/RelationalModel
---
# Natural Join
> [!lecture] Lecture-7A

Natural way of joining two relations,
1. Find the common attributes (attributes with same name).
2. Equate the values for common attributes.
3. In the combined relation, write the common attribute once.

![[Natural Join-20240712073612779.webp]]

![[Natural Join-20240712073926970.webp]]

![[Natural Join-20240712074440014.webp]]

![[Natural Join-20240712075113420.webp]]

![[Natural Join-20240712075749365.webp]]

If two relations $R$ and $S {}$ have no attributes in common $(R \, \cap \, S) = \emptyset$, then the natural join is the cross product of $R, S$
$$
\begin{split}
R \bowtie S &= R \times S
\end{split}
$$

![[Natural Join-20240712075947376.webp]]

Joining tables is a costly operation as it consumes more time.

---