# Data Visualization Project

## Data

The data I propose to visualize for my project is Boston crime incident reports (2019/08/01 ~ now). [Link to data](https://gist.github.com/GeniXiong/543400f47d4b937a6379a9105e70c47f). This is the Boston Crime dataset published at Analyze Boston.

## Prototypes

I’ve created a proof of concept visualization of this data. Scatter Plot designed to emphasize clustering of crimes in Boston. It's a map of Boston, every crime report is pinned on map according to latitude and longitude. Different color representing the degrees of a crime ([UCR](https://www.fbi.gov/services/cjis/ucr)). Each circle represents a certain crime. Also time brushes can be used to select different time span to show crimes in a specific time period.

[![image](https://user-images.githubusercontent.com/35828260/67050378-5f270000-f106-11e9-931c-b6224afab5e3.png)


## Questions & Tasks

The following tasks and questions will drive the visualization and interaction decisions for this project:

 * What is the distribution for crimes according to its location (latitude, longitude)?
 * How are the crimes involve with time?
 * Each crime distribution in Boston?
 
 ## Interactions

The following interactions will answer the above questions for this project:

 * When brushing with time period, only crimes in this time period will show on the map, others will be grey.
 * From the menus, x and y values can be changed.
 * Select different region on the map will show a small line char displaying crime reports for this region (according to region number in the data).
 
 ## Schedule of Deliverables
 
  * (Complete!) Forming a map of Boston and draw points of data according to latitude and longitude. Draw crime points on the map.
   - 1~2 weeks to finish
   - By Oct 17, 2019
   
  * (Complete!) Adding interactive part of forming timeline brushes.
   - 1~2 weeks to finish
   - By Oct 17, 2019
   
 * Adding menus and choosing the correct range for x axis and y axis.
   - 1 week to finish
   - By Oct 24, 2019
   
  * Adding interactive part of highlighting different areas.
   - 1~2 weeks to finish
   - By Oct 24, 2019
   
 * Beautify the data visualization, set correct styling for the project.
   - choose correct, pleasing to the eye color, and set correct margins, fonts...
   - Sum up everything, including links, documentations.
   - 1 week to finish
   - By Oct 31, 2019
 
## Sketches

 * Sketch 1
 
 You can lighten each small area of Seattle to see information on every dot(house). When the mouse clicks on a certain area, other areas become grey(faded). So I can see the price distribution. 
![image](https://user-images.githubusercontent.com/35828260/65391620-3abf4a00-dd39-11e9-8344-4c94bbffed47.png)

 * Sketch 2
 
 You can see the average basement area over built year. When you click the line, other sections become grey. Because it's too much information on this visualization. If you're only interested in basement area or parking lot area, you can click on the corresponding line. From the line we can see modern house may or may not have smaller basement. From this scatter plot, we can also see modern built house mostly have 2 floors.
![image](https://user-images.githubusercontent.com/35828260/65391630-5165a100-dd39-11e9-9541-c5ad15dc4142.png)



