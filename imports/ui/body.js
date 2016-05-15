import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './body.html';
import './page2.html';
import './task.js'
import { HTTP } from 'meteor/http';


Router.route('/', function () {
	const text = console.log(this.params.query.text);
  this.render('content');
});

Router.route('/page2', function () {
  this.render('page2');
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


