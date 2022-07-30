export const mapCoordinates1 = `## Map Coordinates Problem

### Necessary Concepts

The first big problem that I faced when trying to implement the weather map in this app
was to centralize the called coordinate. But to understand _why_ this was a problem, I should first 
present you two concepts:

The first one is the [**Mercator Projection**](https://en.wikipedia.org/wiki/Mercator_projection).
This cylindrical projection of the earth is vastly used in our daily lives, but, like any flat representation of a 
spherical like object, it is not perfect.
It particularly creates a distortion on latitude, making areas that are further away from the equator line to appear larger
then they really are (vertically).
`;

export const mapCoordinates2 = `
  As you can see in the representation above, the lines are separeted representing 15º of the globe apart from one 
  another, but while the longitude (vertical lines) have a constant distance from each other, the latitude 
  (horizontal lines) distances increases significantly the further they are from the _E.L._ (Equator Line - 0° latitude).

  That distortion makes the north and south poles to appear in a point that distances _infinitly_ from the _E.L._, so most
  maps cover up to 89° of latitude (north and south). In fact, most maps used in navigation apps uses the so called 
  [Web Mercator Projection](https://en.wikipedia.org/wiki/Web_Mercator_projection), that uses a slightly 
  [different concept of latitude](https://en.wikipedia.org/wiki/Geodetic_coordinates) and limits it to _85.051129°_, 
  so that the boundaries of the projection forms a perfect square image and sets a standard of 256px of width and
  height, as shown below. 
`;

export const mapCoordinates3 = `
  This image is important because it allows us to introduce de next concept, the **Tile Coordinate System**. Unlike 
  the "regular" coordinate system, instead of referencing only one point using 2 variables (_lat_, _lon_), the tile
  system references an area (aways a square with 256px side length) using 3 variables (_x_, _y_, _zoom_), and it all
  starts with this squared map from the [Web Mercator Projection](https://en.wikipedia.org/wiki/Web_Mercator_projection).

  The _zoom_ variable basically determines the "amount of pieces" that this map will be evenly divided, and the _x_ 
  and _y_ variables map the position of the tiles in the horizontal and vertical axis, respectvelly, as follows.
`;

// image containing 4 zoom levels (0, 1, 2 and n) in a 2x2 grid, and the total amount of tiles below them all

export const mapCoordinates4 = `
  So now that we understand how the projection and the tile coordinate system works, I can finally explain the main
  problem and how I solved it.
  
  ### The Problem

  As you can problably imagine, there's a bit of a problem with the tiles coordinate system in a weather app context,
  and that is to centralize a location of interest in a tile (it will be illustrated in the _Alternatives_ section). 
  
  For this feature, I decided to use Mapbox's [Static Images](https://docs.mapbox.com/api/maps/static-images/) to 
  display the geographical map layer and combine on top of it the [Weather maps 1.0](https://openweathermap.org/api/weathermaps),
  from OpenWeatherMap, for the weather layers. They're both free to use if you just create an account.
  
  The Mapbox's API makes it possible to call a location using a (_lat_, _lon_, _zoom_) system, wich has a 
  (_lat_, _lon_) point centralized in the same area displayed by a given (_zoom_) - great, problem solved! - but the
  weather layer API only offers an image called with the regular tile system, so for this feature to be complete I
  would have to figure out a way to combine both layers using a minimum number of API calls.

  ### Alternatives

  I could try to ignore this problem by using the tile coordinate system for both map layers and avoid more
  than one API call for each layer - [Mapbox also offers an API for that](https://docs.mapbox.com/api/maps/static-tiles/),
  but the result depending on the location would be something like this:
`;

// COLOCAR LINK DO OPENWEATHERMAP E DO MAPBOX --> já terá na intro, desnecessário aqui.

// comparisson of a city that fits entirelly on the centralized image and another just with tiles

