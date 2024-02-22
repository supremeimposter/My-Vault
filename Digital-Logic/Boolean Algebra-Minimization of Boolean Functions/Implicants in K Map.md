---
pdf: 
module: 1
lecture: "6"
date: 2024-02-22T17:19:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/BooleanAlgebra
---
# Implicant
- Implicant $I$ of $f$ is a ***[[Standard and Canonical Forms of Boolean Expressions#Product Term|product term]]*** such that $I \rightarrow f$ i.e. whenver $I = 1$, then $f = 1$  
- Every Cube of 1's is an implicant.
- Every implicant is a product term.

> [!header] Counting the number of implicants for a function
>> [!question] 
>> ![[Minimization using K Map-20240222163219601.webp]]
> ---
>
>> Implicants of size 1
>
> ![[Minimization using K Map-20240222163428348.webp]]
>
>> Implicants of size 2 
>
> ![[Minimization using K Map-20240222164627782.webp]]
>
>> Implicants of size 4
>
> ![[Minimization using K Map-20240222164831549.webp]]
> 
>> Total number of implicants for the given k-map is $6 + 7 + 2 = 15$

> [!caution] 
> Do not try to use combinatronics in counting implicants as it will result in error.

## Prime Implicant
- A prime implicant is an implicant which is not fully contained within anyone other implicant i.e. a cube that is as big as possible.
- An essential prime implicant is a prime implicant that includes **at least one** 1 that is not in any other prime implicant.

> [!important] 
> Essential is like a label given to an existing prime implicant and not a separate new prime implicant.

- If **all** the essential prime implicants cover all the 1's, then we get **unique** minimal SOP. The converse is **NOT** true.


> [!tip] 
> Don't forget to look the ones at the corners of the K-map.


> [!header] Treating Don't cares
- Consider don't cares are 1's in case of implicants and prime implicants.
- Don't cares do not make a prime implicant essential.
- When don't cares are there, consider only non-don't care cells for minimum SOP.

> [!header] Cyclic K-Map




> [!header] Removing literals from Implicants


> [!timer] 02:16:44

