- Based on the domain, if there is an English FOL statement P, then $\psi$ is the corresponding FOL expression.
	- If P is true, then $\psi$ must be true
	- If P is false, then $\psi$ must be false
	- $P \equiv \psi$ i.e. P is logically equivalent to $\psi$

## Quantifiers with restricted domains

- By default, if unspecified, the domain is assumed to consist everything.

**Example**: 
1. $\forall x \; P(x) \equiv$ for every x in Domain D, P(x) is true $\equiv$ for every x, P(x) is true
2. $\exists x \; P(x) \equiv$ for some x in Domain D, P(x) is true $\equiv$ for some x, P(x) is true

- But the quantifiers can be used with restricted domains.

**Example** : 
1. $\forall x< 0\; (x^2 > 0) \equiv$ For all $x < 0,\; x^2 > 0 \equiv$ For every real number x < 0, $x^2 > 0$ 
2. $\forall y \not= 0\; (y^3 \not= 0) \equiv$ For all $y \not= 0, \; y^3 \not= 0 \equiv$ Cube of non-zero real numbers is non-zero
3. $\exists z > 0\; (z^2 = 2) \equiv$ For some z > 0, $z^2 = 2$


---
## Relevant elements in the domain U

![[Pasted image 20230923072528.png]]

- To make the universal quantifier false, the counter example has to be from the relevant elements.
- To make the existential quantifier true, the witness has to be from the relevant elements.
- We should make a translation which does not consider when a non-relevant element makes the universal quantifier false or existential quantifier true.
---
## Fundamental (Frequently used) expression of FOL

```ad-note
- `All` , `Only`  = $\forall$
- `Some` = $\exists$
- $\forall$ uses $\rightarrow$
- $\exists$ uses $\land$
```

### All P's are Q's
$$
\forall x\; (P(x) \rightarrow Q(x))
$$
### Some P's are Q's
$$
\exists x\; (P(x) \land Q(x))
$$

### No P's are Q's
$$
\forall x\; (P(x) \rightarrow \neg Q(x))
$$
$$
\neg \exists x\; (P(x) \land Q(x))
$$

### Some P's aren't Q's $\equiv$ Not all P's are Q's
$$
\exists x\; (P(x) \land \neg Q(x))
$$
$$
\neg \forall x\; (P(x) \rightarrow Q(x))
$$

### Only P's are Q's
$$
\forall x\; (Q(x) \rightarrow P(x))
$$
$$
\forall x\; (\neg P(x) \rightarrow \neg Q(x))
$$

### All and only P's are Q's
$$
\forall x\; (P(x) \leftrightarrow Q(x)) 
$$
```ad-important
lec-16.pdf Pg No. 62 - Restricted domain example
```

---

> [!tip] Look at all the examples in the pdf
> DM-24/MOD-4-FOL/lec-10-17.pdf
> DM-23/First-Order-Logic/english-fol_translation.pdf

> [!caution] One Confusing case you have to be careful
> #### Not all P's are Q's
> - Not all cats are fluffy == there is some cat which is not fluffy
> - Not all cats are fluffy is right and "All cats are not fluffy" is ambiguous, it gives two meanings in english.

---



 

