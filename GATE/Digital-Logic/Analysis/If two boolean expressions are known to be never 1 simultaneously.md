---
tags:
  - DigitalLogic/BooleanAlgebra
  - DigitalLogic/Analysis
---
# $a + b$ and $a \oplus b$

| A   | B   | A OR B | A XOR B |
| --- | --- | ------ | ------- |
| 0   | 0   | 0      | 0       |
| 0   | 1   | 1      | 1       |
| 1   | 0   | 1      | 1       |
| 1   | 1   | 1      | 0       |


If **A and B can never both be 1**, the row `(1,1)` is **impossible** and can be ignored.

Remaining rows:

| A   | B   | A OR B | A XOR B |
| --- | --- | ------ | ------- |
| 0   | 0   | 0      | 0       |
| 0   | 1   | 1      | 1       |
| 1   | 0   | 1      | 1       |


So:

$$
A \lor B = A \oplus B \quad \text{if } AB = 0
$$

Equivalent logical statement:

$$
(A \land B)=0 \;\Rightarrow\; (A \lor B) = (A \oplus B)
$$

# If two boolean expressions $\alpha, \beta$ are known to be never 1 simultaneously

> If two signals **cannot be 1 together**, OR behaves exactly like XOR.

If two conditions are **mutually exclusive**, OR instantly becomes XOR.

| A   | B   | E = A $\oplus$ B | G = A $\odot$ B | E·G |
| --- | --- | ---------------- | --------------- | --- |
| 0   | 0   | 0                | 1               | 0   |
| 0   | 1   | 1                | 0               | 0   |
| 1   | 0   | 1                | 0               | 0   |
| 1   | 1   | 0                | 1               | 0   |

* E = A $\oplus$ B
* G = A $\odot$ B 

For every input combination:

$$
EG = 0
$$
So **E and G are mutually exclusive** — they can **never be 1 at the same time**.

Therefore:

$$
E \oplus G = E + G
$$

because whenever $EG = 0$:

$$
A \oplus B = A + B
$$

Similarly,

![[If two boolean expressions are known to be never 1 simultaneously-1773554793765.webp]]

This observation is very useful in understanding the equations of [[Carry Look Ahead Adder]]
