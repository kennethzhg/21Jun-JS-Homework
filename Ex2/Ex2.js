var jsonCircles = [
    { "x_axis": 100, "y_axis": 150, "radius": 10, "color" : "orange" },
    { "x_axis": 200, "y_axis": 200, "radius": 15, "color" : "pink"},
    { "x_axis": 50, "y_axis": 200, "radius": 20, "color" : "red"},
    { "x_axis": 70, "y_axis": 40, "radius": 15, "color" : "green"},
    { "x_axis": 220, "y_axis": 60, "radius": 10, "color" : "lightblue"}];

    var svgContainer = d3.select("body").append("svg")
                                       .attr("width", 500)
                                        .attr("height", 500);
    
    var circles = svgContainer.selectAll("circle")
                             .data(jsonCircles) //place holder 
                             .enter() //reference
                              .append("circle") //3 circles
    
    //var circleAttributes = circles
                           .attr("cx", function (d) { return d.x_axis; })
                           .attr("cy", function (d) { return d.y_axis; })
                           .attr("r", function (d) { return d.radius; })
                           .style("fill", function(d) { return d.color; });
    