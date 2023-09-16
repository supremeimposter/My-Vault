
## Objects
- Objects or constants are the elements in a domain.
- object $\equiv$ constant $\equiv$ element
```ad-example
People, Houses, numbers, colors, baseball games, wars, $\ldots$
```

## Domain
- In first-order logic, each variable refers to some object in a set called the domain of discourse or universe of discourse.

> [!attention] 
> - The domain is non-empty, unless explicitly specified otherwise.
> - The domain of every variables in a FOL expression is same, unless specified otherwise.

## Relations or Predicates
- Relations over or between or among objects is called predicates.
- A logical expression containing some variable that becomes a proposition when we substitute any particular value from the universe for this variable is called a predicate.
- A predicate is NOT a proposition until a variable is substituted.

```mermaid
flowchart LR
	A[Object] --> B[[Predicates]] --> C[Proposition]
```

1. Predicates over 1 variable are called unary predicate => property.
2. Predicates over 2 variables are called binary predicate => relationship between two objects.
3. Predicates over n variables are called nary predicates => relationship between n objects.

### Property
- Every object in a domain has one or more properties.
- Unary predicates over one variable are called properties.
```ad-example
red, round, long, bigger than, brother of, part of, comes between, $\ldots$
- All of the properties return a proposition.
```


```ad-example
![[Pasted image 20230916170121.png]]

Predicate 1 => on (x, y) : "x is on y"

on (a, b) : "a is on b" => true.

---
Predicate 2 => red(x) : "x is red"

red(a) : "a is red" => false.

```


```ad-note
- A predicate is a function that returns true or false. Hence they are called propositional function.
- predicate $\equiv$ propositional function $\equiv$ relation
```

## Transformations (Functions)
- Functions map objects to another object in the same domain.
- Functions should be defined with all the edge and corner cases so as not to transform an object into an object that is not in the domain.

```mermaid
flowchart LR
	A[Object] --> B[[Function]] --> C[Object]
```

```ad-example
father_of(x), best_friend(x), add(x, y), $\ldots$
- All of the above take in one object and return another object

----
![[Pasted image 20230916170121.png]]

- hat(c) = b
- hat(b) = a
- hat(a) is not defined
```


```ad-info
- Predicates over 0 variables are called 0-ary predicate which is a proposition.
	- Example
		1. p : "a is green" => true
				- It takes no variable

- Function with 0 argument is an object from the domain
	- Example 
		1. planet() : Earth
```

### Type-checking Table
|             | operate on   | and produce   |
| ----------- | ------------ | ------------- |
| Connectives | propositions | a proposition |
| Predicates  | objects      | a proposition |
| Functions   | objects      | an object              |

## Quantification
- Quantification means "the expression or measurement of the quantity of something" in English.
- This concept helps in asserting that a certain property holds for all elements or that it holds for some element.
- In logic, **all** means "for all" and **some** means "at least once" elements in the domain.

$$
\forall \equiv \text{ for all} \equiv \text{ Universal Quantifier}
$$
$$
\exists \equiv \text{ there exists } \equiv \text{ Existential Quantifier}
$$

- Counter examples are used to make a statement false in quantification.

```ad-example
D(x) : $\mathbb{N}$ which means x $\in \mathbb{N}$

P(x) = x is even
Q(x) = x is prime
---

$\forall x P(x)$ : Every natural number is even
- The above statement is false
- Counter example : 5
----
$\exists x P(x)$ : There is some x that is prime
- The above statement is true
---
$\exists x \neg P(x)$ : There is some x that is not even
- The above statement is true
```

---

```ad-summary
![[Pasted image 20230916174912.png]]
![[Pasted image 20230916174959.png]]
```
