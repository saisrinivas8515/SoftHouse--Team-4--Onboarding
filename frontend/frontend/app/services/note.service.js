function noteService($http, $interpolate) {
    var note = $interpolate('/api/note/{{id}}');

    return {
        list: list,
        create: create,
        destroy: destroy,
        update: update
    };

    function list() {
        return $http.get(note());
    }

    function create(title, text1, text2) {
        var data = {
            title: title,
            text1: text1,
            text2: text2
        };

        return $http.post(note(), data);
    }

    function destroy(id) {
        return $http.delete(note({ id: id }));
    }

    function update(id, title, text1, text2) {
        var data = {
            title: title,
            text1: text1,
            text2: text2
        };

        return $http.put(note({ id: id }), data);
    }
}