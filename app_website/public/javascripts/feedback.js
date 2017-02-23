$(function() {
    $.getJSON('api', updateFeedback);

    $('.feedback-form').submit(function(e) {
        e.preventDefault();
        $.post('api',{
            name: $('#feedback-form-name').val(),
            title: $('#feedback-form-title').val(),
            message: $('#feedback-form-message').val()

        }, updateFeedback);
    });




    function updateFeedback(data){
        var output = '';
        $.each(data, function(key, item) {
            output += '    <div class="feedback-item item-list media-list">';
            output += '      <div class="feedback-item media">';
            output += '        <div class="feedback-info media-body">';
            output += '          <div class="feedback-head">';
            output += '            <div class="feedback-title">' + item.title + '<small class="feedback-name label label-info"></small></div>';
            output += '          </div>';
            output += '          <div class="feedback-message">' + item.message + '</div>';
            output += '        </div>';
            output += '      </div>';
            output += '    </div>';
        });
        $('.feedback-messages').html(output);
    }
});
