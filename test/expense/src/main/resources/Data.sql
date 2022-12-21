insert into user values (1, 'Siamak', 'Codeenginell@gmail.com');
insert into user values (2, 'John', 'John@john.com');
insert into user values (3, 'Adam', 'adam@adam.com');

insert into category values (1, 'Products');
insert into category values (2, 'Utilities');
insert into category values (3, 'Pharmacy');
insert into category values (4, 'Technology');
insert into category values (5, 'Household');
insert into category values (6, 'Clothes');
insert into category values (7, 'Beauty');
insert into category values (8, 'Gifts');
insert into category values (9, 'Travelling');
insert into category values (10, 'Healthy');
insert into category values (11, 'Entertainment');



insert into option values (1, 'Purchase');
insert into option values (2, 'Receipt');

insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 1,1, 1);
insert into expense values (default, 'Ford Mustang Payment', '2019-06-15T15:00:00.00Z', 'Los Angeles', 50.0, 2,1, 2);
insert into expense values (default, 'Grand Canyon Trip With Family', '2019-06-15T15:00:00.00Z', 'Arizona', 70.0, 5,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 1,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 2,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 3,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 4,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 5,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 6,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 7,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 8,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 9,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 10,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 11, 1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 1,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 2,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 3,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 4,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 5,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 6,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 7,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 8,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 9,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 10,1, 1);
insert into expense values (default, 'New York Trip', '2019-06-16T17:00:00.00Z', 'New York', 100.0, 11,1, 1);


insert into faculty values (1, 'English faculty', 'EF');
insert into faculty values (2, 'History faculty', 'HF');
insert into faculty values (3, 'Math faculty', 'MF');
insert into faculty values (4, 'Culture faculty', 'CF');
insert into faculty values (5, 'Dance faculty', 'DF');
insert into faculty values (6, 'Biology faculty', 'BF');
insert into faculty values (7, 'Programming faculty', 'PF');
insert into faculty values (8, 'Fashion faculty', 'FF');
insert into faculty values (9, 'Ukrainian faculty', 'UF');
insert into faculty values (10, 'Medicine faculty', 'MF');

insert into department (id, faculty_id, name, short_name) values ( 1, 1, 'English department', 'ED');
insert into department (id, faculty_id, name, short_name) values ( 2, 2, 'History department', 'HD');
insert into department (id, faculty_id, name, short_name) values ( 3, 3, 'Math department', 'MD');
insert into department (id, faculty_id, name, short_name) values ( 4, 4, 'Culture department', 'CD');
insert into department (id, faculty_id, name, short_name) values ( 5, 5, 'Dance department', 'DD');
insert into department (id, faculty_id, name, short_name) values ( 6, 6, 'Biology department', 'BD');
insert into department (id, faculty_id, name, short_name) values ( 7, 7, 'Programming department', 'PD');
insert into department (id, faculty_id, name, short_name) values ( 8, 8, 'Fashion department', 'FD');
insert into department (id, faculty_id, name, short_name) values ( 9, 9, 'Ukrainian department', 'UD');
insert into department (id, faculty_id, name, short_name) values ( 10, 10, 'Medicine department', 'MD');

insert into discipline values (1, 'English');
insert into discipline values (2, 'History');
insert into discipline values (3, 'Math');
insert into discipline values (4, 'Culture');
insert into discipline values (5, 'Dance');
insert into discipline values (6, 'Biology');
insert into discipline values (7, 'Programming');
insert into discipline values (8, 'Fashion');
insert into discipline values (9, 'Ukrainian');
insert into discipline values (10, 'Medicine');

insert into groups values ( 1, 1, 'a', '1');
insert into groups values ( 2, 2, 'b', '2');
insert into groups values ( 3, 3, 'c', '3');
insert into groups values ( 4, 4, 'd', '3');
insert into groups values ( 5, 5, 'e', '2');
insert into groups values ( 6, 6, 'f', '3');
insert into groups values ( 7, 7, 'g', '1');
insert into groups values ( 8, 8, 'h', '1');
insert into groups values ( 9, 9, 'e', '3');
insert into groups values ( 10, 10, 'g', '2');


