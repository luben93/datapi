import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './page2.html';
import './task.js
import { HTTP } from 'meteor/http';

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
           if(err){
               console.log("error")
           }else{
           console.log(result);
           Tasks.insert({
                text,createdAt: new Date(),url,data: result.content,
            });
        }});

        target.text.value = '';
        //       target.url.value = '';
    },
});


