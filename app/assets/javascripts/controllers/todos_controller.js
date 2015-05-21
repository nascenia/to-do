TodoList.TodosController = Ember.ArrayController.extend({
    actions: {
        createTodo: function() {
            // Get the todo title set by the "New Todo" text field
            var title = this.get('newTitle');
            if (!title.trim()) { return; }

            // Create the new Todo model
            var todo = this.store.createRecord('todo', {
                title: title,
                is_complete: false
            });

            // Clear the "New Todo" text field
            this.set('newTitle', '');

            // Save the new model
            todo.save();
        },
        clearCompleted: function() {
            var completed = this.filterBy('is_complete', true);
            completed.invoke('deleteRecord');
            completed.invoke('save');
        }
      },
        hasCompleted: function() {
            return this.get('completed') > 0;
        }.property('completed'),
        completed: function() {
            return this.filterBy('is_complete', true).get('length');
        }.property('@each.is_complete'),


    isEditing: true,

    remaining: function() {
        return this.filterBy('is_complete', false).get('length');
    }.property('@each.is_complete'),

    inflection: function() {
        var remaining = this.get('remaining');
        return remaining === 1 ? 'item' : 'items';
    }.property('remaining')
});