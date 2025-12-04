-- Minimal `faq` table: id, question, answer
CREATE TABLE IF NOT EXISTS faq (
  id SERIAL PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL
);

INSERT INTO faq (question, answer) VALUES
('What is NHL Stenden Explorer?', 'NHL Stenden Explorer is a platform that provides information about NHL Stenden University of Applied Sciences.'),
('How can I contact support?', 'You can contact support by emailing support@nhlstendenexplorer.com.');