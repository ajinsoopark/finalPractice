DROP DATABASE IF EXISTS movies;
CREATE DATABASE movies;

\c movies;

CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    genre VARCHAR NOT NULL
);

CREATE TABLE movies (
    id  SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    genre_id INT REFERENCES genres(id) NOT NULL,
    img_url VARCHAR NOT NULL
);

CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    stars INT,
    movie_id INT REFERENCES movies(id) ON DELETE CASCADE NOT NULL
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comment TEXT NOT NULL,
    movie_id INT REFERENCES movies(id) ON DELETE CASCADE NOT NULL
);

INSERT INTO genres (genre) 
VALUES ('Horror'), ('Drama'), ('Romance'),
       ('Comedy'), ('Animation'), ('Sci-Fi'),
       ('Action'), ('Mystery'), ('Thriller'), ('Crime');

INSERT INTO movies (title, genre_id, img_url)
VALUES ('Catch Me If You Can', 10, 'https://img.moviepostershop.com/catch-me-if-you-can-movie-poster-2002-1020233910.jpg'),
       ('Big Daddy', 4, 'https://i0.wp.com/image.tmdb.org/t/p/original/avF6Iiws8bNuXg2oKAGdG4LiqOI.jpg?w=600'),
       ('The Man from Nowhere', 7, 'https://img.moviepostershop.com/the-man-from-nowhere-movie-poster-2010-1020744666.jpg'),
       ('Oldboy', 8, 'https://alternativemovieposters.com/wp-content/uploads/2013/10/oldboybg.jpg'),
       ('The Matrix', 6, 'https://ae01.alicdn.com/kf/UTB8qTlJmyaMiuJk43PTq6ySmXXae/Custom-Canvas-Wall-Decor-The-Matrix-Poster-The-Matrix-Neo-Sticker-Murals-Keanu-Reeves-Wallpaper-Dining.jpg'),
       ('Enter the Dragon', 7, 'https://images.justwatch.com/poster/8726468/s592'),
       ('Donnie Darko', 6, 'https://www.movieposter.com/posters/archive/main/243/MPW-121655'),
       ('Princess Mononoke', 5, 'https://static2.tribute.ca/poster/660x980/princess-mononoke-130269.jpg'),
       ('The Shining', 1, 'http://dinamico2.unibg.it/fa/imgs/shining.jpg'),
       ('Good Will Hunting', 2, 'https://i.etsystatic.com/8734722/r/il/da9938/1421263266/il_570xN.1421263266_iae0.jpg');

INSERT INTO ratings (stars, movie_id)
VALUES (3,1), (5,1), (3,1), (4,1), (5,1),
       (3,2), (2,2), (1,2), (4,2), (5,2),
       (2,3), (5,3), (4,3), (4,3), (3,3),
       (3,4), (4,4), (5,4), (5,4), (4,4),
       (2,5), (4,5), (5,5), (5,5), (5,5),
       (4,6), (2,6), (3,6), (4,6), (5,6),
       (4,7), (3,7), (4,7), (4,7), (3,7),
       (5,8), (3,8), (5,8), (4,8), (4,8),
       (3,9), (4,9), (5,9), (5,9), (4,9),
       (5,10), (4,10), (4,10), (5,10), (4,10);

