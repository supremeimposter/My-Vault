---
pdf: 
module: 6
lecture: "8"
date: 2023-11-01T08:41:00
version:
  - DM-24
last-revision: 
notes-taken: false
tags:
  - DiscreteMath
  - DiscreteMath/Functions
  - DiscreteMath/Sets/Relations
---
# Inverse of Functions

> [!lecture] Lecture-8
>> [!youtube] [Inverse of a Function | Set Theory | Discrete Mathematics | GO Classes | Deepak Poonia Sir - YouTube](https://www.youtube.com/watch?v=SZeLyeRYKoQ)

- If $f$ is a function, it does NOT mean that $f^{-1}$ is also a function
````col
```col-md
flexGrow=1
===
### $f$ is a function

![[Pasted image 20231101085916.png]]
```
```col-md
flexGrow=1
===
### $f^{-1}$ is NOT a function

![[Pasted image 20231101090131.png]]
```
````
- The inverse of a function $f$ is also a function iff $f$ is a bijection i.e. $f$ is invertible iff $f$ is a [[Types of Functions#Bijective function|bijective]] function.

## Examples

> [!example] 
> $f : \mathbb{Z} \rightarrow \mathbb{Z}$ and $f(x) = x + 1$ is invertible


> [!example] 
> $f : \mathbb{R} \rightarrow \mathbb{R}$ and $f(x) = x^2$ is NOT invertible

- $f$ is neither one-one nor onto function.
````col
```col-md
flexGrow=1
===
![[Pasted image 20231101092555.png|$1$ and $-1$ has the same images i.e. $f$ is not one-one]]
```
```col-md
flexGrow=1
===
![[Pasted image 20231101092617.png|Negative numbers do not have a pre-image i.e. $f$ is not onto]]
```
````

> [!example] 
> $f : \mathbb{R} \rightarrow [0, \infty)$ and $f(x) = x^2$ is NOT invertible

- $f$ is not one-one but onto.

> [!example] 
> $f : [0, \infty) \rightarrow [0, \infty)$ and $f(x) = x^2$ is invertible

![[Pasted image 20231101112348.png]]


----