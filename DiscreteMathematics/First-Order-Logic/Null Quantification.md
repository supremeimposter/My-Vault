---
pdf: lec-38
date: 2023-09-25-13:01
version: DM-2024
---

- When an expression contains a part where the quantifier has no effect (though the variable is in the scope of the quantifier) is called null quantification. 
- This idea is also discussed [[Bounded and Free Variables#When does quantifiers have no effect on variables?|here]].

### When does an FOL expression becomes null quantified?

1. There is a proposition in the expression, or
2. A predicate in the expression does NOT contain the free variable which is bounded by the quantifier
$$
\forall x\; (P(x) \; \lor \; A)
$$
- $A$ does not contain the free variable $x$ which can be bounded by the quantifier $\forall$ or
- A can either be a proposition itself or be a predicate over some variable other than $x$.

> [!search] How to identify null quantification from the question?
> There will be a description stating that $A$ does not contain the free variable $x$ for the FOL expression $\forall x\; (P(x) \; \lor \; A)$.

- For validity check of FOL expression which are null quantified, only $A$ has be taken as cases in by-case method.
	- case 1 : A = True
	- case 2 : A = False

> [!warning] Do not take any bounded variable predicate as cases.
> $\forall x\; P(x) \lor A$, A can be a case, but P(x) CANNOT be cases.

![[Pasted image 20230926120825.png]]

> [!attention] A pair of cases can be false in this verification
> For a case, if both LHS = RHS = False, then it is still true, unlike [[Tautology in PL#Tautology verification#Method 2 - By-case|tautology verification by by-case method]].

#### There is a chance for a single implication to be valid

- In by-case method, if the any of the cases does NOT match for both `LHS` and `RHS`, then check if any of the resultant expression imply the other resultant expression i.e. LHS -> RHS or RHS -> LHS.
	- If LHS -> RHS, then only LHS -> RHS is valid.
	- If RHS -> LHS, then only RHS -> LHS is valid.

Example 1
![[Pasted image 20230926160934.png]]

Example 2
![[Pasted image 20230926161500.png]]

---

### Important results

- A and P does not contain the free variable x
$$
1.\; \forall x\; (A \rightarrow P(x)) \equiv A \rightarrow \forall x\; P(x)
$$
$$
2. \; \forall x\; (P(x) \rightarrow A) \not\equiv \forall x\; P(x) \rightarrow A
$$
$$
3. \; \exists x\; (A \rightarrow P(x)) \equiv A \rightarrow \exists x\; P(x)
$$
$$
4. \; \exists x\; (P(x) \rightarrow A) \not\equiv (\exists x\; P(x) \rightarrow A)
$$

> [!brain] Trick to remember this result
> You should not cross over your sibling ($\forall x\;$ and P(x) are siblings), if you do it its invalid.

![[Pasted image 20230926162901.png]]

![[Pasted image 20230926162941.png]]

![[Pasted image 20230926163041.png]]

![[Pasted image 20230926163052.png]]