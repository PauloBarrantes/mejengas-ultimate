CREATE TABLE players (
    player_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(50) NOT NULL,
    team VARCHAR(50) NOT NULL
);

CREATE TABLE player_stats (
    stat_id SERIAL PRIMARY KEY,
    player_id INT REFERENCES players(player_id),
    goals_scored INT,
    assists INT,
    yellow_cards INT,
    red_cards INT,
    PRIMARY KEY (player_id)
);

CREATE TABLE matches (
    match_id SERIAL PRIMARY KEY,
    match_date TIMESTAMP NOT NULL,
    location VARCHAR(100) NOT NULL
);

CREATE TABLE match_players (
    match_id INT REFERENCES matches(match_id),
    player_id INT REFERENCES players(player_id),
    team VARCHAR(50) NOT NULL,
    PRIMARY KEY (match_id, player_id)
);

CREATE TABLE match_results (
    result_id SERIAL PRIMARY KEY,
    match_id INT REFERENCES matches(match_id),
    home_team_score INT NOT NULL,
    away_team_score INT NOT NULL
);

CREATE TABLE match_votes (
    vote_id SERIAL PRIMARY KEY,
    match_id INT REFERENCES matches(match_id),
    player_id INT REFERENCES players(player_id),
    is_mvp BOOLEAN NOT NULL
);