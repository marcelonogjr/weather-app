export const dynamicGraphColorText = [
  // ### Introduction
  `
  This article is about how I determined the dynamic background gradient for the graph that is displayed for the users
  when they decide to look for the _Hourly or Daily Weather Forecast_ for a specific place and time.

  I'm assuming that you, as stated in the [Introduction article](https://weather.marcelojr.tech/about/intro), are
  reading this series of articles in the original order. For this particular one, there won't be a _Necessary Concepts_
  section, since everything you need to understand about what I'll write here was already covered in the [_Necessary
  Concepts_ of the Color Transformation](https://weather.marcelojr.tech/about/color-transform#necessary-concepts)
  article - if you didn't read it already, I really recommend you do so.

  Before we start, it's important to establish a few things. Since both graphs (hourly and daily) are displaying the
  maximum and minimum temperature values for the hours or days to come, I used a temperature color scale very similar
  to the one used in the map temperature layer, but using only the RGB channels and with one more additional stop at
  122 °F (50 °C) using the color red, like shown below.
`,
  // Image 1 -> temp scale, with temperature and explicit RGB values
  `
  As explained in the previous article, adding a stop to the scale [wasn't possible](https://weather.marcelojr.tech/about/color-transform#trivial-solutions)
  in the map layer, but since I could define any scale I wanted for the chart, removing that restriction felt
  appropriate.
`,
  // ### The Solution
  `
  The main goal here is to establish a way to display the maximum and minimum temperature values for each hour or day in
  an [area chart](https://en.wikipedia.org/wiki/Area_chart), using a Celsius or a Fahrenheit temperature scale, and
  make every temperature value (point) be exactly above its correspondent color, using the established scale like the
  one shown in the previous illustration.

  One obvious (but bad) solution is to use a static background with the entire gradient correlated with all possible 
  temperatures in the range of -40 °F (or °C) to 122 °F (50 °C), and only worry with positioning the points
  representing the max/min temperature values above it, like follows. 
`,
  // Image 2 -> Background (rectangule) with the entire gradient and 4 max/min couples (include all the stops for refference):
  // [(70, 52), (78, 55), (75, 47), (72, 51)] °F, with lines connecting it and a darker background on off-limits areas 
  `
  But, as you can see, the relevant area of the chart is really small compared to the entire range, so it would be
  better if visually the graph had its superior and inferior limits representing the maximum possible value and the
  minimum possible value, respectively, for the hours or days to come in that particular region.
  
  Using the same values as in the previous illustration as an example again, the desired result would be like this:
`,
  // Image 3 -> just like image 2, but limiting the superior and inferior values (obviously using the same height/width)
`
  We can see that the area of the chart is more optimized this way - the top horizontal line will match the maximum
  temperature value of the set, and the bottom horizontal line is positioned exactly on the minimum temperature value.
  But that also implies changing the background with every set of data and also changing the heights that will
  match every temperature in either scale (°F or °C).

  That implication of changing dynamically the background of the chart is the focus of this article, a background
  that happens to be a linear gradient. If you recall [how linear gradient works](https://weather.marcelojr.tech/about/color-transform#linear-gradients),
  we need to establish stops (at least two) that will contain 2 determined properties: colors and position. Every
  color between two consecutive stops will be a direct result of a linear function that, depending on the position,
  will determine the values of each [RGB color channel](https://en.wikipedia.org/wiki/RGB_color_model).

  Now that we have a clear goal, it's possible to breakdown the necessary steps required to create the dynamic
  linear gradient background:

  - Find out the maximum and minimum temperature values of the set - they will be positioned in the extremities of
  the graph, with 0% on the bottom (minimum temperature) and 100% on the top (maximum temperature), and doing so they
  also determine where all the other temperature points should be located;
  
  - Create the linear gradient stops:
    - Find out the colors that match these extrimeties - their positions are known;
    - Calculate the position of the stops in between - their colors are known;
`, 
  // #### Maximum and Minimum
  `
  ##### Find out the maximum and minimum temperature values of the set

  As stated previously, the first thing required to solve this problem is to isolate the maximum and the minimum
  possible values. Is intuitive to think that, since these possibles temperatures represent a forecast of the
  maximum/minimum temperature values for days to come of a given time and location, what we really need to find
  is the **greater** of the _maximums_ and the **lesser** of the _minimums_ temperatures of the forecast. Let me
  illustrate it using the same previous values as an example - from now on I'll be using the daily forecast as an
  example.
`,
  // Image 4 - the maximum set (squares) with it's maximum value highlighted in red; the same for the minimum (in blue)
 `
  As you can see, among the maximums, the greater value is 78 °F (in red) and among the minimum, the lesser is 47 °F
  (in blue). Now that these values are known, it's possible to proceed. For the hourly forecast, the only difference
  is that each hour only has one temperature point associated with it, so the logic works the same way, but
  instead of choosing the greater of the maximums and the lesser of the minimums temperature values, we should choose
  the maximum and minimum temperature values for all the hours to come.
`,
  // #### The Extremities
  `
  ##### Find out the colors that match the extremities
  
  The values found in the previous step will determine the 2 stops located in the top and bottom extremities of the
  background, but their colors must be determined following the previously established scale shown in the [introduction
  of this article](https://weather.marcelojr.tech/about/dynamic-graph#intro).

  In the case when the maximum and/or minimum temperature values match one previously established stop of the scale it
  won't be necessary to calculate the color values, since they are already mapped. The same goes for a temperature
  that falls out of the range - it will assume the same color of either -40 °F/-40 °C or 122 °F/50 °C.
  
  But in the case that they aren't the same or fall out of the range, it's necessary to identify what are the 2
  closest stops in the established scale from the maximum and minimum values found previously. Using the same values
  as before, the maximum temperature is situated between 77 °F and 86 °F, and the minimum between 32 °F and 50 °F.
`,
  // Image 5... -> the scale with all the stops and the max/min pointing to the border between their 2 respective stops.
  `
  After that, since we know the stops' respective RGB values, it's necessary to calculate the desired new values using
  the following equation:
  
  $x = previous_{color} + \\left( next_{color} - previous_{color} \\right) \\cdot \\left( \\dfrac{maxORmin_{temperature} - previous_{temperature}}{next_{temperature} - previous_{temperature}} \\right)$

  Where $x$ will be the desired RGB channel value, $next$ refers to characteristics (color or temperature) of the stop
  immediately higher than the max or min temperature found in the previous step, and $previous$ refers to the stop
  immediately lower.

  After doing that for all the 3 channels of each maximum and minimum value, we have all the characteristics
  (position and color) of the top and bottom extremities of the chart.
`,
  // Image 6 -> the gradient background with just the extremities
  // #### Everuthing in Between
  `
  ##### Calculate the position of the stops in between

  Now all that's left is to determine the position of all the stops in between - and there's no need to calculate
  their colors since that was already established in the gradient scale (first illustration of this article).

  The formula to calculate those positions are very similar to the formula to determine the color channels values
  for the extremities - after all, they are all linear functions.

  $y = 100 \\cdot \\left( \\dfrac{stop_{temperature} - minimum_{temperature}}{maximum_{temperature} - minimum_{temperature}} \\right)$
  
  In this case, $y$ is the stop location in %. After finding all their positions, since we already have their colors,
  it's possible to "assemble" the gradient that will serve as the background of the chart - all the temperature
  points plotted in the graph will now match their exact color in the scale.
`,
  // Image 7 -> Just like image 6, but with all the stops
  `
  That's it! Applying this logic will work for any set of temperature values on the hourly and daily forecast - feel
  free to test that when using the app.
`,
  // ### Conclusion
  `
  This one is considerably simpler than the previous ones, isn't it? Nevertheless, it's also something that I think
  the user of this app will take for granted and it's not very clear the difficulties associated with implementing
  this logic...
  
  I hope you're still enjoying this series, and if you didn't read the previous articles, I really recommend that
  you check that out sometime. In the next article, you'll find a conclusion to this series and some final
  considerations on this work.

  As always, have a great day!
`
];
