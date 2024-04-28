---
pdf: mod-4
module: 4
lecture: 15-16
date: 2024-04-22T08:28:00
version:
  - ALGO-24
last-revision: 2024-04-22T08:28:00
notes-taken: false
tags:
  - Algorithm/DivideAndConquer
---
# Counting Inversion
Two indices $i \lt j$ form an inversion $(i, j)$ if $a[i] \gt a[j]$. The relationships for this condition is strict.

If there is an inversion $(i, j)$ in an array $T$, then there are at least $(j - i)$ inversions in $T$.

![[Counting Inversion-20240422091730870.webp|3 Inversions]]

![[Counting Inversion-20240422091947624.webp|10 Inversions]]

The idea of [[Merge Sort|merge sort]] can be used to count the number of inversions in an array of numbers.

![[Counting Inversion-20240422214026555.webp]]

Since while returning from the functions in merge sort, the sub-array get **sorted**, this property can be used to count the number of inversions efficiently.

Assume a situation where we are about to merge two sorted sub-arrays back together and they came sorted from their previous merges.
Assume that the number of inversions is initially 0.

These two sorted sub-arrays are going to be merged.

![[Counting Inversion-20240422214302746.webp]]

> [!steps] Step by step
>> Two elements from the left and right arrays are compared.
>> Since `2` from the right array is less than `3` from the left array, there exists an inversion. 
>> Since the arrays are sorted, all the elements following `3` must be larger than `2`. So the inversion count is incremented by 6, which is the number of elements in the left array.
>
> ![[Counting Inversion-20240422214932123.webp]]
> 
>> Now filling up the elements in the left array that are less than `11` and there is no inversion until now.
>
> ![[Counting Inversion-20240422215227183.webp]]
>
>> Since `11` from the right array is less than `14` from the left array, there exists inversion and the counter is updated.
> 
> ![[Counting Inversion-20240422215405451.webp]]
> ![[Counting Inversion-20240422215439449.webp]]
>
>> `18` from the left array is larger than `16` in the right array, so there is inversion 
>
> ![[Counting Inversion-20240422215545815.webp]]
>
>> `18` from the left array is larger than `17` in the right array, so there is inversion 
>
> ![[Counting Inversion-20240422215710735.webp]]
>
>> Now the situation is sorted on the both the arrays, and no more inversions exits anymore.
>
> ![[Counting Inversion-20240422220351293.webp]]
>
> **Verification** : There are 13 intersections
> ![[Counting Inversion-20240422220733344.webp]]


> [!example] 
> 
>> [!question] 
>>![[Counting Inversion-20240423104408660.webp]]
>
> There are 8 inversions in the given array of numbers.
>
> ![[Counting Inversion-20240423105027200.webp]]


