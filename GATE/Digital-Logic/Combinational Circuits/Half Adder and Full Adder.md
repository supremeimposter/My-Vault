---
pdf: 
module: 4
lecture: "7"
date: 2024-03-04T16:07:00
version:
  - DL-24
last-revision: 2024-06-27T12:12:00
notes-taken: true
tags:
  - DigitalLogic/CombinationalCircuits
  - DigitalLogic/Adder
---
# Adder

| Operation                                | Circuit                                      |
| ---------------------------------------- | -------------------------------------------- |
| Addition of two bits                     | Half Adder                                   |
| Addition of three bits                   | Full Adder                                   |
| Addition of two multi-bit binary numbers | Ripple Carry Adder or Carry Look Ahead Adder |

> [!remember] 
> Each output of a circuit can be considered a function. Check for when it will 1 and add the minterms.

Let us assume that $t$ is the propagational delay of the logic gates NOT, AND, OR, EXOR, NAND, NOR.

## Half Adder

Half Adder is a combinational circuit that performs the addition of two bits (two significant bits and a previous carry).
The most basic binary addition is the addition of two single bit binary numbers that is the addition of two binary digits.

![[Half Adder and Full Adder-20240626214624737.webp]]

The last addition results in an carry over i.e. the sum has two digits.

````col
```col-md
flexGrow=1
===
![[Half Adder and Full Adder-20240626224351313.webp]]
```
```col-md
flexGrow=1
===
Both Sum and carry can be considered as a separate functions. 

From the truth table, Sum can carry functions can be simplified as,

$$
\begin{split}
S(X, Y) &= X \oplus Y \\
C(X, Y) &= X . Y
\end{split}
$$
```
````

````col
```col-md
flexGrow=1.4
===
![[Half Adder and Full Adder-20240626215846958.webp]]
```
```col-md
flexGrow=0.6
===
The propagational delay of the circuit is $3t$, since the critical path consists of NOT, AND, OR.

From, $X, Y$ to $S$, the propagational delay is $3t$.

From, $X, Y$ to $C$, the propagational delay is $2t$.
```
````

````col
```col-md
flexGrow=1.5
===
![[Half Adder and Full Adder-20240626220714466.webp]]
```
```col-md
flexGrow=0.5
===
The progational delay of the circuit is $t$.
```
````

To add a n-bit binary number, we need **three** bits 
1. carry input from the previous stage
2. 1 bit for number $X$
3. 1 bit for number $Y$

Half adders have only two inputs and two outputs. Half adders cannot accept a carry input for the carry out from the previous adder, so it **cannot** be cascaded to form an adder for multi-bit binary numbers.

---
## Full Adder

Full adder is a combinational circuit that performs the addition of three bits (two significant bits and previous carry).
Full adders consists of three inputs (two significant bits and one previous carry) and two outputs (one sum bit and one carry out).
Full adders can be cascaded to add multi-bit binary numbers.

- Inputs : $x, y, c_{in}$
- Outputs : $s, c_{out}$

![[Half Adder and Full Adder-20240626224323423.webp]]

![[Half Adder and Full Adder-20240626225032577.webp]]

- $S$ is $1$ only when there are odd number of $1$'s in the input.
- $C_{out}$ is $1$ only when at least two inputs are $1$.

$$
\begin{split}
S(X, Y, C_{in}) 
&= \overline{X} . \overline{Y} . C_{in} + \overline{X} . Y . \overline{C_{in}} + X . \overline{Y} . \overline{C_{in}} + X . Y . C_{in} \\
&= (\overline{X} . \overline{Y} . C_{in} + X . Y . C_{in}) + (\overline{X} . Y . \overline{C_{in}} + X . \overline{Y} . \overline{C_{in}}) \\
&= C_{in} \:(\overline{X} . \overline{Y} + X . Y) \:+\: \overline{C_{in}} (\overline{X} . Y + X . \overline{Y}) \\
&= C_{in} (\overline{X \oplus Y}) + \overline{C_{in}} (X \oplus Y) \\
S(X, Y, C_{in}) &= C_{in} \oplus ( X \oplus  Y ) \\ \\

C_{out} 
&= \overline{X} . (Y . C_{in}) + X . (Y + C_{in}) \\
&= \overline{X}. Y . C_{in} \: + \: X.Y + X.C_{in} \\
&= (\overline{X}. Y . C_{in} \: + \: X.Y) + X.C_{in} \\
&= Y . (\overline{X} . C_{in} + X) + X . C_{in} \\
&= Y . (C_{in} + X) + X. C_{in} \\
C_{out} &= X . Y + X . C_{in} + Y . C_{in} \\
&= X . Y + C_{in} (X + Y)
\end{split} 
$$

