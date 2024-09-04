# Testing Portfolio - Registration Form Project

This project demonstrates my skills in manual testing, frontend development with Next.js, styling with Tailwind CSS, and basic MySQL database management. The core of this project is a user registration form that allows users to input their details, which are then stored in a MySQL database.

<p align="center">
<img src="https://raw.githubusercontent.com/sebastianlewak/custom-form/main/Register%20Form/registration_form.png" alt="Opis obrazka" style="width:300px;">
</p>


## Technologies Used
- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for styling the form.
- **MySQL**: A relational database management system to store form data.
- **DBeaver**: A database management tool used for viewing and managing data in the MySQL database.
- **Git**: Version control system to manage the source code.
- **TestRail**: Used for managing and organizing test cases.

## Setup Instructions

To run this project on your local machine, follow these steps:

1. **Clone the Repository**
   
   ```console
   git clone https://github.com/sebastianlewak/custom-form.git
   ```


3. **Install Dependencies**

   ```console
   npm install
   ```

5.  **Set Up MySQL Database**
   
  - Create a MySQL database.
  - Update the .env file in the root directory with your MySQL credentials. The following fields need to be filled:

    ```properties
    DB_HOST=localhost  
    DB_USER=root  
    DB_PASSWORD=yourpassword  
    DB_NAME=yourname

4. **Run the Application**

   ```console
   npm run dev
   ```

The application should now be running on http://localhost:3000.



## Test Cases Management with TestRail

To manage and execute test cases for this project, I used TestRail

<a href="" target="_blank">View Test Cases</a>


## SQL Queries Execution with DBeaver

I used [DBeaver](https://dbeaver.io/) as a database management tool to interact with the MySQL database. DBeaver provides a powerful interface for writing and executing SQL queries, managing data, and analyzing query results.

### **SQL Queries in DBeaver**

The following SQL queries were executed in DBeaver to validate and manage the data associated with the registration form:

1. **Retrieve All Users**
   - **Query**:
     ```sql
     SELECT * FROM users;
     ```
   - **Purpose**: To verify that user data is correctly inserted into the `users` table after form submission.

2. **Check for Duplicate Emails**
   - **Query**:
     ```sql
     SELECT email, COUNT(*) 
     FROM users 
     GROUP BY email 
     HAVING COUNT(*) > 1;
     ```
   - **Purpose**: To ensure that no duplicate email addresses exist in the database, thereby enforcing unique user registration.

3. **Delete Test Data**
   - **Query**:
     ```sql
     DELETE FROM users WHERE email = 'test@example.com';
     ```
   - **Purpose**: To remove any test data generated during the testing process, maintaining the integrity of the production database.

4. **Password Encryption Verification**
   - **Query**:
     ```sql
     SELECT id, email, password 
     FROM users 
     WHERE email = 'test@example.com';
     ```
   - **Purpose**: To verify that the passwords stored in the database are encrypted, ensuring user data security.

