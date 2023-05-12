-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Maj 12, 2023 at 04:14 PM
-- Wersja serwera: 8.0.33
-- Wersja PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `coffee_shop`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `drinks`
--

CREATE TABLE `drinks` (
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `category` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `drinks`
--

INSERT INTO `drinks` (`name`, `price`, `category`) VALUES
('Latte', 3.00, 'espresso'),
('Cappuccino', 3.00, 'espresso'),
('Latte Machiatto', 4.00, 'espresso'),
('Espresso Machiatto', 2.00, 'espresso'),
('Espresso', 2.00, 'espresso'),
('Caramel Frappuccino', 4.00, 'frappe'),
('Vanilla Frappuccino', 4.00, 'frappe'),
('Strawberry Frappuccino', 4.00, 'frappe'),
('Chocolate Frappuccino', 4.00, 'frappe'),
('Matcha Frappuccino', 4.00, 'frappe'),
('Chai Frappuccino', 4.00, 'frappe'),
('Green Tea', 3.00, 'tea'),
('English Breakfast Tea', 3.00, 'tea'),
('Matcha Green Tea Latte', 4.00, 'tea'),
('Chai Tea', 4.00, 'tea'),
('Hot Chocolate', 3.00, 'other'),
('Strawberry Refresha', 4.00, 'other'),
('Lemon Refresha', 4.00, 'other'),
('Flat White', 2.60, 'espresso'),
('Cortado', 2.50, 'espresso'),
('Caramel Macchiato', 4.20, 'espresso'),
('Cold Brew', 4.10, 'brewed'),
('Cold Brew Latte', 4.50, 'brewed'),
('Cold Foam Cold Brew', 4.80, 'brewed'),
('Chai Tea Latte', 4.00, 'tea'),
('Matcha Tea Latte', 4.10, 'tea'),
('Chamomile Tea', 3.50, 'tea'),
('Jasmine Pearls Tea', 3.50, 'tea'),
('Espresso Con Panna', 2.20, 'espresso'),
('White Hot Chocolate', 3.00, 'other');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `food`
--

CREATE TABLE `food` (
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `category` varchar(30) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`name`, `price`, `category`) VALUES
('Banoffee', 3.20, 'loaf cake'),
('Chocolate Chunk Cookie', 2.80, 'cookie'),
('Caramel Shortbread', 3.00, 'cake'),
('Cheese Toastie', 4.30, 'toastie'),
('Vegan Tuna Sandwich', 4.55, 'breakfast chilled'),
('Ham and Cheese Toastie', 4.30, 'toastie'),
('Banana', 0.80, 'other food'),
('Cookie Straw', 1.00, 'other food'),
('Milk Chocolate Bar', 1.80, 'other food'),
('Dark Chocolate Bar', 1.80, 'other food'),
('Lemon Loaf Cake', 3.10, 'loaf cake'),
('Banana Bread', 3.10, 'loaf cake'),
('Biscuit Loaf Cake', 3.10, 'loaf cake'),
('Classic Brownie', 3.10, 'cake'),
('Cookies and Cream Brownie', 3.40, 'cake'),
('Raspberry Blondie', 3.40, 'cake'),
('Espresso Blondie', 3.00, 'cake'),
('Triple Chocolate Cookie', 2.60, 'cookie'),
('Birthday cake Cookie', 2.40, 'cookie'),
('Croissant', 2.20, 'breakfast pastry'),
('Almond Croissant', 2.60, 'breakfast pastry'),
('Pain Au Chocolate', 2.50, 'breakfast pastry'),
('Chocolate Twist', 2.10, 'breakfast pastry'),
('Cinnamon Swirl', 3.30, 'breakfast pastry'),
('Lemon Muffin', 3.20, 'muffin'),
('Blueberry Muffin', 3.20, 'muffin'),
('Cinnamon Muffin', 3.30, 'muffin'),
('Chocolate Muffin', 3.30, 'muffin'),
('Banana Muffin', 3.50, 'muffin'),
('Smores Muffin', 3.80, 'muffin'),
('All Day Breakfast Roll', 4.10, 'breakfast chilled'),
('Bacon Roll', 3.20, 'breakfast chilled'),
('Sausage Roll', 3.20, 'breakfast chilled'),
('Vegan Patty Roll', 4.30, 'breakfast chilled'),
('Ham and Cheese Croissant', 3.80, 'breakfast chilled'),
('Ham and Cheese Panini', 4.30, 'panini'),
('Tomato and Mozzarella Panini', 4.30, 'panini'),
('Cheese Panini', 4.30, 'panini'),
('Oatmeal', 3.40, 'pot'),
('Egg Bites', 2.70, 'pot'),
('Mac and Cheese', 3.70, 'pot');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `milk`
--

CREATE TABLE `milk` (
  `name` varchar(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `milk`
--

INSERT INTO `milk` (`name`) VALUES
('Whole Milk'),
('Skimmed Milk'),
('Semi-Skimmed Milk'),
('Oat'),
('Soy'),
('Almond'),
('Coconut');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `orders`
--

CREATE TABLE `orders` (
  `order_no` int NOT NULL,
  `payment_method` varchar(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `items` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `total_amount` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `others`
--

CREATE TABLE `others` (
  `name` varchar(35) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `others`
--

INSERT INTO `others` (`name`, `price`) VALUES
('Blonde Coffee Beans 250g', 5.20),
('Decaf Coffee Beans 250g', 5.20),
('Pike Place Coffee Beans 250g', 5.20),
('Classic Coffee Beans 250g', 5.20),
('Summer Blend Coffee Beans 250g', 5.50),
('Spring Blend Coffee Beans 250g', 5.50),
('Blonde Coffee Capsules', 4.60),
('Decaf Coffee Capsules', 4.60),
('Classic Coffee Capsules', 4.60),
('Instant Colombia', 3.50),
('Instant Italian', 3.50),
('Instant House Blend', 3.50),
('Instant Pike Place', 3.50);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `preparation`
--

CREATE TABLE `preparation` (
  `category` varchar(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `preparation`
--

INSERT INTO `preparation` (`category`, `name`) VALUES
('temperature', 'Warm'),
('temperature', 'Extra Hot'),
('ice', 'No Ice'),
('ice', 'Light Ice'),
('ice', 'Extra Ice');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `store`
--

CREATE TABLE `store` (
  `name` varchar(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `city` varchar(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `code` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`name`, `address`, `city`, `code`) VALUES
('Coffee Shop London', '174 Church Road', 'London', 258654);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `syrup`
--

CREATE TABLE `syrup` (
  `name` varchar(35) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `syrup`
--

INSERT INTO `syrup` (`name`) VALUES
('Caramel'),
('Vanilla'),
('Hazelnut'),
('Cinnamon'),
('Peppermint'),
('Mocha'),
('White Mocha'),
('Caramel Waffle'),
('Sugar Free Caramel'),
('Sugar Free Vanilla'),
('Sugar Free Hazelnut');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `topping`
--

CREATE TABLE `topping` (
  `name` varchar(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `topping`
--

INSERT INTO `topping` (`name`) VALUES
('Caramel Drizzle'),
('Mocha Drizzle'),
('Cinnamon'),
('Mocha Powder'),
('Chocolate Chips');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `User`
--

CREATE TABLE `User` (
  `userForename` varchar(25) DEFAULT NULL,
  `userSurname` varchar(25) DEFAULT NULL,
  `userRole` varchar(15) DEFAULT NULL,
  `userPin` varchar(4) DEFAULT NULL,
  `userId` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`userForename`, `userSurname`, `userRole`, `userPin`, `userId`) VALUES
('Barbara', 'Kobak', 'Barista', '1234', '123456789');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
