---
pdf: 
module: 4
lecture: "7"
date: 2024-03-04T16:07:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/CombinationalCircuits
---
# Adder

| Operation                                | Circuit                                      |
| ---------------------------------------- | -------------------------------------------- |
| Addition of two bits                     | Half Adder                                   |
| Addition of three bits                   | Full Adder                                   |
| Addition of two multi-bit binary numbers | Ripple Carry Adder or Carry Look Ahead Adder |

> [!remember] 
> Each output of a circuit can be considered a function. Check for when it will 1 and add the minterms.

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

If $t$ is the propagational delay of the logic gates AND, OR, EXOR, NOT,

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

From, $X, Y$ to $C$, the propagational delay is $t$.
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

$$
\begin{split}
S(X, Y, C_{in}) 
&= \overline{X} . \overline{Y} . C_{in} + \overline{X} . Y . \overline{C_{in}} + X . \overline{Y} . \overline{C_{in}} + X . Y . C_{in} \\
&= (\overline{X} . \overline{Y} . C_{in} + X . Y . C_{in}) + (\overline{X} . Y . \overline{C_{in}} + X . \overline{Y} . \overline{C_{in}}) \\
&= C_{in} \:(\overline{X} . \overline{Y} + X . Y) \:+\: \overline{C_{in}} (\overline{X} . Y + X . \overline{Y}) \\
&= C_{in} (\overline{X \oplus Y}) + \overline{C_{in}} (X \oplus Y) \\
S(X, Y, C_{in}) &= C_{in} \oplus X \oplus  Y \\ \\

C_{out} 
&= \overline{X} . (Y . C_{in}) + X . (Y + C_{in}) \\
&= \overline{X}. Y . C_{in} \: + \: X.Y + X.C_{in} \\
&= (\overline{X}. Y . C_{in} \: + \: X.Y) + X.C_{in} \\
&= Y . (\overline{X} . C_{in} + X) + X . C_{in} \\
&= Y . (C_{in} + X) + X. C_{in} \\
C_{out} &= X . Y + X . C_{in} + Y . C_{in}
\end{split} 
$$

- $S$ is $1$ only when there are odd number of $1$'s in the input.
- $C_{out}$ is $1$ only when at least two inputs are $1$.

Consider the booelan expressions $\alpha$, $\beta$, $\gamma$ 
- If it is **NOT** possible for two boolean expressions to be $1$ simultaneously, then $\alpha + \beta = \alpha \oplus \beta$
- If it is **NOT** possible that any two of three boolean expressions to be $1$ simultaneously, then $\alpha + \beta + \gamma = \alpha \oplus \beta \oplus \gamma$ 

![[Adder-20240304174851806.webp]]

- Any function $f$ can be expressed as EXOR of true minterms, because any two minterms can never be simultaneously 1.


> [!discussion] 
> Slide 7B Pg. NO. 26
> ![[Adder-20240304182937620.webp]]


