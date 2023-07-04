# YouNiversity

The project is called YouNiversity; a portmanteau of you and university. Prospective students around the world experience barriers when embarking on the journey of finding the right university for them. These barriers range from prospective students experiencing anxiety to zero-motivation and are compounded by university websites not being centralised. A centralised universities website will break-down some of these barriers experienced by prospective students. YouNiversity is a minimum-viable-product that takes a user’s input of a country or city and then displays the names of all the universities in that country or city as clickable links to their websites. Users of YouNiversity will then be able to apply directly to universities on their websites or save university websites to a database for later selection.

### 1 - Use-Cases:
- View recommended countries and cities.	
- Input and search universities by country or city.	
- Click university name to travel to its website.	
- Save university to a database.
- Load universities from a database.	
- Delete university from a database.

### 2 - Hosting:
- Download the back-end YouNiversity zip from https://github.com/20105070/20105070.github.io.
- Open the YouNiversityApi.sln file in Microsoft Visual Studio.
- Click Start.
- Download the front-end YouNiversity zip from https://github.com/20105070/20105070.github.io.
- Open the YouNiversity folder in Visual Studio Code.
- Click terminal and then new terminal.
- Type ng serve in the terminal and click enter.
- Go to http://localhost:4200/.
- Use YouNiversity according to its use-cases.

### 3 - Database:

CREATE DATABASE YouNiversity;

GO

USE YouNiversity;

GO

CREATE TABLE Universities (

name NVARCHAR(50) NOT NULL PRIMARY KEY,

webPage NVARCHAR(50) NOT NULL

);