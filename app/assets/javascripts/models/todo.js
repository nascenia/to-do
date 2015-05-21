TodoList.Todo = DS.Model.extend({
    title: DS.attr('string'),
    is_complete: DS.attr('boolean')
});

TodoList.Todo.FIXTURES = [
    {
        id: 1,
        title: 'Learn Ember.js',
        is_complete: true
    },
    {
        id: 2,
        title: 'Profiling',
        is_complete: false
    },
    {
        id: 3,
        title: 'Profit!',
        is_complete: false
    }
];