export const mapCoordinates5 = `
  As you can see, the user would call for a location (like San Francisco) and for a determined zoom the tile that
  contained the interest region wouldn't be centralized, with a considerable chance of a significant part of the
  relevant area being cropped out of the image.
  
  Another possible solution is to find another API that would return the weather layer centralized in an interest
  point just like the street map, but this is a practice app that required a free API, and for that OpenWeatherMap
  offers a great service.

  ### The Solution

  The basic idea for my solution was to complete the "missing" interest region with neighbor tiles and then crop the
  joined image in the same size as a regular tile, but with the coordinate (_lat_, _lon_) used to fetch the 
  geographic map as the center. 

  Let's take the San Francisco image above, with _zoom = 10_ and (_x_, _y_) = (_163_, _395_) - this exemple will be 
  used repeatedly along this article to make the comprehension of the solution easier. In order to complete that
  image, since our (_lat_, _lon_) point is located in the bottom-right corner of the image, it is required to take
  the directly right, directly down and the right-down diagonal tiles - (_164_, _395_), (_163_, _396_) and
  (_164_, _396_), respectively. So, to create a general rule that may be applicable to every location and different
  zoom levels, it is necessary to follow theese steps:
  
  1. Find the (_x_, _y_) coordinates from a given _lat_, _lon_ and _zoom_;
  2. Find out in what "quadrant" of the tile image (position in pixels) the (_lat_, _lon_) coordinate point is;
  3. Determine what are the necessary tiles to "complete" the weather layer;
  4. Join the images in the correct order;
  5. Calculate the offset necessary to crop the joined image in the correct position;
  6. Crop the result with the exact offset with the coordinate in the center on the original tile; and
  7. Place the weather layer above the map layer to form the desired result.

  #### First step

  To solve the first step, I will introduce to you the math formula used to do just that - you can find more about it
  [here](https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames):
  
  $x = \\left\\lfloor \\dfrac{lon + 180}{360} \\cdot 2^z \\right\\rfloor$

  $y = \\left\\lfloor \\left(1-\\dfrac{\\ln \\left(\\tan{ \\left( lat \\cdot \\dfrac{\\pi}{180}\\right )} + \\dfrac{1}{\\cos {\\left ( lat \\cdot \\dfrac{\\pi}{180} \\right )}}\\right) }{\\pi}\\right) \\cdot 2^{z-1} \\right\\rfloor$

  As you can see, the formula to find _x_ is very straight forward, but to find _y_ with a given _lat_ can be more 
  complex because it has to take into consideration the latitude distortion from the Web Mercator Projection that was 
  explained early in the text.

  #### Second step

  To find out in what region the coordinate point is in a tile, which is basically divide the tile in four smaller
  squares and check in wich one the point would be, I just decided to use the formula to find _x_ and _y_ using
  a higher _zoom_ in the first place, instead of using the real
  _zoom_.

  $ \\left(zoom_{higher} = zoom_{real} + 1\\right) $
  
  If we have a (_x_, _y_) location using a higher zoom, finding the real (_x_, _y_) values of a smaller _zoom_ is 
  much easier, because by definition, it is only necessary to divide the found values by 2 and take the integer part
  as the real coordinates, like this:

  $(x_{real}, y_{real}) = \\left(\\left\\lfloor\\dfrac{x_{higher}}{2}\\right\\rfloor, \\left\\lfloor\\dfrac{y_{higher}}{2}\\right\\rfloor\\right) $

  Once we have the original coordinates, the coordinates of the smaller squares contained in it will always follow the
  same pattern, as shown below:
`;

// image

export const mapCoordinates6 = `
  Now the only thing left is to compare the (_x_, _y_) coordinates found originally, with the higher zoom
  $\\left( x_{higher}, y_{higher} \\right)$, with the coordinates of the smaller squares and we can proced to the 
  next step.

  #### Third Step

  Based on the coordinates found in the previous step, now it's possible to determine the right tiles to call that
  are necessary to compose the final image - the point will be inside in one of the colored squares, like the image
  illustrating the step 2.
`;

// image

export const mapCoordinates7 = `
  It's important to note that a valid algorithm is to "skip" this and the last step, and fetch, from a given (_x_, _y_)
  coordinate, all 9 images contained in the matrix above - the one from the center and the other 8 squares next to it.
  But, like stated previously, the solution should also reduce the number of API calls to a minimum.

  Therefore this solution will use 4 API calls in total, the one in the center and 3 others depending on the second
  step result. Taking San Francisco with a _zoom = 10_ as an exemple again, we discovered that it's (_lat_, _lon_)
  point is located in the "red" quadrant of the center tile in the illustration above, so, to have all the 
  information necessary to compose the full image, it's necessary to fetch the tile directly in the right, the one 
  below it and the tile that is adjecent to both of them.
`;

