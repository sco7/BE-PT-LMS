process.env.NODE_ENV = 'test';

const app = require('../server');
const { expect } = require('chai');
const request = require('supertest')(app);

describe('API endpoints', () => {
  describe('tests the course controller on the API', function() {
    it('gets all courses', () => {
      return request.get('/api/course').then(res => {
        expect(res.body.Courses).to.be.an('array');
        expect(res.body.Courses.length).to.equal(3);
        expect(res.status).to.equal(200);
      });
    });

    it('gets course by id', () => {
      return request.get('/api/course/1').then(res => {
        expect(res.body.Courses).to.be.an('object');
        expect(res.body.Courses.title).to.equal('Induction');
        expect(res.body.Courses).to.have.keys(
          'id',
          'title',
          'description',
          'curricula_id'
        );
        expect(res.status).to.equal(200);
      });
    });

    it('sends an error message when the course cannot be found during a get user profile request', () => {
      return request.get('/api/course/100').then(res => {
        expect(res.body.error).to.equal('Cannot find Course');
        expect(res.status).to.equal(500);
      });
    });

    it('gets courses by user id', () => {
      return request.get('/api/course/user/1').then(res => {
        expect(res.body.Courses[0]).to.be.an('object');
        expect(res.body.Courses[0].title).to.equal('Induction');
        expect(res.body.Courses[0]).to.have.keys(
          'id',
          'title',
          'description',
          'account_type',
          'first_name',
          'last_name',
          'job_title',
          'gender',
          'username',
          'curricula_id'
        );
        expect(res.status).to.equal(200);
      });
    });

    it('sends an error message when the course cannot be found during a get course by user id request', () => {
      return request.get('/api/course/user/100').then(res => {
        expect(res.body.error).to.equal('Cannot find Courses');
        expect(res.status).to.equal(500);
      });
    });

    it('gets courses by curricula id', () => {
      return request.get('/api/course/curricula/1').then(res => {
        expect(res.body.Courses[0]).to.be.an('object');
        expect(res.body.Courses[0].title).to.equal('Induction');
        expect(res.body.Courses[0]).to.have.keys('title', 'description');
        expect(res.status).to.equal(200);
      });
    });

    it('sends an error message when the course cannot be found during a get user profile request', () => {
      return request.get('/api/course/curricula/100').then(res => {
        expect(res.body.error).to.equal('Cannot find Courses');
        expect(res.status).to.equal(500);
      });
    });

    it('gets courses by user id when completed', () => {
      return request.get('/api/course/completed/user/3').then(res => {
        expect(res.body.Courses[0]).to.be.an('object');
        expect(res.body.Courses[0].title).to.equal('Manager');
        expect(res.body.Courses[1].title).to.equal('Induction');
        expect(res.body.Courses[0]).to.have.keys(
          'id',
          'title',
          'description',
          'curricula_id',
          'start_date',
          'start_time',
          'duration_hours',
          'location',
          'completed_status',
          'course_id',
          'user_id',
          'account_type',
          'first_name',
          'last_name',
          'job_title',
          'gender',
          'username'
        );
        expect(res.status).to.equal(200);
      });
    });

    it('sends an error message when the course cannot be found during a get courses by user id when complete request', () => {
      return request.get('/api/course/completed/user/100').then(res => {
        expect(res.body.error).to.equal('Cannot find any Courses for the specified user');
        expect(res.status).to.equal(500);
      });
    });

    it('gets courses by user id and status when Completed', () => {
      return request.get('/api/course/user/3/Completed').then(res => {
        expect(res.body.Courses[0]).to.be.an('object');
        expect(res.body.Courses[0].title).to.equal('Induction');
        expect(res.body.Courses[1].title).to.equal('Manager');
        expect(res.body.Courses[0]).to.have.keys(
          'id',
          'title',
          'description',
          'curricula_id',
          'start_date',
          'start_time',
          'duration_hours',
          'location',
          'completed_status',
          'course_id',
          'user_id',
          'account_type',
          'first_name',
          'last_name',
          'job_title',
          'gender',
          'username'
        );
        expect(res.status).to.equal(200);
      });
    });

    it('gets courses by user id and status when not started', () => {
      return request.get('/api/course/user/2/Not started').then(res => {
        expect(res.body.Courses[0]).to.be.an('object');
        expect(res.body.Courses[0].title).to.equal('Induction');
        expect(res.body.Courses[0]).to.have.keys(
          'id',
          'title',
          'description',
          'curricula_id',
          'start_date',
          'start_time',
          'duration_hours',
          'location',
          'completed_status',
          'course_id',
          'user_id',
          'account_type',
          'first_name',
          'last_name',
          'job_title',
          'gender',
          'username'
        );
        expect(res.status).to.equal(200);
      });
    });

    it('sends an error message when the course cannot be found during a get courses by user id and status request', () => {
      return request.get('/api/course/user/100/Completed').then(res => {
        expect(res.body.error).to.equal('Cannot find any Courses for the specified user');
        expect(res.status).to.equal(500);
      });
    });

    it('posts a course', () => {
      return request
        .post('/api/course')
        .send({"title": "this is my new title",
        "description": "This is my new description",
        "curricula_id": 1 })
        .then(res => {
          expect(res.body.Course).to.eql({ id: 4,
              title: 'this is my new title',
              description: 'This is my new description',
              curricula_id: 1 });
        });
    });

    it('sends an error message when a post course fails', () => {
      return request
        .post('/api/course')
        .send({ 'comment': 'This is another new comment' })
        .then(res => {
          expect(res.body.error).to.equal('Course could not be posted');
        });
    });

    it('deletes course by id', () => {
      return request
        .delete('/api/course/1')
        .then(res => {
          expect(res.body.message).to.equal('Course has been removed from the database');
          expect(res.statusCode).to.equal(200);
        });
    });

    it('sends an error message when the comments id cannot be found during a delete comments by id request', () => {
      return request
        .delete('/api/course/100')
        .then(res => {
          expect(res.body.error).to.equal('Cannot find the Course');
          expect(res.statusCode).to.equal(500).then
        return request.get('/api/course').then(res => {
          expect(res.body.Courses.length).to.equal(3);
        });
      });
    });
  });
    
  describe('tests the curricula controller on the API', function() {
    it('gets all curricula', () => {
      return request.get('/api/curricula').then(res => {
        expect(res.body.Curricula).to.be.an('array');
        expect(res.body.Curricula.length).to.equal(2);
        expect(res.status).to.equal(200);
      });
    });

    it('gets curricula by id', () => {
      return request.get('/api/curricula/1').then(res => {
        expect(res.body.Curricula).to.be.an('object');
        expect(res.body.Curricula.title).to.equal('Basic Package');
        expect(res.body.Curricula).to.have.keys(
          'id',
          'title',
          'description'
        );
        expect(res.status).to.equal(200);
      });
    });

    it('sends an error message when the curricula cannot be found', () => {
      return request.get('/api/curricula/100').then(res => {
        expect(res.body.error).to.equal('Cannot find Curricula');
        expect(res.status).to.equal(500);
      });
    });

    it('gets curricula by user id', () => {
      return request.get('/api/curricula/user/1').then(res => {
        expect(res.body.Curricula[0]).to.be.an('object');
        expect(res.body.Curricula[0].title).to.equal('Basic Package');
        expect(res.body.Curricula[0]).to.have.keys(
          'title',
          'description'
        );
        expect(res.status).to.equal(200);
      });
    });
    
    it('sends an error message when the course cannot be found during a get course by user id request', () => {
      return request.get('/api/curricula/user/100').then(res => {
        expect(res.body.error).to.equal('Cannot find Curricula');
        expect(res.status).to.equal(500);
      });
    });

    it('posts a curricula', () => {
      return request
        .post('/api/curricula')
        .send({"title": "this is my new title",
        "description": "This is my new description"
        })
        .then(res => {
          expect(res.body.Curricula).to.eql({
              title: 'this is my new title',
              description: 'This is my new description',
              id: 3
          });
        });
    });

    it('sends an error message when a post curricula fails', () => {
      return request
        .post('/api/curricula')
        .send({ 'comment': 'This is another new comment' })
        .then(res => {
          expect(res.body.error).to.equal('Curricula could not be posted');
        });
    });

    it('deletes curricula by id', () => {
      return request
        .delete('/api/curricula/3')
        .then(res => {
          expect(res.body.message).to.equal('Curricula has been removed from the database');
          expect(res.statusCode).to.equal(200);
        });
    });

    it('sends an error message when the curricula id cannot be found ', () => {
      return request
        .delete('/api/curricula/100')
        .then(res => {
          expect(res.body.error).to.equal('Cannot find the Curricula');
          expect(res.statusCode).to.equal(500).then
        return request.get('/api/curricula').then(res => {
          console.log(res.body);
          expect(res.body.Curricula.length).to.equal(2);
        });
      });
    });
  });
});
