CREATE TABLE `contect` (
  `contect_id` int(50) NOT NULL AUTO_INCREMENT,
  `fullname` text NOT NULL,
  `email` text NOT NULL,
  `mobilenumber` text NOT NULL,
  `subject` text NOT NULL,
  `message` text NOT NULL,
  `time` int(255) NOT NULL,
  PRIMARY KEY (`contect_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `portfolio` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `projectname` varchar(255) NOT NULL,
  `prjectsmalldiscription` varchar(400) NOT NULL,
  `projectphoto` varchar(255) NOT NULL,
  `projectlink` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;