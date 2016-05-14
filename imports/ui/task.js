import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './task.html';

Template.task.events({
    'click .toggle-checked'() {
        Tasks.update(this._id, {
            $set: { checked: ! this.checked },
        });
    },
    'click .delete'() {
        Task.remove(this._id);
    },
    'click'() {
        if(Meteor.isServer){
            console.log("i am server");
        }else{
            console.log("i am client");
        }
    }
});
