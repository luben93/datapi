import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './body.html';
import './task.js'

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
    //     const url = target.url.value;
const url =text;

        Meteor.http.call("GET", url, { params: { }},function(err,result){
        console.log(result);
      }) ;
        Tasks.insert({
            text,createdAt: new Date(),url,
        });

        target.text.value = '';
 //       target.url.value = '';
    },
});


