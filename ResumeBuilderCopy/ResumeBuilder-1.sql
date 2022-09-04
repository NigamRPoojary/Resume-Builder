create table User(
    Email varchar(30) PRIMARY KEY,
    REmail varchar(30),
    UserPassword varchar(20),
    Username varchar(20),
    Dob varchar(10),
    Phone bigint,
    HouseStreet varchar(30),
    RegionCity varchar(25),
    DistState varchar(25),
    LinkedIn varchar(30),
    Github varchar(30),
    Summary varchar(500),
    Picture varchar(30)
);

create table Education(
    ID int PRIMARY KEY AUTO_INCREMENT,
    UserEmail varchar(20),
    Degree varchar(30),
    Institution varchar(50),
    Duration varchar(20),
    Score decimal,
    FOREIGN KEY (UserEmail) references User (Email)
);

create table Skill(
    ID int PRIMARY KEY AUTO_INCREMENT,
    UserEmail varchar(20),
    Skill varchar(20),
    FOREIGN KEY (UserEmail) references User (Email)
);

create table Project(
    ID int PRIMARY KEY AUTO_INCREMENT,
    UserEmail varchar(20),
    ProjectName varchar(30),
    ProjectOrg varchar(30),
    ProjectDate varchar(20),
    ProjectDesc varchar(500),
    FOREIGN KEY (UserEmail) references User (Email)
);

create table InternExp(
    ID int PRIMARY KEY AUTO_INCREMENT,
    UserEmail varchar(20),
    JobName varchar(20),
    Organization varchar(30),
    WorkRole varchar(10),
    Duration int,
    WorkDesc varchar(500),
    FOREIGN KEY (UserEmail) references User (Email)
);

create table CourseWorkshop(
    ID int PRIMARY KEY AUTO_INCREMENT,
    UserEmail varchar(20),
    CourseName varchar(20),
    Organization varchar(30),
    YearMonth varchar(15),
    FOREIGN KEY (UserEmail) references User (Email)
);

create table AchievementExtra(
    ID int PRIMARY KEY AUTO_INCREMENT,
    UserEmail varchar(20),
    Details varchar(150),
    FOREIGN KEY (UserEmail) references User (Email)
);