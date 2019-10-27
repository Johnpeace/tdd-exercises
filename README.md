# Test exercises for practicing TDD



# Counter
Counter is a simple web app that is used to increment and decrement a number.


## Stage A

* **WHEN** a user clicks the Increment button then the number **SHOULD** increment by one.
* **WHEN** a user clicks the Decrement button then the number **SHOULD** decrement by one.


***Note:** Initial number is **predefined***\
***Note:** ReactJS & HTML, Test Driven Development (Jasmine, Jest, Ava). No CSS*

**Acceptance Criteria:**
* A test suit **SHOULD** check for basic functionality


---

## Stage B

* **WHEN** a user clicks the Increment button then the number **SHOULD** increment by one.
* **WHEN** a user clicks the Decrement button then the number **SHOULD** decrement by one.

***Note:** Initial value SHOULD come from a mocked backend API.*\
***Note:** ReactJS & HTML, Test Driven Development (Jasmine, Jest, Ava)*

**Acceptance Criteria:**
* A test suit **SHOULD** check for basic functionality
* A test suit **SHOULD** check for mocked number functionality

---

## Stage C

* **WHEN** a user clicks the Increment button then the number **SHOULD** increment by one.
* **WHEN** a user clicks the Decrement button then the number **SHOULD** decrement by one.
* **WHEN** a user clicks the Randomize button then the number **SHOULD** be replaced by a random number.

***Note:** Initial value SHOULD come from a mocked backend API.*\
***Note:** ReactJS & HTML, Test Driven Development (Jasmine, Jest, Ava)*

**Acceptance Criteria:**
* A test suit **SHOULD** check for basic functionality
* A test suit **SHOULD** check for mocked number functionality
* A test suit **SHOULD** check for randomizer functionality

---

## Stage D (Optional)

* **WHEN** a user clicks the Increment button then the number **SHOULD** increment by one.
* **WHEN** a user clicks the Decrement button then the number **SHOULD** decrement by one.
* **WHEN** a user clicks the Randomize button then the number **SHOULD** be replaced by a random number.
* **WHEN** a user clicks on the Add Counter button another counter with the same functionality **SHOULD** be added.

***Note:** Initially there should be one counter with Increment, Decrement and Randomize functionality, and when the user clicks on the button __Add Counter__ a new counter should appear with the initial value from the mocked backend.*\
***Note:** Initial values SHOULD come from a mocked backend API.*\
***Note:** ReactJS & HTML, Test Driven Development (Jasmine, Jest, Ava)*
***Note:** Data management libraries (Redux, mobx) **can** be added*

**Acceptance Criteria:**
* A test suit **SHOULD** check for basic functionality
* A test suit **SHOULD** check for mocked number functionality
* A test suit **SHOULD** check for randomizer functionality
* A test suit **SHOULD** check for adding counter functionality
