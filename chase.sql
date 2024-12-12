-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: emp
-- ------------------------------------------------------
-- Server version	9.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `AuthorID` int NOT NULL AUTO_INCREMENT,
  `AuthorName` varchar(45) DEFAULT NULL,
  `PublisherID` int DEFAULT NULL,
  PRIMARY KEY (`AuthorID`),
  KEY `PublisherID` (`PublisherID`),
  CONSTRAINT `author_ibfk_1` FOREIGN KEY (`PublisherID`) REFERENCES `publisher` (`PublisherID`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (1,'John Smith',1),(2,'Emily Johnson',2),(3,'Michael Brown',3),(4,'Sarah Davis',4),(5,'James Wilson',5),(6,'Linda Martinez',6),(7,'Robert Anderson',7),(8,'Patricia Taylor',8),(9,'David Thomas',9),(10,'Barbara Moore',10),(11,'Richard Jackson',11),(12,'Susan White',12),(13,'Joseph Harris',13),(14,'Karen Martin',14),(15,'Charles Thompson',15),(16,'Margaret Garcia',16),(17,'Thomas Martinez',17),(18,'Lisa Robinson',18),(19,'Christopher Clark',19),(20,'Nancy Rodriguez',20),(21,'Daniel Lewis',1),(22,'Betty Lee',2),(23,'Matthew Walker',3),(24,'Sandra Hall',4),(25,'Anthony Allen',5),(26,'Donna Young',6),(27,'Mark Hernandez',7),(28,'Carol King',8),(29,'Paul Wright',9),(30,'Jennifer Lopez',10),(31,'George Hill',11),(32,'Michelle Scott',12),(33,'Steven Green',13),(34,'Laura Adams',14),(35,'Brian Baker',15),(36,'Helen Gonzalez',16),(37,'Joshua Nelson',17),(38,'Deborah Carter',18),(39,'Andrew Mitchell',19),(40,'Sharon Perez',20);
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `ISBN` varchar(17) NOT NULL,
  `BookName` varchar(255) DEFAULT NULL,
  `AuthorID` int DEFAULT NULL,
  `Language` varchar(45) DEFAULT NULL,
  `Price` int DEFAULT NULL,
  `CategoryID` int DEFAULT NULL,
  `quantity` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ISBN`),
  KEY `AuthorID` (`AuthorID`),
  KEY `CategoryID` (`CategoryID`),
  CONSTRAINT `book_ibfk_1` FOREIGN KEY (`AuthorID`) REFERENCES `author` (`AuthorID`),
  CONSTRAINT `book_ibfk_2` FOREIGN KEY (`CategoryID`) REFERENCES `category` (`CategoryID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES ('978000000001','The Great Adventure',1,'English',150,1,'50'),('978000000002','Science for Beginners',2,'English',200,3,'49'),('978000000003','Mystery of the Lost World',3,'English',180,12,'46'),('978000000004','Healthy Living',4,'English',120,9,'31'),('978000000005','Romantic Tales',5,'French',176,13,'15'),('978000000006','Cooking Made Easy',6,'Spanish',80,10,'34'),('978000000007','Tech Innovations',7,'English',300,6,'23'),('978000000008','Biography of a Legend',8,'English',250,5,'14'),('978000000009','Fantasy World',9,'English',220,11,'1'),('978000000010','Children’s Stories',10,'English',90,14,'10'),('978000000011','Wonders of History',11,'English',240,4,'47'),('978000000012','The Art of Travel',12,'English',180,8,'4'),('978000000013','Self-Help Guide',13,'English',130,7,'27'),('978000000014','Educational Insights',14,'Arabic',200,15,'26'),('978000000015','Epic Adventures',15,'Spanish',190,1,'47'),('978000000016','Fitness Tips',16,'English',110,9,'9'),('978000000017','Mystery Nights',17,'English',210,12,'1'),('978000000018','Tech for All',18,'French',310,6,'26'),('978000000019','Golden Recipes',19,'English',100,10,'28'),('978000000020','Fictional Realms',20,'English',160,11,'10'),('978000000021','History Unveiled',1,'English',230,4,'16'),('978000000022','Future Tech',2,'Spanish',320,6,'49'),('978000000023','Romantic Letters',3,'French',170,13,'45'),('978000000024','Guide to Happiness',4,'Arabic',140,7,'30'),('978000000025','World’s Cuisine',5,'English',90,10,'12'),('978000000026','Fantasy Kingdom',6,'English',260,11,'21'),('978000000027','Adventures of Heroes',7,'English',190,1,'19'),('978000000028','Learn the Basics',8,'Arabic',150,15,'30'),('978000000029','Travel Diaries',9,'English',200,8,'44'),('978000000030','Healthy Habits',10,'Spanish',120,9,'28'),('978000000031','Romance in Paris',11,'French',180,13,'10'),('978000000032','Cooking Secrets',12,'English',95,10,'14'),('978000000033','Science Today',13,'English',250,3,'40'),('978000000034','The Mystery Case',14,'English',220,12,'9'),('978000000035','Adventures in Time',15,'Arabic',210,1,'23'),('978000000036','Fitness for Life',16,'English',125,9,'39'),('978000000037','Tales of Fantasy',17,'Spanish',245,11,'23'),('978000000038','Techno World',18,'English',320,6,'47'),('978000000039','Famous Biographies',19,'English',275,5,'17'),('978000000040','Childhood Dreams',20,'English',100,14,'43'),('978000000041','The Modern World',21,'English',220,6,'14'),('978000000042','Deep Space Journey',22,'English',181,8,'39'),('978000000043','Ancient History',23,'Arabic',150,10,'4'),('978000000044','Ocean Mysteries',24,'English',200,12,'1'),('978000000045','Tech Revolution',25,'English',250,4,'43'),('978000000046','The Digital Age',26,'English',190,5,'10'),('978000000047','Cooking Secrets',27,'Arabic',100,11,'21'),('978000000048','Photography Basics',28,'English',176,9,'27'),('978000000049','Wildlife Adventures',29,'English',300,3,'18'),('978000000050','Mystery of the Mind',30,'English',270,7,'10'),('978000000051','Astronomy 101',31,'English',210,8,'45'),('978000000052','Building a Business',32,'English',230,6,'45'),('978000000053','Discovering Physics',33,'Arabic',180,2,'38'),('978000000054','Human Anatomy',34,'English',250,14,'5'),('978000000055','World Politics',35,'English',220,13,'12'),('978000000056','Artificial Intelligence',36,'English',300,5,'42'),('978000000057','Data Science Intro',37,'English',280,4,'24'),('978000000058','The Art of Design',38,'English',200,12,'46'),('978000000059','Exploring the Universe',39,'English',310,7,'4'),('978000000060','Gardening Tips',40,'Arabic',120,9,'33'),('978000000061','Cultural Heritage',1,'Arabic',130,15,'4'),('978000000062','Economics Basics',2,'English',220,8,'19'),('978000000063','Music Theory',3,'English',180,11,'35'),('978000000064','The Solar System',4,'English',250,6,'14'),('978000000065','Programming in C++',5,'English',300,5,'17'),('978000000066','Social Media Marketing',6,'English',190,4,'40'),('978000000067','Psychology for Beginners',7,'English',270,10,'48'),('978000000068','Blockchain Explained',8,'English',240,3,'22'),('978000000069','Mindful Living',9,'Arabic',170,14,'13'),('978000000070','Historical Tales',10,'Arabic',180,15,'1'),('978000000071','Ethical Hacking',11,'English',320,5,'14'),('978000000072','Meditation Practices',12,'Arabic',110,12,'15'),('978000000073','Entrepreneurship',13,'English',260,6,'35'),('978000000074','The Art of Painting',14,'English',230,13,'28'),('978000000075','Cultural Dynamics',15,'Arabic',200,14,'37'),('978000000076','Physics Beyond Basics',16,'English',310,2,'48'),('978000000077','Travel Diaries',17,'English',220,8,'28'),('978000000078','Coding Fundamentals',18,'English',280,5,'44'),('978000000079','Digital Photography',19,'English',190,9,'39'),('978000000080','Health and Fitness',20,'Arabic',150,11,'10'),('978000000081','Modern Economics',21,'English',210,6,'33'),('978000000082','World Literature',22,'Arabic',250,15,'35'),('978000000083','Innovative Designs',23,'English',180,4,'27'),('978000000084','The History of Science',24,'English',230,3,'30'),('978000000085','Mathematics Simplified',25,'Arabic',170,2,'19'),('978000000086','Writing Skills',26,'English',200,8,'2'),('978000000087','AI in the Future',27,'English',300,5,'3'),('978000000088','Science Experiments',28,'English',180,14,'8'),('978000000089','Creative Thinking',29,'English',220,12,'31'),('978000000090','The Global Economy',30,'Arabic',210,13,'30'),('978000000091','Digital Marketing',31,'English',290,4,'8'),('978000000092','Programming in Python',32,'English',270,5,'47'),('978000000093','Art History',33,'Arabic',190,7,'13'),('978000000094','The Human Mind',34,'English',260,10,'23'),('978000000095','Exploring Cultures',35,'Arabic',150,9,'25'),('978000000096','Business Models',36,'English',240,6,'7'),('978000000097','Biology Basics',37,'English',170,2,'9'),('978000000098','Time Management',38,'English',180,11,'22'),('978000000099','Robotics 101',39,'English',280,5,'33'),('978000000100','Discovering Music',40,'Arabic',130,15,'48');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookorder`
--

DROP TABLE IF EXISTS `bookorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookorder` (
  `ISBN` varchar(17) NOT NULL,
  `OrderID` int NOT NULL,
  `orderedQuantity` int DEFAULT NULL,
  PRIMARY KEY (`ISBN`,`OrderID`),
  KEY `OrderID` (`OrderID`),
  CONSTRAINT `bookorder_ibfk_1` FOREIGN KEY (`ISBN`) REFERENCES `book` (`ISBN`),
  CONSTRAINT `bookorder_ibfk_2` FOREIGN KEY (`OrderID`) REFERENCES `order` (`OrderID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookorder`
--

LOCK TABLES `bookorder` WRITE;
/*!40000 ALTER TABLE `bookorder` DISABLE KEYS */;
INSERT INTO `bookorder` VALUES ('978000000001',1,2),('978000000002',1,1),('978000000003',2,3),('978000000004',2,1),('978000000005',3,4),('978000000006',3,2),('978000000007',4,1),('978000000008',4,3),('978000000009',5,2),('978000000010',5,1),('978000000011',6,5),('978000000012',6,3),('978000000013',7,2),('978000000014',7,4),('978000000015',8,3),('978000000016',8,1),('978000000017',9,2),('978000000018',10,3),('978000000019',11,1),('978000000020',12,4),('978000000021',13,2),('978000000022',13,1),('978000000023',14,3),('978000000024',14,1),('978000000025',15,4),('978000000026',15,2),('978000000027',16,1),('978000000028',16,3),('978000000029',17,2),('978000000030',17,1),('978000000031',18,5),('978000000032',18,3),('978000000033',19,2),('978000000034',19,4),('978000000035',20,3),('978000000036',20,1);
/*!40000 ALTER TABLE `bookorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `CategoryID` int NOT NULL,
  `CategoryName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`CategoryID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Fiction'),(2,'Non-Fiction'),(3,'Science'),(4,'History'),(5,'Biography'),(6,'Technology'),(7,'Self-Help'),(8,'Travel'),(9,'Health & Wellness'),(10,'Cooking'),(11,'Fantasy'),(12,'Mystery'),(13,'Romance'),(14,'Children'),(15,'Education');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `idCustomer` int NOT NULL AUTO_INCREMENT,
  `NameCustomer` varchar(45) NOT NULL,
  `PhoneNumber` int DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idCustomer`),
  UNIQUE KEY `idCustomer_UNIQUE` (`idCustomer`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Ahmed Ali',1012345678,'ahmed.ali@email.com'),(2,'Mona Ahmed',1023456789,'mona.ahmed@email.com'),(3,'Mohamed Hassan',1034567890,'mohamed.hassan@email.com'),(4,'Sara Tarek',1045678901,'sara.tarek@email.com'),(5,'Youssef Khaled',1056789012,'youssef.khaled@email.com'),(6,'Huda Samir',1067890123,'huda.samir@email.com'),(7,'Omar Abdelrahman',1078901234,'omar.abdelrahman@email.com'),(8,'Mariam Fathy',1089012345,'mariam.fathy@email.com'),(9,'Tamer Ashraf',1090123456,'tamer.ashraf@email.com'),(10,'Rania Mostafa',1098765432,'rania.mostafa@email.com'),(11,'Ali Mahmoud',1087654321,'ali.mahmoud@email.com'),(12,'Nadia Youssef',1076543210,'nadia.youssef@email.com'),(13,'Hany El-Sayed',1065432109,'hany.elsayed@email.com'),(14,'Dalia Farouk',1054321098,'dalia.farouk@email.com'),(15,'Fady Sherif',1043210987,'fady.sherif@email.com');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `EmployeeID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `PhoneNumber` varchar(45) DEFAULT NULL,
  `DateHired` date DEFAULT NULL,
  `Salary` int DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `ManagerID` int DEFAULT NULL,
  PRIMARY KEY (`EmployeeID`),
  KEY `ManagerID` (`ManagerID`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`ManagerID`) REFERENCES `employee` (`EmployeeID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'yousef kiwan','01021905004','2022-01-15',7000,'Cairo, Egypt',NULL),(2,'ibrahim elmur','01122334455','2022-02-20',6500,'Giza, Egypt',1),(3,'mohamed safwat','01011223344','2023-03-10',6000,'Alexandria, Egypt',1),(4,'Sara Khaled','01233445566','2023-04-05',6200,'Zagazig, Egypt',1),(5,'Hassan Nasser','01099887766','2023-05-12',5800,'Mansoura, Egypt',1),(6,'Yasmine Adel','01155667788','2023-06-18',5500,'Tanta, Egypt',1),(7,'Khaled Ali','01266778899','2023-07-25',6000,'Suez, Egypt',1),(8,'Eman Youssef','01077889900','2023-08-30',5700,'Ismailia, Egypt',1),(9,'Mohamed Fathy','01188990011','2023-09-05',6200,'Assiut, Egypt',1),(10,'Nourhan Salah','01299001122','2023-10-10',6100,'Luxor, Egypt',1);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `OrderID` int NOT NULL AUTO_INCREMENT,
  `IDCustomer` int DEFAULT NULL,
  `EmployeeID` int DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `TotalPrice` int DEFAULT NULL,
  `PaymentMethod` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`OrderID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (1,1,1,'2024-12-01',500,'Credit Card'),(2,2,2,'2024-12-02',660,'Cash'),(3,3,3,'2024-12-03',864,'Debit Card'),(4,4,4,'2024-12-04',1050,'Credit Card'),(5,5,1,'2024-12-05',530,'Cash'),(6,6,2,'2024-12-06',1740,'Credit Card'),(7,7,3,'2024-12-07',1060,'Debit Card'),(8,8,4,'2024-12-08',680,'Cash'),(9,9,1,'2024-12-09',420,'Credit Card'),(10,10,2,'2024-12-10',930,'Debit Card'),(11,11,3,'2024-12-11',100,'Cash'),(12,12,4,'2024-12-12',640,'Credit Card'),(13,13,1,'2024-12-13',780,'Debit Card'),(14,14,2,'2024-12-14',650,'Cash'),(15,15,3,'2024-12-15',880,'Credit Card'),(16,1,4,'2024-12-16',640,'Cash'),(17,2,1,'2024-12-17',520,'Debit Card'),(18,3,2,'2024-12-18',1185,'Credit Card'),(19,4,3,'2024-12-19',1380,'Cash'),(20,5,4,'2024-12-20',755,'Credit Card');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publisher`
--

DROP TABLE IF EXISTS `publisher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publisher` (
  `PublisherID` int NOT NULL AUTO_INCREMENT,
  `PublisherName` varchar(45) DEFAULT NULL,
  `PhoneNumber` varchar(45) DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`PublisherID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publisher`
--

LOCK TABLES `publisher` WRITE;
/*!40000 ALTER TABLE `publisher` DISABLE KEYS */;
INSERT INTO `publisher` VALUES (1,'Galaxy Publishing','1234567890','123 Elm Street, Cityville'),(2,'Starry Night Press','0987654321','456 Oak Avenue, Metropolis'),(3,'Bright Future Books','1122334455','789 Pine Road, Dreamland'),(4,'Knowledge Hub','2233445566','321 Maple Lane, Learning Town'),(5,'Creative Minds Co.','3344556677','654 Cedar Drive, Imaginary City'),(6,'Innovate Publishers','4455667788','987 Birch Street, Techville'),(7,'Harmony Books','5566778899','123 Willow Way, Peace City'),(8,'Adventure Tales Ltd.','6677889900','456 Aspen Circle, Wander Town'),(9,'Epic Story Co.','7788990011','789 Spruce Square, Hero City'),(10,'Nature’s Wisdom','8899001122','321 Fir Street, Green Valley'),(11,'Elite Publishing','9900112233','654 Redwood Avenue, Prestige Town'),(12,'Scholarly Press','0011223344','987 Palm Drive, Scholar City'),(13,'Future Horizons','1122334455','123 Cypress Lane, Tomorrow Land'),(14,'Timeless Books','2233445566','456 Bamboo Blvd, Forever City'),(15,'Golden Pages','3344556677','789 Cherry Lane, Historic Town'),(16,'Urban Tales','4455667788','321 Peach Street, Cityscape'),(17,'Rising Sun Press','5566778899','654 Orange Avenue, Sunrise City'),(18,'Midnight Reads','6677889900','987 Grape Road, Twilight Town'),(19,'Global Insights','7788990011','123 Olive Street, Knowledge City'),(20,'Blue Sky Publishers','8899001122','456 Plum Path, Open Horizon');
/*!40000 ALTER TABLE `publisher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'emp'
--

--
-- Dumping routines for database 'emp'
--
/*!50003 DROP PROCEDURE IF EXISTS `AddCustomer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `AddCustomer`(
    IN CustName VARCHAR(45),
    IN CustPhoneNumber INT,
    IN CustEmail VARCHAR(255)
)
BEGIN
    INSERT INTO customer (NameCustomer, PhoneNumber, Email)
    VALUES (CustName, CustPhoneNumber, CustEmail);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `add_book` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_book`(
    IN isbn1 INT,  
    IN name VARCHAR(50), 
    IN AId INT, 
    IN lang VARCHAR(18), 
    IN nop INT, 
    IN noc INT, 
    IN noq INT
)
BEGIN
    -- Check if the book already exists
    IF EXISTS (SELECT 1 FROM book WHERE isbn = isbn1) THEN
        -- Update the quantity if the book exists
        UPDATE book
        SET quantity = quantity + noq
        WHERE isbn = isbn1;
    ELSE
        -- Insert new book if it does not exist
        INSERT INTO book (isbn, name, author_id, language, number_of_pages, number_of_copies, quantity) 
        VALUES (isbn1, name, AId, lang, nop, noc, noq);  
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `add_bookorder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_bookorder`( 
    IN isbn1 VARCHAR(17),
    IN OId INT,
    IN qno INT
)
BEGIN
    DECLARE book_price DECIMAL(10, 2);
    DECLARE current_quantity INT;

    -- Get the price and current quantity of the book
    SELECT price, quantity INTO book_price, current_quantity
    FROM book
    WHERE isbn = isbn1;

    -- Check if the book exists
    IF current_quantity IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Book not found';
    ELSEIF current_quantity < qno THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Insufficient quantity';
    ELSE
        -- Check if the order already exists
        IF EXISTS (SELECT 1 FROM `bookorder` WHERE isbn = isbn1 AND orderID = OId) THEN
            -- Optionally, you can update the existing order instead of inserting
            UPDATE `bookorder`
            SET orderedquantity = orderedquantity + qno
            WHERE isbn = isbn1 AND orderID = OId;
        ELSE
            -- Insert the book order
            INSERT INTO `bookorder` (isbn, orderID, orderedquantity) 
            VALUES (isbn1, OId, qno); 
        END IF;

        -- Update the book quantity
        UPDATE book
        SET quantity = quantity - qno
        WHERE isbn = isbn1;

        -- Update the total price in the order
        UPDATE `order`
        SET totalprice = totalprice + (qno * book_price)
        WHERE orderID = OId;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `add_order` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_order`( 
    IN CId INT,
    IN EId INT,
    IN dateN DATE, 
    IN pay varchar(45)
)
BEGIN
INSERT INTO `order` (IDCustomer, EmployeeID, DATE,paymentmethod) 
        VALUES (CId, EId, dateN, pay);  
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteEmployeeDynamic` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteEmployeeDynamic`(
    IN EmpID INT
)
BEGIN
    -- Declare the dynamic SQL for deleting an employee
    SET @sql = CONCAT('DELETE FROM employee WHERE EmployeeID = ', EmpID);

    -- Execute the dynamic SQL
    PREPARE stmt FROM @sql;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `EditCustomer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `EditCustomer`(
    IN CustID INT,
    IN CustName VARCHAR(45),
    IN CustPhoneNumber INT,
    IN CustEmail VARCHAR(255)
)
BEGIN
    -- Check if the customer exists
    IF (SELECT COUNT(*) FROM customer WHERE idCustomer = CustID) = 0 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Customer not found';
    END IF;

    -- Update the customer's details
    UPDATE customer
    SET NameCustomer = CustName,
        PhoneNumber = CustPhoneNumber,
        Email = CustEmail
    WHERE idCustomer = CustID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllEmployee` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllEmployee`()
BEGIN
    -- Select all employee
    SELECT * FROM employee;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllEmployeeNames` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllEmployeeNames`()
BEGIN
    -- Select all employee names
    SELECT Name FROM employee;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetCustomerByOrderDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetCustomerByOrderDetails`(
    IN OrderDate DATE,
    IN TotalPrice INT
)
BEGIN
    SELECT c.NameCustomer
    FROM `order` o
    JOIN customer c ON o.IDCustomer = c.idCustomer
    WHERE o.Date = OrderDate
    AND o.TotalPrice = TotalPrice;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetCustomerOrders` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetCustomerOrders`(
    IN CustomerName VARCHAR(255)
)
BEGIN
    -- Check if the customer has made any orders
    IF (SELECT COUNT(*) 
        FROM `order` o 
        JOIN customer c ON o.IDCustomer = c.idCustomer 
        WHERE c.NameCustomer = CustomerName) = 0 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'No orders found for the customer';
    END IF;

    -- Retrieve order details
    SELECT 
        e.Name AS EmployeeName, 
        o.Date AS OrderDate, 
        o.TotalPrice AS OrderPrice, 
        b.BookName AS BookName
    FROM `order` o
    JOIN customer c ON o.IDCustomer = c.idCustomer
    JOIN employee e ON o.EmployeeID = e.EmployeeID
    JOIN bookorder bo ON o.OrderID = bo.OrderID
    JOIN book b ON bo.ISBN = b.ISBN
    WHERE c.NameCustomer = CustomerName;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetEmployeeByID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetEmployeeByID`(IN EmpID INT)
BEGIN
    -- Select the employee details based on the provided EmployeeID
    SELECT * FROM employee WHERE EmployeeID = EmpID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetEmployeeByName` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetEmployeeByName`(
    IN EmpName VARCHAR(255)
)
BEGIN
    -- Retrieve all attributes (columns) for the employee based on the employee name
    SELECT * 
    FROM employee
    WHERE Name = EmpName;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_book` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_book`(in idb varchar(17))
BEGIN
    SELECT 
        book.ISBN, 
        book.BookName, 
        author.AuthorName, 
        category.CategoryName, 
        book.Language, 
        book.Price, 
        book.Quantity  
    FROM 
        book 
    INNER JOIN 
        author 
    ON 
        book.AuthorID = author.AuthorID
    INNER JOIN 
        category 
    ON 
        book.CategoryID = category.CategoryID
    where ISBN = idb;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_bookorder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_bookorder`(in idb varchar(17), in id1 int)
BEGIN
    SELECT * FROM bookorder
    where OrderID = id1 and isbn = idb;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_customer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_customer`(in id1 int)
BEGIN
    SELECT * FROM customer
    where idCustomer = id1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_order` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_order`(in id1 int)
BEGIN
    SELECT * FROM `order`
    where OrderID = id1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertEmployeeDynamic` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertEmployeeDynamic`(
    IN EmpName VARCHAR(45),
    IN EmpPhoneNumber VARCHAR(45),
    IN EmpDateHired DATE,
    IN EmpSalary INT,
    IN EmpAddress VARCHAR(255),
    IN EmpManagerID INT
)
BEGIN
    -- Safely concatenate the dynamic SQL using QUOTE() to escape string values
    SET @sql = CONCAT('INSERT INTO employee (Name, PhoneNumber, DateHired, Salary, Address, ManagerID) ',
                      'VALUES (', 
                      QUOTE(EmpName), ', ',
                      QUOTE(EmpPhoneNumber), ', ',
                      QUOTE(EmpDateHired), ', ',
                      EmpSalary, ', ',
                      QUOTE(EmpAddress), ', ',
                      EmpManagerID, ')');

    -- Execute the dynamic query
    PREPARE stmt FROM @sql;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateEmployeeDynamic` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateEmployeeDynamic`(
    IN EmpID INT,
    IN EmpName VARCHAR(45),
    IN EmpPhoneNumber VARCHAR(45),
    IN EmpDateHired DATE,
    IN EmpSalary INT,
    IN EmpAddress VARCHAR(255),
    IN EmpManagerID INT
)
BEGIN
    -- Declare a variable for the dynamic query
    SET @sql = 'UPDATE employee SET ';

    -- Add the SET clauses dynamically based on provided input values
    IF EmpName IS NOT NULL THEN
        SET @sql = CONCAT(@sql, 'Name = ', QUOTE(EmpName), ', ');
    END IF;

    IF EmpPhoneNumber IS NOT NULL THEN
        SET @sql = CONCAT(@sql, 'PhoneNumber = ', QUOTE(EmpPhoneNumber), ', ');
    END IF;

    IF EmpDateHired IS NOT NULL THEN
        SET @sql = CONCAT(@sql, 'DateHired = ', QUOTE(EmpDateHired), ', ');
    END IF;

    IF EmpSalary IS NOT NULL THEN
        SET @sql = CONCAT(@sql, 'Salary = ', EmpSalary, ', ');
    END IF;

    IF EmpAddress IS NOT NULL THEN
        SET @sql = CONCAT(@sql, 'Address = ', QUOTE(EmpAddress), ', ');
    END IF;

    IF EmpManagerID IS NOT NULL THEN
        SET @sql = CONCAT(@sql, 'ManagerID = ', EmpManagerID, ', ');
    END IF;

    -- Remove the last comma and space if any
    SET @sql = TRIM(TRAILING ', ' FROM @sql);

    -- Add the WHERE clause to update the correct employee by EmpID
    SET @sql = CONCAT(@sql, ' WHERE EmployeeID = ', EmpID);

    -- Execute the dynamic SQL
    PREPARE stmt FROM @sql;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

drop procedure if exists getAllBookOrders;
DELIMITER $$

CREATE PROCEDURE getAllBookOrders()
BEGIN
    SELECT * FROM bookorder;
END$$

DELIMITER ;


drop procedure if exists getAllOrders;
DELIMITER $$

CREATE PROCEDURE getAllOrders()
BEGIN
    SELECT * FROM `order`;
END$$

DELIMITER ;


drop procedure if exists delete_bookorder;
DELIMITER $$
CREATE PROCEDURE delete_bookorder(in idb varchar(17), in id1 int)
BEGIN
    DECLARE book_price DECIMAL(10, 2);
    DECLARE current_quantity INT;

    
    IF EXISTS (SELECT 1 FROM bookorder WHERE OrderID = id1 and isbn = idb) THEN
    -- Get the price and current quantity of the book
    SELECT price INTO book_price
    FROM book
    WHERE isbn = idb;
    SELECT orderedQuantity INTO current_quantity
    FROM bookorder
    WHERE isbn = idb and orderid = id1;
    UPDATE book
        SET quantity = quantity + current_quantity
        WHERE isbn = idb;

        -- Update the total price in the order
        UPDATE `order`
        SET totalprice = totalprice - (current_quantity * book_price)
        WHERE orderID = id1;
    DELETE FROM bookorder
WHERE OrderID = id1 and isbn = idb;
    
ELSE
    SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Non-existent bookOrder';
END IF;
END$$
DELIMITER ;


drop procedure if exists get_bookorders;
DELIMITER $$

CREATE PROCEDURE get_bookorders(IN id1 int)
BEGIN
    SELECT * FROM bookorder
    where orderid = id1;
END$$

DELIMITER ;


drop procedure if exists update_order;
 
 DELIMITER $$

CREATE PROCEDURE update_order( 
	IN OId INT,
    IN CId INT,
    IN EId INT,
    IN dateN DATE, 
    IN pay varchar(45)
)
BEGIN
IF EXISTS (SELECT 1 FROM `order` WHERE OrderID = OId) THEN
    UPDATE users SET IDCustomer = CId,
				     EmployeeID = EId,
                     `Date` = dateN,
                     PaymentMethod = pay
WHERE id = OId;
ELSE
    SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Non-existent OrderID';
END IF;
END$$

DELIMITER ;


drop procedure if exists delete_order;
DELIMITER $$

CREATE PROCEDURE delete_order( 
	IN OId INT)
BEGIN
IF EXISTS (SELECT 1 FROM `order` WHERE OrderID = OId) THEN
    DELETE FROM bookorder
WHERE OrderID = OId;
    DELETE FROM `order`
WHERE OrderID = OId;
ELSE
    SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Non-existent OrderID';
END IF;
END$$

DELIMITER ;

drop procedure if exists getToltalPrice;
DELIMITER $$

CREATE PROCEDURE getToltalPrice(IN id1 int)
BEGIN
    SELECT TotalPrice FROM `order`
    where orderid = id1;
END$$

DELIMITER ;


drop procedure if exists getAllBooks;
DELIMITER $$

CREATE PROCEDURE getAllBooks()
BEGIN
    SELECT 
        book.ISBN, 
        book.BookName, 
        author.AuthorName, 
        category.CategoryName, 
        book.Language, 
        book.Price, 
        book.Quantity  
    FROM 
        book 
    INNER JOIN 
        author 
    ON 
        book.AuthorID = author.AuthorID
    INNER JOIN 
        category 
    ON 
        book.CategoryID = category.CategoryID;
END$$

DELIMITER ;


drop procedure if exists update_book;
 
 DELIMITER $$

CREATE PROCEDURE update_book( 
	IN isbn1 INT,  
    IN name VARCHAR(50), 
    IN AId INT, 
    IN lang VARCHAR(18), 
    IN nop INT, 
    IN noc INT, 
    IN noq INT
)
BEGIN
IF EXISTS (SELECT 1 FROM book WHERE isbn = isbn1) THEN
    UPDATE book SET ISBN = isbn1,
				     bookname = name,
                     AuthorID = AId,
                     language = lang,
                     price = nop,
                     categoryID = noc,
                     quantity = noq
WHERE isbn = isbn1;
ELSE
    SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Non-existent book';
END IF;
END$$

DELIMITER ;





-- Dump completed on 2024-12-10 23:00:03
