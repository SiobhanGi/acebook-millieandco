[![Build Status](https://travis-ci.org/JohnNewman1/acebook-millieandco.svg?branch=master)](https://travis-ci.org/JohnNewman1/acebook-millieandco)

### Website

http://acebook-millieandco.herokuapp.com/

### Description 

Acebook is a social media site implemented using a Java SpringBoot Tech Stack. The current features include: 

- Sign Up and Login / Log Out 
- Post messages on the main page  
- Post comments on messages
- Like messages

You can use the latest version of the site on: 

https://acebook-millieandco.herokuapp.com/

### Developer Instructions 

#### Pre-requisites

- JDK 1.8 
- Maven
- npm 
- Postgres SQL 
- IDE of your choice 

Fork and Clone the Repo to start using it. 

In command line run the following commands to setup a local database. 

```
psql 
CREATE DATABASE acebook; 
\q

```

Setup the Application Configuration to run this VM option in order to use the application with a local database:

```
-Dspring.profiles.active=local
```

### Technology Used 

Web Application 

- Maven - automatic dependency management 
- Spring Boot - web application framework 
- React - building the user interface
- Postgres - Database 

Testing Frameworks 

- Nightwatch - Feature Testing 
- Junit - Unit testing Java 
- Jest - Unit testing React 

