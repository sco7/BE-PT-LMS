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

    it('sends an error message when the course cannot be found during a get user profile request', () => {
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

    it('sends an error message when the course cannot be found during a get user profile request', () => {
      return request.get('/api/course/user/100/Completed').then(res => {
        expect(res.body.error).to.equal('Cannot find Courses for the specified user');
        expect(res.status).to.equal(500);
      });
    });
  });
});
