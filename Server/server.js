const express = require('express');
const cors = require('cors');
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const app = express();
// const multer = require('multer');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Secret key for JWT token signing
const secretKey = 'yourSecretKey';

const db = new sqlite3.Database("./service.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        process.exit(1);
    }
    console.log('Connected to the database.');
});

// Middleware to verify JWT token and authenticate requests
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log('Unauthorized');
        return res.status(401).send('Unauthorized');
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            console.log('Invalid token');
            return res.status(403).send('Invalid token');
        }
        req.user = user;
        next();
    });
};

// create table :
// sql = `CREATE TABLE service (id INTEGER PRIMARY KEY, name, description,price)`;
// db.run(sql);

 // drop table :
// db.run("DROP TABLE service");

// insert data into table :

// sql = `INSERT INTO service (name, description,price) VALUES(?,?,?)`;
// db.run(
//   sql,
//   ["Spa treatments", "You can have a great relaxation and joyfull timewit our massage therapist.", "50"],
//   (err) => {
//     if (err) return console.error(err.message);
//   }
// );


// Retrieve all service
app.get('/api/xxx', (req, res) => {
    db.all('SELECT * FROM service', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error retrieving data');
            return;
        }
        res.json(rows);
    });
  });
  
  // Update notification status
  app.put('/api/xxx/:id/notification', (req, res) => {
    const { name, description, price } = req.body;
    const serviceId = req.params.id;
  
    db.serialize(() => {
        db.run(`UPDATE service SET name = ?, description = ?, price = ? WHERE id = ?`,
            [name, description, price, serviceId],
            function(err) {
                if (err) {
                    return res.status(500).json({ message: 'Error updating service data in the database' });
                }
                
                res.status(200).json({ message: 'Service data updated successfully' });
            }
        );
    });
  });
  
  // db.close();
// Create a booking API with JWT token authentication
app.post('/api/xxx/bookings', verifyToken, (req, res) => {
    const { clientName, scheduleTime, scheduleDate, phoneNo, bookedService } = req.body;
    const userId = req.user.userId; // Extract userId from the decoded JWT token
    
    db.run('CREATE TABLE IF NOT EXISTS bookings (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, clientName TEXT, scheduleTime TEXT, scheduleDate TEXT, phoneNo TEXT, bookedService TEXT, notification TEXT DEFAULT "pending")', (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error creating table');
            return;
        }

        db.run('INSERT INTO bookings (userId, clientName, scheduleTime, scheduleDate, phoneNo, bookedService, notification) VALUES (?, ?, ?, ?, ?, ?, ?)', [userId, clientName, scheduleTime, scheduleDate, phoneNo, bookedService, "pending"], (err) => {
            if (err) {
                console.error(err.message);
                res.status(500).send('Error inserting data');
                return;
            }
            res.status(201).send('Booking submitted successfully');
        });
    });
});
// Update notification status

app.put('/api/xxx/bookings/:id/notification2', (req, res) => {
  const id = req.params.id;

  db.run('UPDATE bookings SET notification = "Appointment is cancelld " WHERE id = ?', id, (err) => {
      if (err) {
          // console.error(err.message);
          res.status(500).send('Error updating notification');
          return;
      }
      res.status(200).send('Notification status updated to "appointed"');
  });
});
app.put('/api/xxx/bookings/:id/notification1', (req, res) => {
  const id = req.params.id;


  db.run('UPDATE bookings SET notification = "Appointment is approved" WHERE id = ?', id, (err) => {
      if (err) {
          console.error(err.message);
          res.status(500).send('Error updating notification');
          return;
      }
      res.status(200).send('Notification status updated to "nnnn"');
  });
  

})

// Route to get bookings for a specific user
app.get('/api/xxx/bookings', verifyToken, (req, res) => {
    const userId = req.user.userId; // Assuming user object is available after token verification

    // replace this with your database query to fetch bookings for userId
    db.all('SELECT * FROM bookings WHERE userId = ?', userId, (err, rows) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        
        console.log('Bookings retrieved:', rows);

        // Send the bookings data in an object with a 'data' key
        res.json({ data: rows });
    });
});
/// Get all appointments route
app.get('/api/xxx/bookings/Admin', (req, res) => {
    db.all('SELECT * FROM bookings', (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        res.json(rows);
    });
});
// Delete appointment route
app.delete('/api/xxx/bookings/:id', verifyToken, (req, res) => {
    const appointmentId = req.params.id;
    
    db.run('DELETE FROM bookings WHERE id = ?', [appointmentId], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        res.status(200).json({ message: "Appointment deleted successfully" });
    });
});

// User signup API
app.post('/api/xxx/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Hash the password before inserting into the database
        const hashedPassword = bcrypt.hashSync(password, 10);

        await new Promise((resolve, reject) => {
            db.run('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], function(err) {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });

        const userId = await db.get('SELECT last_insert_rowid() as userId');
        res.json({
            success: true,
            message: 'User signed up successfully',
            userId: userId.userId,
            username,
            email
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to insert user" });
    }
});

// Update the login endpoint to use synchronous bcrypt compare
app.post('/api/xxx/login', async (req, res) => {
    const { username, password } = req.body;

    db.get('SELECT id, password FROM users WHERE username = ?', [username], async (err, row) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        console.log("Username:", username);
        console.log("Database Row:", row);

        if (!row) {
            console.log("User not found");
            return res.json({ success: false });
        }

        const isValidPassword = await bcrypt.compareSync(password, row.password);
        console.log("Password Comparison Result:", isValidPassword);

        if (isValidPassword) {
            const token = jwt.sign({ username: username, userId: row.id }, secretKey, { expiresIn: '1h' });
            return res.json({ success: true, token });
        } else {
            console.log("Incorrect password");
            return res.json({ success: false });
        }
    });
});


// // Create a Multer instance with a destination folder
// const upload = multer({ dest: 'uploads/' });

// // Define a route to handle file uploads
// app.post('/upload', upload.single('file'), (req, res) => {
//   // req.file contains the uploaded file
//   // req.body contains the entire request body
//   console.log(req.file);
//   res.send('File uploaded successfully!');
// });


// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


