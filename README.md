# Data Visualization Final Project

## Project 1 - Boston Crime Incident Reports

### Introduction
I’ve created a scatter Plot designed to emphasize clustering of crimes in Boston. In this map of Boston, every crime report is pinned on map according to latitude and longitude. Different color representing the degrees of a crime ([UCR](https://www.fbi.gov/services/cjis/ucr)). Each circle represents a certain crime. Also time brushes can be used to select different time span to show crimes in a specific time period.

[![image](https://user-images.githubusercontent.com/35828260/67782126-c7e37600-fa3e-11e9-85a5-eb855587ff9a.png)
](https://vizhub.com/GeniXiong/23a0ebb8806d4eb28626ba6ed9ec1c41)

### Data

The data for my project is Boston crime incident reports (2019/08/01 ~ now). [Link to data](https://gist.github.com/GeniXiong/543400f47d4b937a6379a9105e70c47f). This is the Boston Crime dataset published at Analyze Boston.
 
 ### Features

 * A time brush can be applied to visualize crimes in a time period.
 * Different colors classifies urc degree.
 
### Future Work
 * It will have a stack layout values of ucr for data, instead of a whole block.
 * It will highlight the crimes in a certain region when mouse hovers in this region.
 
## Project 2 - Seattle House Report 2015

### Introduction
 * I’ve created a scatter Plot designed to emphasize clustering of prices, year built, floors of the house, and living areas. Each circle represents a certain house. The size of the circle represent living areas of the house. Different colors represents floor numbers.
 * Each row of the table represents a house, including date, price, bedrooms, bathrooms, floors, sqft above, sqft basement, year built, year renovated, zipcode, lat, long, sqft living, sqft lot.

[![image](https://user-images.githubusercontent.com/35828260/67637668-2e3b8d80-f8b3-11e9-9db0-abdb06c31cb5.png)
](https://vizhub.com/GeniXiong/1f401bd2405a440aa32b025d74ad9e95)

### Data

This is the 2015 Seattle House Price dataset published at [Kaggle Seattle House Sales Prices](https://www.kaggle.com/sameersmahajan/seattle-house-sales-prices) last updated date is 2019-01-28.
 
 ### Features

 * X axis has multiple choices to choose: Year Built, Year Renovated.
 * Y axis has multiple choices to choose: Price, Living area, Basement area, Parking area.
 * Different colors classifies the floors of a house.
 
### Future Work
 * It will have hover effect: when mouse hovers on a certain floor, only house of this floor will be highlighted, others will fade.




