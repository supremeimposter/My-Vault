---
tags:
  - DiscreteMath/Combinatronics
---
# Counting Nothing

While in **combinations** and **permutations**, "doing nothing" is counted as one way, there are cases where nothing **won’t** be considered at all. Let me tease your brain with some scenarios.  

### **1. Probability of an Impossible Event**  
If an event can never happen, its probability is **zero**, not one.  

📝 **Example:**  
- Rolling a **7** on a standard six-sided die? **Impossible!**  
  $$
  P(\text{rolling 7}) = 0
  $$
- Drawing a **red king** from a deck that has no red kings?  
  $$
  P(\text{red king}) = 0
  $$

Here, "nothing happening" isn't counted as one way—it just **doesn’t exist** in the sample space.  


### **2. The Number of Ways to Distribute Objects if Zero is Not Allowed**  

📝 **Example:**  
- You have **5 chocolates** and **3 kids**. Each kid must get at least **one chocolate**.  
  - Can you give a kid **zero chocolates**? **No!**  
  - The ways where a kid gets nothing aren’t counted because they **violate the rule**.  

If we counted cases where a kid got zero, we’d be breaking the problem’s conditions.  

### **3. Division by Zero in Counting**  

📝 **Example:**  

- Suppose a formula involves **dividing by r!** in combinations.  
  
$$
nCr = \frac{n!}{r!(n - r)!}
$$
  
  What happens if $( r = -1 )$?  
  - **You can’t choose -1 objects!**  
  - And, factorials don’t exist for negative numbers. **So, no valid way exists!**  

This is different from choosing 0 objects, which is defined.  

### **4. Set Theory – Empty Sets in Some Contexts** 

📝 **Example:**  

- Suppose you’re picking a **team of at least one person** from 10 people.  
  - If we allow **zero people**, we’d count the empty set.  
  - But if the problem says **"at least one,"** the empty selection is **not valid** and gets ignored.  

Similarly, if you ask for the **minimum number** in a list, but the list is empty, there's **no valid answer.**  


### **5. Physical Restrictions**  

📝 **Example:**  
- You’re arranging **3 books on a shelf**.  
  - If there are **zero books**, the question **doesn’t make sense!**  
  - You can't arrange **what doesn’t exist.**  

- You’re selecting a **leader** for a team.  
  - If the team has **zero members**, there’s no leader!  
  - The number of ways to do this isn’t 1, it’s **not possible at all.**  


🔥 **Takeaway:**  
Nothing is counted **only when it makes sense mathematically**. But if a problem says:  
- "At least one" → **Empty cases are ignored**  
- "Must exist" → **Nothing isn’t valid**  
- "Impossible events" → **Zero ways, not one**  
- "Division by zero" → **Breaks math!**  

Math **loves** zero, but only when it plays by the rules. 😉 
