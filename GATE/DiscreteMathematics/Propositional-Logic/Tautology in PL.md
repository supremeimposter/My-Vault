```ad-hint
When verifying for tautology in bi-implication, check if the LHS and RHS of bi-implilcation are equivalent using by-case method. 
If $\alpha \equiv \beta$, then $\alpha \leftrightarrow \beta$ is a tautology.
```

## Tautology verification

### Method 1 - Truth table
- Construct truth table and verify if all the values are True.
---
### Method 2 - By-case 
- If both cases are True, then the given proposition is a tautology.
- For any case, it should not give False.
	![[Pasted image 20230912104202.png]]
	- Case (a) and (b) are True for whatever values of P, then it means $\alpha$ is a tautology.
	
![[Pasted image 20230912122838.png]]

----
### Method 3 - Simplification
- Usage of all the [[Important Logical Equivalences]] to simplify the given proposition $\alpha$ to see if the result if true. If the simplification does not result to True, then it is not a tautology.

![[Pasted image 20230912122949.png]]

---
### Method 4 - Implication 
- This method is only for propositions with [[Implication]].
- The only case when implication becomes false is when T $\rightarrow$ F and there are two approaches to verify whether this state is possible in the given proposition $\alpha$.

1. Make the LHS of the implication true by adjusting the propositional variables (atomic propositions) accordingly. Now try to make the RHS of the implication false. If it doesn't become false, then the given proposition $\alpha$ is a tautology.
2. Make the RHS of the implication false by adjusting the propositional variables (atomic propositions) in the RHS accordingly. Now try to make the LHS of the implication true. If it doesn't become true, then the given proposition is a tautology.

```ad-tip
Choose either of the approaches based on the number of cases each approach offers. The lesser the number of cases, the better as it is time-efficient.

![[Pasted image 20230912164347.png]]
```


![[Pasted image 20230912123724.png]]
![[Pasted image 20230912123734.png]]

```ad-tip
This is the procedure even when $\alpha \text{ and } \beta$ are propositional formula and asked to prove $\alpha \rightarrow \beta$ is a tautology.
```

- $\neg P \wedge (P \vee Q) \rightarrow P$ is not a tautology
- $\alpha = \neg P \wedge (P \vee Q) \rightarrow P$ and $\beta = P$
![[Pasted image 20230914222307.png]]

- $P \rightarrow (\neg Q \vee R \vee \neg R)$ is a tautology
![[Pasted image 20230914222555.png]]