INSERT INTO comments (comment, movie_id)
VALUES ('The Shining is, without doubt, one of Stanley Kubrick''s undisputed masterpieces and a true classic in horror cinema. 
         It is a film that, over the course of the years, has managed to scare the living hell out of its audiences (and still does). 
         The film is an adaptation of Stepehen King''s original novel, written in the late 70s, 
         and although the film is not very loyal to the book, it still stands as a thing of its own.', 9),
       ('This is one of Jack Nicholson''s finest roles, his increasingly unhinged character is amusing and terrifying in almost equal measures.
        Duvall plays the role of the terrorised wife quite well - she does look like she''s genuinely filled with fear
         - but doesn''t have much else to do. Lloyd is excellent as the boy, although he doesn''t have too much emotion to express. 
         However no doubt that this is Jack''s show.', 9),
       ('This is the best movie I have seen since the Godfather. Matt Damon and Ben Affleck make a great team...not only as actors, 
         but more impressively as co-writers. Add Robin Williams in perhaps his best role ever (too close to Good Morning Vietnam for me to make the call), 
         and you have a wonderfully entertaining movie.', 10),
       ('So many personal projects of our best players never come out quite right. 
         The vision they have somehow doesn''t translate to the screen, or it''s not box office subject matter, 
         or maybe the actors aren''t gifted with writing or directing talent. 
         That''s certainly not the case with Good Will Hunting which was not only the breakthrough film for Matt Damon and Ben Affleck, 
         but it will probably remain their most personal endeavor.', 10),
       ('To start off; This is the one and only film that kept me quiet for a whole 5 mins after seeing it. 
         I literally couldn''t close my mouth, and yet there wasn''t any sound coming out of it. 
         Oldboy had such an impact on me that words are too little to describe that impact. Therefore this film is definitely in my top 3 films ever made. 
         It belongs there because it has a massive ingredient that a lot of films seem to miss out on; a divine plot. 
         Even though the acting and screenplay are world class, the plot is really the cherry on the cake.', 4),
       ('Yes this is a twisted movie with plots that unravel slowly and sometimes there are scenes that are slow. 
         But over all it''s incredible. Some of the symbolism behind the scenes are stunning. You have to go deep to appreciate it. 
         There is a lot of gore and violence that can turn you off, but I was simply amazed by the depth and width of some of the scenes.', 4),
       ('I saw this film in Japan, in Japanese with no sub-titles, I don''t speak a word of the language and I was still enthralled! 
         It is Miyazaki most visually intense (surpassing, at long last, Nausicaa) and is alive with color and movement the like not yet seen in anime.', 8),
       ('I have seen many many animated features, but none compare to the talent that is shown in this anime. After seeing this for the first time, 
         I could see why so many animators (especially disney animators) consider Mr. Miazaki a GOD! His animation style has the best ''flowing motion'' I have ever seen.', 8),
       ('The fact that this is the Directors first film is amazing to me. The scenes dripped with style, yet that style never seemed distracting.
         None of it was self congratulatory or gluttonous. 
         The visuals were supported by a truly emotional score and its hard to find fault in the 80''s pop tunes that found their way into some of the more impressive scenes.', 7),
       ('Ok I might be late to the party but I just watched DONNIE DARKO. 
         Amazing film!!!!!!!! Jake Gyllenhaal as a youngin - now I can see how he came into the shell is has created for himself. 
         An amazing film as much as it is depressing! Definitely recommend to anyone into cult classics and was living under a rock at the turn of the century like me!', 7),
       ('The film that should have put Bruce Lee over the top has him battling an evil ring of drug dealers.
         While out to avenge his sister''s death (''You have offended my family and you have offended the Shaman temple.''). 
         It''s a shame that Bruce died so young (and that his son Brandon died even younger), 
         given that he was as close to superhuman as possible. We can only imagine what his follow up vehicles would have been like.', 6),
       ('You can have your Jackie Chans, Steven Seagals, VanDamme''s, Chuck Norris''s and aanyone else. 
         Bruce Lee is hands down the greatest ever. And Here he is in his best movie. Why this never recieved awards is beyond all possible comprehension. 
         Watch carefully for Jackie Chan and Bolo Yueng. If there''s one film you have left to rent before you die and you haven''t seen this....well...you know what to do. 
         Watch the master feel the flow.', 6),
       ('Without a doubt one of the best and most influential movies of all time, 
         the Matrix is the defining science fiction film of the 1990''s and the biggest leap the genre has taken since Stanley Kubrick''s 2001: a Space Odyssey and Ridley Scott''s Blade Runner. 
         The Matrix is a ground-breaking motion picture that not only raised the bar for all the science-fiction films to come after it, 
         but also redefined the action genre with its thrilling action sequences and revolutionary visual effects.', 5),
       ('The story of a reluctant Christ-like protagonist set against a baroque, MTV backdrop, 
         The Matrix is the definitive hybrid of technical wizardry and contextual excellence that should be the benchmark for all sci-fi films to come.', 5),
       ('This movie threatens to be a run-of-the-mill action movie, 
         but manages to create its own identity. The sameness is how it shows most of its bad guys, and there are plenty, as one dimensionally evil. 
         There are children who are put in harm''s way, but not gratuitously--for the most part--providing the hero with a chance to be human.', 3),
       ('You may want to compare this with, or see shades of the film from the likes of Luc Besson''s The Professional, 
         Pierre Morel''s Taken and Tony Scott''s Man on Fire, 
         with the common running theme of a highly skilled operative taking it upon himself to rescue someone they love from the clutches of devious villains, 
         and executing a brand of vengeance without remorse as he ploughs through and single-handedly demolishes all who stand in his way. 
         The Man From Nowhere is South Korea''s answer to this sub-genre, 
         and does so with aplomb both in providing that emotional punch to the highly choreographed set action pieces.', 3),
       ('Personally, I loved this movie. 
         I liked it better than Waterboy and Happy Gilmore (hell, I haven''t even seen HG). 
         This was an excellent movie, and it was funny. I don''t really like Sandler''s usual immature frat-boy humor, 
         but in this movie, it was too sweet. Julian, the little boy, was adorable, how can you not love his little lisp?', 2),
       ('Boy, did this movie suck. Even though it''s only 90 minutes, 
         it felt like it lasted 4 hours. Happy Gilmore was OK, but Sandler''s other works have really blown. 
         One reason i didn''t like it is that Sandler''s character is a jerk. 
         He yells like a moron in a McDonald''s, harasses a man (the film''s director) in his apartment, spoils the kid, and causes bodily harm to skaters.', 2),
       ('This was an entertaining and fun piece of film making from the ever-reliable Steven Spielberg. 
         It is a bit of a depart from his usual full-blown and hugely epic pictures, 
         yet this does not detract at all from the fascinating story of Frank Abagnale Jr. 
         I was interested in this man before I''d seen the movie, and it only served to increase my interest. 
         Although it is important to remember (as with any such film) that this is only ''inspired'' by a true story and not told word for word from one, 
         the plot is fascinating and keeps you laughing, crying and wondering until the end.', 1),
       ('While watching ''Catch Me If You Can'' I had so much fun I smiled constantly. 
         Well, that smile was interrupted by laughs. The movie tells the story of Frank W. Abignale, Jr. who is just a kid as he pretends to be a schoolteacher. 
         After his father and mother get a divorce he runs away and starts pretending to be a co-pilot, a doctor, a lawyer. 
         The way he does this is funny and brilliant.', 1);                      