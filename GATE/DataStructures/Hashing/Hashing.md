---
pdf: Hashing
module: 
lecture: 20a, 20b
date: 2023-12-03T08:05:00
version:
  - DS-24
last-revision: 
notes-taken: false
tags:
  - DataStructures
  - DataStructures/Hashing
---
# Hashing
> [!lecture] Lecture-20a

- Hashing is preferred when, 
	- the order of elements does not matter
	- the relationship between elements does not matter

## Direct Addressing Table

### Limitations
- Keys must be non-negative integer values (map non-integers to integers).
- Range of keys must be small (large integers can be mapped to small integers).
- Keys must be dense i.e. not many gaps in the key values.

![[Hashing-20231203082728834.webp]]

## Hash Table

> [!lecture] Lecture-20b

- Hashing maps the universe of keys to 
$$
k_1 \rightarrow h(k_1)
$$
- We cannot know the number of actual keys, we just have to approximate it to determine the size of Hash table.

> [!NOTE] 
> We need a hash function that hashes the complete key instead of a part of a key.

### Division Method
- Map into a table of ${} m$ slots.
$$
h(k) = k \;\%\; m
$$
- If ${} m = 2^r {}$, then it hashes only the last $r$ bits of the key.
- If ${} m = 10^r {}$, then it hashes only the last $r$ digits of the key.

- If the above cases happen, then there will be more keys that have the same last $r {}$ bits or digits.

### Simple Uniform Hashing

### Characteristics of an Ideal Hash Function

### Load Factor
$$
\alpha = \frac{n}{m}\\ \\
$$
$$
\begin{align}
\alpha - \text{Load Factor}\\ 
n - \text{Number of elements} \\
m - \text{Size of Table or No of slots} 
\end{align}
$$

# References

[CSE 326: Data Structures](https://courses.cs.washington.edu/courses/cse326/00wi/handouts/lecture16/sld001.htm)
