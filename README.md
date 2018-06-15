[![Build Status](https://travis-ci.org/JohnNewman1/acebook-millieandco.svg?branch=master)](https://travis-ci.org/JohnNewman1/acebook-millieandco)

### Website

http://acebook-millieandco.herokuapp.com/

### Wireframe 

![alt_text](http://i67.tinypic.com/25s2x53.jpg)


### Description 

Acebook is a social media site implemented using a Java SpringBoot React.js Tech Stack. The current features include: 

- Sign Up
- Login / Log Out 
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
- IDE of your choice (recommended Intellij)

Fork and Clone the Repo to start using it. 

In command line run the following commands to setup a local database. 

```
psql 
CREATE DATABASE acebook; 
\q

```

In order to run the application with a local database, you can edit Application Configuration by adding this line to the VM options.

```
-Dspring.profiles.active=local
```


To edit the Application Configuration via Intellij follow these steps: 

1) In applications, click on 'Edit Configurations' from the drop down menu.

![alt text](http://i63.tinypic.com/2jbm6vd.png)

2) In the pop up box, click the + to create a new Java configuration

3) Edit main options and VM options to match below.

![alt_text](http://i68.tinypic.com/2rnd6yq.jpg)




### Built with


#### Web Application 

- Maven - automatic dependency management 
- Spring Boot - web application framework 
- React.js - building the user interface
- Postgres - Database 



#### Testing Frameworks 

- Nightwatch - Feature Testing 
- Junit - Unit testing Java 
- Jest - Unit testing React 



### Running the tests

To run Jest with coverage
```npm test```

To run Nightwatch
```npm feature-tests```

To run Junit with coverage
![alt_text](http://i67.tinypic.com/33oqic1.png)



### Contributors

Charlene Chetcuti

Siobhan Goggins

John Newman

William Powell

