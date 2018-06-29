# Scenario

This app is designed to have reasonable separation of concerns that could easily occur in a rapidly iterative project. When 500+ customers are loaded it becomes very slow, and editing is particularly impacted. There are several goals in this scenario:

1. Fix the ability to save a customer's edits.
2. Fix the Address 2 text box to not overwrite the actual customer.
3. Hide the Edit button appropriately, possibly move it to a better location.
4. Solve the performance issues. Can we support 10s of thousands of customers without issue?

Styling in this application is truly sad, making it prettier would be nice.
