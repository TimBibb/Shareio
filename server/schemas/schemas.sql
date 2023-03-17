-- Users table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    signup_date TIMESTAMP NOT NULL DEFAULT NOW(),
    subscription_status BOOLEAN NOT NULL DEFAULT FALSE,
    last_login TIMESTAMP
);

-- Mood_entries table
CREATE TABLE mood_entries (
    entry_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    mood INTEGER NOT NULL CHECK (mood >= 1 AND mood <= 10),
    entry_date TIMESTAMP NOT NULL DEFAULT NOW(),
    mood_description TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Meditation_progress table
CREATE TABLE meditation_progress (
    progress_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    meditation_date TIMESTAMP NOT NULL DEFAULT NOW(),
    duration INTEGER NOT NULL,
    meditation_type VARCHAR(255),
    comments TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Journal_entries table
CREATE TABLE journal_entries (
    journal_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    entry_date TIMESTAMP NOT NULL DEFAULT NOW(),
    content TEXT NOT NULL,
    title VARCHAR(255),
    tags VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
