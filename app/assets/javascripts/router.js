TodoList.Router.map(function() {
    this.resource('todos', { path: '/' });
});

TodoList.TodosRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('todo');
    }
});