CREATE DATABASE IF NOT EXISTS `sbank` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sbank`;
-- Host: j6d201.p.ssafy.io    Database: sbank
-- ------------------------------------------------------

DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `no` bigint NOT NULL AUTO_INCREMENT,
  `authority` varchar(255) NOT NULL,
  `birthday` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  PRIMARY KEY (`no`),
  UNIQUE KEY `UK_mbmcqelty0fbrvxp1q58dn57t` (`email`),
  UNIQUE KEY `UK_jp8ds32yg1soswx2rkiagm768` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `refresh_token`;
CREATE TABLE `refresh_token` (
  `token_key` varchar(255) NOT NULL,
  `value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`token_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `account_id` bigint NOT NULL AUTO_INCREMENT,
  `account_number` varchar(255) NOT NULL,
  `balance` int DEFAULT NULL,
  `bank_name` varchar(255) NOT NULL,
  `creation_date` varchar(255) NOT NULL,
  `member_no` bigint DEFAULT NULL,
  PRIMARY KEY (`account_id`),
  UNIQUE KEY `UK_66gkcp94endmotfwb8r4ocxm9` (`account_number`),
  KEY `FKjsk2avynyhlhojm1fchb13xgl` (`member_no`),
  CONSTRAINT `FKjsk2avynyhlhojm1fchb13xgl` FOREIGN KEY (`member_no`) REFERENCES `member` (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `history`;
CREATE TABLE `history` (
  `history_id` bigint NOT NULL AUTO_INCREMENT,
  `account_id` bigint DEFAULT NULL,
  `money` int DEFAULT NULL,
  `receiver` varchar(255) NOT NULL,
  `receiver_account` varchar(255) NOT NULL,
  `sender` varchar(255) NOT NULL,
  `sender_account` varchar(255) NOT NULL,
  `statement` tinyint DEFAULT NULL,
  `transaction_date` varchar(255) NOT NULL,
  PRIMARY KEY (`history_id`),
  KEY `FK2mpn4nxqqsu7euii4hwhbjeg8` (`account_id`),
  CONSTRAINT `FK2mpn4nxqqsu7euii4hwhbjeg8` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `event`;
CREATE TABLE `event` (
  `no` bigint NOT NULL AUTO_INCREMENT,
  `age` int DEFAULT NULL,
  `nickname` varchar(255) NOT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

