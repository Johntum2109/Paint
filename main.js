// Canvas
    var canvas = document.getElementById("_Canvas")

    var ctx = canvas.getContext("2d"); // Get context from canvas

// Drawing Properties
    var color = document.getElementById("colorInput").value; // Get Color
    var width = document.getElementById("widthInput").value; // Get Width

// MouseEvents
    // MouseDown
        canvas.addEventListener("mousedown", _mousedown); // Add a canvas event listener

        function _mousedown(e) // Event from the vent listener
        { 
            color = document.getElementById("colorInput").value; // Refresh the color
            width = document.getElementById("widthInput").value; // refresh the width
            MouseEvent = "mouseDown" // Assign a mouse event
        }

    // MouseUp
        canvas.addEventListener("mouseup", _mouseup);

        function _mouseup(e) 
        { 
            color = document.getElementById("colorInput").value;
            width = document.getElementById("widthInput").value;
            MouseEvent = "mouseUp"
        }

    // MouseLeave
        canvas.addEventListener("mouseleave", _mouseleave);

        function _mouseleave(e) 
        { 
            color = document.getElementById("colorInput").value;
            width = document.getElementById("widthInput").value;
            MouseEvent = "mouseLeave"
        }

    // MouseLeave
        canvas.addEventListener("mousemove", _mousemove);

        function _mousemove(e) 
        { 
            // Refresh
            color = document.getElementById("colorInput").value;
            width = document.getElementById("widthInput").value;

            cMPX = e.clientX - canvas.offsetLeft; // Get and assign current position of mouse Y
            cMPY = e.clientY - canvas.offsetTop; // Get and assign current position of mouse X

            if  ( MouseEvent == "mouseDown" ) // If the mouse event is "mouseDown"
            { 
                ctx.beginPath(); // Begin the path
                ctx.strokeStyle = color; // Set the color
                ctx.lineWidth = width; // Set the line width
                ctx.moveTo(lMPX, lMPY);
                ctx.lineTo(cMPX, cMPY);
                ctx.stroke(); // Draw
            }

            lMPX = cMPX; // Assign last position of mouse X
            lMPY = cMPY; // Assign last position of mouse Y
        }

// TouchEvents
        // TouchStart
            canvas.addEventListener("touchstart", _touchstart);

            function _touchstart(e) 
            { 
                lTPX = e.touches[0].clientX - canvas.offsetLeft; // Assign last position of touch X
                lTPY = e.touches[0].clientY - canvas.offsetTop; // Assign last position of touch Y
            }

        // TouchMove
            canvas.addEventListener("touchMove", _touchmove);

            function _touchmove(e) 
            { 
                cTPX = e.touches[0].clientX - canvas.offsetLeft;
                cTPY = e.touches[0].clientY - canvas.offsetTop;

                ctx.beginPath();
                ctx.strokeStyle = color;
                ctx.lineWidth = width;
                ctx.moveTo(lTPX, lTPY);
                ctx.lineTo(cTPX, cTPY);
                ctx.stroke();

                lTPX = cTPX;
                lTPY = cTPY;
            }