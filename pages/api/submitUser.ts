// TODO: Logic for submitting User
/* Neds to hand over:
    // Personal:
    - ParticipantID (Need to implement this first :/) aka UUID
    - Age -> integer
    - Gender -> string
    - LevelOfEducation -> string
    - Occupation -> string
    - argumentsBevor -> string
    - argumentsAfter -> string
    - messages (This should probably be it own table due to design of messages)
    - tasktopic
    - time stamps (We could this also turn in its own table)
    - topicgrades (This should also be its own table or its own values)
    - condition
    - mildness (This is good so we can keep track of the users we actually need) boolean
    - date (This only contains the date of submission)

    Code used for table creation:
    CREATE TABLE Participants (
    participant_id INT PRIMARY KEY NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(255) NOT NULL,
    levelOfEducation TEXT NOT NULL,
    occupation TEXT NOT NULL,
    argumentsBefore TEXT NOT NULL,
    argumentsAfter TEXT NOT NULL,
    taskTopic VARCHAR(255) NOT NULL,
    timestamps TEXT NOT NULL,
    condition VARCHAR(255) NOT NULL,
    mildness BOOLEAN NOT NULL,
    dateOfSubmission DATE NOT NULL);

    CREATE TABLE Messages (
    id INT PRIMARY KEY NOT NULL,
    participant_id INT NOT NULL REFERENCES Participants(participant_id),
    message_id INT NOT NULL,
    userName VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    timestamp TEXT NOT NULL);
*/