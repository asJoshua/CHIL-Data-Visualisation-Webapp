BEGIN;

------------------------------------------------------------------------------
-- Create newsletter table
------------------------------------------------------------------------------

CREATE TABLE newsletterSubscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);