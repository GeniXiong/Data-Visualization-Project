# Data Visualization Project

## Data

The data I propose to visualize for my project is 2015 Seattle House Price data. [Link to data](https://gist.github.com/GeniXiong/e7c6bf03262966c543faa26805bf8bc7). This is the 2015 Seattle House Price dataset published at Kaggle Seattle House Sales Prices last updated date is 2019-01-28.

It's a Scatter Plot designed to emphasize clustering of prices, year built, floors of the house, and living areas.
Each row of the table represents a house, including date, price, bedrooms, bathrooms, floors, sqft above, sqft basement, year built, year renovated, zipcode, lat, long, sqft living, sqft lot.

## Prototypes

I’ve created a proof of concept visualization of this data. Scatter Plot designed to emphasize clustering of prices, year built, floors of the house, and living areas. Each circle represents a certain house. The size of the circle represent living areas of the house. Different colors represents floor numbers.

[![image](https://user-images.githubusercontent.com/35828260/65391604-18c5c780-dd39-11e9-8966-8c1d9352b722.png)](https://vizhub.com/GeniXiong/1f401bd2405a440aa32b025d74ad9e95)


## Questions & Tasks

The following tasks and questions will drive the visualization and interaction decisions for this project:

 * What is the distribution for house prices according to its location (latitude, longitude)?
 * Are houses that were newly built tend to have smaller basement? (The area of basement according to built year)
 * How are the floors change over built time?
 
 ## Interactions

The following interactions will answer the above questions for this project:

 * When clicking on different sections on the map of Seattle, the specific section will highlight and only this area's price will be shown.
 * Add a timeline view that has brushing, which can feed into a map view and show the data trend.
 * Add menus for data to change x and y axis.
 
 ## Schedule of Deliverables
 
 * Adding menus and choosing the correct range for x axis and y axis. Because not all options can share the same format, so group some options only for y axis and some options only for x axis.
   - 1 week to finish
   - By Oct 8, 2019
 * Forming a map of Seattle ordered by zipcode and draw points of data according to latitude and longitude. This may take longer time, if zipcode is not possible, at least drawing a map and points can be shown according to latitude and longitude.
   - 1~2 weeks to finish
   - By Oct 20, 2019
 * Adding interactive part of forming timeline brushes.
   - 1~2 weeks to finish
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



