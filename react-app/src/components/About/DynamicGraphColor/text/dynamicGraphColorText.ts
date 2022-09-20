export const dynamicGraphColorText = [
  // ### Introduction
  `
  The last article that I originally planned to write about is here, and I have some good news: it's a short one!
  This article is about how I determined the dynamic background gradient for the graph that is displayed for the users
  when they decide to look for the _Daily Weather Forecast_ for a specific place and time.

  I'm assuming that you, my dear reader, are reading this series of articles in the original order, and if you are
  there's another good news for you: this time there won't be a _Necessary Concepts_ section, since everything you
  need to understand about what I'll write here was already covered in the [Color Transformation](https://weather.marcelojr.tech/about/color-transform#necessary-concepts)
  article - if you didn't read it already, I really reccomend you do so.

  Before we start, it's important to stablish a few things. Since the graph of the _Daily Weather Forecast_ is
  showing the maximum and minimum temperature values for the days to come, I used a temperature color scale very
  similar to the one used in the map temperature layer, but using only the RGB channels and with with one more
  aditional stop at 122 °F (50 °C) using the color red, like shown below.
`,
  // Image 1 -> temp scale, with temperature and explicit RGB values
  `
  As explained in the previous article, adding a stop to the scale [wasn't possible](weather.marcelojr.tech/about/color-transform#trivial-solutions)
  with the map layer, but since I could define any scale I wanted for the graph, removing that restriction felt
  appropriate.
`,
  // ### The Solution
  `
  The main goal here is to stablish a way to display the maximum and minimum temperature values for each day in an
  [area graph](https://en.wikipedia.org/wiki/Area_chart), using a celsius or a fahrenheit temperature scale, and make
  every temperature value (point) be exactly above it's correspondent color, using the stablished scale like - the one
  shown in the previous illustration.

  One obvious (but bad) solution is to use a static background with the entire gradient correlated with all possible 
  temperatures in the range of -40 °F (or °C) to 122 °F (50 °C), and only worry with positioning the points
  representing the max/min temperature values above it, like follows. 
`,
  // Image 2 -> Background (rectangule) with the entire gradient and 4 max/min couples (include all the stops for refference):
  // [(70, 52), (78, 55), (75, 47), (72, 51)] °F, with lines connecting it and a darker background on off-limits areas 
  `
  But, as you can see, the relevant area of the graph is really small compared to the entire range, so it would be
  better if visually the graph had it's superior and inferior limits representing the maximum possible value and the
  minimum possible value, respectively, for the days to come in that particular region.
  
  Using the same values like in the previous illustration as an exemple again, the desired result would be like this:
`,
  // Image 3 -> just like image 2, but limiting the superior and inferior values (obviously using the same height/width)
`
  We can see that the area of the graph is more optimized this way - the top horizontal line will match the maximum
  temperature value of the set, and the bottom horizontal line is positioned exactly on the minimum temperature value.
  But that also implies in changing the background with every set of data, and also changing the heights that will
  match every temperature in either scale (°F or °C).

  That implication of changing the background of the graph is the focus of this article, a background that happens to
  be a linear gradient, dynamically. If you recall [how linear gradient works](https://weather.marcelojr.tech/about/color-transform#linear-gradients),
  we need to stablish stops (at least two) that will contain 2 determined properties: colors and position. Every
  color between two consecutive stops will be a direct result of a linear function that, depending on the position,
  will determine the values of each [RGB color channel](https://en.wikipedia.org/wiki/RGB_color_model).

  Now that we have a clear goal, it's possible to breakdown the necessary steps required to create the dynamic
  linear gradient background:

  - Find out the maximum and minimum temperature values of the set - they will be positioned in the extremities of
  the graph, with 0% on the bottom (minimum temperature) and 100% on the top (maximum temperature), and doing so they
  also determine where all the other temperature points should be located;
  
  - Create the linear gradient stops:
    - Find out the colors that match these extremeties - their positions are known;
    - Calculate the position of the stops in between - their colors are known;
`, 
  // #### Maximum and Minimum
  `
  ##### Find out the maximum and minimum temperature values of the set

  Like stated previously, the first thing required to solve this problem is to isolate the maximum and the minimum
  possible values. Is intuitive to think that, since these possibles temperatures represent a forecast of the
  maximum/minimum temperature values for the days to come of a given time and location, what we really need to find
  is the **maximum** _maximums_ and the **minimum** _minimums_ temperatures of the forecast. Let me illustrate it using
  the same previous values as an exemple.
`,
  // Image 4 - the maximum set (squares) with it's maximum value highlighted in red; the same for the minimum (in blue)
 `
  Get it?
  
  Now that theese values are known, it's possible to proceed.
`,
  // #### The Extremities
  `
  ##### Find out the colors that match the extremeties
  
  The values found in the previous stop will determine the 2 stops located in the top and bottom extremities of the
  background, but it's colors must be determined following the previously stablished scale shown in the [introduction
  of this article](https://weather.marcelojr.tech/about/dynamic-graph#intro).

  In the case when the maximum and/or minimum temperature values match one previously stablished stop of the scale it
  won't be necessary to calculate the color values, since they are already mapped. The same goes for a temperature
  that falls out of the range - it will assume the same color of either -40 °F/-40 °C or 122 °F/50 °C.
  
  But in the case that they aren't the same or falls out of the range, it's necessary to identify what are the 2
  closest stops in the stablished scale from the maximum and minimum values found previously. Using the same values
  as before, the maximum temperature is situated between 77 °F and and 86 °F, and the minimum between 32 °F and 50 °F.
`,
  // Image 5... -> the scale with all the stops and the max/min pointing to the border between their 2 respective stops.
  `
  After that, since we know the stops respective RGB values, it's necessary to calculate the desired new values using
  the following equation:
  
  $x = previous_{color} + \\left( next_{color} - previous_{color} \\right) \\cdot \\left( \\dfrac{maxORmin_{temperature} - previous_{temperature}}{next_{temperature} - previous_{temperature}} \\right)$

  Where $x$ will be the desired RGB channel value, $next$ reffers to characteristics of the stop immediately higher
  than the max or min temperature found in the previous step, and $previous$ reffers to the stop immediately lower.

  After doing that for all the 3 channels of each maximum and minimum values, we have all the characteristics
  (position and color) of the top and bottom extremities of the graph.
`,
  // Image 6 -> the gradient background with just the extremities
  // #### Everuthing in Between
  `
  ##### Calculate the position of the stops in between

  Now all that's left is to determine the position of all the stops in between - and there's no need to calculate
  their colors, since that was already stablished in the gradient scale (first illustration of this article).

  The formula to calculate those positions are very similar to the formula to determine the colors channel values
  for the extremities - after all, they are all linear functions.

  $y = 100 \\cdot \\left( \\dfrac{stop_{temperature} - minimum_{temperature}}{maximum_{temperature} - minimum_{temperature}} \\right)$
  
  In this case, $y$ is the stop location in %. After finding all their positions, since we already have their colors,
  it's possible to "assemble" the gradient that will serve as the background of the graph - all the temperature
  points plotted in the graph will now match their exact color in the scale.
`,
  // Image 7 -> Just like image 6, but with all the stops
  `
  That's it! Applying this logic will work for any set of temperatures values on the daily forecast - feel free to
  test that when using the app.
`,
  // ### Conclusion
  `
  Not only we finished understanding how the linear gradient background was applied on the daily forecast in this app,
  but we also made it to the end of this series of articles.

  I'm really thankful to you, reader, for getting this far through this madness and I hope that you are now able to
  take something useful to your life - even if it is what **not** to do when building a demo weather app ;D

  Jokes aside, I really think I've learned a lot writing this articles - that was _by far_ ***THE MOST*** difficult
  part of building this app. Programming is easy. Explaining what you did in a comprehensible way... That's *hard*.
  But it's also important to exercise that from time to time, because when you try to teach someone something you can
  actually evaluate how much you now about that subject. In fact, I'm not embarassed to say that I was able to catch
  some mistakes in my code when I started this proccess of writing, and I can honestly say that doing this really
  made be a better programmer.

  Have a great day and as stated in the [introduction](https://weather.marcelojr.tech/about/intro) article, feel free
  to contact me if you have any questions of suggestions on how to improve this app. 

  > "If you cannot explain something in simple terms, you don't understand it. The best way to learn is to teach."
  >
  >  Feynman? Einstein? It doesn't really matter...
`
];
