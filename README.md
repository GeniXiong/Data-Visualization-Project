# Data Visualization Project

## Data

The data I propose to visualize for my project is Boston crime incident reports (2019/08/01 ~ now). [Link to data](https://gist.github.com/GeniXiong/543400f47d4b937a6379a9105e70c47f). This is the Boston Crime dataset published at Analyze Boston.

## Prototypes

I’ve created a proof of concept visualization of this data. Scatter Plot designed to emphasize clustering of crimes in Boston. It's a map of Boston, every crime report is pinned on map according to latitude and longitude. Different color representing the degrees of a crime ([UCR](https://www.fbi.gov/services/cjis/ucr)). Each circle represents a certain crime. Also time brushes can be used to select different time span to show crimes in a specific time period.

[![image](https://user-images.githubusercontent.com/35828260/67341253-3edbb480-f4fd-11e9-8333-65abb7437b44.png)
](https://vizhub.com/GeniXiong/4d0342a854f74e579e16ab743f6b647f)


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
 * (Complete!) Imporove react performace. Use useMemo function to improve brush performance. 
   - 1 week to finish
   - By Oct 24, 2019  
 * (Complete!) Change histogram span and threshhold. 
   - 1~2 weeks to finish
   - By Oct 24, 2019
 
## Future Work
 * Stack layout values of ucr for data, not a whole block.




