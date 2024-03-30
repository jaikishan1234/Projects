const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;


mongoose.connect('mongodb://localhost/student_tasks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));


const courseSchema = new mongoose.Schema({
    courseId: { type: String, required: true, unique: true },
});

const taskSchema = new mongoose.Schema({
    courseId: { type: String, required: true },
    taskName: { type: String, required: true },
    dueDate: { type: Date, required: true },
});

const Course = mongoose.model('Course', courseSchema);
const Task = mongoose.model('Task', taskSchema);


const insertSampleData = async () => {
    try {
        
        await Course.insertMany([
            { courseId: 'CS101' },
            { courseId: 'MATH202' },
            { courseId: 'ENG301' }
        ]);

        
        await Task.insertMany([
            { courseId: 'CS101', taskName: 'Implement a Binary Search Tree', dueDate: new Date('2024-04-10') },
            { courseId: 'CS101', taskName: 'Write a sorting algorithm', dueDate: new Date('2024-04-20') },
            { courseId: 'MATH202', taskName: 'Solve calculus problems', dueDate: new Date('2024-05-01') },
            { courseId: 'MATH202', taskName: 'Prove a mathematical theorem', dueDate: new Date('2024-05-15') },
            { courseId: 'ENG301', taskName: 'Write a literary analysis essay', dueDate: new Date('2024-06-01') },
            { courseId: 'ENG301', taskName: 'Read and analyze a novel', dueDate: new Date('2024-06-15') }
        ]);

        console.log('Sample data inserted successfully');
    } catch (err) {
        console.error('Failed to insert sample data', err);
    }
};


insertSampleData();


app.use(express.json());


app.use(express.static('public'));


app.get('/courses/:courseId/tasks', async (req, res) => {
    const courseId = req.params.courseId;

    try {
        const tasks = await Task.find({ courseId });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve tasks' });
    }
});


app.post('/tasks', async (req, res) => {
    const { courseId, taskName, dueDate } = req.body;

    try {
        
        let course = await Course.findOne({ courseId });
        if (!course) {
            course = new Course({ courseId });
            await course.save();
        }

        
        const task = new Task({ courseId, taskName, dueDate: new Date(dueDate) });
        await task.save();

        res.status(201).json({ message: 'Task added successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add task' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});