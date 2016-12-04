"use strict";

; (() => {
    $(document).ready(function () {
        var post = function (title, description, audioLink, date) {
            this.title = title;
            this.description = description;
            this.audioLink = audioLink;
            this.date = date;
        }

        var $area = $('body'),
            model = {
                episodes: ko.observableArray([
                    new post(
                        'Second episode!',
                        'This is the second episode! WOW!',
                        'https://drive.google.com/file/d/0BxzPq5uDfbejRFlkWFZHM1B4dnc/preview',
                        '04/12/2016'
                    ),
                    new post(
                        'Pilot!',
                        'This is the first episode! WOW!',
                        'https://drive.google.com/file/d/0BxzPq5uDfbejX0Y4eW5qdDF4Z3c/preview',
                        '03/12/2016'
                    )
                ]),
                selectedEpisode: ko.observable()
            };

        ko.applyBindings(model, $area[0]);
    });
})();