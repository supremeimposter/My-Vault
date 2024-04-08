---
pdf: Floor and Ceiling functions
date: 2023-10-27T18:15:00
last-revision: 2023-10-28T10:44:00
notes-taken: true
tags:
  - Aptitude/Quantitative
  - Aptitude
---
# Floor and Ceiling Functions
![[Pasted image 20231027183023.png]]

- If $x$ is a real number then,
	- $floor(x) = \lfloor x \rfloor$ is the greatest integer $n$ that is $\le x$ (go to the left of $x$ in the number line and find the nearest integer that is $\le x$) 
	- $ceil(x) = \lceil x \rceil$ is the least integer $n$ that is $\ge x$ (go to the right of $x$ in the number line and find the nearest integer that is $\ge x$) 
$$
\lfloor x \rfloor \le x \le \lceil x \rceil
$$
- `floor` is called the "greatest  integer function" and `ceil` is called "least integer function".
## Graph 
![[Pasted image 20231028092827.png|Graphs of (a)floor and (b)ceiling functions]]

## Properties

> [!suggestion] 
> When solving questions based on Floor and Ceiling functions consider a variety of cases and eliminate options
> - $x \in \mathbb{Z}$
> - $x \in \mathbb{R}$
> - $x = 5.21$
> - $x = -5.21$
> - $x = 0$
> - $x = 0.5$
> - $x = -0.5$

- For any real $x$, $\lfloor x \rfloor \in \mathbb{Z}$ and $\lceil x \rceil \in \mathbb{Z}$ 
- For any real $x$, $\lfloor \lceil x \rceil \rfloor = \lceil x \rceil$ 
- If $x \in \mathbb{Z}$ then $\lfloor x \rfloor = x = \lceil x \rceil$ 
- If $n$ is an even integer, then $\frac{n}{2} = \lfloor \frac{n}{2} \rfloor = \lceil \frac{n}{2} \rceil$ i.e. $n = 2m$
- If $n$ is an odd integer, then $\lfloor \frac{n}{2} \rfloor = \frac{n-1}{2}$ and $\lceil\frac{n}{2}\rceil = \frac{n+1}{2}$ 

![[Pasted image 20231028101639.png]]
