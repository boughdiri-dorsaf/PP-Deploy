-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 22, 2021 at 11:35 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iset_rades`
--

-- --------------------------------------------------------

--
-- Table structure for table `adresse`
--

DROP TABLE IF EXISTS `adresse`;
CREATE TABLE IF NOT EXISTS `adresse` (
  `id_adresse` int(11) NOT NULL AUTO_INCREMENT,
  `code_postale` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `rue` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ville` int(11) NOT NULL,
  `gouvernorat_adresse` int(11) NOT NULL,
  `pays` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id_adresse`),
  KEY `FK_PersonOrderml6` (`id_user`),
  KEY `fk_pays` (`pays`),
  KEY `fk_ville` (`ville`),
  KEY `fk_gouvernerat` (`gouvernorat_adresse`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `adresse`
--

INSERT INTO `adresse` (`id_adresse`, `code_postale`, `rue`, `ville`, `gouvernorat_adresse`, `pays`, `id_user`) VALUES
(2, '2041', 'ariena', 1, 38, 1, 1),
(11, '8080', 'ariana', 1, 1, 1, 12),
(27, '2000', 'gabes', 1, 38, 1, 2),
(48, '2041', 'sqs', 1, 5, 1, 8),
(50, '8080', 'ariana', 1, 3, 1, 9),
(53, '7505', '13 rue', 1, 1, 1, 13),
(54, '7050', '13 rue', 1, 1, 1, 14),
(55, '7050', '13 rue', 1, 1, 1, 15),
(56, '7050', '13 rue', 1, 1, 1, 16),
(57, '7050', '13 rue', 1, 1, 1, 17),
(58, '7050', '13 rue', 1, 1, 1, 18),
(59, '7050', '13 rue', 1, 1, 1, 19),
(60, '7050', '13 rue', 1, 2, 1, 20),
(61, '7050', '13 rue', 1, 1, 1, 21),
(62, '2041', '13 rue', 1, 3, 1, 22),
(63, '7050', '', 1, 1, 1, 23),
(64, '7050', '', 1, 1, 1, 24),
(65, '7050', '', 1, 1, 1, 25),
(66, '7050', '', 1, 2, 1, 26),
(67, '', '13 rue', 1, 1, 1, 34);

-- --------------------------------------------------------

--
-- Table structure for table `bacclaureat`
--

DROP TABLE IF EXISTS `bacclaureat`;
CREATE TABLE IF NOT EXISTS `bacclaureat` (
  `id_bacc` int(11) NOT NULL AUTO_INCREMENT,
  `annee` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `section` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mention` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `session` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `moyenne` float NOT NULL,
  PRIMARY KEY (`id_bacc`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `bacclaureat`
--

INSERT INTO `bacclaureat` (`id_bacc`, `annee`, `section`, `mention`, `session`, `moyenne`) VALUES
(18, '2017', 'Science', 'Passable', 'Principale', 10),
(19, '2010', 'Informatique', 'Excellent', 'Principale', 18.5),
(20, '2017', 'Informatique', 'Passable', 'Principale', 10),
(21, '1992', 'Technique', 'Trés Bien', 'Principale', 15.75),
(22, '2017', 'Informatique', 'Passable', 'Principale', 10),
(23, '2017', 'Informatique', 'Passable', 'Principale', 10);

-- --------------------------------------------------------

--
-- Table structure for table `classe`
--

DROP TABLE IF EXISTS `classe`;
CREATE TABLE IF NOT EXISTS `classe` (
  `id_classe` int(11) NOT NULL AUTO_INCREMENT COMMENT 'exemple : MPDAM, L3-DSI2',
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_responsable` int(11) NOT NULL,
  `nb_etudiant` int(11) NOT NULL,
  PRIMARY KEY (`id_classe`),
  KEY `FK_PersonOrder7` (`id_responsable`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `classe`
--

INSERT INTO `classe` (`id_classe`, `libelle`, `id_responsable`, `nb_etudiant`) VALUES
(1, 'M1MPDAM', 2, 20),
(2, 'M2MPDAM', 2, 19),
(3, 'M1BI', 2, 15),
(4, 'M2BI', 2, 15),
(5, 'info', 2, 55),
(6, 'info', 2, 55),
(7, 'info', 2, 54),
(8, 'info', 2, 54);

-- --------------------------------------------------------

--
-- Table structure for table `club`
--

DROP TABLE IF EXISTS `club`;
CREATE TABLE IF NOT EXISTS `club` (
  `id_club` int(11) NOT NULL AUTO_INCREMENT,
  `nom_club` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date_creation` date NOT NULL,
  `logo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_domaine` int(11) NOT NULL,
  `url_fb` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_club`),
  KEY `id_domaine` (`id_domaine`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `club`
--

INSERT INTO `club` (`id_club`, `nom_club`, `date_creation`, `logo`, `description`, `id_domaine`, `url_fb`) VALUES
(1, 'IEEE', '2020-01-15', 'https://media-exp1.licdn.com/dms/image/C4E0BAQGoRdJYxmIDhQ/company-logo_200_200/0/1519856132409?e=2159024400&v=beta&t=E3bJUsDGZJOxJYvFVGwMy94eILtECRvmv4LiIeio-O8', 'IEEE', 2, NULL),
(2, 'IOT', '2019-01-15', 'https://i.pinimg.com/originals/33/4e/06/334e063ae9f247704b37549b4b0f47d1.png', 'IOT', 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `commentaire_publication`
--

DROP TABLE IF EXISTS `commentaire_publication`;
CREATE TABLE IF NOT EXISTS `commentaire_publication` (
  `id_commentaire` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `heure` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `id_publication` int(11) NOT NULL,
  `description` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `id_membre` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_commentaire`),
  KEY `id_membre` (`id_membre`),
  KEY `fk_pub_cmtre` (`id_publication`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `commentaire_publication`
--

INSERT INTO `commentaire_publication` (`id_commentaire`, `date`, `heure`, `id_publication`, `description`, `id_membre`) VALUES
(1, '2021-4-0', '22:7:29', 1, 's', '1'),
(2, '2021-4-1', '1:35:22', 1, 'hhh', '2'),
(3, '2021-4-1', '1:50:33', 1, 'heelo', '2');

-- --------------------------------------------------------

--
-- Table structure for table `competence`
--

DROP TABLE IF EXISTS `competence`;
CREATE TABLE IF NOT EXISTS `competence` (
  `id_competence` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `niveau` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_competence`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `competence`
--

INSERT INTO `competence` (`id_competence`, `libelle`, `niveau`) VALUES
(1, 'Soft Skills', 1),
(2, 'others', 1),
(3, 'Graphic Design', 1);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
CREATE TABLE IF NOT EXISTS `contact` (
  `id_contact` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `avatar` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `id_status_contact` int(11) NOT NULL,
  `unread` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `mood` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_contact`),
  KEY `id_status_contact` (`id_status_contact`),
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id_contact`, `id_user`, `avatar`, `id_status_contact`, `unread`, `mood`) VALUES
(1, 1, 'https://img1.freepng.fr/20180626/ehy/kisspng-avatar-user-computer-icons-software-developer-5b327cc951ae22.8377289615300354013346.jpg', 1, 'unread', 'mood'),
(2, 2, 'https://img1.freepng.fr/20180626/ehy/kisspng-avatar-user-computer-icons-software-developer-5b327cc951ae22.8377289615300354013346.jpg', 2, 'unread', 'mood'),
(3, 2, 'https://img1.freepng.fr/20180626/ehy/kisspng-avatar-user-computer-icons-software-developer-5b327cc951ae22.8377289615300354013346.jpg', 2, 'unread', 'mood');

-- --------------------------------------------------------

--
-- Table structure for table `cursus`
--

DROP TABLE IF EXISTS `cursus`;
CREATE TABLE IF NOT EXISTS `cursus` (
  `id_cursus` int(11) NOT NULL AUTO_INCREMENT,
  `moyenne` double NOT NULL,
  `credit` int(11) NOT NULL,
  `mention` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `session` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `note_pfe` double DEFAULT NULL,
  `id_domaine` int(11) NOT NULL,
  `id_etablissement` int(11) NOT NULL,
  `id_specialite` int(11) NOT NULL,
  `id_niveau` int(11) NOT NULL,
  `id_etudiant` int(11) NOT NULL,
  `au_fin` int(4) NOT NULL,
  `au_debut` int(4) NOT NULL,
  PRIMARY KEY (`id_cursus`),
  KEY `FK_PersonOrder36` (`id_domaine`),
  KEY `FK_PersonOrder37` (`id_etablissement`),
  KEY `FK_PersonOrder38` (`id_specialite`),
  KEY `id_niveau` (`id_niveau`),
  KEY `id_etudiant` (`id_etudiant`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cursus`
--

INSERT INTO `cursus` (`id_cursus`, `moyenne`, `credit`, `mention`, `session`, `note_pfe`, `id_domaine`, `id_etablissement`, `id_specialite`, `id_niveau`, `id_etudiant`, `au_fin`, `au_debut`) VALUES
(3, 15, 60, 'Tres Bien', 'Principal', NULL, 2, 2, 2, 3, 1, 2020, 2018),
(4, 15, 54, 'Trés Bien', 'Principale', NULL, 2, 2, 2, 3, 5, 2019, 2018),
(5, 15, 56, 'Trés Bien', 'Principale', NULL, 2, 2, 2, 2, 6, 2019, 2018),
(6, 16, 56, 'Trés Bien', 'Principale', NULL, 2, 2, 2, 4, 6, 2022, 2020),
(7, 15, 54, 'Trés Bien', 'Principale', NULL, 2, 2, 3, 2, 7, 2019, 2018),
(8, 18, 54, 'Excellent', 'Principale', NULL, 2, 2, 3, 3, 7, 2020, 2019),
(10, 12, 54, 'Bien', 'Principale', NULL, 2, 2, 3, 4, 7, 2021, 2020),
(15, 15, 60, 'Trés Bien', 'Principale', 14, 3, 4, 6, 4, 10, 2022, 2020),
(16, 10, 40, 'Passable', 'Principale', 10, 2, 1, 3, 2, 9, 2019, 2018),
(17, 12, 40, 'Bien', 'Principale', 10, 2, 1, 3, 3, 9, 2019, 2019),
(18, 14, 40, 'Bien', 'Principale', 12, 2, 1, 3, 4, 9, 2019, 2020),
(19, 10.4, 45, 'Passable', 'Principale', 10.5, 2, 4, 3, 2, 12, 2010, 2009),
(20, 12, 45, 'Bien', 'Principale', NULL, 2, 1, 3, 3, 12, 2018, 2017),
(21, 12.5, 45, 'Bien', 'Principale', 12, 2, 1, 4, 4, 12, 2018, 2019),
(22, 16, 60, 'Bien', 'Principale', 10, 2, 1, 5, 2, 13, 2019, 2018),
(25, 12, 45, 'Passable', 'Principale', 10, 2, 1, 5, 3, 13, 2020, 2019),
(26, 16, 60, 'Bien', 'Principale', 14, 2, 1, 5, 4, 13, 2021, 2020),
(28, 14, 54, 'Assez bien', 'Principale', 10, 2, 1, 4, 2, 15, 2019, 2018),
(29, 16, 60, 'Bien', 'Controle', 10, 3, 1, 7, 3, 15, 2020, 2019),
(30, 16, 60, 'Bien', 'Principale', 16, 3, 1, 7, 4, 15, 2021, 2020);

-- --------------------------------------------------------

--
-- Table structure for table `cursusgenerale`
--

DROP TABLE IF EXISTS `cursusgenerale`;
CREATE TABLE IF NOT EXISTS `cursusgenerale` (
  `id_cursusgenerale` int(11) NOT NULL AUTO_INCREMENT,
  `diplome` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `anneeobtentation` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `etablissement` int(11) NOT NULL,
  `domaine` int(11) NOT NULL,
  `specialite` int(11) NOT NULL,
  `Redoublement` int(11) NOT NULL,
  PRIMARY KEY (`id_cursusgenerale`),
  KEY `fkdomaine` (`domaine`),
  KEY `fkspecialite` (`specialite`),
  KEY `fketab` (`etablissement`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cursusgenerale`
--

INSERT INTO `cursusgenerale` (`id_cursusgenerale`, `diplome`, `anneeobtentation`, `etablissement`, `domaine`, `specialite`, `Redoublement`) VALUES
(3, 'Developpement des systemes', '2016', 1, 2, 3, 1),
(4, 'Developpement des systemes', '2018', 1, 2, 2, 1),
(5, 'Reseaux', '2010', 1, 3, 6, 0),
(6, 'Developpement des systemes', '2001', 2, 2, 3, 0),
(7, 'Licence fondamentale', '2017', 1, 2, 3, 0),
(8, 'Licence fondamentale', '2010', 1, 2, 3, 0);

-- --------------------------------------------------------

--
-- Table structure for table `cv`
--

DROP TABLE IF EXISTS `cv`;
CREATE TABLE IF NOT EXISTS `cv` (
  `id_cv` int(11) NOT NULL AUTO_INCREMENT,
  `specialite` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_etudiant` int(11) NOT NULL,
  `id_competence` int(11) NOT NULL,
  `id_experience` int(11) NOT NULL,
  `fichier_cv` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_cv`),
  KEY `id_etudiant` (`id_etudiant`),
  KEY `FK_PersonOrder41` (`id_competence`),
  KEY `FK_PersonOrder40` (`id_experience`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cv`
--

INSERT INTO `cv` (`id_cv`, `specialite`, `id_etudiant`, `id_competence`, `id_experience`, `fichier_cv`) VALUES
(1, 'web developer', 1, 3, 2, '');

-- --------------------------------------------------------

--
-- Table structure for table `demande_club`
--

DROP TABLE IF EXISTS `demande_club`;
CREATE TABLE IF NOT EXISTS `demande_club` (
  `id_demande_club` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `motivation` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_statut_demande_club` int(11) NOT NULL,
  `id_club` int(11) NOT NULL,
  `id_etudiant` int(11) NOT NULL,
  PRIMARY KEY (`id_demande_club`),
  KEY `id_club` (`id_club`),
  KEY `id_etudiant` (`id_etudiant`),
  KEY `id_statut_demande_club` (`id_statut_demande_club`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `demande_club`
--

INSERT INTO `demande_club` (`id_demande_club`, `date`, `motivation`, `id_statut_demande_club`, `id_club`, `id_etudiant`) VALUES
(1, '2021-05-11', 'motivation', 1, 1, 1),
(2, '2021-05-11', 'motivation 2', 2, 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `demande_master`
--

DROP TABLE IF EXISTS `demande_master`;
CREATE TABLE IF NOT EXISTS `demande_master` (
  `id_demande` int(11) NOT NULL AUTO_INCREMENT,
  `date_inscrit` date NOT NULL,
  `id_etat_demande_master` int(11) NOT NULL,
  `id_master` int(11) NOT NULL,
  `id_etudiant` int(11) NOT NULL,
  `fichier` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_demande`),
  KEY `id_etudiant` (`id_etudiant`),
  KEY `id_master` (`id_master`),
  KEY `etat_demande_master` (`id_etat_demande_master`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `demande_master`
--

INSERT INTO `demande_master` (`id_demande`, `date_inscrit`, `id_etat_demande_master`, `id_master`, `id_etudiant`, `fichier`) VALUES
(1, '2021-03-01', 3, 1, 3, ''),
(2, '2021-03-01', 1, 2, 4, ''),
(3, '2021-01-12', 1, 1, 4, ''),
(4, '2021-05-17', 4, 1, 5, 'http://localhost:3000/demande-master/2021-05-17T00-15-48.341ZDEV0001 (4).pdf'),
(5, '2021-06-15', 4, 1, 9, 'http://localhost:3000/demande-master/2021-06-15T08-53-50.404ZBL0001.pdf'),
(6, '2021-06-16', 3, 2, 12, 'http://localhost:3000/demande-master/2021-06-16T08-46-27.920Z_Untitled.pdf'),
(7, '2021-07-20', 3, 2, 13, 'http://localhost:3000/demande-master/2021-07-20T22-00-38.310ZDark Souls - Worldmap.pdf'),
(8, '2021-07-22', 3, 3, 15, 'http://localhost:3000/demande-master/2021-07-22T21-25-45.829ZDark Souls - Worldmap.pdf'),
(10, '2021-07-22', 4, 1, 15, 'http://localhost:3000/demande-master/2021-07-22T21-29-13.078ZDark Souls - Worldmap.pdf'),
(11, '2021-07-23', 4, 1, 13, 'http://localhost:3000/demande-master/2021-07-22T23-27-43.186ZDark Souls - Worldmap.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `demande_stage_entreprise`
--

DROP TABLE IF EXISTS `demande_stage_entreprise`;
CREATE TABLE IF NOT EXISTS `demande_stage_entreprise` (
  `id_demande_stage_entreprise` int(11) NOT NULL AUTO_INCREMENT,
  `id_etudiant` int(11) NOT NULL,
  `id_offre_stage` int(11) NOT NULL,
  `id_etat_demande_stage_entreprise` int(11) NOT NULL,
  PRIMARY KEY (`id_demande_stage_entreprise`),
  KEY `id_etudiant` (`id_etudiant`),
  KEY `id_offre_stage` (`id_offre_stage`),
  KEY `id_etat_demande_stage_entreprise` (`id_etat_demande_stage_entreprise`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `demande_stage_entreprise`
--

INSERT INTO `demande_stage_entreprise` (`id_demande_stage_entreprise`, `id_etudiant`, `id_offre_stage`, `id_etat_demande_stage_entreprise`) VALUES
(8, 1, 8, 1),
(9, 3, 7, 3),
(10, 4, 7, 4);

-- --------------------------------------------------------

--
-- Table structure for table `demande_stage_etudiant`
--

DROP TABLE IF EXISTS `demande_stage_etudiant`;
CREATE TABLE IF NOT EXISTS `demande_stage_etudiant` (
  `id_demande` int(11) NOT NULL AUTO_INCREMENT,
  `date_demande` date NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_etat_demande_stage_etudiant` int(11) NOT NULL,
  `id_etudiant` int(11) NOT NULL,
  PRIMARY KEY (`id_demande`),
  KEY `id_etudiant` (`id_etudiant`),
  KEY `demande_stage_etudiant_ibfk_2` (`id_etat_demande_stage_etudiant`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `demande_stage_etudiant`
--

INSERT INTO `demande_stage_etudiant` (`id_demande`, `date_demande`, `description`, `id_etat_demande_stage_etudiant`, `id_etudiant`) VALUES
(1, '2021-02-01', 'desc', 1, 1),
(2, '2021-04-01', 'desc ', 2, 3),
(3, '2021-02-01', 'desc', 3, 4),
(4, '2021-04-01', 'desc ', 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `departement`
--

DROP TABLE IF EXISTS `departement`;
CREATE TABLE IF NOT EXISTS `departement` (
  `id_departement` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_departement`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `departement`
--

INSERT INTO `departement` (`id_departement`, `code`, `libelle`, `description`) VALUES
(3, 'TI', 'Technologie de l\'informatique ', 'Departement Info'),
(4, 'AL', 'Agro alimentaire ', 'test2'),
(5, 'M', 'Mecanique ', 'test'),
(6, 'E', 'electrique', 'test'),
(9, 'Agro', 'Agro-Alimentaire', 'Agroalimentaire');

-- --------------------------------------------------------

--
-- Table structure for table `domaine`
--

DROP TABLE IF EXISTS `domaine`;
CREATE TABLE IF NOT EXISTS `domaine` (
  `id_domaine` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_domaine`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `domaine`
--

INSERT INTO `domaine` (`id_domaine`, `libelle`) VALUES
(2, 'Technologies de l\'informatique'),
(3, 'Génie éléctrique'),
(4, 'Sciences économiques et de gestion'),
(5, 'Génie de procédés'),
(6, 'Génie Mécanique');

-- --------------------------------------------------------

--
-- Table structure for table `enseignement`
--

DROP TABLE IF EXISTS `enseignement`;
CREATE TABLE IF NOT EXISTS `enseignement` (
  `id_enseignement` int(11) NOT NULL AUTO_INCREMENT,
  `id_salle` int(11) NOT NULL,
  `id_seance` int(11) NOT NULL,
  `id_matiere` int(11) NOT NULL,
  `id_enseignant` int(11) NOT NULL COMMENT 'cette id est correspondant pour l''utilisateur qui est un role enseignant ',
  `id_classe` int(11) NOT NULL,
  `id_statut_enseignement` int(11) NOT NULL,
  `qr_code` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_enseignement`),
  KEY `id_classe` (`id_classe`),
  KEY `id_matiere` (`id_matiere`),
  KEY `id_salle` (`id_salle`),
  KEY `id_seance` (`id_seance`),
  KEY `id_statut_enseignement` (`id_statut_enseignement`),
  KEY `enseignement_ibfk_7` (`id_enseignant`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `enseignement`
--

INSERT INTO `enseignement` (`id_enseignement`, `id_salle`, `id_seance`, `id_matiere`, `id_enseignant`, `id_classe`, `id_statut_enseignement`, `qr_code`) VALUES
(1, 12, 1, 1, 6, 1, 1, ''),
(2, 11, 2, 3, 6, 2, 1, ''),
(3, 1, 3, 1, 6, 4, 1, ''),
(4, 9, 4, 4, 6, 3, 2, '');

-- --------------------------------------------------------

--
-- Table structure for table `entreprise`
--

DROP TABLE IF EXISTS `entreprise`;
CREATE TABLE IF NOT EXISTS `entreprise` (
  `id_entreprises` int(11) NOT NULL AUTO_INCREMENT,
  `nom_societe` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `num_reg_commerce` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `localisation` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `site_web` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_domaine` int(11) NOT NULL,
  PRIMARY KEY (`id_entreprises`),
  KEY `id_domaine` (`id_domaine`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `entreprise`
--

INSERT INTO `entreprise` (`id_entreprises`, `nom_societe`, `num_reg_commerce`, `localisation`, `site_web`, `id_domaine`) VALUES
(2, 'SWConsulting', '1254789630', 'Monastir', 'www.SWConsulting.com', 2),
(3, 'ProxymIT', '7412589632', 'Sousse', 'www.ProxymIT.com', 2),
(4, 'Vermeg', '7893214560', 'Tunis', 'www.Vermeg.com', 2);

-- --------------------------------------------------------

--
-- Table structure for table `entretien`
--

DROP TABLE IF EXISTS `entretien`;
CREATE TABLE IF NOT EXISTS `entretien` (
  `id_entretien` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `heure` date NOT NULL,
  `salle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_etudiant` int(11) NOT NULL,
  `id_professeur` int(11) NOT NULL,
  PRIMARY KEY (`id_entretien`),
  KEY `id_etudiant` (`id_etudiant`),
  KEY `id_professeur` (`id_professeur`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `entretien`
--

INSERT INTO `entretien` (`id_entretien`, `date`, `heure`, `salle`, `id_etudiant`, `id_professeur`) VALUES
(1, '2021-05-10', '2012-12-12', 'A5', 1, 1),
(2, '2021-05-04', '2021-05-12', 'A6', 3, 2),
(3, '2021-05-10', '2012-12-12', 'A7', 4, 1),
(4, '2021-05-04', '2021-05-12', 'A8', 3, 2),
(5, '2021-05-10', '2012-12-12', 'A9', 1, 1),
(6, '2021-05-04', '2021-05-12', 'A10', 4, 2);

-- --------------------------------------------------------

--
-- Table structure for table `equipe_club`
--

DROP TABLE IF EXISTS `equipe_club`;
CREATE TABLE IF NOT EXISTS `equipe_club` (
  `id_equipe_club` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_equipe_club`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `equipe_club`
--

INSERT INTO `equipe_club` (`id_equipe_club`, `libelle`) VALUES
(1, 'equipe 1'),
(2, 'equipe 2'),
(3, 'equipe 3');

-- --------------------------------------------------------

--
-- Table structure for table `etablissement`
--

DROP TABLE IF EXISTS `etablissement`;
CREATE TABLE IF NOT EXISTS `etablissement` (
  `id_etablissement` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `code_postale` text COLLATE utf8_unicode_ci NOT NULL,
  `rue` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ville` int(11) DEFAULT NULL,
  `gouvernorat_adresse` int(11) DEFAULT NULL,
  `code_etablissement` text COLLATE utf8_unicode_ci NOT NULL,
  `site_web` text COLLATE utf8_unicode_ci,
  `logo` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id_etablissement`),
  KEY `fkville` (`ville`),
  KEY `fkgouv` (`gouvernorat_adresse`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `etablissement`
--

INSERT INTO `etablissement` (`id_etablissement`, `libelle`, `code_postale`, `rue`, `ville`, `gouvernorat_adresse`, `code_etablissement`, `site_web`, `logo`) VALUES
(1, 'Institut Supérieur des Etudes Technologiques de Charguia', '5125', 'Rue rades', 1, 5, 'IsetC', 'test.com', 'http://localhost:3000/etablissement_logo/2021-06-12T14-36-08.883Zangular.png'),
(2, 'Institut Supérieur des Etudes Technologiques de Rades', '5125', '147 Rue rades', 1, 3, 'IsetR', '', 'http://localhost:3000/etablissement_logo/2021-06-12T14-36-08.883Zangular.png'),
(3, ' Institut Supérieur des Etudes Technologiques de Mahdia', '5045', '145 rue theodore', 1, 21, 'IsetM', 'isetm.net', 'http://localhost:3000/etablissement_logo/2021-06-15T21-55-09.424Zdownload.png'),
(4, 'Institut Supérieur des Etudes Technologiques de bizerte', '1022', 'bizerte', 1, 7, 'IsetB', 'isetb.com', 'http://localhost:3000/etablissement_logo/2021-06-15T21-58-09.283Zdownload.png'),
(12, 'Institut Supérieur des Technologies de l\'Information et de la Communication', '', '', 1, 2, 'Istic', '	\r\nwww.istic.rnu.tn', 'http://localhost:3000/etablissement_logo/Istic.png'),
(13, 'Institut Supérieur des Langues Appliquées et Informatique de Béja', '', '', 1, 3, 'ISLAIB', 'http://www.islaib.rnu.tn/', 'http://localhost:3000/etablissement_logo/Islaib.jpg'),
(14, 'Institut Supérieur des Etudes Technologiques du Kef', '', '', 1, 1, 'IsetK', 'http://www.isetkf.rnu.tn/', 'http://localhost:3000/etablissement_logo/Isetk.jpg'),
(15, 'Institut des Hautes Etudes à Tunis  (ETS Privé)', '', '', 1, 2, 'Ihet', 'https://www.ihet.ens.tn/', 'http://localhost:3000/etablissement_logo/Ihet.jpg'),
(16, 'Ecole Supérieure Privée d\'Ingénierie et des Technologies Appliquées', '', '', 1, 2, 'Espita', 'http://www.espita.ens.tn/', 'http://localhost:3000/etablissement_logo/Espita.png'),
(17, 'Ecole Nationale d\'Ingénieurs de Monastir', '', '', 1, 2, 'ENIM', 'http://www.enim.rnu.tn/', 'http://localhost:3000/etablissement_logo/Enim.png'),
(18, 'Faculté des Sciences de Bizerte', '', '', 1, 2, 'FSB', 'http://www.fsb.rnu.tn/', 'http://localhost:3000/etablissement_logo/FSB.png');

-- --------------------------------------------------------

--
-- Table structure for table `etat_demande_master`
--

DROP TABLE IF EXISTS `etat_demande_master`;
CREATE TABLE IF NOT EXISTS `etat_demande_master` (
  `id_etat_demande_master` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_etat_demande_master`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `etat_demande_master`
--

INSERT INTO `etat_demande_master` (`id_etat_demande_master`, `libelle`) VALUES
(1, 'Accepter'),
(2, 'Refuser'),
(3, 'En Cours'),
(4, 'Présélectionné');

-- --------------------------------------------------------

--
-- Table structure for table `etat_demande_stage_entreprise`
--

DROP TABLE IF EXISTS `etat_demande_stage_entreprise`;
CREATE TABLE IF NOT EXISTS `etat_demande_stage_entreprise` (
  `id_etat_demande_stage_entreprise` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_etat_demande_stage_entreprise`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `etat_demande_stage_entreprise`
--

INSERT INTO `etat_demande_stage_entreprise` (`id_etat_demande_stage_entreprise`, `libelle`) VALUES
(1, 'etat demande stage entreprise 1'),
(2, 'etat demande stage entreprise 2'),
(3, 'etat demande stage entreprise 3'),
(4, 'etat demande stage entreprise 4');

-- --------------------------------------------------------

--
-- Table structure for table `etat_demande_stage_etudiant`
--

DROP TABLE IF EXISTS `etat_demande_stage_etudiant`;
CREATE TABLE IF NOT EXISTS `etat_demande_stage_etudiant` (
  `id_etat_demande_stage_etudiant` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_etat_demande_stage_etudiant`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `etat_demande_stage_etudiant`
--

INSERT INTO `etat_demande_stage_etudiant` (`id_etat_demande_stage_etudiant`, `libelle`) VALUES
(1, 'etat demande stage etudiant 1'),
(2, 'etat demande stage etudiant 2'),
(3, 'etat demande stage etudiant 3'),
(4, 'etat demande stage etudiant 4');

-- --------------------------------------------------------

--
-- Table structure for table `etat_offre_stage`
--

DROP TABLE IF EXISTS `etat_offre_stage`;
CREATE TABLE IF NOT EXISTS `etat_offre_stage` (
  `id_etat_offre_stage` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_etat_offre_stage`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `etat_offre_stage`
--

INSERT INTO `etat_offre_stage` (`id_etat_offre_stage`, `libelle`) VALUES
(1, 'offre 1'),
(2, 'offre 2');

-- --------------------------------------------------------

--
-- Table structure for table `etat_presence_enseignant`
--

DROP TABLE IF EXISTS `etat_presence_enseignant`;
CREATE TABLE IF NOT EXISTS `etat_presence_enseignant` (
  `id_etat_presence_enseignant` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` int(11) NOT NULL,
  PRIMARY KEY (`id_etat_presence_enseignant`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `etat_presence_enseignant`
--

INSERT INTO `etat_presence_enseignant` (`id_etat_presence_enseignant`, `libelle`) VALUES
(1, 0),
(2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `etat_presence_etudiant`
--

DROP TABLE IF EXISTS `etat_presence_etudiant`;
CREATE TABLE IF NOT EXISTS `etat_presence_etudiant` (
  `id_etat_presence_etudiant` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_etat_presence_etudiant`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `etat_presence_etudiant`
--

INSERT INTO `etat_presence_etudiant` (`id_etat_presence_etudiant`, `libelle`) VALUES
(1, 'present '),
(2, 'Absent');

-- --------------------------------------------------------

--
-- Table structure for table `etudiant`
--

DROP TABLE IF EXISTS `etudiant`;
CREATE TABLE IF NOT EXISTS `etudiant` (
  `id_etudiant` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_bacc` int(11) DEFAULT NULL,
  `id_cursusgenerale` int(11) DEFAULT NULL,
  `id_situation_etudiant` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_etudiant`),
  KEY `id_user` (`id_user`),
  KEY `fkbacc` (`id_bacc`),
  KEY `fkcursusgeneral` (`id_cursusgenerale`),
  KEY `testtestsitua` (`id_situation_etudiant`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `etudiant`
--

INSERT INTO `etudiant` (`id_etudiant`, `id_user`, `id_bacc`, `id_cursusgenerale`, `id_situation_etudiant`) VALUES
(1, 1, NULL, NULL, NULL),
(3, 1, NULL, NULL, NULL),
(4, 2, NULL, NULL, NULL),
(5, 8, 18, 3, NULL),
(6, 11, NULL, NULL, NULL),
(7, 12, NULL, NULL, NULL),
(8, 14, NULL, NULL, NULL),
(9, 19, 19, 4, NULL),
(10, 21, 20, 5, NULL),
(11, 9, NULL, NULL, NULL),
(12, 22, 21, 6, NULL),
(13, 20, 22, 7, NULL),
(14, 32, NULL, NULL, NULL),
(15, 34, 23, 8, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `evenement`
--

DROP TABLE IF EXISTS `evenement`;
CREATE TABLE IF NOT EXISTS `evenement` (
  `id_event` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `duree` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `heure` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `prix` double NOT NULL,
  `id_club` int(11) NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `url_fichier` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_event`),
  KEY `id_club` (`id_club`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `evenement`
--

INSERT INTO `evenement` (`id_event`, `date`, `duree`, `heure`, `nom`, `prix`, `id_club`, `description`, `url_fichier`) VALUES
(1, '2021-04-01', '2 Heures', '12h', 'Improve Your Skills in IOT', 0, 2, 'Improve Your Skills in IOT', '');

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

DROP TABLE IF EXISTS `experience`;
CREATE TABLE IF NOT EXISTS `experience` (
  `id_experience` int(11) NOT NULL AUTO_INCREMENT,
  `nom_entreprise` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `post` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_experience`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`id_experience`, `nom_entreprise`, `date_debut`, `date_fin`, `description`, `post`) VALUES
(1, 'google', '2021-01-01', '2021-05-10', 'desc', 'web developer'),
(2, 'facebook', '2021-01-01', '2021-05-10', 'desc', 'front-end developer');

-- --------------------------------------------------------

--
-- Table structure for table `gouvernerat`
--

DROP TABLE IF EXISTS `gouvernerat`;
CREATE TABLE IF NOT EXISTS `gouvernerat` (
  `id_gouvernerat` int(11) NOT NULL AUTO_INCREMENT,
  `libelle_gouvernerat` varchar(255) NOT NULL,
  `id_ville` int(11) NOT NULL,
  PRIMARY KEY (`id_gouvernerat`),
  KEY `id_ville` (`id_ville`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gouvernerat`
--

INSERT INTO `gouvernerat` (`id_gouvernerat`, `libelle_gouvernerat`, `id_ville`) VALUES
(1, 'Bab El Bhar', 1),
(2, 'Tunis', 1),
(3, 'Bab Souika', 1),
(4, 'Carthage', 1),
(5, 'Cité El Khadra', 1),
(6, 'Djebel Djelloud', 1),
(7, 'El Hrairia', 1),
(8, 'El Kabaria', 1),
(9, 'El Menzah', 1),
(10, 'El Omrane', 1),
(11, 'El Omrane Supérieur', 1),
(12, 'El Ouardia', 1),
(13, 'Ettahrir', 1),
(14, 'Ezzouhour', 1),
(15, 'La Goulette', 1),
(16, 'La Marsa', 1),
(17, 'Le Bardo', 1),
(18, 'Le Kram', 1),
(19, 'Medina', 1),
(20, 'Bab El Bhar', 1),
(21, 'Bab Souika', 1),
(22, 'Carthage', 1),
(23, 'Cité El Khadra', 1),
(24, 'Djebel Djelloud', 1),
(25, 'El Hrairia', 1),
(26, 'El Kabaria', 1),
(27, 'El Menzah', 1),
(28, 'El Omrane', 1),
(29, 'El Omrane Supérieur', 1),
(30, 'El Ouardia', 1),
(31, 'Ettahrir', 1),
(32, 'Ezzouhour', 1),
(33, 'La Goulette', 1),
(34, 'La Marsa', 1),
(35, 'Le Bardo', 1),
(36, 'Le Kram', 1),
(37, 'Medina', 1),
(38, 'Sijoumi', 1),
(39, 'Sidi El Béchir', 1),
(40, 'Sidi Hassine', 1);

-- --------------------------------------------------------

--
-- Table structure for table `inscription`
--

DROP TABLE IF EXISTS `inscription`;
CREATE TABLE IF NOT EXISTS `inscription` (
  `id_inscription` int(11) NOT NULL AUTO_INCREMENT,
  `date_inscription` date NOT NULL,
  `id_classe` int(11) NOT NULL,
  `id_etudiant` int(11) NOT NULL,
  PRIMARY KEY (`id_inscription`),
  KEY `id_classe` (`id_classe`),
  KEY `id_etudiant` (`id_etudiant`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `inscription`
--

INSERT INTO `inscription` (`id_inscription`, `date_inscription`, `id_classe`, `id_etudiant`) VALUES
(1, '2020-11-10', 1, 1),
(2, '2020-12-01', 2, 3),
(3, '2020-10-20', 3, 4);

-- --------------------------------------------------------

--
-- Table structure for table `master`
--

DROP TABLE IF EXISTS `master`;
CREATE TABLE IF NOT EXISTS `master` (
  `id_master` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_departement` int(11) NOT NULL,
  `seuil_admission` int(11) NOT NULL,
  `seuil_admis_attente` int(11) NOT NULL,
  `date_fin_master` date NOT NULL,
  `id_etablissement` int(11) NOT NULL,
  `id_admin_master` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_master`),
  KEY `id_departement` (`id_departement`),
  KEY `id_etablissement` (`id_etablissement`),
  KEY `master_ibfk_3` (`id_admin_master`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `master`
--

INSERT INTO `master` (`id_master`, `nom`, `id_departement`, `seuil_admission`, `seuil_admis_attente`, `date_fin_master`, `id_etablissement`, `id_admin_master`) VALUES
(1, 'M1MPDAM', 3, 60, 5, '2021-08-25', 2, 32),
(2, 'BI', 3, 60, 58, '2021-07-20', 3, 33),
(3, 'Data Science', 3, 37, 11, '2023-12-31', 2, 36),
(7, 'Cybersecurity', 3, 50, 10, '2021-06-14', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `matiere`
--

DROP TABLE IF EXISTS `matiere`;
CREATE TABLE IF NOT EXISTS `matiere` (
  `id_matiere` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `charge_horaire` int(11) NOT NULL,
  `id_type_enseignement` int(11) NOT NULL,
  `id_semestre` int(11) NOT NULL,
  `id_niveau` int(11) NOT NULL,
  PRIMARY KEY (`id_matiere`),
  KEY `id_niveau` (`id_niveau`),
  KEY `id_semestre` (`id_semestre`),
  KEY `id_type_enseignement` (`id_type_enseignement`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `matiere`
--

INSERT INTO `matiere` (`id_matiere`, `libelle`, `charge_horaire`, `id_type_enseignement`, `id_semestre`, `id_niveau`) VALUES
(1, 'dev web', 10, 1, 1, 3),
(2, 'dev mobile', 6, 2, 2, 4),
(3, 'methodologie agile', 15, 1, 1, 3),
(4, 'projet personnel ', 15, 1, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `membre`
--

DROP TABLE IF EXISTS `membre`;
CREATE TABLE IF NOT EXISTS `membre` (
  `id_membre` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `motdepasse` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_role_membre_club` int(11) NOT NULL,
  `equipe` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_membre`),
  KEY `id_role_membre_club` (`id_role_membre_club`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `membre`
--

INSERT INTO `membre` (`id_membre`, `username`, `motdepasse`, `id_role_membre_club`, `equipe`) VALUES
(1, 'membre 1', 'membre12345', 1, 'equipe 1'),
(2, 'membre 2', 'membre12345', 2, 'equipe 2'),
(3, 'membre 3', 'membre12345', 1, 'equipe 3');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id_message` int(11) NOT NULL AUTO_INCREMENT,
  `message_text` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_status_messages` int(11) NOT NULL,
  `url_file` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date_message` date NOT NULL,
  `id_user_sender` int(11) NOT NULL,
  `id_user_receiver` int(11) NOT NULL,
  PRIMARY KEY (`id_message`),
  KEY `id_user_receiver` (`id_user_receiver`),
  KEY `id_user_sender` (`id_user_sender`),
  KEY `id_status_messages` (`id_status_messages`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id_message`, `message_text`, `id_status_messages`, `url_file`, `date_message`, `id_user_sender`, `id_user_receiver`) VALUES
(2, 'hi', 1, '', '2021-05-11', 5, 3);

-- --------------------------------------------------------

--
-- Table structure for table `niveau`
--

DROP TABLE IF EXISTS `niveau`;
CREATE TABLE IF NOT EXISTS `niveau` (
  `id_niveau` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_niveau`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `niveau`
--

INSERT INTO `niveau` (`id_niveau`, `libelle`) VALUES
(2, '1'),
(3, '2'),
(4, '3'),
(5, '4'),
(7, '5');

-- --------------------------------------------------------

--
-- Table structure for table `offre_stage`
--

DROP TABLE IF EXISTS `offre_stage`;
CREATE TABLE IF NOT EXISTS `offre_stage` (
  `id_offre_stage` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `duree` int(11) NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `id_etat_offre_stage` int(11) NOT NULL,
  `cahier_charge` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_responsable_entreprise` int(11) NOT NULL,
  `nbr_vue` int(11) NOT NULL DEFAULT '0',
  `nbr_postulation` int(11) NOT NULL DEFAULT '0',
  `titre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Aucune description ',
  PRIMARY KEY (`id_offre_stage`),
  KEY `id_entreprise` (`id_responsable_entreprise`),
  KEY `id_etat_offre_stage` (`id_etat_offre_stage`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `offre_stage`
--

INSERT INTO `offre_stage` (`id_offre_stage`, `type`, `duree`, `date_debut`, `date_fin`, `id_etat_offre_stage`, `cahier_charge`, `id_responsable_entreprise`, `nbr_vue`, `nbr_postulation`, `titre`, `description`) VALUES
(7, 'pfe', 3, '2021-01-01', '2021-03-31', 1, '', 2, 0, 0, 'stage de fin d\'etude', 'Aucune description '),
(8, 'initiation', 3, '2021-01-01', '2021-03-31', 2, '', 3, 0, 0, 'stage de fin d\'etude', 'Aucune description ');

-- --------------------------------------------------------

--
-- Table structure for table `option`
--

DROP TABLE IF EXISTS `option`;
CREATE TABLE IF NOT EXISTS `option` (
  `id_option` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_niveau` int(11) NOT NULL,
  `id_parcours` int(11) NOT NULL,
  PRIMARY KEY (`id_option`),
  KEY `id_niveau` (`id_niveau`),
  KEY `id_parcours` (`id_parcours`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `option`
--

INSERT INTO `option` (`id_option`, `libelle`, `id_niveau`, `id_parcours`) VALUES
(1, 'option', 2, 1),
(2, 'option 2', 3, 1),
(3, 'option 2', 4, 1),
(4, 'option 3', 2, 1),
(5, 'option 4', 3, 1),
(6, 'option 5', 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `papier_administratif`
--

DROP TABLE IF EXISTS `papier_administratif`;
CREATE TABLE IF NOT EXISTS `papier_administratif` (
  `id_papier` int(11) NOT NULL AUTO_INCREMENT,
  `raison` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date` date NOT NULL,
  `id_type_papier` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_statut_papier` int(11) NOT NULL,
  PRIMARY KEY (`id_papier`),
  KEY `id_etudiant` (`id_user`),
  KEY `id_type_papier` (`id_type_papier`),
  KEY `id_statut_papier` (`id_statut_papier`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `papier_administratif`
--

INSERT INTO `papier_administratif` (`id_papier`, `raison`, `date`, `id_type_papier`, `id_user`, `id_statut_papier`) VALUES
(1, NULL, '2021-05-10', 1, 1, 1),
(2, NULL, '2021-05-10', 2, 2, 2),
(3, NULL, '2021-05-09', 1, 3, 1),
(4, '333', '2021-05-19', 2, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `parameter`
--

DROP TABLE IF EXISTS `parameter`;
CREATE TABLE IF NOT EXISTS `parameter` (
  `ref` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(350) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ref`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `parcours`
--

DROP TABLE IF EXISTS `parcours`;
CREATE TABLE IF NOT EXISTS `parcours` (
  `id_parcours` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_parcours`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `parcours`
--

INSERT INTO `parcours` (`id_parcours`, `libelle`) VALUES
(1, 'Licence'),
(2, 'Mastere ');

-- --------------------------------------------------------

--
-- Table structure for table `participer_club`
--

DROP TABLE IF EXISTS `participer_club`;
CREATE TABLE IF NOT EXISTS `participer_club` (
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `id_etudiant` int(11) NOT NULL,
  `id_club` int(11) NOT NULL,
  PRIMARY KEY (`id_etudiant`,`id_club`),
  KEY `id_club` (`id_club`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `participer_club`
--

INSERT INTO `participer_club` (`date_debut`, `date_fin`, `id_etudiant`, `id_club`) VALUES
('2021-05-05', '2021-05-28', 3, 1),
('2021-05-02', '2021-05-19', 4, 2);

-- --------------------------------------------------------

--
-- Table structure for table `participer_event`
--

DROP TABLE IF EXISTS `participer_event`;
CREATE TABLE IF NOT EXISTS `participer_event` (
  `id_etudiant` int(11) NOT NULL,
  `id_evenement` int(11) NOT NULL,
  PRIMARY KEY (`id_etudiant`,`id_evenement`),
  KEY `id_evenement` (`id_evenement`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `participer_event`
--

INSERT INTO `participer_event` (`id_etudiant`, `id_evenement`) VALUES
(1, 1),
(3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `pays`
--

DROP TABLE IF EXISTS `pays`;
CREATE TABLE IF NOT EXISTS `pays` (
  `id_pays` int(11) NOT NULL AUTO_INCREMENT,
  `libelle_pays` varchar(255) NOT NULL,
  PRIMARY KEY (`id_pays`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pays`
--

INSERT INTO `pays` (`id_pays`, `libelle_pays`) VALUES
(1, 'Tunisie'),
(2, 'Autre');

-- --------------------------------------------------------

--
-- Table structure for table `poste_entreprise`
--

DROP TABLE IF EXISTS `poste_entreprise`;
CREATE TABLE IF NOT EXISTS `poste_entreprise` (
  `id_poste` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_poste`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `poste_entreprise`
--

INSERT INTO `poste_entreprise` (`id_poste`, `description`) VALUES
(1, 'directeur'),
(2, 'secretaire'),
(3, 'front-end developer'),
(4, 'back-end developer'),
(5, 'graphic design'),
(6, 'mobile developer');

-- --------------------------------------------------------

--
-- Table structure for table `presence_enseignant`
--

DROP TABLE IF EXISTS `presence_enseignant`;
CREATE TABLE IF NOT EXISTS `presence_enseignant` (
  `id_enseignement` int(11) NOT NULL,
  `etat` int(1) NOT NULL DEFAULT '0',
  `id_presence_enseignant` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_presence_enseignant`),
  KEY `id_enseignement` (`id_enseignement`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `presence_enseignant`
--

INSERT INTO `presence_enseignant` (`id_enseignement`, `etat`, `id_presence_enseignant`) VALUES
(4, 0, 1),
(3, 0, 2);

-- --------------------------------------------------------

--
-- Table structure for table `presence_etudiant`
--

DROP TABLE IF EXISTS `presence_etudiant`;
CREATE TABLE IF NOT EXISTS `presence_etudiant` (
  `id_presence` int(11) NOT NULL AUTO_INCREMENT,
  `id_etudiant` int(11) NOT NULL,
  `id_enseignement` int(11) NOT NULL,
  `etat_presence_etd` int(1) NOT NULL DEFAULT '0',
  `localisation` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `time` date NOT NULL,
  `id_seance` int(11) NOT NULL,
  PRIMARY KEY (`id_presence`),
  KEY `id_enseignement` (`id_enseignement`),
  KEY `id_etudiant` (`id_etudiant`),
  KEY `id_seance` (`id_seance`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `presence_etudiant`
--

INSERT INTO `presence_etudiant` (`id_presence`, `id_etudiant`, `id_enseignement`, `etat_presence_etd`, `localisation`, `time`, `id_seance`) VALUES
(1, 4, 4, 1, 'loc', '2021-05-11', 6),
(2, 3, 3, 0, 'loc', '2021-05-26', 2);

-- --------------------------------------------------------

--
-- Table structure for table `professeur`
--

DROP TABLE IF EXISTS `professeur`;
CREATE TABLE IF NOT EXISTS `professeur` (
  `id_professeur` int(11) NOT NULL AUTO_INCREMENT,
  `id_departement` int(11) NOT NULL,
  `id_option` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id_professeur`),
  KEY `id_departement` (`id_departement`),
  KEY `id_option` (`id_option`),
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `professeur`
--

INSERT INTO `professeur` (`id_professeur`, `id_departement`, `id_option`, `id_user`) VALUES
(1, 4, 1, 5),
(2, 6, 2, 5);

-- --------------------------------------------------------

--
-- Table structure for table `publication_club`
--

DROP TABLE IF EXISTS `publication_club`;
CREATE TABLE IF NOT EXISTS `publication_club` (
  `id_publication` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `heure` int(11) NOT NULL,
  `url_document` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_member` int(11) NOT NULL,
  PRIMARY KEY (`id_publication`),
  KEY `id_member` (`id_member`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `publication_club`
--

INSERT INTO `publication_club` (`id_publication`, `description`, `date`, `heure`, `url_document`, `id_member`) VALUES
(1, 'description', '2021-05-11', 12, 'c://doc/d1.pdf', 1),
(2, 'description', '2021-05-27', 14, 'c://doc/d2.pdf', 1);

-- --------------------------------------------------------

--
-- Table structure for table `reclamation`
--

DROP TABLE IF EXISTS `reclamation`;
CREATE TABLE IF NOT EXISTS `reclamation` (
  `id_reclamation` int(11) NOT NULL AUTO_INCREMENT,
  `type_reclamation` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `contenu` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_statut_reclamation` int(11) NOT NULL,
  `date_reclamation` date NOT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id_reclamation`),
  KEY `id_etudiant` (`id_user`),
  KEY `id_statut_reclamation` (`id_statut_reclamation`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `reclamation`
--

INSERT INTO `reclamation` (`id_reclamation`, `type_reclamation`, `contenu`, `id_statut_reclamation`, `date_reclamation`, `id_user`) VALUES
(6, 'type reclamation ', 'contenu1', 1, '2021-05-11', 5),
(8, 'type reclamation ', 'contenu3', 1, '2021-05-11', 5);

-- --------------------------------------------------------

--
-- Table structure for table `responsable_classe`
--

DROP TABLE IF EXISTS `responsable_classe`;
CREATE TABLE IF NOT EXISTS `responsable_classe` (
  `id_responsable_group` int(11) NOT NULL AUTO_INCREMENT,
  `qualite` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id_responsable_group`),
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `responsable_classe`
--

INSERT INTO `responsable_classe` (`id_responsable_group`, `qualite`, `id_user`) VALUES
(2, 'Moyenne', 4),
(4, 'Bonne', 10);

-- --------------------------------------------------------

--
-- Table structure for table `responsable_entreprise`
--

DROP TABLE IF EXISTS `responsable_entreprise`;
CREATE TABLE IF NOT EXISTS `responsable_entreprise` (
  `id_responsable_entreprise` int(11) NOT NULL AUTO_INCREMENT,
  `id_entreprise` int(11) NOT NULL,
  `id_poste_entreprise` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id_responsable_entreprise`),
  KEY `id_poste_entreprise` (`id_poste_entreprise`),
  KEY `id_entreprise` (`id_entreprise`),
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `responsable_entreprise`
--

INSERT INTO `responsable_entreprise` (`id_responsable_entreprise`, `id_entreprise`, `id_poste_entreprise`, `id_user`) VALUES
(1, 3, 4, 7),
(2, 2, 3, 7),
(3, 4, 5, 7),
(4, 4, 6, 7);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id_role` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id_role`, `libelle`) VALUES
(2, 'etudiant master'),
(3, 'Responsable Classe'),
(4, 'Admin'),
(5, 'Professeur'),
(6, 'enseignant'),
(7, 'responsable entreprise'),
(8, 'Candidat Master'),
(9, 'user platforme inscription'),
(10, 'Admin master');

-- --------------------------------------------------------

--
-- Table structure for table `role_membre_club`
--

DROP TABLE IF EXISTS `role_membre_club`;
CREATE TABLE IF NOT EXISTS `role_membre_club` (
  `id_role_membre_club` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_role_membre_club`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `role_membre_club`
--

INSERT INTO `role_membre_club` (`id_role_membre_club`, `libelle`) VALUES
(1, 'role 1'),
(2, 'role 2'),
(3, 'role 3'),
(4, 'role 4');

-- --------------------------------------------------------

--
-- Table structure for table `rubrique`
--

DROP TABLE IF EXISTS `rubrique`;
CREATE TABLE IF NOT EXISTS `rubrique` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `score` double NOT NULL,
  `coefficient` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_entretien` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_entretien` (`id_entretien`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `rubrique`
--

INSERT INTO `rubrique` (`id`, `libelle`, `score`, `coefficient`, `id_entretien`) VALUES
(1, 'libelle rubrique', 45, '4', 1),
(2, 'libelle rubrique 2', 30, '4', 2);

-- --------------------------------------------------------

--
-- Table structure for table `salle`
--

DROP TABLE IF EXISTS `salle`;
CREATE TABLE IF NOT EXISTS `salle` (
  `id_salle` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `capacite` int(11) NOT NULL,
  `localisation` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_type_salle` int(11) NOT NULL,
  PRIMARY KEY (`id_salle`),
  KEY `id_type_salle` (`id_type_salle`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `salle`
--

INSERT INTO `salle` (`id_salle`, `libelle`, `capacite`, `localisation`, `id_type_salle`) VALUES
(1, 'A1', 25, '', 2),
(8, 'A2', 25, '', 2),
(9, 'A3', 25, '', 2),
(10, 'Lab 1', 20, '', 1),
(11, 'Lab 2', 20, '', 1),
(12, 'A10', 25, '', 2),
(13, 'Lab IOS', 20, '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `seance`
--

DROP TABLE IF EXISTS `seance`;
CREATE TABLE IF NOT EXISTS `seance` (
  `id_seance` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date_debut_seance` time NOT NULL,
  `date_fin_seance` time NOT NULL,
  PRIMARY KEY (`id_seance`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `seance`
--

INSERT INTO `seance` (`id_seance`, `libelle`, `date_debut_seance`, `date_fin_seance`) VALUES
(1, 'S1', '00:08:30', '00:10:00'),
(2, 'S2', '00:10:00', '00:11:30'),
(3, 'S3', '00:11:30', '00:13:00'),
(4, 'S4', '00:13:00', '00:14:30'),
(5, 'S5', '00:14:30', '00:16:00'),
(6, 'S6', '00:16:00', '00:17:30');

-- --------------------------------------------------------

--
-- Table structure for table `semestre`
--

DROP TABLE IF EXISTS `semestre`;
CREATE TABLE IF NOT EXISTS `semestre` (
  `id_semestre` int(11) NOT NULL AUTO_INCREMENT,
  `num_semestre` int(11) NOT NULL,
  `date_debut_annee_univ` date NOT NULL,
  `date_fin_annee_univ` date NOT NULL,
  PRIMARY KEY (`id_semestre`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `semestre`
--

INSERT INTO `semestre` (`id_semestre`, `num_semestre`, `date_debut_annee_univ`, `date_fin_annee_univ`) VALUES
(1, 1, '2020-09-15', '2021-01-10'),
(2, 2, '2021-01-11', '2021-06-20');

-- --------------------------------------------------------

--
-- Table structure for table `situation_etudiant`
--

DROP TABLE IF EXISTS `situation_etudiant`;
CREATE TABLE IF NOT EXISTS `situation_etudiant` (
  `id_situation_etudiant` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_situation_etudiant`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `situation_etudiant`
--

INSERT INTO `situation_etudiant` (`id_situation_etudiant`, `libelle`) VALUES
(1, 'celibataire'),
(2, 'Mariee'),
(3, 'divorce');

-- --------------------------------------------------------

--
-- Table structure for table `situation_professionnel`
--

DROP TABLE IF EXISTS `situation_professionnel`;
CREATE TABLE IF NOT EXISTS `situation_professionnel` (
  `id_situation_professionnel` int(11) NOT NULL AUTO_INCREMENT,
  `libelle_situation_professionnel` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_situation_professionnel`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `situation_professionnel`
--

INSERT INTO `situation_professionnel` (`id_situation_professionnel`, `libelle_situation_professionnel`) VALUES
(1, 'Employeur '),
(2, 'Etudiant '),
(3, 'Autre');

-- --------------------------------------------------------

--
-- Table structure for table `sondage`
--

DROP TABLE IF EXISTS `sondage`;
CREATE TABLE IF NOT EXISTS `sondage` (
  `id_sondage` int(11) NOT NULL AUTO_INCREMENT,
  `date_sondage` date NOT NULL,
  `heure_sondage` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `id_membre` int(11) NOT NULL,
  `titre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `id_club` int(11) NOT NULL,
  PRIMARY KEY (`id_sondage`),
  KEY `id_club` (`id_club`),
  KEY `id_membre` (`id_membre`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sondage`
--

INSERT INTO `sondage` (`id_sondage`, `date_sondage`, `heure_sondage`, `id_membre`, `titre`, `id_club`) VALUES
(4, '2021-05-04', '14:00:21', 1, 'titre sondage', 1),
(5, '2021-05-02', '13:05:30', 2, 'titre_sondage', 2),
(6, '2021-05-04', '17:00:21', 3, 'titre sondage', 1),
(7, '2021-05-02', '18:05:30', 2, 'titre_sondage', 2);

-- --------------------------------------------------------

--
-- Table structure for table `specialite`
--

DROP TABLE IF EXISTS `specialite`;
CREATE TABLE IF NOT EXISTS `specialite` (
  `id_specialite` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_domaine` int(11) NOT NULL,
  PRIMARY KEY (`id_specialite`),
  KEY `id_domaine` (`id_domaine`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `specialite`
--

INSERT INTO `specialite` (`id_specialite`, `libelle`, `id_domaine`) VALUES
(2, 'Construction et fabrication mécanique', 6),
(3, 'Réseau et Services Informatiques', 2),
(4, 'Développement des Systèmes d’Information', 2),
(5, 'Systèmes Embarqués et Mobiles sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', 2),
(6, 'Electronique industrielle', 3),
(7, 'Electricité industrielle ', 3),
(9, 'Automatisme et Informatique industrielle', 3),
(12, 'Procédés Alimentaires', 5),
(13, 'Logistique et Transport ', 4),
(14, 'Management des arraires', 4),
(15, 'Techniques Comptables et Financières', 4),
(16, 'Marketing Digital', 4),
(17, 'Maintenance industrielle', 6);

-- --------------------------------------------------------

--
-- Table structure for table `status_contact`
--

DROP TABLE IF EXISTS `status_contact`;
CREATE TABLE IF NOT EXISTS `status_contact` (
  `id_status_contact` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_status_contact`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `status_contact`
--

INSERT INTO `status_contact` (`id_status_contact`, `libelle`) VALUES
(1, 'status contact 1'),
(2, 'status contact 2');

-- --------------------------------------------------------

--
-- Table structure for table `status_messages`
--

DROP TABLE IF EXISTS `status_messages`;
CREATE TABLE IF NOT EXISTS `status_messages` (
  `id_status_messages` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_status_messages`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `status_messages`
--

INSERT INTO `status_messages` (`id_status_messages`, `libelle`) VALUES
(1, 'status messages 1');

-- --------------------------------------------------------

--
-- Table structure for table `statut_demande_club`
--

DROP TABLE IF EXISTS `statut_demande_club`;
CREATE TABLE IF NOT EXISTS `statut_demande_club` (
  `id_statut_demande_club` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_statut_demande_club`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `statut_demande_club`
--

INSERT INTO `statut_demande_club` (`id_statut_demande_club`, `libelle`) VALUES
(1, 'statut 1'),
(2, 'statut 2');

-- --------------------------------------------------------

--
-- Table structure for table `statut_enseignement`
--

DROP TABLE IF EXISTS `statut_enseignement`;
CREATE TABLE IF NOT EXISTS `statut_enseignement` (
  `id_statut_enseignement` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_statut_enseignement`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `statut_enseignement`
--

INSERT INTO `statut_enseignement` (`id_statut_enseignement`, `libelle`) VALUES
(1, 'Statut 1'),
(2, 'Statut 2');

-- --------------------------------------------------------

--
-- Table structure for table `statut_papier`
--

DROP TABLE IF EXISTS `statut_papier`;
CREATE TABLE IF NOT EXISTS `statut_papier` (
  `id_statut_papier` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_statut_papier`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `statut_papier`
--

INSERT INTO `statut_papier` (`id_statut_papier`, `libelle`) VALUES
(1, 'Statut 1'),
(2, 'Statut 2');

-- --------------------------------------------------------

--
-- Table structure for table `statut_reclamation`
--

DROP TABLE IF EXISTS `statut_reclamation`;
CREATE TABLE IF NOT EXISTS `statut_reclamation` (
  `id_statut_reclamation` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_statut_reclamation`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `statut_reclamation`
--

INSERT INTO `statut_reclamation` (`id_statut_reclamation`, `libelle`) VALUES
(1, 'Statut 1'),
(2, 'Statut 2');

-- --------------------------------------------------------

--
-- Table structure for table `tmp_data`
--

DROP TABLE IF EXISTS `tmp_data`;
CREATE TABLE IF NOT EXISTS `tmp_data` (
  `ref` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `data` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ref`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `type_enseignement`
--

DROP TABLE IF EXISTS `type_enseignement`;
CREATE TABLE IF NOT EXISTS `type_enseignement` (
  `id_type_enseignant` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_type_enseignant`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `type_enseignement`
--

INSERT INTO `type_enseignement` (`id_type_enseignant`, `libelle`) VALUES
(1, 'Presentielle '),
(2, 'a distance');

-- --------------------------------------------------------

--
-- Table structure for table `type_papier`
--

DROP TABLE IF EXISTS `type_papier`;
CREATE TABLE IF NOT EXISTS `type_papier` (
  `id_type_papier` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_type_papier`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `type_papier`
--

INSERT INTO `type_papier` (`id_type_papier`, `libelle`) VALUES
(1, 'type 1'),
(2, 'type 2');

-- --------------------------------------------------------

--
-- Table structure for table `type_salle`
--

DROP TABLE IF EXISTS `type_salle`;
CREATE TABLE IF NOT EXISTS `type_salle` (
  `id_typeSalle` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_typeSalle`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `type_salle`
--

INSERT INTO `type_salle` (`id_typeSalle`, `libelle`) VALUES
(1, 'Laboratoire'),
(2, 'salle de cours');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_role` int(11) NOT NULL,
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `prenom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(11) NOT NULL,
  `cin` text COLLATE utf8_unicode_ci NOT NULL,
  `sexe` text COLLATE utf8_unicode_ci NOT NULL,
  `num_passport` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `date_naissance` date NOT NULL,
  `gouvern_naissance` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_situation_professionnel` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `email` (`email`),
  KEY `id_role` (`id_role`),
  KEY `fksituation` (`id_situation_professionnel`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`email`, `password`, `id_role`, `id_user`, `nom`, `prenom`, `age`, `cin`, `sexe`, `num_passport`, `date_naissance`, `gouvern_naissance`, `id_situation_professionnel`) VALUES
('kaarimbouzid@gmail.com', '123456789', 2, 1, 'Bouzid', 'Karim', 23, '06993131', 'homme', '06993131', '1997-09-20', 'monastir', 2),
('ilyeshrizi@gmail.com', '123456', 2, 2, 'Hrizi', 'Ilyes', 23, '06887755', 'homme', '06887755', '1997-11-05', 'gabes', 2),
('test@gmail.com', '12345', 4, 3, 'test', 'test', 22, '11111111', 'Homme', '11111111', '1994-02-10', 'tunis', 2),
('Donia@gmail.com', '12345', 2, 4, 'Donia', 'Ben Sedrine', 22, '45454545', 'Femme', '45454545', '1998-01-01', 'ben arous', 2),
('beji@gmail.com', '12345', 5, 5, 'Sofien', 'Beji', 49, '52525252', 'Homme', '52525252', '1980-02-10', 'tunis', 2),
('habib@gmail.com', '123456', 6, 6, 'smei', 'habib', 50, '12457896', 'homme', '12457896', '2020-10-06', 'tunis', 2),
('responsable@gmail.com', '123456', 7, 7, 'jbeli', 'mohamed ali', 24, '06875421', 'homme', '06875421', '1996-11-26', 'tunis', 2),
('bilel@gmail.com', '$2b$10$Lok/Y9VWaMGIirYivULT.O4wwhdIVEtnvQYzOo4dQuAPSK9VL6CK6', 4, 8, 'bilel', 'hedhli', 0, '11457896', 'Masculin', '', '1998-02-23', NULL, 2),
('Admin@isetr.com', '$2b$10$6ji62wOFtx3svHrxfyFE7OmypWlXIal.1obRP6PYLWwuDBblkXeLu', 4, 9, 'Ahmed', 'Hedi', 0, '47896512', 'Masculin', '', '1983-11-30', NULL, 2),
('Dorsaf@gmail.com', '$2b$10$y.4snjGSxYRW4anLNfrzM.TEBhYQlJs34yjMFQgg0bnG6AoTXJUo.', 4, 10, 'Dorsaf', 'Boughdiri', 0, '11457896', 'Feminin', '', '1998-09-27', NULL, 2),
('Ahmed@gmail.com', '$2b$10$p0w4H39Oj5HlEHb1nCsSluFX37oNOUrzdsdB6ntEiFIiVIb2w2xbO', 2, 11, 'Ahmed', 'Bejaoui', 0, '11456789', 'Masculin', '', '1998-05-27', NULL, 2),
('amin@gmail.com', '$2b$10$p2YHcxGSBOWmXtb7eQD1Re1RfQ61tWbq.TbB.bt5V8gtOxpcnkUuy', 2, 12, 'Amine', 'Zarrouk', 0, '11356978', 'Masculin', '', '1997-05-28', NULL, 2),
('mohamedhedi@gmail.com', '$2b$10$cRrz0qB1/rUNwwgt1W8aCes79U5650uGIL5NyS1Ohos3odjETEIqW', 2, 13, 'mohamed', 'hedi', 0, '11415416', 'Masculin', '', '2021-12-31', '1', 2),
('test5@gmail.com', '$2b$10$anjItGubUAPbjjRzSdNODunN43.T2aSOOjKTtU3j3jDOifTYC8WhS', 2, 14, 'emir', 'emir', 0, '14789655', 'Feminin', '', '2021-12-31', '1', 2),
('boughdiridorsaf123@gmail.com', '$2b$10$wqs7qbqzkcA6zwWggsQ1pehzFkzfi9OTlBU6Y3j.0ixajCfQuNGtS', 2, 15, 'dorsaf', 'boughdiri', 0, '11256981', 'Masculin', '', '2021-12-31', 'Tunis', 2),
('bilelhedhli2@gmail.com', '$2b$10$gO0ikevDYcI8isoCAaKDGem0TQSq7FVcvNL7w9XPPTsH3USoMOlnG', 9, 19, 'test', 'test', 0, '14444444', 'Masculin', '', '2012-12-31', 'Tunis', 2),
('emine@gmail.com', '$2b$10$oIsR4aWyMBrhJ3mySnlRqOS7NFHktZGieQSBweUQuew.C.4mRD.Ga', 9, 20, 'emine', 'test', 0, '45789665', 'Masculin', '', '2008-12-31', 'Cité El Khadra', 2),
('Mariem@gmail.com', '$2b$10$6w2SLhD.Oqq1JGbO5rSnpuBwdqxDKt237gSw5ZzY38qx5zqFURpiS', 9, 21, 'Mariem', 'Belhadg', 0, '12345678', 'Feminin', '', '1997-12-31', 'Medina', 2),
('bilelhedhli1@gmail.com', '$2b$10$8GLv1gd623kmKbWV0FHkK.4yp.qf1FRtoPH7YgNy2nZCKGrcekoPi', 9, 22, 'beji', 'sofienne', 0, '', 'Masculin', 'kjkj', '2021-06-30', 'Medina', 3),
('Aymen123@gmail.com', '$2b$10$NFY64OyCx5ZSHzHFnKQA0uuZRALxq8Sa1mNicgOdrAmr.0aQqTGeW', 9, 23, 'test', 'test', 0, '11415416', 'Homme', '', '2021-12-31', 'Medina', 1),
('bilelhedhli147@gmail.com', '$2b$10$6gKvAQSOIfgpNQfKQhgF5.5N2c24v9CR/xIq43vc3WfNd6XqvXjPm', 9, 24, 'Mohamed', 'Hedo', 0, '11415416', 'Homme', '', '2021-12-31', 'Medina', 1),
('bilelhedhli145@gmail.com', '$2b$10$i3TgZ2/K6Zwh6TYY6uMLXuwuHapvuPEIU8n2m79oPxSwhtrH7whzG', 9, 25, 'mohamed', 'hedi', 0, '11256981', 'Homme', '', '2021-12-31', 'Medina', 1),
('test1456@gmail.com', '$2b$10$xTlkZTKaZrwmQk1bTlYvU.rdCpplzNE2EtezK7kaJDOM.tSd5UgMq', 10, 26, 'Aymen', 'Kardi', 22, '11556699', 'Homme', '', '1998-02-23', 'Null', 1),
('adminmaster1@gmail.com', '$2b$10$6ji62wOFtx3svHrxfyFE7OmypWlXIal.1obRP6PYLWwuDBblkXeLu', 10, 32, 'bilel', 'hedhli', 0, '10000000', '', '', '1998-03-03', '', 1),
('bensedrinedonia147@gmail.com', '$2b$10$awNqwdsKW8Xp7qc04U1PTuTUz0PNDlEgm.jN4BxxvjvdBSU.MMHvO', 10, 33, 'Donia', 'Ben Sedrine', 0, '10000000', '', '', '1998-03-03', '', 1),
('bilelhedhli789@gmail.com', '$2b$10$LpYlcw6niH1Kgv9qY8GRduGafhmEg2cZ4p8yNibQLv98RckaNv8Gq', 9, 34, 'Dorsaf', 'Boughdiri', 0, '11415416', 'Femme', 'DH154777', '2006-02-04', 'Medina', 2),
('boughdiridorsaf1298@gmail.com', '$2b$10$gRE8NwdN./WZUA9EJNiq0e/wS78Kv5onOUdslRJxbLdSFNkAElOv2', 10, 36, 'Dorsaf', 'Boughdiri', 0, '10000000', '', '', '1998-03-03', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ville`
--

DROP TABLE IF EXISTS `ville`;
CREATE TABLE IF NOT EXISTS `ville` (
  `id_ville` int(11) NOT NULL AUTO_INCREMENT,
  `libelle_ville` varchar(255) NOT NULL,
  PRIMARY KEY (`id_ville`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ville`
--

INSERT INTO `ville` (`id_ville`, `libelle_ville`) VALUES
(1, 'Tunis ');

-- --------------------------------------------------------

--
-- Table structure for table `vote_sondage`
--

DROP TABLE IF EXISTS `vote_sondage`;
CREATE TABLE IF NOT EXISTS `vote_sondage` (
  `id_membre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `statut` varchar(400) COLLATE utf8_unicode_ci NOT NULL,
  `id_sondage` int(11) NOT NULL,
  PRIMARY KEY (`id_membre`,`id_sondage`),
  KEY `id_membre` (`id_membre`,`id_sondage`),
  KEY `fk_sondage_vote` (`id_sondage`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `classe`
--
ALTER TABLE `classe`
  ADD CONSTRAINT `FK_PersonOrder7` FOREIGN KEY (`id_responsable`) REFERENCES `responsable_classe` (`id_responsable_group`);

--
-- Constraints for table `club`
--
ALTER TABLE `club`
  ADD CONSTRAINT `club_ibfk_1` FOREIGN KEY (`id_domaine`) REFERENCES `domaine` (`id_domaine`);

--
-- Constraints for table `contact`
--
ALTER TABLE `contact`
  ADD CONSTRAINT `contact_ibfk_1` FOREIGN KEY (`id_status_contact`) REFERENCES `status_contact` (`id_status_contact`),
  ADD CONSTRAINT `contact_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);

--
-- Constraints for table `cursus`
--
ALTER TABLE `cursus`
  ADD CONSTRAINT `FK_PersonOrder36` FOREIGN KEY (`id_domaine`) REFERENCES `domaine` (`id_domaine`),
  ADD CONSTRAINT `FK_PersonOrder37` FOREIGN KEY (`id_etablissement`) REFERENCES `etablissement` (`id_etablissement`),
  ADD CONSTRAINT `FK_PersonOrder38` FOREIGN KEY (`id_specialite`) REFERENCES `specialite` (`id_specialite`),
  ADD CONSTRAINT `cursus_ibfk_1` FOREIGN KEY (`id_niveau`) REFERENCES `niveau` (`id_niveau`),
  ADD CONSTRAINT `cursus_ibfk_2` FOREIGN KEY (`id_etudiant`) REFERENCES `etudiant` (`id_etudiant`);

--
-- Constraints for table `cursusgenerale`
--
ALTER TABLE `cursusgenerale`
  ADD CONSTRAINT `fkdomaine` FOREIGN KEY (`domaine`) REFERENCES `domaine` (`id_domaine`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fketab` FOREIGN KEY (`etablissement`) REFERENCES `etablissement` (`id_etablissement`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fkspecialite` FOREIGN KEY (`specialite`) REFERENCES `specialite` (`id_specialite`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cv`
--
ALTER TABLE `cv`
  ADD CONSTRAINT `FK_PersonOrder40` FOREIGN KEY (`id_experience`) REFERENCES `experience` (`id_experience`),
  ADD CONSTRAINT `FK_PersonOrder41` FOREIGN KEY (`id_competence`) REFERENCES `competence` (`id_competence`),
  ADD CONSTRAINT `cv_ibfk_1` FOREIGN KEY (`id_etudiant`) REFERENCES `etudiant` (`id_etudiant`);

--
-- Constraints for table `demande_club`
--
ALTER TABLE `demande_club`
  ADD CONSTRAINT `demande_club_ibfk_1` FOREIGN KEY (`id_club`) REFERENCES `club` (`id_club`),
  ADD CONSTRAINT `demande_club_ibfk_2` FOREIGN KEY (`id_etudiant`) REFERENCES `etudiant` (`id_etudiant`),
  ADD CONSTRAINT `demande_club_ibfk_3` FOREIGN KEY (`id_statut_demande_club`) REFERENCES `statut_demande_club` (`id_statut_demande_club`);

--
-- Constraints for table `demande_master`
--
ALTER TABLE `demande_master`
  ADD CONSTRAINT `demande_master_ibfk_1` FOREIGN KEY (`id_etudiant`) REFERENCES `etudiant` (`id_etudiant`),
  ADD CONSTRAINT `demande_master_ibfk_2` FOREIGN KEY (`id_master`) REFERENCES `master` (`id_master`),
  ADD CONSTRAINT `demande_master_ibfk_3` FOREIGN KEY (`id_etat_demande_master`) REFERENCES `etat_demande_master` (`id_etat_demande_master`);

--
-- Constraints for table `demande_stage_entreprise`
--
ALTER TABLE `demande_stage_entreprise`
  ADD CONSTRAINT `demande_stage_entreprise_ibfk_1` FOREIGN KEY (`id_etudiant`) REFERENCES `etudiant` (`id_etudiant`),
  ADD CONSTRAINT `demande_stage_entreprise_ibfk_2` FOREIGN KEY (`id_offre_stage`) REFERENCES `offre_stage` (`id_offre_stage`),
  ADD CONSTRAINT `demande_stage_entreprise_ibfk_3` FOREIGN KEY (`id_etat_demande_stage_entreprise`) REFERENCES `etat_demande_stage_entreprise` (`id_etat_demande_stage_entreprise`);

--
-- Constraints for table `demande_stage_etudiant`
--
ALTER TABLE `demande_stage_etudiant`
  ADD CONSTRAINT `demande_stage_etudiant_ibfk_1` FOREIGN KEY (`id_etudiant`) REFERENCES `etudiant` (`id_etudiant`),
  ADD CONSTRAINT `demande_stage_etudiant_ibfk_2` FOREIGN KEY (`id_etat_demande_stage_etudiant`) REFERENCES `etat_demande_stage_etudiant` (`id_etat_demande_stage_etudiant`);

--
-- Constraints for table `enseignement`
--
ALTER TABLE `enseignement`
  ADD CONSTRAINT `enseignement_ibfk_1` FOREIGN KEY (`id_classe`) REFERENCES `classe` (`id_classe`),
  ADD CONSTRAINT `enseignement_ibfk_3` FOREIGN KEY (`id_matiere`) REFERENCES `matiere` (`id_matiere`),
  ADD CONSTRAINT `enseignement_ibfk_4` FOREIGN KEY (`id_salle`) REFERENCES `salle` (`id_salle`),
  ADD CONSTRAINT `enseignement_ibfk_5` FOREIGN KEY (`id_seance`) REFERENCES `seance` (`id_seance`),
  ADD CONSTRAINT `enseignement_ibfk_6` FOREIGN KEY (`id_statut_enseignement`) REFERENCES `type_enseignement` (`id_type_enseignant`),
  ADD CONSTRAINT `enseignement_ibfk_7` FOREIGN KEY (`id_enseignant`) REFERENCES `user` (`id_user`);

--
-- Constraints for table `entreprise`
--
ALTER TABLE `entreprise`
  ADD CONSTRAINT `entreprise_ibfk_1` FOREIGN KEY (`id_domaine`) REFERENCES `domaine` (`id_domaine`);

--
-- Constraints for table `entretien`
--
ALTER TABLE `entretien`
  ADD CONSTRAINT `entretien_ibfk_1` FOREIGN KEY (`id_etudiant`) REFERENCES `etudiant` (`id_etudiant`),
  ADD CONSTRAINT `entretien_ibfk_2` FOREIGN KEY (`id_professeur`) REFERENCES `professeur` (`id_professeur`);

--
-- Constraints for table `etablissement`
--
ALTER TABLE `etablissement`
  ADD CONSTRAINT `fkgouv` FOREIGN KEY (`gouvernorat_adresse`) REFERENCES `gouvernerat` (`id_gouvernerat`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fkville` FOREIGN KEY (`ville`) REFERENCES `ville` (`id_ville`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `etudiant`
--
ALTER TABLE `etudiant`
  ADD CONSTRAINT `etudiant_ibfk_4` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`),
  ADD CONSTRAINT `fkbacc` FOREIGN KEY (`id_bacc`) REFERENCES `bacclaureat` (`id_bacc`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fkcursusgeneral` FOREIGN KEY (`id_cursusgenerale`) REFERENCES `cursusgenerale` (`id_cursusgenerale`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `testtestsitua` FOREIGN KEY (`id_situation_etudiant`) REFERENCES `situation_etudiant` (`id_situation_etudiant`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `evenement`
--
ALTER TABLE `evenement`
  ADD CONSTRAINT `evenement_ibfk_1` FOREIGN KEY (`id_club`) REFERENCES `club` (`id_club`);

--
-- Constraints for table `inscription`
--
ALTER TABLE `inscription`
  ADD CONSTRAINT `inscription_ibfk_1` FOREIGN KEY (`id_classe`) REFERENCES `classe` (`id_classe`),
  ADD CONSTRAINT `inscription_ibfk_2` FOREIGN KEY (`id_etudiant`) REFERENCES `etudiant` (`id_etudiant`);

--
-- Constraints for table `master`
--
ALTER TABLE `master`
  ADD CONSTRAINT `master_ibfk_1` FOREIGN KEY (`id_departement`) REFERENCES `departement` (`id_departement`),
  ADD CONSTRAINT `master_ibfk_2` FOREIGN KEY (`id_etablissement`) REFERENCES `etablissement` (`id_etablissement`),
  ADD CONSTRAINT `master_ibfk_3` FOREIGN KEY (`id_admin_master`) REFERENCES `user` (`id_user`);

--
-- Constraints for table `matiere`
--
ALTER TABLE `matiere`
  ADD CONSTRAINT `matiere_ibfk_1` FOREIGN KEY (`id_niveau`) REFERENCES `niveau` (`id_niveau`),
  ADD CONSTRAINT `matiere_ibfk_2` FOREIGN KEY (`id_semestre`) REFERENCES `semestre` (`id_semestre`),
  ADD CONSTRAINT `matiere_ibfk_3` FOREIGN KEY (`id_type_enseignement`) REFERENCES `type_enseignement` (`id_type_enseignant`);

--
-- Constraints for table `membre`
--
ALTER TABLE `membre`
  ADD CONSTRAINT `membre_ibfk_1` FOREIGN KEY (`id_role_membre_club`) REFERENCES `role_membre_club` (`id_role_membre_club`);

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`id_user_receiver`) REFERENCES `user` (`id_user`),
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`id_user_sender`) REFERENCES `user` (`id_user`),
  ADD CONSTRAINT `messages_ibfk_3` FOREIGN KEY (`id_status_messages`) REFERENCES `status_messages` (`id_status_messages`);

--
-- Constraints for table `offre_stage`
--
ALTER TABLE `offre_stage`
  ADD CONSTRAINT `offre_stage_ibfk_1` FOREIGN KEY (`id_responsable_entreprise`) REFERENCES `responsable_entreprise` (`id_responsable_entreprise`),
  ADD CONSTRAINT `offre_stage_ibfk_2` FOREIGN KEY (`id_etat_offre_stage`) REFERENCES `etat_offre_stage` (`id_etat_offre_stage`);

--
-- Constraints for table `option`
--
ALTER TABLE `option`
  ADD CONSTRAINT `option_ibfk_1` FOREIGN KEY (`id_niveau`) REFERENCES `niveau` (`id_niveau`),
  ADD CONSTRAINT `option_ibfk_2` FOREIGN KEY (`id_parcours`) REFERENCES `parcours` (`id_parcours`);

--
-- Constraints for table `papier_administratif`
--
ALTER TABLE `papier_administratif`
  ADD CONSTRAINT `papier_administratif_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`),
  ADD CONSTRAINT `papier_administratif_ibfk_2` FOREIGN KEY (`id_type_papier`) REFERENCES `type_papier` (`id_type_papier`),
  ADD CONSTRAINT `papier_administratif_ibfk_3` FOREIGN KEY (`id_statut_papier`) REFERENCES `statut_papier` (`id_statut_papier`);

--
-- Constraints for table `participer_club`
--
ALTER TABLE `participer_club`
  ADD CONSTRAINT `participer_club_ibfk_1` FOREIGN KEY (`id_club`) REFERENCES `club` (`id_club`),
  ADD CONSTRAINT `participer_club_ibfk_2` FOREIGN KEY (`id_etudiant`) REFERENCES `etudiant` (`id_etudiant`);

--
-- Constraints for table `participer_event`
--
ALTER TABLE `participer_event`
  ADD CONSTRAINT `participer_event_ibfk_1` FOREIGN KEY (`id_etudiant`) REFERENCES `etudiant` (`id_etudiant`),
  ADD CONSTRAINT `participer_event_ibfk_2` FOREIGN KEY (`id_evenement`) REFERENCES `evenement` (`id_event`);

--
-- Constraints for table `presence_enseignant`
--
ALTER TABLE `presence_enseignant`
  ADD CONSTRAINT `presence_enseignant_ibfk_1` FOREIGN KEY (`id_enseignement`) REFERENCES `enseignement` (`id_enseignement`);

--
-- Constraints for table `presence_etudiant`
--
ALTER TABLE `presence_etudiant`
  ADD CONSTRAINT `presence_etudiant_ibfk_1` FOREIGN KEY (`id_enseignement`) REFERENCES `enseignement` (`id_enseignement`),
  ADD CONSTRAINT `presence_etudiant_ibfk_2` FOREIGN KEY (`id_etudiant`) REFERENCES `etudiant` (`id_etudiant`),
  ADD CONSTRAINT `presence_etudiant_ibfk_3` FOREIGN KEY (`id_seance`) REFERENCES `seance` (`id_seance`);

--
-- Constraints for table `professeur`
--
ALTER TABLE `professeur`
  ADD CONSTRAINT `professeur_ibfk_1` FOREIGN KEY (`id_departement`) REFERENCES `departement` (`id_departement`),
  ADD CONSTRAINT `professeur_ibfk_2` FOREIGN KEY (`id_option`) REFERENCES `option` (`id_option`),
  ADD CONSTRAINT `professeur_ibfk_3` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);

--
-- Constraints for table `publication_club`
--
ALTER TABLE `publication_club`
  ADD CONSTRAINT `publication_club_ibfk_1` FOREIGN KEY (`id_member`) REFERENCES `membre` (`id_membre`);

--
-- Constraints for table `reclamation`
--
ALTER TABLE `reclamation`
  ADD CONSTRAINT `reclamation_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`),
  ADD CONSTRAINT `reclamation_ibfk_2` FOREIGN KEY (`id_statut_reclamation`) REFERENCES `statut_reclamation` (`id_statut_reclamation`);

--
-- Constraints for table `responsable_classe`
--
ALTER TABLE `responsable_classe`
  ADD CONSTRAINT `responsable_classe_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);

--
-- Constraints for table `responsable_entreprise`
--
ALTER TABLE `responsable_entreprise`
  ADD CONSTRAINT `responsable_entreprise_ibfk_1` FOREIGN KEY (`id_poste_entreprise`) REFERENCES `poste_entreprise` (`id_poste`),
  ADD CONSTRAINT `responsable_entreprise_ibfk_2` FOREIGN KEY (`id_entreprise`) REFERENCES `entreprise` (`id_entreprises`),
  ADD CONSTRAINT `responsable_entreprise_ibfk_3` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);

--
-- Constraints for table `rubrique`
--
ALTER TABLE `rubrique`
  ADD CONSTRAINT `rubrique_ibfk_1` FOREIGN KEY (`id_entretien`) REFERENCES `entretien` (`id_entretien`);

--
-- Constraints for table `salle`
--
ALTER TABLE `salle`
  ADD CONSTRAINT `salle_ibfk_1` FOREIGN KEY (`id_type_salle`) REFERENCES `type_salle` (`id_typeSalle`);

--
-- Constraints for table `sondage`
--
ALTER TABLE `sondage`
  ADD CONSTRAINT `sondage_ibfk_1` FOREIGN KEY (`id_club`) REFERENCES `club` (`id_club`),
  ADD CONSTRAINT `sondage_ibfk_2` FOREIGN KEY (`id_membre`) REFERENCES `membre` (`id_membre`);

--
-- Constraints for table `specialite`
--
ALTER TABLE `specialite`
  ADD CONSTRAINT `specialite_ibfk_1` FOREIGN KEY (`id_domaine`) REFERENCES `domaine` (`id_domaine`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fksituation` FOREIGN KEY (`id_situation_professionnel`) REFERENCES `situation_professionnel` (`id_situation_professionnel`),
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
