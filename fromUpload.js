    $("form").submit(function (event) {
        event.preventDefault();

        var formData = new FormData();
        var url = "importData.do";
        formData.append('file',$("[name='file']").val());
        console.log(url);
        console.log(formData);
        $.ajax({
            url: url,
            contentType: false ,
            processData: false,
            data: formData,
            type: 'POST',
            success: function (data) {

            }
        });


    });
