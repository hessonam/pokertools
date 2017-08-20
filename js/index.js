$('document').ready(function() {
    $('#sim').click(function() {
        var req = 'http://www.propokertools.com/simulations/show?g=' + 
            $('#game').val();
        var hands = [
            $('#hand1').val(),
            $('#hand2').val(),
            $('#hand3').val(),
            $('#hand4').val(),
        ];
        var boards = [
            $('#board1').val(),
            $('#board2').val(),
            $('#board3').val(),
        ]
        
        hands.filter(function(hand) {
            return hand.length > 0;
        });

        hquery = '';
        for (var i = 0; i < hands.length; i++) {
            hquery += '&h' + i + '=' + hands[i];
        }

        var queries = [
            req + '&b=' + board[0] + '&d=' + board[1] + board[2] + hquery,
            req + '&b=' + board[1] + '&d=' + board[0] + board[2] + hquery,
            req + '&b=' + board[2] + '&d=' + board[0] + board[1] + hquery,
        ];

        console.log(queries);
    })
})
