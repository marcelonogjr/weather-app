export const mapCoordinatesText = [
  `
  The first big problem that I faced when trying to implement the weather map in this app
  was to centralize the called coordinate. But to understand _why_ this was a problem, I should first 
  present you two concepts:

  The first one is the [**Mercator Projection**](https://en.wikipedia.org/wiki/Mercator_projection). This cylindrical
  projection of the earth is vastly used in our daily lives, but, like any flat representation of a spherical like
  object, it is not perfect. It particularly creates a distortion on latitude, making areas that are further away from
  the equator line to appear larger than they really are.
`,
  `
As you can see in the representation above, the lines are separeted representing 15º of the globe apart from one 
another, but while the longitude (vertical lines) have a constant distance from each other, the latitude 
(horizontal lines) distances increases significantly the further they are from the _E.L._ (Equator Line - 0° latitude).

That distortion makes the north and south poles to appear in a point that distances _infinitly_ from the _E.L._, so most
maps cover up to 89° of latitude (north and south). In fact, most maps used in navigation apps uses the so called 
[Web Mercator Projection](https://en.wikipedia.org/wiki/Web_Mercator_projection), that uses a slightly 
[different concept of latitude](https://en.wikipedia.org/wiki/Geodetic_coordinates) and limits it to _85.051129°_, 
so that the boundaries of the projection forms a perfect square image and sets a standard of 256px of width and
height, as shown below. 
`,
  `
This image is important because it allows us to introduce de next concept, the **Tile Coordinate System**. Unlike 
the "regular" coordinate system, instead of referencing only one point using 2 variables (_lat_, _lon_), the tile
system references an area (aways a square with 256px of side length) using 3 variables (_x_, _y_, _zoom_), and it
all starts with this squared map from the [Web Mercator Projection](https://en.wikipedia.org/wiki/Web_Mercator_projection).

The _zoom_ variable basically determines the "amount of pieces" that this map will be evenly divided, and the _x_ 
and _y_ variables map the position of the tiles in the horizontal and vertical axis, respectvelly, as follows.
`,
  `
So now that we understand how the projection and the tile coordinate system works, I can finally explain the main
problem and how I solved it.
`,
  `
As you can problably imagine, there's a bit of a problem with the tiles coordinate system in a weather app context,
and that is to centralize a location of interest in a tile (it will be illustrated in the _Alternatives_ section). 

For this feature, I decided to use Mapbox's [Static Images](https://docs.mapbox.com/api/maps/static-images/) to 
display the geographical map layer and combine on top of it the [Weather maps 1.0](https://openweathermap.org/api/weathermaps),
from OpenWeatherMap, for the weather layers. They're both free to use if you just create an account.

The Mapbox's API makes it possible to call a location using a (_lat_, _lon_, _zoom_) system, wich has a 
(_lat_, _lon_) point centralized in the same area displayed by a given (_zoom_) - great, problem solved! - but the
weather layer API only offers an image called with the regular tile system, so for this feature to be complete I
would have to figure out a way to combine both layers using a minimum number of API calls.
`,
  `
I could try to ignore this problem by using the tile coordinate system for both map layers and avoid more
than one API call for each layer - [Mapbox also offers an API for that](https://docs.mapbox.com/api/maps/static-tiles/),
but the result depending on the location would be something like this:
`,
  `
As you can see, the user would call for a location (like San Francisco) and for a determined zoom the tile that
contained the interest region wouldn't be centralized, with a considerable chance of a significant part of the
relevant area being cropped out of the image.

Another possible solution is to find another API that would return the weather layer centralized in an interest
point just like the street map, but this is a practice app that required a free API, and for that OpenWeatherMap
offers a great service.
`,
  `
The basic idea for my solution was to complete the "missing" interest region with neighbor tiles and then crop the
joined image in the same size as a regular tile, but with the coordinate (_lat_, _lon_) used to fetch the 
geographic map as the center - from now on I'll name this interest point as the **_I_ _point_**. 

Let's take the San Francisco illustration above, with _zoom = 10_ and (_x_, _y_) = (_163_, _395_) - this exemple will
be used repeatedly along this article to make the comprehension of the solution easier. In order to complete that
image, since our **_I_ _point_** (in this case) is located in the bottom-right corner of the image, it is required
to take the directly right, directly down and the right-down diagonal tiles - (_164_, _395_), (_163_, _396_) and
(_164_, _396_), respectively.

So, in order to create a general rule that may be applicable to every location and different
zoom levels, it's necessary to follow theese steps:

1. Find the (_x_, _y_) tile coordinates from the **_I_ _point_** with a given _zoom_;
2. Find out in what "quadrant" of the tile image (position in pixels) the **_I_ _point_** is;
3. Determine what are the necessary tiles to "complete" the weather layer;
4. Join the tile images in the correct order;
5. Calculate the offset necessary to crop the joined image in the correct position;
6. Crop the result with the exact offset with the **_I_ _point_** in the center on the original tile; and
7. Place the weather layer above the map layer to form the final desired result.
`,
  `
##### _Find the (x, y) tile coordinates from the **I point** with a given zoom_

To solve the first step, I will introduce to you the math formula used to do just that - you can find more about it
[here](https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames):

$x = \\left\\lfloor \\dfrac{lon + 180}{360} \\cdot 2^{zoom} \\right\\rfloor$

$y = \\left\\lfloor \\left(1-\\dfrac{\\ln \\left(\\tan{ \\left( lat \\cdot \\dfrac{\\pi}{180}\\right )} + \\dfrac{1}{\\cos {\\left ( lat \\cdot \\dfrac{\\pi}{180} \\right )}}\\right) }{\\pi}\\right) \\cdot 2^{{zoom}-1} \\right\\rfloor$

As you can see, the formula to find _x_ is very straight forward, but to find _y_ with a given _lat_ can be more 
complex because it has to take into consideration the latitude distortion from the [Web Mercator Projection](https://en.wikipedia.org/wiki/Web_Mercator_projection)
that was explained in the _Necessary Concepts_ section.
`,
  `
##### _Find out in what "quadrant" of the tile image (position in pixels) the **I point** is_

To find out in what region the **_I_ _point_** is in a tile, which is basically divide the tile in four smaller
squares and check in wich one the point would be, I just decided to use the formula to find _x_ and _y_ using
a higher _zoom_ in the first place, instead of using the real _zoom_.

$ \\left(zoom_{higher} = zoom_{real} + 1\\right) $

If we have a (_x_, _y_) location using a higher zoom, finding the real (_x_, _y_) values of a smaller _zoom_ is 
much easier, because by definition, it is only necessary to divide the found values by 2 and take the integer part
as the real coordinates, like this:

$(x_{real}, y_{real}) = \\left(\\left\\lfloor\\dfrac{x_{higher}}{2}\\right\\rfloor, \\left\\lfloor\\dfrac{y_{higher}}{2}\\right\\rfloor\\right) $

Once we have the original coordinates, the coordinates of the smaller squares contained in it will always follow the
same pattern, as shown below:
`,
  `
Now the only thing left is to compare the (_x_, _y_) coordinates found originally, with the higher zoom
$\\left( x_{higher}, y_{higher} \\right)$, with the coordinates of the smaller squares and we can proced to the 
next step.
`,
  `
##### _Determine what are the necessary tiles to "complete" the weather layer_

Based on the tile coordinates found in the previous step, now it's possible to determine the right tiles to call
that are necessary to compose the final image - the point will be inside in one of the colored squares, like the
image illustrating the step 2.
`,
  `
It's important to note that a valid algorithm is to "skip" this and the last step, and fetch, from a given (_x_, _y_)
coordinate, all 9 images contained in the matrix above - the one from the center and the other 8 squares next to it.
But, like stated previously, the solution should also reduce the number of API calls to a minimum.

Therefore this solution will use 4 API calls in total for the weather layer: the one in the center and 3 others
depending on the second step result. Taking San Francisco with a _zoom = 10_ as an exemple again, we discovered 
that it's **_I_ _point_** is located in the "red" quadrant of the center tile in the illustration above, so, to have
all the information necessary to compose the full image, it's necessary to fetch the tile directly in the right,
the one below it and the tile that is adjecent to both of them.
`,
  `
##### _Join the tile images in the correct order_

This step is very straigh forward, the only thing necessary is to "join" the four images with no gaps in between and
in the correct order, forming an image 4 times bigger than the one desired.
`,
  `
##### _Calculate the offset necessary to crop the joined image in the correct position_

To calculate the offset, in pixels, required to crop the image correctly in the next step it's necessary to 
decompose this distance into three separete calculations: the distance between the original tile's origin point 
(the most up-left point of the image, I'll call it the **_K_ _point_** in this case) and the origin point of the 
newly formed image containing all 4 tiles (I'll call it the **_O_ _point_**), the distance between the **_I_**
and **_K_**, and then subtract the value of the size of half a tile in each dimension - but rest assured, I'll get
in details for easier comprehension. 

The distance, in pixels, of the **_K_ _point_** from **_O_** will have four possible values, since the tile can
occupy one of four possible positions, as seen in step three.
`,
  `
The illustation below shows the **_K_ _point_** _x_ and _y_ distance values, in pixels, for each possible region
that the **_I_ _point_** is found on step 2.
`,
  `
For the Web Mercator Projection, it's possible to calculate the position of a (_lat_, _lon_) point (**I** in this
case) in pixels using these [formulas](https://en.wikipedia.org/wiki/Web_Mercator_projection#Formulas), with _lat_
and _lon_ in radians:

$position_{x} = \\left\\lfloor \\dfrac{256}{2\\pi} 2^{zoom} \\left( lon + \\pi \\right) \\right\\rfloor$ pixels

$position_{y} = \\left\\lfloor \\dfrac{256}{2\\pi} 2^{zoom} \\left( \\pi - \\ln \\left[\\tan{ \\left( \\dfrac{\\pi}{4} + \\dfrac{lat}{2} \\right )}\\right] \\right) \\right\\rfloor$ pixels

But the formulas above outputs the hotizontal and vertical location of the point inside the whole world map image
formed with a specific zoom. To recall how the tile system works, a specific zoom 'n' will determine how many
"squares" (tiles) the whole world map will have after dividing it $2^{n}$ number of times in each dimension, but
with each tile having a constant size of 256x256 pixels. So, because of that, the formula above will result in a
big number, since the (0, 0) point is always located in the most up-left corner of the world projection.

The illustration below shows exactly that, using the city of **San Francisco, CA** again as an exemple with
_**zoom = 3**_.
`,
  `
Unfortunately, since the previous formulas to locate the interest point is referenced in the most top-left corner
of the "world image", it's necessary to change this reference to a known point inside of the image formed in the
previous step - and there's no better point than **_K_** for that. Because of how the tile coordinate system works,
by definition, when dividing the results of the previous formula by 256 (a tile length), the rest of this division
(non-integer part, the result of the "mod" operator) will correspond to the position, in pixels, of **_I_** in
relation to **_K_**. In the case of _San Francisco_ with a _zoom = 3_, the position of **_I_** inside it's original
tile will be:

$position_{x} \\bmod 256 = 327 \\bmod 256 = 71$ pixels

$position_{y} \\bmod 256 = 791 \\bmod 256 = 23$ pixels

Now, comming back to the image formed in the _Fourth Step_, the sum of the **_K_** position and the rest of the
division of the _position_ by 256 represents the location, in pixels, of the **_I_ _point_** in relation to **_O_** -
and that is going to be the center of the desired cropped image. So, the origin point to start cropping the final
image is a point that is dislocated the distance of half a tile with that zoom in the direction of _O_, that is,
subtracting _128 pixels_ horizontally and vertically, resulting in a general offset formula like shown below.

$offset_{x} = \\left( K_{x} + \\left(position_{x} \\bmod 256\\right) - 128 \\right)$ pixels

$offset_{y} = \\left( K_{y} + \\left(position_{y} \\bmod 256\\right) - 128 \\right)$ pixels

The next illustration sums up the three parts of the calculation to get to the desired offset, using an **_I point_**
located in the bottom-left region from step two.
`,
  `
##### _Crop the result with the exact offset with the **I point** in the center on the original tile_

Now the only thing that's left in this transformation is to crop a "tile like" image centered in **_I_**, with an
origin on the offset point found in the last step, with a width and height of 256 pixels - like represented in
the previous illustration.

The illustration below uses San Francisco again as an exemple, and the resulting image (highlighted area) should be
the same as the one shown in the _Alternatives_ section - remember that this is just to have a parameter using
something that can also use the tile system, but the goal here is to center the weather layer that's going above
the street layer, since the "street map" is already fetched with the image centralized on the **_I point_**. 
`,
  `
##### _Place the weather layer above the map layer to form the final desired result_

To finally finalize the algorithm, all that's left it's to place the _Weather Layer_ - the result of the last step -
above the _Street Layer_ - as it was fetched from the Mapbox API - and get the final desired image.
`,
  `
Below, one last exemple of San Francisco with an _zoom = 8_ and a _wind_ weather layer from a specific time. 
`,
  `
That's it! 
`,
];
