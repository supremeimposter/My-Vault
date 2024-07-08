---
pdf: lec-5A, lec-5B, lec-5C, lec-5D, lec-6A, lec-8, lec-9B-9C
module: 1
lecture: 5A, 5B, 5C, 5D, 6A, 8, 9B
date: 2023-11-05T13:40:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS/RelationalModel
  - DBMS/RelationalModel/IntegrityConstraints
  - DBMS/RelationalModel/FunctionalDependency
  - DBMS/RelationalModel/Keys
---
# Functional Dependency (FD)

- Functional dependencies are defined for schema as this is one of the [[Relational Model#Integrity Constraint (IC)|Integrity constraints]], so all possible legal instances must satisfy them.
- An attribute can be functionally dependent on another attribute.

- Let $A, B$ be two non-empty attributes of a relation $R$, we say that $A \to B$ iff whenever two tuples have same $A$ value then those tuples also have same $B$ value.
- If a column $A$ of a table uniquely identifies a column $B$ of the same table, then it can be represented as $A \to B$.
- $A \to B$ iff $\forall_{ t_{1}, t_{2} }  \,\, (\,(t_{1}.A = t_{2}.A) \Rightarrow (t_{1}.B = t_{2}.B)\,)$
- No $A$ values are mapped to two or more $B$ values.

![[Functional Dependency-20240705194126728.webp]]

> [!template] 
> If $A$ and $B$ are two non-empty attributes of a relation $R$ and if
> $$
> A \to B
> $$
> - $A$ functionally determines $B$
> - $A$ determines $B$
> - $A$ implies $B$
> - $B$ is functionally determined by $A$
> - $B$ is functionally dependent on $A$
> - $B$ is determined by $A$

- Functional dependencies are [[Implication|implications]]. Its converses are not necessarily true.

> [!example] 
> 
> ````col
> ```col-md
> flexGrow=1
> ===
> $A \rightarrow B$ holds
> 
> ![[Functional Dependency-20231113155546133.webp]]
> ```
> ```col-md
> flexGrow=1
> ===
> $A \rightarrow B$ does not hold
> 
> ![[Functional Dependency-20231113155602892.webp]]
> ```
> ````
> 
> ![[Functional Dependency-20240706093607544.webp|$\alpha \to \beta$ does not hold]]

- Functional dependencies can also be defined between set of attributes.

| FD                              | Description                                                                                  |
| ------------------------------- | -------------------------------------------------------------------------------------------- |
| $\{A, B\} \rightarrow \{C\}$    | whenever $AB$ combination is same in two tuples, then $C$ must be same in those two tuples.  |
| $\{A, B\} \rightarrow \{B, C\}$ | whenever $AB$ combination is same in two tuples, then $BC$ must be same in those two tuples. |

> [!convention] 
> Notations can be abused while writing two or more sets i.e. $AB \rightarrow C$ 
> 
> $A, B, C$ represent single attributes
> $\alpha, \beta, \gamma, X, Y, Z$ represent set of attributes (can also be a single-ton set)
> 
> $A \leftrightarrow B$ means $A \to B$ and $B \to A$

Consider a relation $R$, if the LHS of a FD is a key, then the FD holds for any legal instance of $R$ whatever the RHS of an FD is.
In a relation $R\,(A, B, C, D)$, the set of all the attributes determines any or all of the attributes of $R$, since there are no duplicate records in a relational model. If $X = \{A, B, C, D\}$ then for any legal instance of $R$,

> [!example] 
> 1. $X \to AB$ 
> 2. $X \to AC$
> 3. $X \to ABC$
> 4. $X \to D$
> 5. $X \to ABD$
> 6. $X \to X$

- If we say that a relation $R$ satisfies a FD, then we are asserting a constraint on the schema of $R$.

---
> [!header] Functional Dependency on Schema vs Instance

> [!remember] 
> Functional dependencies are NOT defined for an instance. They are defined for the relation schema.

- If some legal instance of a relation $R$ does not satisfy functional dependency ${} X \rightarrow Y$, then schema can never satisfy functional dependency $X \rightarrow Y$.
- A schema holds for a functional dependency $X \to Y$, iff all the possible legal instances satisfies $X \to Y$.
- Even if the schema does not specify a functional dependency $X \rightarrow Y$, then it is possible that some instance can maintain the functional dependency $X \rightarrow Y$.

> [!example] 
> Consider the relation instance and the functional dependencies below. Which of these FDs hold for the schema.
> 
> ![[Functional Dependency-20240705192422289.webp]]

- By looking at an instance, we are sure about which FD's do not hold, but we cannot be sure about which FD's hold.

- Functional dependencies can be represented using diagrammatic notation, where the attributes in LHS are joined by a straight line and the attributes in RHS are denoted by a arrow pointing towards them.

> [!example] 
> ![[Functional Dependency-20240706101603705.webp]]
> 
> FD1 : $\text{Ssn} \to \text{Ename}, \text{Bdate}, \text{Address}, \text{Dnumber}$
> FD2 : $\text{Dnumber} \to \text{Dname}, \text{Dmgr}\_\text{ssn}$
> 
> ![[Functional Dependency-20240706101934545.webp]]
> 
> FD1 : $\text{Ssn}, \text{Pnumber} \to \text{Hours}$
> FD2 : $\text{Ssn} \to \text{Ename}$
> FD3 : $\text{Pnumber} \to \text{Pname}, \text{Plocation}$

- An FD $AB \to C$ is same as $BA \to C$, since both the LHS and RHS are sets of attributes.
- It is possible that $A \to B$ and $B \to A$, but not necessary.

---
## Types of Functional Dependency

### Trivial FD

- FD's which always hold true in every instance of every relation.
- $X \rightarrow Y$ is a trivial FD iff $X \supseteq Y$
	- $A \rightarrow A$
	- $AB \rightarrow A$
	- $ABC \rightarrow BC$

![[Functional Dependency-20240708191227194.webp]]

### Non Trivial FD

- A FD which is not trivial
- $X \rightarrow Y$ is non-trivial iff $X \not\supseteq Y$
	- $A \rightarrow AB$
	- $AB \rightarrow AC$
	- $A \rightarrow BC$

- If $A \to B$ then we can say $A \alpha  \to B$, but the converse is not true.
- In any FD, the trivial part can be removed from the RHS i.e. common attributes of LHS and RHS can be removed from RHS.

### Completely Non Trivial FD

- $X \rightarrow Y$ is completely non-trivial iff $X \cap Y = \phi$
	- $AB \rightarrow CD$
	- $PQR \rightarrow MNO$
- Every completely non-trivial FD is also a non-trivial FD.

> [!note] 
> There is no concept as "Semi Trivial FD" in standard resources.

> [!pdf] Look at an example on lec-05A.pdf pg.no 116-121 

---
> [!lecture] Lecture-6A
>> [!youtube] [Normalization Lecture 6A - Full, Partial Functional Dependency | Transitive FD |DBMS | Deepak Poonia - YouTube](https://www.youtube.com/watch?v=SN1Fa1c5Kg8)

### Partial and Full FD

Non-trivial FD's with single attributes on RHS are considered for [[Normal Forms|Normal forms]].

Consider a relation $R$ and $\alpha, \beta$ are sets of attributes of $R$,

$\alpha \to \beta$ is a full FD if there is no proper subset of $\alpha$ that determines $\beta$ i.e. $\beta$ is completely dependent on $\alpha$.

![[Functional Dependency-20240708222757129.webp]]

$\alpha \to \beta$ is a partial FD if there exists a proper subset of $\alpha$ that determines $\beta$ i.e. $\beta$ is partially dependent on $\alpha$.

![[Functional Dependency-20240708221545318.webp]]

### Transitive FD

Let $\alpha, \beta$ be sets of attributes such that $\alpha \to \beta$ holds but $\beta \to \alpha$ does not hold. Let $A$ be an attribute that does not belong to either $\alpha$ or $\beta$ and for which $\beta \to A$ holds. Now $A$ is transitively dependent on $\alpha$.

![[Functional Dependency-20240708230213625.webp]]

> [!question] Why $Y \to X$ should not hold in Transitive FD?
> ![[Functional Dependency-20240708230546126.webp]]

---
## Functional Dependency Laws

> [!lecture] Lecture-5B

<u>Reflexivity Law</u>

- If $X \supseteq Y$, then $X \rightarrow Y$
- These FD's are called trivial FD's.

<u>Augmentation Law</u>

- If $X \rightarrow Y$, then $XZ \rightarrow YZ$

````col
```col-md
flexGrow=1
===
#### Direct Proof

![[Functional Dependency-20240706125709500.webp]]
![[Functional Dependency-20240706125649266.webp]]
```
```col-md
flexGrow=1
===
#### Proof by Contradiction

![[Functional Dependency-20240706125623769.webp]]
```
````

<u>Transitivity Law</u>

- If $X \rightarrow Y$ and $Y \rightarrow Z$, then $X \rightarrow Z$

![[Functional Dependency-20231106083809779.webp|Direct Proof]]

- The above three inference rules for FD's are called **Armstrong's Axioms**
- They can be used to prove further FD laws.

<u>Decomposition Law (Split on RHS)</u>

- If $X \rightarrow YZ$, then $X \rightarrow Y$ and $X \rightarrow Z$. 

![[Functional Dependency-20231106085159200.webp|Direct Proof]]

$A_{1}A_{2} \cdots A_{n} \to B_{1} B_{2} \cdots B_{n}$ is equivalent to,

- $A_{1}A_{2} \cdots A_{n} \to B_{1}$, 
- $A_{1}A_{2} \cdots A_{n} \to B_{2}$, 
- $\vdots$
- $A_{1}A_{2} \cdots A_{n} \to B_{n}$

> [!suggestion] 
> When given new laws to prove in the exam, it is better to use direct proof rather than Armstrong axioms as it will complicate the proof.

<u>Union Law (Combine on RHS)</u>

- If $X \rightarrow Y$ and $X \rightarrow Z$, then $X \rightarrow YZ$.

![[Functional Dependency-20231106092216856.webp|Direct Proof]]

<u>Composition Law (Combine on LHS)</u>

- If $X \rightarrow Z$ and $Y \rightarrow Z$, then $XY \rightarrow Z$.

![[Functional Dependency-20240706151842202.webp|Direct Proof]]

> [!summary] 
> - Splitting and combining can be done on RHS
> - Splitting CANNOT be done on LHS, but combining can be done on LHS

<u>Pseudo-Transitivity Law</u>

- If $X \rightarrow Y$ and $WY \rightarrow Z$, then $WX \rightarrow Z$.


> [!summary] 

![[Functional Dependency-20240706163947111.webp]]

More functional dependency laws can be proved using the above laws.

In Non-trivial FD's, we can split on RHS and remove the trivial part from RHS and get completely non-trivial FD.

$$
\begin{split}
\text{Given, }\; 
AB &\to BC \\ 
\text{splitting on RHS,} \; 
AB &\to B \; \text{(Completely Non trivial FD)} \\
AB &\to C \; \text{(Trivial FD)} \\
\end{split}
$$

---
## Closure of Attribute Set

For a relation $R$, a set of functional dependencies $S$ is defined on the schema of $R$.
$$
R\, (A, B, C, \cdots , G)
$$
If $X$ is a set of attributes of $R$, then closure of $X$ with respect to $S$ is the set of all the attributes of $R$ that $X$ can determine.
$$
X_{S}^{+} = \{ Y \mid X \rightarrow Y \} 
$$
Closure of $X$ is denoted by $X^\star$

![[Functional Dependency-20240706201514270.webp|Computing the closure of a set of attributes]]

Closure can be used to determine whether an FD is valid or not.

> [!conflict] 
> Do NOT get confused between a FD notation and closure notation.

> [!example] 
> ![[Functional Dependency-20240706201606323.webp]]
> ![[Functional Dependency-20240706201615202.webp]]
> ![[Functional Dependency-20240706201629024.webp]]
> ![[Functional Dependency-20240706201640687.webp]]

> [!example] 
> ![[Functional Dependency-20240706202203502.webp]]

---
## Keys in terms of Functional Dependencies

In a relation $R\,(A, B, C, D, E)$, if the values of attribute $A$ is guaranteed to never repeat in any of the legal instance, then there is no violation of any of the FDs with $A$ on the LHS i.e. $A \to R$
$$
A^+ = R
$$

Likewise a super key $X$ of $R$, then $X \to R$ is never violated, since super key identifies every record uniquely in any legal instance of $R$ i.e. the values in the super key never repeats in any legal instance.
$$
X^+ = R
$$

### Super Key

- In a relation scheme $R$ , $X$ is a super-key iff $X^{+} = R$.

> [!NOTE]
> Primary key cannot be determined. It is chosen as one of the candidate keys. But there must be one Primary key in Relational Model.

- The attributes which do not appear on the RHS of any FD can be determined only by themselves. Such attributes MUST be a part of every candidate key since they have to be determined to determine all the remaining attributes.

### Candidate Key

- $X$ is a candidate key iff,
	- $X^{+} = R$ and
	- No proper subsets of $X$ can determine all the attributes i.e. $X$ is minimal.
	- $X$ can be a set of attributes as well.
- A candidate key is also a super key.
- If $X$ is a candidate key, then $XY$ cannot be a candidate key, when $Y \not = \phi$.
	- Proper super-sets of candidate keys are definitely NOT candidate keys.

![[Functional Dependency-20240707130531003.webp]]

- Candidate key cannot be concluded from an instance.
- Candidate keys can be found from functional dependencies.

If $X$ is a super key or candidate key and if $Y \to X$, then $Y$ is definitely a super key and if $Y$ is minimal, then $Y$ is also a candidate key.

> [!header] Finding Super Keys from Candidate Keys

Super keys are combination of attributes which contains atleast one of the candidate keys of $R$.

Consider a relation $R\, (A, B, C, G, H, I)$ which has 6 attributes in which the candidate keys are $A, B$ and $G$.

Applying inclusion-exclusion principle,

![[Functional Dependency-20240707140702138.webp]]

Each of the attributes that are added to the candidate keys has two choices, either they can appear or not appear.

![[Functional Dependency-20240707140717662.webp]]

> [!header] Finding Candidate Keys from a given set of FDs

The objective here is to find Candidate Keys and NOT super keys. Since super keys are super sets of candidate keys.

<u>Step 1</u>: Find the attributes which do not appear on the RHS of any FD in the given set and start checking for candidate keys from them. Because they must be a part of every candidate key (and also part of every super key).

> [!tip] Some options can be eliminated after step 1.

If a set of attributes $X$ is not a super key i.e. $X^+ = \{A, B, C, D\}$ then any of those attributes in $X$ i.e. $ABCD$ is not a super key. 
For example, if $A$ is a super key, then $X$ would have been a super key. Similarly, if any of those attributes in $X$ is a super key, then $X$ would have been a super key. 
So, there is no need to check the combinations of such attributes for super key.

Once a single attribute is found out to be a candidate key, then their super sets can be ignored as its super sets cannot be a candidate key.

<u>Step 2</u>: Find the combination of attributes which determine the candidate key. The combination can also be a candidate key if they are minimal.

> [!example] 

![[Functional Dependency-20240707164237630.webp]]

![[Functional Dependency-20240707213209381.webp]]

> [!pdf] More examples on lec-05C.pdf Pg. No. 42

----
> [!lecture] Lecture-5D
## Inferring Functional Dependencies

Functional dependencies can be inferred from an existing set of functional dependencies.

If $S$ is a set of functional dependencies and if $f {}$ is a FD that is inferred by the set ${} S {}$, then it is represented as $S \models f$ which means,
- S infers f
- S implies f
- f follows from S
- f is derived from S

If $S$ does not infer $f {}$, then it is represented as $S \not\models f$.

If two FDs infer each other, it is not necessary that they are the same. For example, $A \rightarrow AB \models A \rightarrow B$ and $A \to B \models A \to AB$ but both $A \to AB$ and $A \to B$ are not equal.

> [!header] Methods to prove Inference of Functional Dependencies 

<u>Method 1</u> : Functional Dependency Laws

- Use the FD laws to prove if $f$ can be inferred from the set of functional dependencies $S$.

> [!example] 
> ![[Functional Dependency-20240708124740000.webp]]

<u>Method 2</u> : Closure of Attribute Set

- If the closure of the LHS of the $f$ contains the RHS, then $f$ can be inferred from the set of functional dependencies $S$.

> [!example] 
> ![[Functional Dependency-20240708124858500.webp]]

---
## Closure of a FD Set

If $S$ is a set of functional dependencies on $R$, then closure of $S$ is the set of all FDs that can be derived from $S$,
$$S^+ = \{f \mid S \models f\}$$

For any set $S {}$, its closure ${} S^+ {}$ is unique. 

Size of closure of a FD ${} F$ is the number of all FD's that can be inferred by $F$. 

> [!NOTE] Questions on size of closure of FD set are not asked since computing such calculations consumes more time.

The size of closure of a FD set $S$ can be computed in steps with respect to the number of attributes on LHS of FDs that can be inferred by $S$.

> [!example] 

Consider a relation $R\, (A, B, C, D)$ and the set of functional dependencies $F = \{ A \to B, B \to C \}$

Number of FDs with 1 attribute on LHS = 11

![[Functional Dependency-20240708161805736.webp]]

Number of FDs with 2 attributes on LHS = 42

![[Functional Dependency-20240708162142712.webp]]

Number of FDs with 3 attributes on LHS = 44

![[Functional Dependency-20240708162408951.webp]]

Number of FDs with 4 attributes on LHS = 15

![[Functional Dependency-20240708162455114.webp]]

Total number of FDs inferred by the set $F$ i.e. $\mid F^+ \mid = 113$.

> [!think] 
> In real life, it is impossible to specify all possible FDs on a relation.

---
## Covering of FD set

If $F$ and $G$ are two sets of functional dependencies, then $F$ covers $G$ iff $F$ infers every functional dependencies of $G$.
$$
F \Rightarrow G
$$
$F$ covers $G$ means all the FDs in $G$ can be derived using FDs in $F$ i.e. all the FDs in $G$ are in $F^+$ i.e. $G \subseteq F^+$.

To find out if $F$ covers those FDs in $G$, use closure of attributes.

![[Functional Dependency-20240708163530290.webp]]

If $F$ covers $G$, it is not necessary that $G$ covers $F$.

But $F$ is equivalent to $G$ iff $F$ covers $G$ and $G$ covers $F$.
$$
F \equiv G \text{ iff } F^+ = G^+
$$

If $S$ is a set of functional dependencies, then ${} S \equiv S^+ {}$

### Extraneous attribute on LHS of a FD
> [!lecture] Lecture-8
- Consider an FD set $F {}$ containing the following FD,
$$
XA \rightarrow Y
$$
- $A$ is extraneous on LHS if ${} Y \in X^+ {}$.


> [!steps] 
1. Find ${} X^+ {}$ in the set $F$.
2. Check if $Y \in X^+$, then $A {}$ is extraneous.


### Removing a Redundant FD


> [!steps] 
1. First make sure all the FDs have a single attribute on the RHS.
2. First remove the FD from the FD set.
3. Find ${} (LHS)^+ {}$ from the current FD set after removing the FD and see if ${} (RHS) \in (LHS)^+ {}$. If it is true then the FD is redundant in the set $F$.


### Minimal Cover of FD set
- Minimal cover ${} F_m {}$ of a FD set $F$ is the **irreducible set of FDs** which is equivalent to $F {}$.
- It is also known as minimal form ${} F_m {}$ or canonical form ${} F_c {}$ or Ir-reducible set of FDs.
- If we remove any attribute or FD from ${} F_m {}$, then ${} F_m \not\equiv F {}$.
- For any set $F {}$, the minimal cover ${} F_m$ does not need to be unique. 
- There can be multiple minimal covers for a set $F$. There can be different minimal covers with different FDs.

> [!steps] 

1. Simplify all the RHS of the FDs (decompose)
2. For all the FDs, find a extraneous attribute on the LHS
3. Eliminate all the redundant FDs.
4. Stop when no more extraneous attribute is on the LHS or no more redundant FD is present.
> [!note] Steps 2 and 3 can be done in any order.


## Redundancies due to FDs
> [!lecture] Lecture-9B

- Trivial FDs do not create redundancies as they always hold.
- Non-trivial FDs in which LHS is NOT a super key may create redundancies in the database.
- Non-trivial FDs with super key as LHS never create redundancies in the database.


## Redundancies due to MVDs
- When there are more than one "many-many" relationships in a single relation, then it creates Multi-valued Dependency.