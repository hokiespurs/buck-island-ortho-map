# buck-island-ortho-map
This repository contains the source code for the [website](https://hokiespurs.github.io/buck-island-ortho-map/) which displays the Orthomosaic of Buck Island generated using a small unmanned aerial system(UAS), the DJI Mavic Pro, on March 23rd, 26th, and 27th of 2018.

![BuckIslandRainbow](https://github.com/hokiespurs/buck-island-ortho-map/blob/master/img/BuckRainbow1080.png)

## Project Summary

This imagery was acquired and processed by Oregon State University graduate students, Richie Slocum and Chase Simpson, in collaboration with the National Oceanographic and Atmospheric Administration(NOAA) and the National Park Service(NPS), as part of a research project to assess the accuracy of SfM derived bathymetry. With 13 separate flights across three days, the nearshore of the island was mapped to 5cm horizontal resolution. The flights were flown by FAA Part-107 licensed pilots in class G airspace, and waivers were granted by the NPS to fly on Buck Island.  Each of these flights were processed using Agisoft Photoscan, and the resultant orthophoto is visualized using the javascript library Leaflet.

## Data Acquisition
<img style="float: right;" src="https://github.com/hokiespurs/buck-island-ortho-map/blob/master/img/richieflying.jpg" width=500px>
The DJI Mavic was chosen as the platform for this data acquisition due to it portability and long flight times (>15min).  Each of the flights was performed at 400ft elevation, which increased the footprint of each image, minimizing the number of flights required.  The overlap and sidelap for each flight was 65%, as the focus of this data acquisition was to generate an orthophoto.  For SfM processing where elevations are desired, a higher overlap/sidelap is adventageous.  

## Data Processing Methodology

The UAS imagery was initially processed in Matlab to correct for white-balance and exposure issues.  Overlapping images from each flight were visually observed and scalar values for each of the RGB channels were manually tuned until the white balance of each flight appeared consistent between the flights.  While future research may test more automated and mathematically-robust methods for histogram matching in overlapping image regions, the histogram matching performed in this project was done manually, based on visual analysis of overlapping images.  See below for an example of a corrected image. Notice how the green tint of the water in the bottom left image is corrected to represent a more blue color in the lower right image.
![colorcorrected](https://github.com/hokiespurs/buck-island-ortho-map/blob/master/img/colorcorr.png)

The color corrected imagery was processed in Agisoft Photoscan v1.4.1 using the exif GPS positions as georeferencing information.  The sparse pointcloud(`photoscan accuracy: medium`) was used to generate a triangulated mesh, and a 5cm Orthophoto was reprojected onto the mesh.  A polygon was generated to clean up the edges of the orthophoto, and the data was exported as map tiles.

## Data Accuracy

The imagery was georeferenced using the image exif data, which comes from the code-based GNSS positioning from the DJI Mavic Pro referenced to WGS84(G1762).  While the horizontal accuracy has not been assessed, horizontal errors with magnitudes greater than 1m are likely  throughout the orthophoto.  Due to the numerous flights across 3 days and the lack of rigorous ground control or check points, these errors are likely nonlinear and can not be treated as a steady state offset.  An attempt was made to normalize the white balance and exposure across the various flights, but this method is likely not good enough to compute any worthwhile radiometric derived products. Methods to compute accurate elevations from the SfM results through water (refraction corrected) are still very experimental, and are not provided... yet.

## Project Team
- Tim Battista (NOAA PI)
- Bryan Costa (NOAA)
- Nate Holloway (NPS)
- Chris Parrish (OSU)
- Clayton Pollock (NPS)
- Matt Sharr (NOAA)
- Chase Simpson (OSU)
- Richie Slocum (OSU)
- Wayne Wright
