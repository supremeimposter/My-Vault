---
pdf: 
module: 5
lecture: 
date: 2024-04-27T09:12:00
version:
  - ALGO-24
last-revision: 
notes-taken: false
tags:
  - Algorithm/Sorts
---
# Insertion Sort

Insertion Sort is in-place and stable algorithm.


> [!discussion] 
> Pdf mod-5 pg. no. 21
> ![[Insertion Sort-20240427114023330.webp]]

In insertion sort, the number of times you are shifting an element is equal to the number of inversions of that element.

![[Insertion Sort-20240427201946795.webp]]

If $x$ is the total number of swaps for all the elements combined, then $x$ is the number of inversions of all the elements as well. The running time of insertion sort can be written as $\mathcal{O}(n + x)$.

Binary search can be implemented on the sorted portion of the array to find the position for the key.

![[Insertion Sort-20240427203929664.webp]]

