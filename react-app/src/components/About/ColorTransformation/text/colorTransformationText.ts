export const colorTransformationText = [
  // ### Introduction
  `
  After solving the Map Coordinate Problem, I decided that it was necessary to modify the image that I got from the
  [OpenWeatherMap API](https://openweathermap.org/api/weathermaps) for specific types of layers. Don't get me wrong,
  I really like their APIs, and the fact that they offer a Weather Layer map for free is really amazing as it
  fulfills the purpose of allowing developers to practice while building applications using real and relevant data.
  But some of the free layers could use some improvements and I took it as a challenge to change them to my liking -
  if you are curious, [they also offer a better API](https://openweathermap.org/api/weather-map-2) (paid) that allows
  developers to make similar custom changes to the palette colors of every layer type in a much easier way.

  To better illustrate _why_ I felt some layers needed change, here is a representation of the original **Wind Speed**
  [scale](https://openweathermap.org/map_legend) (converted to miles/hour) and their respective colors: 
`,
  // Image 1 -> shows wind layer scale with
  `
  As you can see, this particular scale has a _really_ wide range - with a quick google search, I found out that the
  [highest wind gust speed ever recorded](https://weatherology.com/trending/articles/Professor-Paul-Strongest-Winds-Recorded.html#:~:text=The%20highest%20wind%20speed%20ever,gust%20during%20Tropical%20Cyclone%20Olivia.)
  measured 253 mph, and this scale covers up to almost 450 mph (!). It's also very hard to differentiate the wind
  speed up to 20 mph and then for values above that and up to 75 mph - this value representing "Hurricane Force",
  [according to the U.S. Government](https://www.weather.gov/pqr/wind). Despite the fact that the real relevant data
  for wind speed is being shown to the user in an explicit and more precise way (the exact speed value for a
  determined time and location), I felt the app could bennefit from having a more comprehensible scale.

  I also changed some other scales, and left a couple of them with the original values. But before explaining exactly
  _how_ I did that, I'll first present you with some necessary concepts required to understand my solution to this
  problem. 
`,
  // ### Necessary Concepts
  // Maybe a text in between?
  // #### The RGBA Color Model
  `
  The first thing required to solve this problem is a basic understanding of the RGBA Color Model.
  
  The [_RGB color model_](https://en.wikipedia.org/wiki/RGB_color_model) - probably the most important color
  system in web development - uses number values from 0 to 255 in each parameter (Red, Green, Blue) to form every
  other colors. The illustration below shows some exemples of colors and their correspondent _RGB_ values.
`,
  // Image 2 -> Simple RGB explanation (9 circles - 3 main colors, 3 full combinations, dark and light gray, and a random one)
  `
  In the [**RGBA**](https://en.wikipedia.org/wiki/RGBA_color_model) system, in addition to the traditional RGB values,
  theres also an "Alpha" parameter that sets the opacity of a given color, with 0 being fully transparent and 255
  being completely opaque.
`,
  // Image 3 -> Dynamic colors (depending on the theme), 3 circles with 50 - 150 - 255 alpha levels
  // #### Linear Functions
  `
  A [_linear function_](https://en.wikipedia.org/wiki/Linear_function_(calculus)), like any [mathematical function](https://en.wikipedia.org/wiki/Function_(mathematics)),
  is responsible for correlating two or more variables. More specifically, a linear function will _aways_ have all
  variables that it correlates with an [exponent](https://en.wikipedia.org/wiki/Exponentiation) equal to 1. So, if
  there's a linear function that expresses the value of _y_ in relation to _x_, it will _aways_ be possible to 
  represent this function as:
  
  $y = ax + b$ , with $a \\neq 0$

  In this cenario, "a" and "b" will aways be _constant_ numbers.  Graphically, assuming that _x_ and _y_ can assume
  any real number value, a linear function will aways be a "straight" line (but never vertical). The next graph
  shows an exemple of a simple linear function, with _a_ and _b_ being equal to _2_ and _3_, respectively, and some
  corresponding _x_ and _y_ values that are true for this particular function.
`,
  // Image 4 -> Graph of y = 2x + 3, and the following (x, y) pairs: (0, 3), (2, 7), (-3, -3)
  // #### Linear Gradient
  `
  Now to the last fundamental concept required for the explanation on how to solve the main problem, linear color
  gradients utilizes the two previous concepts - how colors are formed in the RGBA system (in our specific case, it
  can use any color model) and linear functions. I obviously didn't explained what [gradients](https://en.wikipedia.org/wiki/Gradient)
  are, but if you don't know it already, I'm sure you'll understand it anyway.

  A linear color gradient is basically the representation of a blend of colors. It will aways have at least 2 stopping
  points (specific colors determined beforehand), and every color between 2 consecutive stops will be the direct
  result of a linear function that contains both colors.

  But how can linear functions contain colors? Well, since we use number values to represent specific colors, and in
  the RGBA color model each color is formed by four different parameters that goes from 0 to 255, if a function starts
  in a specific "color" and goes linearly to another "color", that means that for each of the 4 parameters there will
  be one specific function that describes it's behavior to get from a starting value to the stopping value for that
  parameter. I'll try to illustrate it below.
`,
  // Image 5 -> It must contain: the four graphs *OR maybe* one with all four, a gradient bar like image 1 with red and blue ends and 3 stopping mid points (like 30%, 50%, 80%)
  `
  Above you can see a simple gradient that starts with red and goes all the way to blue. Every color in between them
  is a direct result of the linear functions of each of the four parameters in the RGBA. Since there's no green in
  either blue or red, the green parameter of the RGBA will be constantly zero all the way through. And because I
  chose that the colors would opaque in both ends, the alpha parameter will also have a constant value (255).

  Now that every that every necessary concept have been explained, it's possible to understand the problem in depth
  and how I came up with a solution for it.
`,
  // ### The Solutions
  `
  Before talking about the modifications that I have made, I'd like to state that out of the 5 possible weather
  layers that OpenWeatherMaps offers, I chose to keep the original color scales for two of them: the _temperature_
  and the _sea level pressure_ layers.
`,
  // Image 6 -> The color scales for both temperature and pressure layers
  `
  The original scale value and the way color vary in both layers are _"satisfactory"_. The _temperature_ layer has a bit
  of a problem, since every value above 86°F (30°C) are displayed at the same "maximum" color, but unfortunately I
  cannot do anything about that. There is no way to widen the range of the orignal scale, since every data that falls
  out of the maximum or minimum values of the scale will be presented to me in the same colors, making it impossible
  to distinguish anything that exceeds that range. So the only thing I can do is to modify what happens between the
  maximum and minimum values of the original scales.
  
  The scale of the other three layers, especially the _precipitation_ and _wind speed_, are not that satisfying to me -
  the latter was already commented in the [Introduction](#intro) section of this article. So for the three layers
  that I have modified, I think it's best to start explaining the modifications on the _clouds_ layer, since it's the
  one that has the simples logic to modify the original colors, in my chosen solution.
  
  From now on, everytime that I'm changing the colors of a layer, since all the possible theoretical values are known,
  there will be a mathematical logic that will take these original possible values and transform them into the
  correspondent color in a new scale that I'll establish, analyzing pixel by pixel of whatever image the
  OpenWeatherMap API sends my server and changing each pixel color at a time.
`,
  // #### The Clouds Layer
  `
  I wasn't too bothered by the stopping values or the choices of colors of the _clouds layer_ per se, but since it
  was decided to use a light color scheme for the [Mapbox's street map](https://docs.mapbox.com/api/maps/static-images/)
  (the layer that goes below the weather layer), the original light colors of the clouds would often conflict with
  the map below, making it hard to understand the relevant data this layer displays.

  The easiest thing to do in my opinion, for this particular situation, was to use the [complementary colors](http://www.redlandscameraclub.org/index_htm_files/Photogram%202016-1%20Overview%20of%20color.pdf)
  of the original color scale without changing the alpha values, that is, if the original color is _white_ in the RGBA
  _(255, 255, 255, 255)_, then it would be transformed to _black (0, 0, 0, 255)_. The formula used to do just that is:

  $new_{value} = 255 - original_{value}$

  Just to give another exemple, if my original color is _blue (0, 0, 255, 155)_, it's complementary color is _yellow
  (255, 255, 0, 155)_ - the Alpha values stayed the same because I decided _not_ to change it.
  
  Applying this logic to the original scale produces the result as follows.
`,
  // Image 7 -> Original color scale above, an arrow point down to the modified colors.
  `
  You could argue that from 70% onwards there's not much of a distinction between the colors even if they are not
  technically the same (very close though), but I've made some tests and the results are not bad. The purpose of these
  weather layers it's to allow an [qualitative](https://en.wikipedia.org/wiki/Qualitative) evaluation, not a
  quantitative one - the exact average number for a specific region and time is available to the user anyway.

  Now that the _clouds_ layer is _satisfactory_, let's talk about the remaining two layers.
`,
  // ###  The "Not So Trivial" Solutions
  `
  For the remaining layers it's going to be necessary to follow these steps:

  1) Map each layer's linear functions generated by the color gradient;
  2) Figure out the best parameters to track the original colors;
  3) Determine the new colors and scales; and
  4) Calculate linear functions that will transform the original colors into the desired ones.
  
  I won't bore you with all funtion values of the original scales or the ones that I used to transform all the values,
  but I'll show you the graphic interpretation of it and the general thought process. 
`,
  // First Step
  `
  ##### Map each layer's linear functions generated by the color gradient
  
  Below you'll find the graphs generated by all the functions contained in the linear gradient of both
  _precipitation_ and _wind speed_ layers, and their corresponding colors.
`,
  // Image 8
  `
  ##### Figure out the best parameters to track the original colors

  For the solution to work it's necessary to be able to correctly identify _where_ exactly that color fits in the
  theoretical functions.
  
  For instance, if we analyze the _precipitation_ layer by looking at the graph, is it possible to use only the Blue
  channel as a paremeter to track the correspondant precipitation value of any pixel color? The answer is _yes_.
  Since there's a single blue value associated with one, and only one, precipitation value, by only tracking the
  blue channel it's possible to infer the values of all the other channels (since we know the theoretical values) and
  the precipitation value associated with the combination of all of them. In math, that's called an [injective
  function](https://en.wikipedia.org/wiki/Injective_function). It means that for every _x_ value of the function,
  there's only one _y_ value associated with it. Graphically, any horizontal line imaginable can only "go through"
  the function line once.

  Every channel of the _precipitation_ layer are described by _injective functions_, so it's possible to
  track what precipitation value is associated by the color of that pixel by analyzing at any single channel. The
  same can not be said when analyzing the _wind speed_ layer.

  By looking at the wind speed graph, you can see that the R, G and B channels have some values that are associated
  with three distinct wind speed values. For instance, if we imagine a horizontal line that represents the value
  _70_  for each channel, it will "go through" the Red, Green and Blue lines three times. The function that
  represents the Alpha channel of this layer is also not injective, since it has the same value (255) when the wind
  speed is equal or greater to 223.7 mph (100 m/s).

  Conveniently, as I'll show in the next step, I limited the wind speed so it's maximum value is 100 m/s, so I ended
  up using the Alpha channel to track the wind speed values after all. If I didn't, I would have to have used more
  than one channel as a parameter to do the same, leading to a more complex logic that could increase the possibility
  of problems with this solution - once again, more on that later.

  Now that we have an deep understanding of all possible inputs, it's time to determine what the end result should be.
`,
  // Third Step
  `
  ##### Determine the new colors and scales

  Starting with the _wind speed_ layer, as I already have stated in the introduction, it has some major problems with
  it's scales values. Winds that reach over 75 mph are considered to be **really fast** winds. So for this layer I
  decided that using half of the maximum original value was already more than enough, and therefore I chose to limit
  it to values up to 223.7 mph - every wind speed that goes over this value will be represented with the same color.

  I also thought that the early values of the scale could be better represented, so I also decided to have an
  additional stopping point at 22.37 mph (10 m/s). For the colors, I chose to use really simple colors that has either
  zero or 255 in the RGB channels, and by doing so, the color variation is greater between two consecutive stops,
  making it easier to visualize colors in intermediate values between stops.
`,
  // Image 9 -> new wind speed color scale
  `
  For the _precipitation_ layer I decided to maintain the original range, but added three new stops, so that the
  smaller values be better represented - they're the most common values and problably what the user will see the most
  when using this app. When the precipitation (in form of liquid rain, just to be clear) reaches
  values higher than 0.9 in/3h, it is considered to be a [**heavy rain**](https://glossary.ametsoc.org/wiki/Rain),
  and it's represented with a "redish" tone in the new scale.
`,
  // Image 10 -> new precipitation color scale
  // #### Fourth Step
  `
  ##### Calculate linear functions that will transform the original colors into the desired ones

  To finalize the transformation it's necessary to create mathematical rules (a series of functions) that will have
  the original pixel's color channels values as input, and outputs the correspondent values of the created scale for
  a specific layer. Again, I won't bother you with all the specific functions values, but instead I'll show you how
  to get to those values.

  Remembering the [Necessary Concepts](#necessary-concepts) section of this article, every two consecutive stops in
  the linear gradient will generate a linear function. The _y_ value of that function will represent a specific color
  channel value that depends on the _x_ value, and that, in this case, will represent whatever number in the scale of
  any weather layer. Since there's an original scale, and a modified scale, both scales will generate different
  linear functions every consecutive stops, but will have a different _y_ for the same _x_ correspondant value, like
  follows.

  $\\begin{cases} y_0 = a_0x + b_0 & \\rarr \\text{for the } \\bold{original} \\text{ scale}  \\\\ y_1 = a_1x + b_1 & \\rarr \\text{for the } \\bold{modified} \\text{ scale} \\end{cases}$

  The values $a_0$ and $b_0$ will be different depending on the adjacent stops where _x_ is located in between for the
  original scale - the same is true for $a_1$ and $b_1$ for the modified scale. Since _x_ is common for both functions,
  and the transformation is based on having $y_0$ (the original color channels) as an input, and $y_1$ as an output
  (new color to be shown to the user), working out the math will get to this final function:

  $y_1 = \\dfrac{a_1}{a_0} \\left( y_0 - b_0 \\right) + b_1$

  The function above will be applied for every of the four channels of the RGBA, so for both layers that I decided to
  change, every channel will have distinct transformation functions depending on the correct _x_ parameter infered on
  step two.

  That's it for the colors transformation logic of the _wind speed_ and _precipitation_ layers. But when I was
  implementing this solution, the tests made me realize that it was not perfect, since some of the colors of the
  pixels that I was getting from the API didn't make sense, i.e. it was not part of the original scale theoretical
  possible colors. The explanation for that is found in the next section.
`,
  // #### Problems
  `
  ##### Why some of the colors of the original image were "impossible"?

  The absolute short answer to why some pixels had "impossible" colors is: **scaling**.

  If you are familiar with the tile coordinate system (explained on [Necessary Concepts of the Map Coordinates
  article](./map-tiles#necessary-concepts)), you'll know that the image that is provided on the weather API has a
  constant pixel size, but the information contained of a specific weather layer will depend on an x, a y, and most
  importantly for this particular problem, a _zoom_ variable.

  The _zoom_ variable will determine the amount of "pieces" that the initial world map will be divided, with each
  "piece" having the same size of 256x256 pixels, always. An increase of 1 in the zoom will provoque each tile to be
  divided by 2 in each dimension, and therefore dividing a single tile in other 4 tiles contained inside the original
  tile. But what does that have to do with scaling?

  There's two ways to scale an image: upscale and downscale. That means increase or decrease it's size by a certain
  amount. The next illustration shows a 2x2 image being upscaled by a constant factor of 2 in each dimension (i.e. to
  a 4x4 image).
`,
  // Image 11
  `
  Only when an image upscales by the same integer factor in both dimensions it's possible to make the resulting
  image that will not lose or create inaccurate information.

  But downscaling is a little bit more complicated...
`,
  // Image 12
  `
  When downscaling, the chances of losing or having to transform information is really high. 
  
  Because of how the tiles system works, increasing the zoom by 1 allows to upscale the image by a constant factor of
  2 in each dimension (256x256 -> 512x512) - the image is not necessarily the same, since increasing the zoom intends
  to have more detailed information. Even if the image is the same, it's possible to create that new image in the 
  same way showed in the upscaling illustration, agregating groups of 4 pixels to be equivalent to 1 pixel of the
  original image.

  But decreasing the zoom will most likely demand a change of information of the original image, assuming that their
  original image follows the tile system - it can use any image with different proportions other than 1:1, making
  the loss/transformation of data necessary anyway. And that "adaptation" can be done in a few different ways. This
  [specific Mapbox API](https://openweathermap.org/map_legend) uses the [Lanczos](https://en.wikipedia.org/wiki/Lanczos_resampling)
  method - [this link](https://gis.stackexchange.com/questions/10931/what-is-lanczos-resampling-useful-for-in-a-spatial-context)
  provides a really good basic explanation on how this and other methods works, I really recommend you to check that
  out if are curious on how to "solve" this problem.

  The Lanczos method explains why I was getting those colors that weren't suppose to exist. As a result to that, every
  color that is located in an intermediate position in relation to other "real" pixel colors will have an unexpected
  value for probably all the four channels, creating colors that I also didn't predict on the [step 3](#step-three).
  The modifications that I made on the _clouds_ layer won't suffer from that problem, since I applyed the same rule
  for the entire scale, converting the _modified_ pixels using the absolute same formula as everything else.
  
  In the moment that I'm writing this article, I was able to capture a [typhoon](https://en.wikipedia.org/wiki/Typhoon)
  image that can serve as a good exemple on how the original _wind speed_ layer was and how it got transformed by
  using the method presented in this article.
`,
  // Image 13
  `
  As you can see, the task to better differentiate wind speed values using different colors was accomplished, but
  there's some lines around regions with defined speed values in the modified version that's not apparent in the
  original image because of the Lanczos method when scaling. There's no way to solve this problem, since
  it's impossible to determine for sure how this data is being transformed in the original server before it's sent
  to mine. Any filter that I decide to implement in the final image will also have loss of data. By the end of the day,
  this is still a good tradeoff and that's what you'll see when using this app.

  Thats it!
` 
];
