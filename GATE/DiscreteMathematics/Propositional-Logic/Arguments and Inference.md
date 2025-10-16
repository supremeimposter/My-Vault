## Argument
- An argument is a collection of one or more premises followed by a conclusion.
$$
\begin{array}{}
P_1\;,\\
P_2\;,\\
P_3\;,\\
P_4\;,\\
\vdots \\
P_n\\ \\
\therefore C\;,
\\
\text{where } P_i \text{ are premises and } C \text{ is a conclusion.}\\\\
(P_1 \land P_2 \land P_3 \land \ldots \land P_n) \rightarrow C \text{ is a tautology if and only if the argument is valid} \\\\
(P_1 \land P_1 \land P_1 \land P_1 \land \ldots \land P_n) \models C
\end{array}
$$

- There are *valid and invalid* arguments. 
```ad-example
**Premises:**
	If you have a current password, then you can log onto the network.
	You have a current password.

**Conclusion**
	You can log onto the network.
```
- An argument is valid if and only if all the premises are true, then the conclusion must be true.
- An invalid argument is one where are **all the premises are true, but the conclusion is false**.
- List of some standard valid arguments - [[Rules of Inference]].

---
### Validity of Arguments

- This is same as [[Tautology in PL#Method 4 - Implication|implication method]] but with the addition that if you make the RHS of the implication false, then you have to make **all of the premises** in the LHS as true to prove it as NOT a tautology. This is the most preferred method for Propositional Logic. 
- An argument is valid if and only if all the premises are true, and then the conclusion is true.
- [[AND (Conjunction)]] is used to connect all the premises.

#### Examples

![[Pasted image 20230915092211.png]]

![[Pasted image 20230915092241.png]]

![[Pasted image 20230915092303.png]]

![[Pasted image 20230915092345.png]]

![[Pasted image 20230915092407.png]]

![[Pasted image 20230915092650.png]]

![[Pasted image 20230915093246.png]]



---
## Inference ( $\models$ )
- If $\text{ KB }$ is Knowledge base (set of all premises or hypothesis or assumptions), then
$$\text{KB } \models Y \text{ if and only if KB }\rightarrow Y \text{is tautology }$$
- "Y is logically inferred by KB" or "KB infers Y"
- If KB is true, then Y should NOT be false. Or else it is NOT a tautology and KB does not infer Y.

```ad-tip
infer == deduce == entail == imply == deduction == derive
```

- The basic idea is the [[Necessary vs Sufficient]]. 
- For $P \rightarrow Q$, if P is true, then Q is true and if Q is not true, then P is not true.
- If $\alpha = KB \rightarrow Y$, then $\alpha$ should NEVER be falsifiable. 

---
### Examples

```ad-example
If it is raining, he'll take umbrella. It is raining.
```
P : "It is raining"
Q : "He'll take the umbrella"

$$
\begin{array}{}
KB = \{\; P \rightarrow Q \;;\; P \}\\
\text{Conclusion: } Q\\
KB \models Conclusion\\
(P \wedge Q) \vee P \models Q
\end{array}
$$
```ad-caution
$KB = \{\; P \rightarrow Q\;; \neg P \;\}$
Conclusion : $\neg Q$

$KB \not\models$ Conclusion
$(P \rightarrow Q) \wedge \neg P \not\models \neg Q$
```

```ad-attention
Propositional formulae can also be used as premises and as conclusion.
```

- It is same as [[Necessary vs Sufficient]].

```ad-example
$P \rightarrow \neg \: Q,\;\neg \: Q \:\models\: \neg \: Q$ is not a tautology.
```

![[Pasted image 20230914231615.png]]

---
![[Pasted image 20230914230253.png]]
![[Pasted image 20230914230309.png]]

- `1` means that "If Q is true, then P is true". But converse $\not\equiv$ implication.
- `6` and `7` are NOT true, because since P is false, Q can be anything.

---
```ad-example
(P is true and Q is true) implies (P is true)

(P and Q) implies P
```
- This is true since for ($P \wedge Q$) to be true, P has to be true.

```ad-example
(P is true OR Q is true) implies (P is true)

(P OR Q) implies P
```
- This is false since ($P \vee Q$) to be true, there are three combinations i.e. P can be anything. So it is not sure that it implies P is true

----
$$
(P \wedge Q)\rightarrow Q \text{ is a tautology, if and only if} 
$$
- Q is the logical consequence of $P \land Q$ 
- Q is logically inferred by $P \land Q$
- $P \land Q \models Q$
- $P \land Q$ infers $Q$
- $P \land Q$ logically implies $Q$

```ad-tip
logical consequence == logical inference == logical implication == logical entailment
```

---

```ad-summary
- The analysis of valid arguments is all about proving whether a given compound propsition $\alpha = KB \rightarrow Y$ is a tautology or not.
```
