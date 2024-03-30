const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/StudentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Database connection successful'))
.catch(err => console.error('Database connection error:', err));

// Define schema for academic records
const academicRecordSchema = new mongoose.Schema({
  studentID: Number,
  name: String,
  grades: [Number],
  subjects: [String]
});

// Define schema for co-curricular activities
const cocurricularActivitySchema = new mongoose.Schema({
  studentID: Number,
  name: String,
  activityType: String,
  activity: String,
  duration: Number,
  achievements: [String]
});

// Create models
const AcademicRecord = mongoose.model('AcademicRecord', academicRecordSchema);
const CocurricularActivity = mongoose.model('CocurricularActivity', cocurricularActivitySchema);

// Sample academic records data
const academicRecordsData = [
  {
    studentID: 1,
    name: 'John Doe',
    grades: [85, 92, 78],
    subjects: ['Math', 'Science', 'English']
  },
  {
    studentID: 2,
    name: 'Jane Smith',
    grades: [90, 88, 95],
    subjects: ['History', 'Literature', 'French']
  },
  {
    studentID: 3,
    name: 'Michael Johnson',
    grades: [75, 82, 69],
    subjects: ['Physics', 'Chemistry', 'Biology']
  },
  {
    studentID: 4,
    name: 'Emily Davis',
    grades: [92, 88, 85],
    subjects: ['Math', 'Computer Science', 'English']
  }
];

// Sample co-curricular activities data
const cocurricularActivitiesData = [
  {
    studentID: 1,
    name: 'John Doe',
    activityType: 'Sports',
    activity: 'Basketball',
    duration: 2,
    achievements: ['School Team Captain']
  },
  {
    studentID: 2,
    name: 'Jane Smith',
    activityType: 'Arts',
    activity: 'Painting',
    duration: 3,
    achievements: ['Art Exhibition Winner']
  },
  {
    studentID: 3,
    name: 'Michael Johnson',
    activityType: 'Club',
    activity: 'Debate Club',
    duration: 1,
    achievements: ['Regional Debate Competition Winner']
  },
  {
    studentID: 4,
    name: 'Emily Davis',
    activityType: 'Volunteering',
    activity: 'Community Service',
    duration: 2,
    achievements: ['100 Hours of Service Award']
  }
];

// Insert sample academic records data
AcademicRecord.insertMany(academicRecordsData)
  .then(() => console.log('Academic records inserted successfully'))
  .catch(err => console.error('Error inserting academic records:', err));

// Insert sample co-curricular activities data
CocurricularActivity.insertMany(cocurricularActivitiesData)
  .then(() => console.log('Co-curricular activities inserted successfully'))
  .catch(err => console.error('Error inserting co-curricular activities:', err));

// Read academic records
AcademicRecord.find()
  .then(records => {
    console.log('Academic Records:');
    console.log(records);
  })
  .catch(err => console.error('Error reading academic records:', err));

// Read co-curricular activities
CocurricularActivity.find()
  .then(activities => {
    console.log('Co-curricular Activities:');
    console.log(activities);
  })
  .catch(err => console.error('Error reading co-curricular activities:', err));

// Update an academic record
AcademicRecord.updateOne({ studentID: 1 }, { $set: { grades: [90, 88, 92] } })
  .then(() => console.log('Academic record updated successfully'))
  .catch(err => console.error('Error updating academic record:', err));

// Update a co-curricular activity
CocurricularActivity.updateOne({ studentID: 2 }, { $set: { activity: 'Drawing' } })
  .then(() => console.log('Co-curricular activity updated successfully'))
  .catch(err => console.error('Error updating co-curricular activity:', err));

// Delete an academic record
AcademicRecord.deleteOne({ studentID: 3 })
  .then(() => console.log('Academic record deleted successfully'))
  .catch(err => console.error('Error deleting academic record:', err));

// Delete a co-curricular activity
CocurricularActivity.deleteOne({ studentID: 4 })
  .then(() => console.log('Co-curricular activity deleted successfully'))
  .catch(err => console.error('Error deleting co-curricular activity:', err));