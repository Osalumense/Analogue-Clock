    //This controls the whole analogue clock
    setInterval(setClock, 1000); 

    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    function setClock() {
        const currentDate = new Date();
        const secondsRatio = currentDate.getSeconds() / 60;
        const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
        const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

        setRotation(secondHand, secondsRatio);
        setRotation(minuteHand, minutesRatio);
        setRotation(hourHand, hoursRatio);
    }

    function setRotation(element, rotationRatio) {
        element.style.setProperty('--rotation', rotationRatio * 360);
    }

    setClock();



// const http = require('http');
// const fs = require('fs');
// const port = 3300;

// const server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html' });
//     fs.readFile('index.html', function(error, data) {
//         if(error) {
//             res.writeHead(404);
//             res.write('Error: File Not Found');
//         }
//         else{
//             res.write(data);
//         }
//         res.end();
//     });
// });

// server.listen(port, function(error) {
//     if(error) {
//         console.log('Something wnet wrong on port' + error);
//     }
//     else {
//         console.log('Server is listening on port ' + port);
//     }
// });