/*
 Navicat Premium Data Transfer

 Source Server         : Localhost
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : pembelajaran_dika

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 30/06/2023 23:00:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id_admin` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `kelamin` enum('L','P') DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_admin`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of admin
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for jadwal
-- ----------------------------
DROP TABLE IF EXISTS `jadwal`;
CREATE TABLE `jadwal` (
  `id_jadwal` int NOT NULL AUTO_INCREMENT,
  `mata_kuliah` varchar(255) DEFAULT NULL,
  `jam` time DEFAULT NULL,
  `hari` date DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `email_pengajar` varchar(255) NOT NULL,
  PRIMARY KEY (`id_jadwal`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of jadwal
-- ----------------------------
BEGIN;
INSERT INTO `jadwal` (`id_jadwal`, `mata_kuliah`, `jam`, `hari`, `status`, `email_pengajar`) VALUES (1, 'MATEMATIKA', '22:30:43', '2023-06-30', 'aktif', 'saaas@dsd.com');
COMMIT;

-- ----------------------------
-- Table structure for pengajar
-- ----------------------------
DROP TABLE IF EXISTS `pengajar`;
CREATE TABLE `pengajar` (
  `id_pengajar` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `kelamin` enum('L','P') DEFAULT NULL,
  PRIMARY KEY (`id_pengajar`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of pengajar
-- ----------------------------
BEGIN;
INSERT INTO `pengajar` (`id_pengajar`, `nama`, `email`, `password`, `role`, `kelamin`) VALUES (1, 'dika', 'dika@gmail.com', '55068633833f96992f430cb156bb08dd', 'pengajar', 'L');
COMMIT;

-- ----------------------------
-- Table structure for peserta
-- ----------------------------
DROP TABLE IF EXISTS `peserta`;
CREATE TABLE `peserta` (
  `id_peserta` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `kelamin` enum('L','P') DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_peserta`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of peserta
-- ----------------------------
BEGIN;
INSERT INTO `peserta` (`id_peserta`, `nama`, `email`, `password`, `kelamin`, `role`) VALUES (1, 'dika peserta', 'peserta@gmail.com', '55068633833f96992f430cb156bb08dd', 'L', 'peserta');
COMMIT;

-- ----------------------------
-- Table structure for peserta_jadwal
-- ----------------------------
DROP TABLE IF EXISTS `peserta_jadwal`;
CREATE TABLE `peserta_jadwal` (
  `id` int NOT NULL,
  `id_jadwal` int DEFAULT NULL,
  `mata_kuliah` varchar(255) DEFAULT NULL,
  `jam` time DEFAULT NULL,
  `hari` date DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of peserta_jadwal
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