- $C_{out} = 1$ 
	- when $X = 1, Y = 1$ or 
	- when $C_{in} = 1$ and either $X = 1$ or $Y = 1$
$$
\begin{split}
C_{out} &= X . Y + C_{in} (X \oplus Y)
\end{split}
$$

> [!hint] 
> Consider the booelan expressions $\alpha$, $\beta$, $\gamma$ 
> - If it is **NOT** possible for two boolean expressions to be $1$ simultaneously, then $\alpha + \beta = \alpha \oplus \beta$ 
> - If it is **NOT** possible that at least any two boolean expressions to be $1$ simultaneously, then $\alpha + \beta + \gamma = \alpha \oplus \beta \oplus \gamma$ 

The two expressions $X. Y$ and $C_{in} (X \oplus Y)$ can never be simultaneously $1$. 
$$
\begin{split}
C_{out} 
&= X . Y \oplus C_{in} (X \oplus Y)
\end{split}
$$

![[Half Adder and Full Adder-20240627081817702.webp]]

When $X = 1, Y = 1, C_{in} = 1$, $C_{out} = 0$ in the below equation. Hence it is not correct.
$$
\begin{split}
C_{out} 
&= X . Y \oplus  C_{in} (X + Y) \\
&= 1 . 1 \oplus 1 . (1 + 1) \\
&= 1 \oplus 1 . 1 \\
&= 1 \oplus 1 \\
&= 0 \\ \\

\therefore C_{out} &\not= X . Y \oplus  C_{in} (X + Y) 
\end{split}
$$

> [!interesting] 
> Any function $f$ can be expressed as EXOR of true minterms, because any two minterms can never be simultaneously 1.
> 
> ![[Half Adder and Full Adder-20240627163501682.webp]]
> $$
> \begin{split}
> F_{1}(a, b) 
> &= \overline{a} . b + a . b \\
> &= \overline{a} . b \oplus a . b \\ \\
> F_{2}(a, b, c) &= \overline{a} . b. c + a . \overline{b} . c + a . b. c \\
> &= \overline{a} . b. c \oplus  a . \overline{b} . c \oplus  a . b. c 
> \end{split}
> $$
> 
> We are looking at minterms as functions instead of associated minterms of an input combination.

> [!header] Basic gates implementation of Full Adder

$$
\begin{split}
S 
&= \overline{X} . \overline{Y} . C_{in} + \overline{X} . Y . \overline{C_{in}} + X . \overline{Y} . \overline{C_{in}} + X . Y . C_{in} \\
C_{out}
&= X . Y + X . C_{in} + Y . C_{in}
\end{split}
$$

The above equations are used in 2-level basic gates implementation.

![[Half Adder and Full Adder-20240627095531042.webp]]

From inputs $X, Y, C_{in}$ to the output $S$, the propagational delay of the circuit is $3t$.
From inputs $X, Y, C_{in}$ to the output $C_{out}$, the propagational delay of the circuit is $2t$.
Hence, the propagational delay of full adder in basic gates implementation is $3t$.

> [!header] Half Adder implementation of Full Adder

A full adder can be implemented using 2 half adders and 1 OR gate. (very popular implementation)

$$
\begin{split}
S &= C_{in} \oplus ( X \oplus  Y ) \\
C_{out} 
&= X . Y + C_{in} (X \oplus  Y)
\end{split}
$$

![[Half Adder and Full Adder-20240627115841173.webp]]

From inputs $X, Y$ to the output $S$, the propagational delay is $3t$.
From inputs $X, Y$ to the output $C_{out}$, the propagational delay is $3t$.
Hence, the propagational delay of full adder in half adders implementation is $3t$.

A full adder can be implemented using only 3 half adders.

$$
\begin{split}
S &= C_{in} \oplus ( X \oplus  Y ) \\
C_{out} 
&= X . Y \oplus  C_{in} (X \oplus  Y) 
\end{split}
$$

![[Half Adder and Full Adder-20240627120936625.webp]]

---
## Binary Adder

A binary adder is a digital circuit that produces the arithmetic sum of two binary numbers. It can be constructed with [[Half Adder and Full Adder#Full Adder|full adders]] connected in cascade, with the output carry from each full adder connected to the input carry of the next full adder in the chain.

There are many designs of n-bit parallel adder,
1. [[Ripple Carry Adder|Ripple Carry adder]]
2. [[Carry Look Ahead Adder|Carry look-ahead adder]]

---