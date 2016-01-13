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
// https://stackoverflow.com/questions/5392344/sending-multipart-formdata-with-jquery-ajax    
    
var data = new FormData();
jQuery.each(jQuery('#file')[0].files, function(i, file) {
    data.append('file-'+i, file);
});
    

var opts = {
    url: 'php/upload.php',
    data: data,
    cache: false,
    contentType: false,
    processData: false,
    type: 'POST',
    success: function(data){
        alert(data);
    }
};
if(data.fake) {
    // Make sure no text encoding stuff is done by xhr
    opts.xhr = function() { var xhr = jQuery.ajaxSettings.xhr(); xhr.send = xhr.sendAsBinary; return xhr; }
    opts.contentType = "multipart/form-data; boundary="+data.boundary;
    opts.data = data.toString();
}
jQuery.ajax(opts);
