const db = require('../db/config.index');

function fetchAllCourses(cb) {
  return db.many('Select * from courses')
    .then(data => {
      cb(null, data);
    })
    .catch(cb);

  // return db.many(`Select * from users where id = $1, courses.description
  // from users left join courses on users.id = courses.id`, [id])
  //   .then(data => {
  //     cb(null, data);
  //   })
  //   .catch(cb);
}

function fetchCoursesById(id) {
  return db.one(`Select * from courses where id = $1`, [id])
}

function fetchCoursesByUserId(id) {
  // return db.many(`Select courses.title, curricula.id, users.first_name
  // from ((courses
  //   inner join curricula on courses.curricula_id = curricula.id)
  //   inner join users on curricula.id = users.curricula.id`)

  //* from sessions where job_code_id = $1`, [id])
}

function eg1(cb) {
  // example of working join
  return db.many(`Select users.first_name, courses.description
  from users left join courses on users.id = courses.id`)
    .then(data => {
      cb(null, data);
    })
    .catch(cb);
}

module.exports = { fetchAllCourses, fetchCoursesById, fetchCoursesByUserId };

// SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
// FROM ((Orders
// INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
// INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);

// SELECT column_name(s)
// FROM table1
// LEFT JOIN table2 ON table1.column_name = table2.column_name;

// SELECT Customers.CustomerName, Orders.OrderID
// FROM Customers
// LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
// ORDER BY Customers.CustomerName;