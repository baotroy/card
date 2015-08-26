$(function(){
	$("img#main").load(function() {
        adjustImage($(this));
    });
    $("#btnSave").click(function() { 
        html2canvas([document.getElementById('canvas')], {
		    onrendered: function(canvas) {
		       var data = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
		       	window.location.href=data;
		       // AJAX call to send `data` to a PHP file that creates an image from the dataURI string and saves it to a directory on the server
		    }
		});
    });
    $('#quotesModal').on('shown.bs.modal', function() {
	    $('#editQuotes').val($.trim($('#quotes').text())).focus();
	});
    $(document).on('click', '#saveQuotes', function(){
    	text = $.trim($('#editQuotes').val());
    	text = text.replace(/\r?\n/g, '<br />');
    	$('#quotes').html(text);
    });

    $(document).on('click', '#uploadIcon', function(){
    	$('#upload').click();
    });
    $(document).on('dblclick', '#quotes', function(){
    	$('#editQuoteIcon').click();

    });
    $('input[type=file]#upload').change(function () {
		
        var file = $(this).prop('files')[0];
        var filej = $('input[type=file]');
        //var limitSize = <?php echo CONST_MAX_PROFILE_SIZE; ?>;
        var limitSize = 1*1024000;
        var list_ext = ['jpg', 'jpeg', 'png',''];
        	
        var sFileName = $(filej).val();

        var sFileExtension = sFileName.split('.')[sFileName.split('.').length - 1];
        sFileExtension = sFileExtension.toLowerCase();
        
        if (validExtension(sFileExtension, list_ext, 'Vui lòng chọn file hình ảnh (JPG, PNG)') === false) {
            return false;
        }
        var filesize = GetFileSize('upload');
        if (validFileSize(filesize, limitSize, 'File có tối đa 1mb') === false) {
            return false;
        }
       
        // 画像表示
        var reader = new FileReader();
        if (checkImageWidth(file))//check image width
        {
            reader.onload = function () {
                $('#main').attr('src', reader.result);
                adjustImage($("img#main"));
            }
            reader.readAsDataURL(file);
        }
    });
});

function adjustImage(img)
{
	var height = img.height();
    var width = img.width();
    var min;
    if(width < height)
    {
    	img.attr('style', 'width: 100%');
    	min = 'w';
    }
    else
    {
    	img.attr('style', 'height: 100%');
    	min = 'h';
    }
    width = img.width();
    if(width>510)
    {
    	var left = '-'+(width - 510)/2;
    	switch(min)
    	{
    		case 'w':
    			img.attr('style', 'width: 100%; margin-left:'+left+'px');
    			break;
    		case 'h':
    			img.attr('style', 'height: 100%; margin-left:'+left+'px');
    			break
    	}
    }
}


	function checkImageWidth(file) {
        var reader = new FileReader();
        var image = new Image();
        var minWidth = 510;
        reader.readAsDataURL(file);
        reader.onload = function (_file) {
            image.src = _file.target.result;              // url.createObjectURL(file);
            image.onload = function () {
                var w = this.width,
                        h = this.height,
                        t = file.type, // ext only: // file.type.split('/')[1],
                        n = file.name,
                        s = ~~(file.size / 1024) + 'KB';
                if (w < minWidth) {
                    genErrorUpload('Hình ảnh có chiều rộng tối thiểu '+ minWidth +'px');
                    return false;
                }
                $('span#newimage').parent('div').removeClass('has-error');
                $('#imgerr').removeClass('input_error').text('');
            };
        };
        return true;
    }
    function GetFileSize(fileid) {
        try
        {
            var fileSize = 0;
            //for IE
            if ((navigator.userAgent.toLowerCase().indexOf('msie 6') != -1) && (navigator.userAgent.toLowerCase().indexOf('msie 7') == -1)) {
                var objFSO = new ActiveXObject("Scripting.FileSystemObject");
                var filePath = $("#" + fileid)[0].value;
                var objFile = objFSO.getFile(filePath);
                var fileSize = objFile.size;
                fileSize = fileSize / 1048576;
            }
            //for FF, Safari, Opeara and Others
            else {
                fileSize = $("#" + fileid)[0].files[0].size;
                fileSize = fileSize / 1048576;
            }
            return fileSize;
        }
        catch (e) {
            console.log(e);
        }
    }
    function genErrorUpload(message) {
        $('input[type=file]').val('');
        $('#newimage').html('');
        $('#newimage').parent('div').addClass('has-error');
        $('#imgerr').text(message).addClass("input_error").attr('style', 'width: auto');
    }
    function validFileSize(fileSize, limitSize, message) {
        if (fileSize * 1024000 > limitSize) {
            //genErrorUpload(message);
            alert(message);
            return false;
        }
        // else {
        //     $('#newimage').parent('div').removeClass('has-error');
        //     $('#imgerr').removeClass('input_error').text('');
        // }
        return true;
    }
    function validExtension(ext, allowExt, message) {
        if (jQuery.inArray(ext, allowExt) < 0) {
            alert(message);
            return false;
        }
        // $('#newimage').parent('div').removeClass('has-error');
        // $('#imgerr').removeClass("input_error").text('');
        return true;
    }


    //http://stackoverflow.com/questions/13198131/how-to-save-a-html5-canvas-as-image-on-a-server