export const mapCoordinates1 = `## Map Coordinates Problem

### Necessary Concepts

The first big problem that I faced when trying to implement the weather map in this app
was to centralize the called coordinate. But to understand _why_ this was a problem, I should first 
present you two concepts:

The first one is the [**Mercator projection**](https://en.wikipedia.org/wiki/Mercator_projection).
This cylindrical projection of the earth is vastly used in our daily lives, but, like any flat representation of a 
spherical like object, it is not perfect.
It particularly creates a distortion on latitude, making areas that are further away from the equator line to appear larger
then they really are (vertically).
`;

export const mapCoordinates2 = `
  As you can see in the representation above, the lines are separeted representing 15º of the globe apart from one 
  another, but while the longitude (vertical lines) have a constant distance from each other, the latitude 
  (horizontal lines) distances increases significantly the further they are from the Equator Line (0° latitude).

  That distortion makes the north and south poles to appear in a point that distances _infinitly_ from the EL, so most
  maps cover up to 89° of latitude (north and south). In fact, most maps used in navigation apps uses the so called 
  [web Mercator projection](https://en.wikipedia.org/wiki/Web_Mercator_projection), that uses a slightly 
  [different concept of latitude](https://en.wikipedia.org/wiki/Geodetic_coordinates) and limits it to _85.051129°_, 
  so that the boundaries of the projection forms a perfect square image and sets a standard of 256px of width and
  height, as shown below. 
`;

export const mapCoordinates3 = `
  This image is important because it allows us to introduce de next concept, the **Tile Coordinate System**. Unlike 
  the "regular" coordinate system, instead of referencing only one point using 2 variables (_lat_, _lon_), the tile
  system references an area (aways a square with 256px side length) using 3 variables (_x_, _y_, _zoom_), and it all
  starts with this squared map from the Web Mercator Projection.

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
  
  For this app, I decided to use Mapbox's [Static Images](https://docs.mapbox.com/api/maps/static-images/) to 
  display the geographical map layer and combine on top of it the [Weather maps 1.0](https://openweathermap.org/api/weathermaps)
  for the weather layers. They're both free to use if you just create an account.
  
  The Mapbox's API makes it possible to call a location using a (_lat_, _lon_, _zoom_) system, wich has a 
  (_lat_, _lon_) point centralized in the same area displayed by a given (_zoom_) - great, problem solved! - but the
  weather layer API only offers an image called with the regular tile system, so for this feature to be complete I
  would have to figure out a way to combine both layers using a minimum number of API calls.

  ### Alternatives

  I could try to ignore this problem by using the tile coordinate system for both map layers and avoid more
  than one API call for each layer - [Mapbox also offers an API for that](https://docs.mapbox.com/api/maps/static-tiles/),
  but the result depending on the location would be something like this:
`;

// comparisson of a city that fits entirelly on the centralized image and another just with tiles

export const mapCoordinates5 = `
  As you can see, the user would call for a location (like San Francisco) and for a determined zoom the tile that
  contained the interest region wouldn't be centralize, with a considerable chance of a significant part of the
  relevant area being cropped out of the image.
  
  Another possible solution is to find another API that would return the weather layer centralized in an interest
  point just like the street map, but this is a practice app that required a free API, and for that OpenWeatherMap
  offers a great service.

  ### The Solution

  The basic idea for my solution was to complete the "missing" interest region with neighbor tiles and then crop the
  joined image in the same size as a regular tile, but with the coordinate (_lat_, _lon_) used to fetch the 
  geographic map as the center.

  Let's take the San Francisco image above - with _zoom = 10_ and (_x_, _y_) = (_163_, _395_). In order to complete that
  image, since our (_lat_, _lon_) point is located in the bottom-right corner of the image, it is required to take
  the directly right, directly down and the right-down diagonal tiles - (_164_, _395_), (_163_, _396_) and
  (_164_, _396_), respectively. So, to create a general rule that may be applicable to every location and different
  zoom levels, it is necessary to follow theese steps:
  
  1. Find the (_x_, _y_) coordinates from a given _lat_, _lon_ and _zoom_;
  2. Find out in what "quadrant" of the tile image (position in pixels) the (_lat_, _lon_) coordinate point is;
  3. Determine what are the necessary tiles to "complete" the weather layer;
  4. Join the images in the correct order in a 2x2 matrix;
  5. Crop the result with the exact offset with the coordinate in the center on the original tile; and
  6. Place the weather layer above the map layer to form the desired result.

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
  much easier, because by definition, it is only necessary to divide the new values by 2 and take the integer part as
  the real coordinates, like this:

  $(x_{real}, y_{real}) = \\left(\\left\\lfloor\\dfrac{x_{higher}}{2}\\right\\rfloor, \\left\\lfloor\\dfrac{y_{higher}}{2}\\right\\rfloor\\right) $

  Once we have the original coordinates, the coordinates of the smaller squares contained in it will always follow the
  same pattern, like shown below:
`;

// image 

export const mapCoordinates6 = `
  Now the only thing left is to compare the (_x_, _y_) coordinates found originally, with the higher zoom, with the
  coordinates of the smaller squares and we can proced to the next step.

  #### Third Step

  Based on the coordinates found in the previous step, now it's possible to determine the right tiles to call that
  is necessary to compose the final image.
`;

// image 
