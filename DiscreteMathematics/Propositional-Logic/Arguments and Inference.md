
## Arguments




---
## Inference ( $\models$ )
- If $\text{ KB }$ is Knowledge base (set of all premises or hypothesis or assumptions), then
$$\text{KB } \models Y \textbf{ if and only if KB }\rightarrow Y \text{is tautology }$$
- "Y is logically inferred by KB" or "KB infers Y"
- If KB is true, then Y should NOT be false. Or else it is NOT a tautology and KB does not infer Y.

```ad-tip
**infer == deduce == entail == imply == deduction == derive**
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



```ad-summary
- The analysis of valid arguments is all about proving whether a given compound propsition $\alpha = KB \rightarrow Y$ is a tautology or not.
```
