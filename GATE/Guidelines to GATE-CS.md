---
pdf: 
module: 
lecture: 
date: 
version: 
last-revision: 2024-06-18T19:05:00
notes-taken: false
tags:
  - GATE/Guidelines
---
# Guidelines to GATE-CS

## Guidelines to Digital Logic

- Some questions on boolean algebra can be solved by evaluating the boolean expressions in the options.
- If there is a doubt in a boolan equation or if you feel like you are confusing a known boolean law, just use by case method and verify.
- Use by-case method to veify large boolean equations.
- Its easier to find the complement of a large boolean expression from its dual rather than applying de-morgans's law.
$$
\overline{f} (a, b, c, d) = f^d (\overline{a}, \overline{b}, \overline{c}, \overline{d})
$$
![[Guidelines to GATE-CS-20240619102714090.webp]]

- Find CSOP first and it will be easier to find CPOS i.e. $f = \sum m (f = 1) = \prod M (f = 0)$.
- To visualize a function in a k-map, firstly convert the given expression to either standard or canonical SOP for better visualization.
- See if there are any redundant larger cubes after identifying all the cubes in k-maps.


---
