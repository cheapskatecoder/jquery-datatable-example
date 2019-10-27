$(document).ready(function() {
    $("#show-students tbody").empty();
        var show_students = $("#table");
        console.log(show_students);
        show_students.DataTable({
            "processing": true,
            "serverSide": false,
            "ajax": {
                "url": '/api/v1/get-data',
                dataSrc: "",
            },
            "columns": [
                {
                    "title": "ID",
                    "data": "id",
                    render: function(row){
                        return `<a href="/to-some-place-/${row}">${row}</a>`
                    }
                },
                {
                    "title": "First Name",
                    "data": "first_name",
                },
                {
                    "title": "Last Name",
                    "data": "last_name",
                },
                {
                    "title": "Curriculum",
                    "data": "curriculum",
                },
                {
                    "title": "Subject",
                    "data": "subject",
                },
                {
                    "title": "Status",
                    "render": function(data, type, row){
                        return `<p>${row.status[row.id-1]}</p>`
                    }
                },
            ],
        });
});
