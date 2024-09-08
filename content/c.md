---
title: C Programming Tutorial in Hindi
description: This is Tutorial of C language
slug: c
date: 26/10/2024
author: Dev
image: /c language.jpg
---

Certainly! Here's an expanded description for the "C Programming Tutorial in Hindi" course:

---

# C Programming Tutorial in Hindi

## Description
This comprehensive tutorial is designed to teach the C programming language to Hindi-speaking learners. Whether you are a complete beginner or have some prior programming experience, this course will guide you through the fundamental concepts and advanced features of C programming. The course is structured to provide a solid foundation in C, enabling you to write efficient and effective code.

### Course Outline
1. **Introduction to C Programming**
   - Overview of C Language
   - History and Evolution
   - Setting Up the Development Environment

2. **Basic Concepts**
   - Syntax and Structure
   - Data Types and Variables
   - Operators and Expressions

3. **Control Structures**
   - Conditional Statements (if, else, switch)
   - Loops (for, while, do-while)

4. **Functions**
   - Defining and Calling Functions
   - Function Parameters and Return Values
   - Scope and Lifetime of Variables

#### Hello World

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

# Addition Of two numbers
```c
#include <stdio.h>

int main() {
    int num1, num2, sum;

    printf("Enter two integers: ");
    scanf("%d %d", &num1, &num2);

    sum = num1 + num2;

    printf("Sum: %d\n", sum);
    return 0;
}
```

# Factorial Code
```c
#include <stdio.h>

int main() {
    int n, i;
    unsigned long long factorial = 1;

    printf("Enter an integer: ");
    scanf("%d", &n);

    // Show error if the user enters a negative integer
    if (n < 0)
        printf("Error! Factorial of a negative number doesn't exist.\n");
    else {
        for (i = 1; i <= n; ++i) {
            factorial *= i;
        }
        printf("Factorial of %d = %llu\n", n, factorial);
    }

    return 0;
}
```

# Prime Number Code
```c
#include <stdio.h>
#include <stdbool.h>

bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i <= n / 2; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    int n;

    printf("Enter an integer: ");
    scanf("%d", &n);

    if (isPrime(n))
        printf("%d is a prime number.\n", n);
    else
        printf("%d is not a prime number.\n", n);

    return 0;
}
```
### Fibonacci series
#include <stdio.h>
```c
int main() {
    int n, t1 = 0, t2 = 1, nextTerm;

    printf("Enter the number of terms: ");
    scanf("%d", &n);

    printf("Fibonacci Series: ");

    for (int i = 1; i <= n; ++i) {
        printf("%d, ", t1);
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }

    return 0;
}

