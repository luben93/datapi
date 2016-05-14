import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import { HTTP } from 'meteor/http'
import './task.html';

Template.task.events({
    'click .toggle-checked'() {
        Tasks.update(this._id, {
            $set: { checked: ! this.checked },
        });
    },
    'click .delete'() {
        Tasks.remove(this._id);
    },
   /* 'click'() {
        if(Meteor.isServer){
            console.log("i am server");
            HTTP.get(Tasks.find(this._id).url,{params: {},function (error,result){
                console.log(result);
            }});
        }else{
            console.log("i am client");
        }
    }*/
});
