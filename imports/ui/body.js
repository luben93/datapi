import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './home.html';
import './category.html';
import './data.html';
import './create.html';
import './task.js'
import { HTTP } from 'meteor/http';


Router.route('/', function () {
	const text = console.log(this.params.query.text);
  this.render('home');
});

Router.route('/category/:name', function () {
	const name = this.params.name;
	console.log(name);
  this.render('category', {data: {name: name}});
});

Router.route('/data/:_id', function () {
	const name = this.params._id;
	console.log(name);
  this.render('data', {data: {_id: name}});
});

Router.route('/create/:_id', function () {
	const name = this.params._id;
	console.log(name);
  this.render('create', {data: {_id: name}});
});


Template.body.helpers({
    tasks(){
        return Tasks.find({}, {sort: {createdAt: -1}});
    }
});

Template.body.events({
    'submit .new-task'(event) {
        event.preventDefault();

        const target = event.target;
        const text = target.text.value;
        console.log(text);
        //     const url = target.url.value;
        const url =text;



        target.text.value = '';
        //       target.url.value = '';
    },
});


