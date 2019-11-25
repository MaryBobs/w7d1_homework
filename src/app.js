import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      list: [
        {task: "Clean windows", done: false},
        {task: "Make dinner", done: true},
        {task: "Put up Christmas tree", done: false}
        ]}
    })
} )
