In compound propositions, there are three classes of propositions
1. Tautology 
2. Contradiction
3. Contingency
![[Pasted image 20230911165832.png]]
![[Pasted image 20230911165458.png]]

- These 3 classes are mutually exclusive.
- Contingency is neither tautology nor contradiction.

![[Pasted image 20230911170118.png]]
- Truth table can also be used to verify whether a compound proposition is a Tautology or Contradiction or Contingency.
![[Pasted image 20230911170304.png]]
![[Pasted image 20230911170319.png]]

## Tautology verification
### Method 1 - Truth table
- Construct truth table and verify if all the values are True.

### Method 2 - By-case 
- If both cases are True, then the given proposition is a tautology.
	![[Pasted image 20230912104202.png]]
	- Case (a) and (b) are True for whatever values of P, then it means $\alpha$ is a tautology.
![[Pasted image 20230912122838.png]]

### Method 3 - Simplification
- Usage of all the [[Important Logical Equivalences]].
![[Pasted image 20230912122949.png]]

### Method 4 - Implication 
- This method is only for propositions with [[Implication]].
- The only case when implication becomes false is when T $\rightarrow$ F and there are two approaches to verify whether this state is possible in the given proposition $\alpha$.
1. Make the LHS of the implication true by adjusting the propositional variables (atomic propositions) accordingly. Now try to make the RHS of the implication false. If it doesn't become false, then the given proposition $\alpha$ is a tautology.
2. Make the RHS of the implication false by adjusting the propositional variables (atomic propositions) in the RHS accordingly. Now try to make the LHS of the implication true. If it doesn't become true, then the given proposition is a tautology.
![[Pasted image 20230912123724.png]]
![[Pasted image 20230912123734.png]]


## Logical Equivalence $\Leftrightarrow$ or $\equiv$

- If two (compound) propositions or expressions $\alpha$, $\beta$ have the same truth table or if they are equal for all cases, then they are logically equivalent.
- If $\alpha$, $\beta$ are logically equivalent $\alpha \equiv \beta$, if and only if their $\alpha \leftrightarrow \beta$ is a tautology. But if they are not logically equivalent, then they are contradiction.
- If $\alpha \leftrightarrow \beta$ is a tautology ($\alpha \equiv \beta$), then $\alpha \rightarrow \beta$ is a tautology and $\beta \rightarrow \alpha$ is a tautology.

![[Pasted image 20230911171033.png]]

![[Pasted image 20230911215146.png]]
[[Important Logical Equivalences]]
## Analysis of Propositions

### Method 1
- Build truth table along with all the helper columns to verify two (compound) propositions.
- It is inefficient and time-consuming.

![[Pasted image 20230911170904.png]]

### Method 2
- Consider cases to check whether two propositions $\alpha$ and $\beta$ are logically equivalent or not.
### Cases choice

- If there are any number of variables in the given two compound propositions, the following choices can be made.
- If there are 2 variables P and Q, then only P can be taken as cases leading to 2 cases, or both P and Q can be taken as cases leading to 4 cases.
- In each case, both propositions $\alpha$ and $\beta$ must be equal. Even if one of the cases fail, then stop going for further cases, as they are not logically equivalent.

![[Pasted image 20230911221204.png]]
![[Pasted image 20230911221244.png]]

- Example 3
	- When p is taken as the cases
	![[Pasted image 20230911220058.png]]

	- When q is taken as the cases
	![[Pasted image 20230911220150.png]]

- Example 4
	- Solving with 4 cases
	![[Pasted image 20230911221641.png]]

	- Solving with 2 cases
	![[Pasted image 20230911221656.png]]

- Example 5
![[Pasted image 20230911222230.png]]

- Example 6 
	- If they are not logically equivalent, then their bi-implication is a contradiction.
	![[Pasted image 20230911225806.png]]