// image 7

export const mapCoordinates8 = `
  #### Fourth Step

  This step is very straigh forward, the only thing necessary is to "join" the four images with no gaps in between and
  in the correct order, forming an image 4 times bigger than the one desired.
`;

// image 8

export const mapCoordinates9 = `
  #### Fifth Step

  To calculate the offset, in pixels, required to crop the image correctly in the next step it's necessary to 
  decompose this distance into three separete calculations: the distance between the original tile's origin point 
  (the most up-left point of the image, I'll call it the _K_ point in this case) and the origin point of the newly
  formed image containing all 4 tiles (I'll call it the _O_ point), the distance between the (_lat_, _lon_) 
  coordinate point and _K_, and then subtract the value of the size of half a tile in each dimension.

  The distance of _K_ from _O_ will have four possible values, since the tile can occupy one of four possible
  positions, as seen in step three.
`;

// image 9

export const mapCoordinates10 = `
  The illustation below shows the _K_ value for each possible region that the (_lat_, _lon_) point is found in step 2.
`;

// image 10

export const mapCoordinates11 = `
  The position of the interest point inside the original tile (in relation to _K_) is determined by this 
  [formula](https://en.wikipedia.org/wiki/Web_Mercator_projection#Formulas), with _lat_ and _lon_ in radians:

  $distance_{x} = \\left\\lfloor \\dfrac{256}{2\\pi} 2^{zoom} \\left( lon + \\pi \\right) \\right\\rfloor$ pixels

  $distance_{y} = \\left\\lfloor \\dfrac{256}{2\\pi} 2^{zoom} \\left( \\pi - \\ln \\left[\\tan{ \\left( \\dfrac{\\pi}{4} + \\dfrac{lat}{2} \\right )}\\right] \\right) \\right\\rfloor$ pixels

  ${''
    /* 
      ***** Change the text above to include the correct explanation of the distances 'x' and 'y' *****

      You need to explain: 
        - That the formula above is the distance from (0, 0) in the whole world map, no matter the zoom;
        - Describe the illustration below. Explain that this is just an exemple taking a specific zoom, and random point inside a random tile.

        ** INSERT ILLUSTRATION HERE ** -> {
          - Use a (zoom = 4 -> suggestion) map of the entire world
          - Illustrate somehow that each tile has 256x256 pixels
          - Insert the total size of the world for this zoom 
          - Select an arbitrary tile and an arbitrary point inside it 
          - ONE arrow (dashed) pointing to the chosen point 
          - Apply the formula and display this result somewhere
        }
        
        - So, in adition to use this formula with the real (lat, lon) values, you need also to:
          - Calculate the (lat, lon) coordinates of the 'K' variable
          - Then apply the formula above using the absolute coordinates from 'K'
        - After doing that, its necessary to subtract one value from the other to find a coordinate relative to 'K'
      
      You'll be ready to procced after that.  
    */
  }

  The sum of the _K_ value and the distance of the interest point from _K_ represents the location, in pixels, of the 
  center point of the desired cropped image from _O_. So, to stablish an origin point for the desired image to be
  cropped, it's necessary to dislocate the distance of half a tile in the direction of _O_, that is, subtracting _128
  pixels_ horizontally and vertically, resulting in a general offset formula as follows.

  $offset_{x} = \\left( distance_{x} + K_{x} - 128 \\right)$ pixels

  $offset_{y} = \\left( distance_{y} + K_{y} - 128 \\right)$ pixels

  The next illustration sums up the three parts of the calculation to get to the desired offset, using a case that the
  (_lat_,_lon_) point is located in the bottom-left region from step two.
`;

// image 11

export const mapCoordinates12 = `
  #### Sixth Step

  Now the only thing that's left to do in this transformation to have a centered tile in a (_lat_, _lon_) point is to
  crop the image, starting from the offset point found in the last step, with a width and height of 256 pixels - like
  represented in the previous illustration. The one below uses San Francisco again as an exemple, just to have a
  parameter using something that can also use the tile system - but remembering that the "street map" is already
  fetched with the image centralized on the correct point, making this algorithm useful to also have a weather
  layer centered in the same point, matching the layer below it. 
`;

// 37.779026 -122.419906

// image 8 with a few tweaks
