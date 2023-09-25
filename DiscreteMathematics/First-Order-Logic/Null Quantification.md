---
pdf: lec-38
date: 2023-09-25-13:01
version: DM-2024
---
- When an expression contains a part where the quantifier has no effect is called null quantification.
- If there is proposition in a FOL expression, or if a predicate in the FOL expression does not contain the free variable which is bounded by the quantifier, then the entire expression is called null quantification.

$$
\forall x\; (P(x) \; \lor \; A)
$$
- $A$ does not contain the free variable $x$ which can be bounded by the quantifier $\forall$. 
- A can be either a proposition itself or a predicate over some variable other than $x$.

- For validity check of FOL expression which are null quantified, only $A$ has be taken as cases in [[Validity of FOL expressions#Null Quantification Null Quantified Expressions|by-case]] method.
- In by-case method, if the any of the cases gives out an implication rather than giving the same result for both `LHS` and `RHS`, then check which implication of the result if valid i.e. LHS -> RHS or RHS -> LHS.
