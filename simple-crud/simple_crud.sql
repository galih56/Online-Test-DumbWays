/*
    Run query on terminal/shell
    1. Open xampp shell
    2. cd mysql\bin
    3. run mysql.exe -u root --password
    4. run show databases;
    5. use test_dumbways
    6. run show tables;
    7. run use table_name
    8. run query
*/
/*CREATE TABLE USER*/
CREATE TABLE `test_dumbways`.`users` ( 
    `id` INT NOT NULL AUTO_INCREMENT ,  
    `nama` VARCHAR(200) NOT NULL ,  
    `photo` VARCHAR(200) NOT NULL ,  
    `email` VARCHAR(200) NOT NULL ,  
    `password` VARCHAR(200) NOT NULL , 
    `address` VARCHAR(200) NOT NULL ,    
    PRIMARY KEY  (`id`)
) ENGINE = InnoDB;A

/*CREATE TABLE POST*/
CREATE TABLE `test_dumbways`.`posts` ( 
    `id` INT NOT NULL AUTO_INCREMENT ,  
    `title` VARCHAR(200) NOT NULL ,  
    `content` VARCHAR(200) NOT NULL ,  
    `id_user` INT NOT NULL ,  
    `image` VARCHAR(200) NOT NULL ,    
    PRIMARY KEY  (`id`)
) ENGINE = InnoDB;

/*INSERT TABLE USER*/
INSERT INTO `users` (`id`, `nama`, `photo`, `email`, `password`, `address`) 
VALUES 
    (NULL, 'Galih Indra', '', 'galihindra650@gmail.com', '12345', 'Sidoarjo'), 
    (NULL, 'Joe Rogan', '', 'joerogan@gmail.com', '12345', 'Kediri');

/*INSER TABLE POST*/
INSERT INTO `posts` (`id`, `title`, `content`, `id_user`, `image`) 
VALUES 
    (NULL, 'Etiam mollis molestie turpis ac blandit', ' Etiam mollis molestie turpis ac blandit. \r\nMorbi id ex condimentum, faucibus purus gravida, laoreet odio. Phasellus rhoncus, mi vel mollis luctus, felis neque semper magna, ut porta nunc ante a purus. \r\nFusce sit amet placerat felis, eget accumsan sem. Fusce ac magna nec orci rhoncus lacinia sed consectetur nisl. Donec dictum eget nisl quis egestas. \r\nNam sagittis nunc risus, vitae fringilla ante pulvinar in. Maecenas bibendum augue mollis, dapibus nibh quis, pellentesque mauris. \r\nSed augue augue, faucibus eget bibendum in, accumsan eget nulla. Vivamus iaculis urna erat, nec consequat quam dignissim vitae. \r\nDonec ac volutpat nunc. Aliquam vel condimentum tellus.', '1', ''), 
    (NULL, 'Aliquam erat volutpat', 'Phasellus rhoncus, mi vel mollis luctus, felis neque semper magna, ut porta nunc ante a purus. \r\nFusce sit amet placerat felis, eget accumsan sem. Fusce ac magna nec orci rhoncus lacinia sed consectetur nisl. Donec dictum eget nisl quis egestas. \r\nNam sagittis nunc risus, vitae fringilla ante pulvinar in. Maecenas bibendum augue mollis, dapibus nibh quis, pellentesque mauris. \r\nSed augue augue, faucibus eget bibendum in, accumsan eget nulla. Vivamus iaculis urna erat, nec consequat quam dignissim vitae. \r\nDonec ac volutpat nunc. Aliquam vel condimentum tellus.', '1', ''), 
    (NULL, 'Vestibulum sed lorem neque', 'In id nulla mollis, dapibus purus eu, rutrum massa. Suspendisse congue ornare lectus, et iaculis velit interdum nec. Vestibulum tincidunt sapien imperdiet magna vestibulum vehicula. Morbi suscipit eros eget leo facilisis aliquam. In a pulvinar nulla. Nullam sed rhoncus massa, vitae faucibus massa. Vivamus sit amet lacinia nisi, sed elementum quam. Morbi feugiat in risus nec consectetur. In feugiat ut ipsum ac gravida. Vestibulum tristique, augue at mattis tempor, nulla sapien fringilla purus, vel rutrum mi elit ac metusi.', '2', ''), 
    (NULL, 'Cras quis leo nibh', ' Fusce ac magna nec orci rhoncus lacinia sed consectetur nisl. Donec dictum eget nisl quis egestas. \r\nNam sagittis nunc risus, vitae fringilla ante pulvinar in. Maecenas bibendum augue mollis, dapibus nibh quis, pellentesque mauris. \r\nSed augue augue, faucibus eget bibendum in, accumsan eget nulla. Vivamus iaculis urna erat, nec consequat quam dignissim vitae. \r\nDonec ac volutpat nunc. Aliquam vel condimentum tellus.', '2', '');

/*SELECT USERS BESERTA POSTS*/
SELECT * FROM test_dumbways.users u 
INNER JOIN test_dumbways.posts p
ON u.id=p.id_user
ORDER BY u.id DESC

/*SELECT POSTS*/
SELECT * FROM posts p
INNER JOIN users u
ON u.id=p.id_user
ORDER BY p.id DESC
/*WHERE p.id_user=...*/