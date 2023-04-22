CREATE DATABASE guvi_movies;

use guvi_movies;

CREATE TABLE genres (
  `genre_id` INT PRIMARY KEY AUTO_INCREMENT,
  `genre`  VARCHAR(50)
);


CREATE TABLE movies (
  `movie_id` INT(10) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255),
 `releasedon` date,
  `length` time not null,
  `plot` TEXT,
  `language` VARCHAR(50),
   `genre_id` INT,
   `director` varchar(40) default null,
  FOREIGN KEY (`genre_id`) REFERENCES genres(`genre_id`)
);

CREATE TABLE media (
  `media_id` INT PRIMARY KEY AUTO_INCREMENT,
  `movie_id` INT(10) UNSIGNED,
  type ENUM('video', 'image'),
  `url` VARCHAR(255),
  FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
);




CREATE TABLE users (
  `user_id` INT PRIMARY KEY AUTO_INCREMENT,
  `username` VARCHAR(50),
  `email` VARCHAR(255),
  `password` VARCHAR(255)
);

CREATE TABLE reviews (
  `review_id` INT PRIMARY KEY AUTO_INCREMENT,
  `movie_id` INT(10) UNSIGNED,
  `user_id` INT,
  `rating` INT,
  `comment` TEXT,
  FOREIGN KEY (`movie_id`) REFERENCES movies(`movie_id`),
  FOREIGN KEY (`user_id`) REFERENCES users(`user_id`)
);

CREATE TABLE artists (
  `artist_id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255),
  `bio` TEXT
);

CREATE TABLE skills (
  `skill_id` INT PRIMARY KEY AUTO_INCREMENT,
  `skill` VARCHAR(50)
);

CREATE TABLE artist_skills (
  `artist_id` INT,
  `skill_id` INT,
  PRIMARY KEY (artist_id, skill_id),
  FOREIGN KEY (artist_id) REFERENCES artists(`artist_id`),
  FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
);

CREATE TABLE roles (
  `role_id` INT PRIMARY KEY AUTO_INCREMENT,
  `role` VARCHAR(50)
);

CREATE TABLE movie_roles (
  `movie_id` INT(10) UNSIGNED,
  `artist_id` INT,
  `role_id` INT,
  PRIMARY KEY (movie_id, artist_id, role_id),
  FOREIGN KEY (movie_id) REFERENCES movies(movie_id),
  FOREIGN KEY (artist_id) REFERENCES artists(artist_id),
  FOREIGN KEY (role_id) REFERENCES roles(role_id)
);
