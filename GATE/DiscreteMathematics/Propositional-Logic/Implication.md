- Conditionals are claims or contracts.
- Implications are one-way statements and they are properties.
$$
P \rightarrow Q = Q \leftarrow P
$$
- Q is a property of P. P satisfies Q.
- P is LHS and Q is RHS of implication
$$
P \rightarrow Q \neq Q \rightarrow P
$$
- Implication is NOT commutative. 
- Implication is transitive. This property is helpful in [[Arguments and Inference]].
$$
\text{If } P \rightarrow Q,\quad Q \rightarrow R, \quad R \rightarrow S, \quad S \rightarrow T
$$
$$
(P \rightarrow R) \wedge (R \rightarrow T) \text{ is true}
$$
```ad-note
Inference == Deduction == Derivation == Judgement
```

| p   | q   | p $\to$ q |
| --- | --- | --------- |
| T   | T   | T         |
| T   | F   | F         |
| F   | T   | T         |
| F   | F   | T         |

- If P then Q, is a claim. (If condition, then consequence)
```ad-info
p is also called condition, antecedent, premise, hypothesis.
q is also called consequence, conclusion.
```

### When the claim is false?
- The claim is false only when the condition is satisfied and the consequence is not achieved.
	- P is true and Q is false

### When the claim is true?
- The claim is true when the consequence is achieved on a satisfied condition.
	- P is true and Q is true
- If the condition is not satisfied, it doesn't matter whether the consequence is achieved or not. The claim still stands true.
	- P is true or false, then Q is true
- The claim is true whenever P is false or Q is true

- Understanding of [[Necessary vs Sufficient]] is essential to understand the [[Equivalent forms of If P, then Q]] and [[Arguments and Inference]].
- If **X implies Y**, then $X \rightarrow Y$ is a [[Tautology in PL|Tautology]] and if **X does NOT imply Y**, then $X \rightarrow Y$, is a [[Contingency]] or [[Contradiction]] (falsifiable).

```ad-note
$X \rightarrow Y$ is a tautology, if and only if X logically implies Y which is represented by $X \Rightarrow Y$

- Some authors use $X \Rightarrow Y$ for tautological implication, which means $X \rightarrow Y$ is a tautology.
```

```ad-tip
- if == when == whenever == provided that == given that
- if not == [[unless]] == or
```
---
### Examples

^22cc0d

1. If x is odd, then x is prime 
	- This evaluates to false, since there is some x which is odd, but not prime.
	- 27 is odd, but not prime (3 x 9 = 27).
2. If x is prime, then x is odd
	- This also evaluates to false, since there is some x which is prime, but not odd.
	- 2 is prime, but not odd.

---
## Diagrammatic representation of Implication (Not required)

- When p $\to$ q is true
![[Pasted image 20230908183642.png]]

- When p $\to$ q is false
![[Pasted image 20230908183932.png]]

```ad-summary
![[Pasted image 20230910081522.png]]
```
