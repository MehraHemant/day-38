//Design database for zen class program,
// users
// codekata
// atendance
// topics
// company_drives
// mentors

db.createCollection("users");

db.users.insertMany([
  {
    "userId": 1,
    "name": "first",
    "email": "first@email.com",
    "mobile": 1234567890,
  },
  {
    "userId": 2,
    "name": "second",
    "email": "second@email.com",
    "mobile": 1234567890,
  },
  {
    "userId": 3,
    "name": "third",
    "email": "third@email.com",
    "mobile": 1234567890,
  },
  {
    "userId": 4,
    "name": "fourth",
    "email": "fourth@email.com",
    "mobile": 1234567890,
  },
]);

db.createCollection("codekata");
db.codekata.insertMany([
  {
    "userId": 1,
    "problemsSolved": 500,
    "rank": 2000,
    "geekscoins": 4000,
  },
  {
    "userId": 2,
    "problemsSolved": 300,
    "rank": 3000,
    "geekscoins": 3000,
  },
  {
    "userId": 3,
    "problemsSolved": 250,
    "rank": 4000,
    "geekscoins": 2000,
  },
  {
    "userId": 4,
    "problemsSolved": 100,
    "rank": 5000,
    "geekscoins": 1000,
  },
]);

db.createCollection("attendance");
db.attendance.insertMany([
  {
    "userId": 1,
    "date": new Date("2022-10-15"),
    "status": "absent",
  },
  {
    "userId": 2,
    "date": new Date("2022-10-15"),
    "status": "present",
  },
  {
    "userId": 3,
    "date": new Date("2022-10-15"),
    "status": "absent",
  },
  {
    "userId": 4,
    "date": new Date("2022-10-15"),
    "status": "present",
  },
]);

db.createCollection("topics");
db.topics.insertMany([
  {
      'topic_id': 1,
      'topic_name': 'Javascript-functions',
      'tasks': ["arrow-functions", "inline-functions", "IIFE"],
      'date': new Date("2022-10-15"),
  },
  {
      'topic_id': 2,
      'topic_name': 'Javascript-variables',
      'tasks': ["var", "let"],
      'date': new Date("2022-10-15"),
  },
  {
      'topic_id': 3,
      'topic_name': 'Javascript-events',
      'tasks': ["event-bubbling", "event-listeners"],
      'date': new Date("2022-10-15"),
  },
  {
      'topic_id': 4,
      'topic_name': 'mysql-crud',
      'tasks': ["create-table", "update-table", "insert"],
      'date': new Date("2022-10-15"),
  },
  {
      'topic_id': 5,
      'topic_name': 'mongo',
      'tasks': ["find", "aggregate"],
      'date': new Date("2022-10-15"),
  }
]);

db.createCollection('company_drives');
db.company_drives.insertMany([
  {
      'drive_id': 1,
      'drive_name': 'google',
      'user_ids': [1, 2, 3, 4],
      'date': new Date("2022-10-15")
  },
  {
      'drive_id': 2,
      'drive_name': 'netflix',
      'user_ids': [1, 2, 3, 4],
      'date': new Date("2022-10-15")
  },
  {
      'drive_id': 3,
      'drive_name': 'yahoo',
      'user_ids': [3, 4],
      'date': new Date("2022-10-25")
  },
  {
      'drive_id': 4,
      'drive_name': 'amazon',
      'user_ids': [1, 2, 3],
      'date': new Date("2022-10-30")
  },
  {
      'drive_id': 5,
      'drive_name': 'ola',
      'user_ids': [1, 2, 3, 4],
      'date': new Date("2022-10-15")
  },
]);

db.createCollection('mentors');
db.mentors.insertMany([
  {
      'mentor_id': 5,
      'name': 'abc'
    },
    {
      'mentor_id': 6,
      'name': 'def'
    },
    {
      'mentor_id': 7,
      'name': 'ghi'
    },
    {
      'mentor_id': 8,
      'name': 'jkl'
  },
  {
      'mentor_id': 9,
      'name': 'mno'
  },
]);

db.createCollection('tasks')
db.tasks.insertMany([
  {
      'user_id': 1,
      'task_name': 'Task-1',
      'date': new Date("2022-10-15"),
      'submission_date': new Date("2022-10-21")
  },
  {
      'user_id': 2,
      'task_name': 'Task-2',
      'date': new Date("2022-10-15"),
      'submission_date': new Date("2022-11-15")
  },
  {
      'user_id': 3,
      'task_name': 'Task-3',
      'date': new Date("2022-10-15"),
      'submission_date': new Date("2022-11-15")
  },
  {
      'user_id': 4,
      'task_name': 'Task-4',
      'date': new Date("2022-10-15"),
      'submission_date': new Date("2022-11-15")
  },
  {
      'user_id': 5,
      'task_name': 'Task-5',
      'date': new Date("2022-10-15"),
      'submission_date': new Date("2022-11-15")
  },
]);