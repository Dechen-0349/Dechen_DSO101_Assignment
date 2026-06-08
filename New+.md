# PART 1 - YAML

---

## Definition:

YAML (YAML Aint Markup Language) is a language used for writing vonfiguration files and commonly used in `GitHub Actions, Docker Compose `and` Kubernetes.`

**YAML is important:**

- Automation of tasks
- Define the workflow
- Configure pipelines

### YAML Syntax Basics

**1. Key-Value Pair**

This is the most basic YAML syntax
 for eg:
```bash
 key - name
 value - Dechen
 ```

* There must be a colon `:` separating the key and value pairs abd the colon should have space after the colon.

---

**2. Indentation**

YAML uses spaces to show the structure or hierarchy

for eg: The student has name and age

```bash
student:
    name: Dechen # the indentation is 2 space not a tab
    age: 20
```

---

**3. Lists**

It uses a hyphen `-`

```bash
skills:
  - Docker
  - GitHub Actions
  - Linux
```

---

# PART 2 - JavaScript Object Notation (JSON)

## Definition

JSON is a way to organize information similar to YAML. It is used in programming for:

* APIs
* Web Applications
* Data Storage
* Configuration FIles
* Communication between client and server i.e, frontend and backend.

---

## Important JSON rules:

**1. Data is inside curly braces {}**

**2. Keys must use the double quotation**

for eg:
```bash
{
    "name": "Dechen"
}
```

**Separate items using comma `,`**

If there are more than one item then the next item in the key-value format is separated by a comma. The lasrt item doesnot have a comma.

```bash
{
    "name": "Dechen",
    "age": 20,
    "color": "red"
}
```

### JSON Data Types

1. String / Text
```bash
{
  "name": "Dechen"
}
```

2. Number 
```bash
"age": 20
```

3. Boolean
```bash
"student": true

"student": false
```

4. Array or List
```bash
"skills": ["Docker", "YAML", "Git"]
```

5. Object 
```bash 
"address": {
  "country": "Bhutan",
  "city": "Phuntsholing"
}
```

---


