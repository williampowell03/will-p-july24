# Software Engineering Summative 1 Assignment
Northeastern University

# Loan Calculator App
[![CodeFactor](https://www.codefactor.io/repository/github/williampowell03/will-p-july24/badge)](https://www.codefactor.io/repository/github/williampowell03/will-p-july24)
## About

Author: William Powell

GitHub Username Credentials: @williampowell03

Repository: https://github.com/williampowell03/will-p-july24

![Screenshot of Application](docs/images/image.png)

The Personal Loan Calculator App is a Java Script Application that allows the user to calculate the Monthly Payment that arises from a loan of their choosing. The Java Script backend and HTML & CSS front end enable the user to input the loan amount £, the interest rate % and the payment term length in months, producing an output displaying the monthly payment that the user will incur as a result of the loan.

This application utilises a simple formula to calculate the interest and the fixed monthly payment with a user interface that aims to display:
* User input box for the Loan Amount Value
* User input box for the Interest Rate Value
* User input box for the Months to Pay Term
* Output showing the monthly payment for the user

This live web application is deployed using [GitHub Pages](https://williampowell03.github.io/will-p-july24/)

The project is deployed to GitHub pages through the CI/CD or Continuous Integration and Continuous Deployment Pipeline configured to run when a PR is raised for the master (main) branch. The CI/CD Pipelines incorporate automated testing and deployment, enhancing reliability and efficiency throughout the project lifecycle.

Please see more on CI/CD [here](#continuous-integration-and-continuous-deployment-cicd).

### Justification for application development

The development of the Loan Calculator application is designed to help those looking to manage their finances more effectively. With finance becoming ever more complicated, with an increasing number of people buying homes, funding education or starting a business, an application like this aims to address a common need for individuals. With the understanding of loan terms, interest rates and repayment timelines being complex, this application simplifies the loan process, providing an intuitive and easy-to-use tool that allows users to quickly and accurately calculate their monthly loan repayment based on variable user inputs. Its development revolves around the objective of enhancing financial accessibility, enabling individuals to plan budgets more effectively, empowering informed decision making and avoiding potential debt issues, making it invaluable for those considering taking out a loan.

## Documentation

### Running locally:

#### 1. Clone this repo:

```sh
git clone https://github.com/williampowell03/will-p-july24.git
```
Once successfully cloned to a local directory, you have everything needed to run the application. Navigate to index.html, and open it in a web browser.

### Running online:

#### 1. Navigate to GitHub Pages

https://williampowell03.github.io/will-p-july24/

Click the hyperlink to navigate to the GitHub-hosted application to use online.


### Running all tests during development:

#### 1. Before running the code, ensure npm is installed using the below command in the terminal

```sh
npm install
```

#### 2. To run the pre-defined test cases, run the following command

```sh
npm test
```

This command will run through all test cases in the ___tests___ directory within the repo and produce an output with failed or passed.


## Design

### User Interface Design

I first created my user interface design prototype using Figma, giving me an initial idea for the look of my product. Figma helped when designing the high-level application due to its simple and intuitive interface, enabling anyone to successfully create and design a product to suit their requirements. The choice was made to create initial designs to ease decision-making later on in the project and to remove any complexity when implementing the design in CSS. By designing a prototype, it enables me to make subtle changes in the future without changing the entire design if not needed.

[Initial Figma Prototyped Design](https://www.figma.com/design/UPRCPuQzYHB5RXxAl7GTu5/SE-Project-Design?node-id=0-1&t=rHv5oc6k0GHqBgiJ-1)

![Colour Contrast Cards](docs/images/image-1.png)

Click [here](http://www.sussex.ac.uk/tel/resource/tel_website/accessiblecontrast/?q=FFFFFF~003b49~1d4289~94a596~e56db1~d3273e~00bfb2~d6d2c4~ffc845~dc582a~41b6e6~1b365d~be84a3~5d3754~7da1c4~f2c75c~d0d3d4~007a78~000000) to access the website used to identify an accessible colour profile.


## Coding

### Technical Documentation

The application utilises the following technologies:

* HTML: Provides the structure and basic content of the web page.
* CSS: Styles the elements and enhances the visual appeal of the user interface.
* JavaScript: Powers the interactive elements and performs calculations based on user input.

Files used to run the application:
* index.html
* index.js
* style.css

Files used in testing:
* extreme-test.js
* functionality-test.js
* usability-test.js

### Code Implementation

Step-by-step guide on how the MVP was developed:

1.	In index.html, I created the body container class within a division tag and created all of the headings.
2.	I created three user input boxes (tags), allowing the user to input their response depending on the header above each tag.
3.	Towards the end of the container, I created a paragraph tag to show the end monthly payment result that would come from the calculation using the user inputs.
4.	In index.js, I created a function called calculateLoan().
5.	This function contains five variables: loanAmount, interestRate, monthlyTerm, interest, monthlyPayment
6.	The loanAmount variable takes the loan amount in GBP £ from the user input box in index.html
7.	The interestRate variable takes the interest rate percentage % from the user input box in index.html.
8.	The monthlyTerm variables take the payment term in months from the user input box in index.html.
9.	The interest variable takes in the loanAmount, interestRate and monthlyTerm variables and creates a formula to calculate the accrued interest over the term.
10.	The monthlyPayment variable takes in the loanAmount, monthlyTerm and interest variables and calculates the monthly payment for the user over the given time frame.
11.	This monthlyPayment variable is then outputted using the “payment” ID in index.html displaying ‘Monthly Payment: ${monthlyPayment}’
12.	In style.css, through utilising the classes defined in the HTML tags, styling like background colour, padding, borders, font styling and text alignment were able to be defined per tag depending on the class. This ensures the product is more accessible and user-friendly.


### Continuous Integration and Continuous Deployment (CI/CD)

Continuous Integration (CI) and Continuous Deployment (CD) are important parts of software development, ensuring code quality, reliability, and efficiency throughout the deployment process.

#### CI/CD Pipeline

The Loan Calculator App is deployed online using GitHub Pages, leveraging a CI/CD pipeline triggered automatically when a pull request is made to the main branch. Here’s how the CI/CD pipeline operates:

1.	Testing: Upon a new pull request, automated tests are executed using Jest, a JavaScript testing framework. These tests cover functionality, usability, and extreme value inputs to validate the application's behaviour.
2.	Code Quality Analysis: The CI/CD pipeline includes Codefactor, a tool that assesses the quality of the codebase. It provides insights into code health, adherence to best practices, and potential areas for improvement, providing a score which can be seen at the beginning of the repo README.md.
3.	Deployment: Once all tests pass and code quality meets predefined thresholds, the application is automatically deployed to GitHub Pages. This ensures that the latest version of the Loan Calculator App is always accessible to users.

CI/CD pipelines are crucial for maintaining the integrity of the application throughout its development lifecycle. They streamline the  testing, integration, and deployment process, enabling rapid iteration and quick responses to changes.


## Testing

### Logic Testing

A testing library called Jest was used when testing the logic of my application. Jest is a JavaScript testing framework designed to ensure the correctness of any JavaScript codebase. Using Jest, I created testing scripts that test various features and functionality leading to 100% code coverage. Jest aids in finding bugs with several pre-defined test cases, ensuring testing consistency throughout the development process.

### Unit Testing

Jest was used to run predefined unit testing scripts on the codebase, ensuring that the code aligns with a specified standard before deploying to the main repo branch. I can ensure project quality and reliability throughout the development phase, resulting in higher-quality code, a more efficient product and potential money saving.

Below is an example of the tests running.

![Jest Test Outputs](docs/images/image-4.png)

### Performance and Accessibility Testing

When testing the performance and accessibility of the product, I used lighthouse tests to generate a scored report with summarised outputs detailing performance, accessibility, best practices and SEO. Lighthouse testing can be accessed at [WebPageTest](https://www.webpagetest.org/lighthouse) and enables developers to run their website against several tests providing outputs to improve on.

![Lighthouse Report](docs/images/image-6.png)

#### Results

As shown in the report, the website's performance rating of 100 proves that this application is highly optimised to run seamlessly with a 0.07-second server response time, providing a heightened user experience. A lower performance score may indicate longer load times, worsening the overall user experience so it is important that this score is high.

The application performs at a score of 85 for accessibility. This indicates that it is relatively easy to comprehend and use for the user. The design, utilising the accessibility colour palette, ensures that the application is aesthetically pleasing with contrasting colours and intuitive headings and input boxes.

A score of 96 for best practices proves that the application has improved efficiency, and enhanced quality whilst remaining simple and intuitive.

The SEO score of 91 implies that the application design draws in a larger audience with a higher rate of high-quality direct internet traffic.

### Codefactor Testing

Codefactor performs code reviews with every commit or pull request. Codefactor continuously monitors the codebase for potential issues, providing automated feedback on code quality, and enforcing coding standards to ensure that the quality guidelines are adhered to.

![Codefactor Testing](docs/images/image-5.png)

## Project Management

When managing this Loan Calculator Project, I used the GitHub Projects tool. GitHub project is an adaptable spreadsheet, task board, and road map that integrates with your issues and pull requests on GitHub, encouraging better and more effective management of the work.

![GitHub Project Board](docs/images/image-2.png)

[GitHub Project Docs](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)

To manage this project, I used the Kanban-styled board to manage the issue tickets and visualise the project workflow in its varying stages. Issues or tasks can be moved across the workflow depending on their status state. This aligns with the agile approach that I have been taking throughout the different stages of iterative development, ensuring full transparency and incremental software development whilst prioritising tasks efficiently. This encourages continuous improvement, organising tasks into manageable increments, ensuring steady progress and flexibility in responding to changes.

Following the Agile methodology, the Scrum framework was incorporated when developing this application, working in shorter, time-based blocks where a certain amount of work is set to be completed. Due to the shorter scale of the project, Scrum collaborative calls were not necessary but in a larger scale project, this methodology would allow teams to collaborate on tasks and issues more effectively, producing higher quality code with easier manageability, giving the developers more flexibility to adjust project priorities.


### Issue Ticket System

Each ticket in the list of issues corresponds with a task, whether that be a feature, bug, testing or documentation. Every issue is assigned a label and a description to outline what the task is for. An issue will link to a branch and a Pull Request for better management and tracking of the project. Also for audit purposes, the branches can be traced by a ticket. On a larger scale project, a reviewer would be assigned to each PR to ensure that before the branch is merged, it is tested and reviewed to mitigate any risks and identify any potential errors in logic or syntax. For this smaller-scale project, I ran the CI/CD pipelines to test, and I reviewed the commit messages individually before merging the branch to reduce any risks of bugs or incidents.

![GitHub Issue List](docs/images/image-3.png)


## Evaluation

In conclusion, I am overall very pleased with the outcome of the Loan Calculator Application. The design and development of this application successfully met the initial project goal. It accurately calculates monthly loan payments based on user inputs. The UI is intuitive and user-friendly, featuring clear input fields and a noticeable display of the calculated monthly payment. The application doesn't prove to be over-complicated for users and is designed with the UIs accessibility in mind.

However, whilst the application does prove to meet the requirements through the several forms of testing that have been undertaken, there are a few enhancements that could be made in the future:
* Further Accessibility Improvements: Ensuring the application meets accessibility standards for users with disabilities.
* Internationalisation: Supporting multiple currencies and languages to cater to a broader audience.
* Additional Features: Incorporating options for different types of loans.

Overall, the Loan Calculator Application delivers a valuable tool for users to estimate their financial loans with ease and accuracy, whilst effectively utilising modern software development practices and tools.