insert into teacher (id, name, surname, email, phone) values (1, 'Anastasia', 'Petrivna', 'AnastasiaPetrivna@gmail.com', '+380685463728');
insert into teacher (id, name, surname, email, phone) values (2, 'Anastasia', 'Petrivna', 'AnastasiaPetrivna@gmail.com', '+380685463728');
insert into teacher (id, name, surname, email, phone) values (3, 'Anastasia', 'Petrivna', 'AnastasiaPetrivna@gmail.com', '+380685463728');
insert into teacher (id, name, surname, email, phone) values (4, 'Anastasia', 'Petrivna', 'AnastasiaPetrivna@gmail.com', '+380685463728');
insert into teacher (id, name, surname, email, phone) values (5, 'Anastasia', 'Petrivna', 'AnastasiaPetrivna@gmail.com', '+380685463728');
insert into teacher (id, name, surname, email, phone) values (6, 'Anastasia', 'Petrivna', 'AnastasiaPetrivna@gmail.com', '+380685463728');
insert into teacher (id, name, surname, email, phone) values (7, 'Anastasia', 'Petrivna', 'AnastasiaPetrivna@gmail.com', '+380685463728');
insert into teacher (id, name, surname, email, phone) values (8, 'Anastasia', 'Petrivna', 'AnastasiaPetrivna@gmail.com', '+380685463728');
insert into teacher (id, name, surname, email, phone) values (9, 'Anastasia', 'Petrivna', 'AnastasiaPetrivna@gmail.com', '+380685463728');
insert into teacher (id, name, surname, email, phone) values (10, 'Anastasia', 'Petrivna', 'AnastasiaPetrivna@gmail.com', '+380685463728');

insert into schedule (id, name, teacher_id, discipline_id, group_id, time, classroom) values (1, 'University', 1, 1, 1, '2019-06-16T17:00:00.00Z', 12);
insert into schedule (id, name, teacher_id, discipline_id, group_id, time, classroom) values (2, 'University', 2, 2, 2, '2019-06-16T17:00:00.00Z', 11);
insert into schedule (id, name, teacher_id, discipline_id, group_id, time, classroom) values (3, 'University', 3, 3, 3, '2019-06-16T17:00:00.00Z', 10);
insert into schedule (id, name, teacher_id, discipline_id, group_id, time, classroom) values (4, 'University', 4, 4, 4, '2019-06-16T17:00:00.00Z', 9);
insert into schedule (id, name, teacher_id, discipline_id, group_id, time, classroom) values (5, 'University', 5, 5, 5, '2019-06-16T17:00:00.00Z', 8);
insert into schedule (id, name, teacher_id, discipline_id, group_id, time, classroom) values (6, 'University', 6, 6, 6, '2019-06-16T17:00:00.00Z', 7);
insert into schedule (id, name, teacher_id, discipline_id, group_id, time, classroom) values (7, 'University', 7, 7, 7, '2019-06-16T17:00:00.00Z', 2);
insert into schedule (id, name, teacher_id, discipline_id, group_id, time, classroom) values (8, 'University', 8, 8, 8, '2019-06-16T17:00:00.00Z', 4);
insert into schedule (id, name, teacher_id, discipline_id, group_id, time, classroom) values (9, 'University', 9, 9, 9, '2019-06-16T17:00:00.00Z', 8);
insert into schedule (id, name, teacher_id, discipline_id, group_id, time, classroom) values (10, 'University', 10, 10, 10, '2019-06-16T17:00:00.00Z', 2);

insert into student (id, group_id, name, email, phone) values (1, 1, 'Olena', 'Olena@gmail', '+380685463728');
insert into student (id, group_id, name, email, phone) values (2, 2, 'Olena', 'Olena@gmail', '+380685463728');
insert into student (id, group_id, name, email, phone) values (3, 3, 'Olena', 'Olena@gmail', '+380685463728');
insert into student (id, group_id, name, email, phone) values (4, 4, 'Olena', 'Olena@gmail', '+380685463728');
insert into student (id, group_id, name, email, phone) values (5, 5, 'Olena', 'Olena@gmail', '+380685463728');
insert into student (id, group_id, name, email, phone) values (6, 6, 'Olena', 'Olena@gmail', '+380685463728');
insert into student (id, group_id, name, email, phone) values (7, 7, 'Olena', 'Olena@gmail', '+380685463728');
insert into student (id, group_id, name, email, phone) values (8, 8, 'Olena', 'Olena@gmail', '+380685463728');
insert into student (id, group_id, name, email, phone) values (9, 9, 'Olena', 'Olena@gmail', '+380685463728');
insert into student (id, group_id, name, email, phone) values (10, 10, 'Olena', 'Olena@gmail', '+380685463728');



