# buck-island-ortho-map
This repository hosts the source code for the website which displays the Orthomosaic of Buck Island generated with UAS data collected using a DJI Mavic Pro from March 23-27, 2018.

![BuckIslandRainbow](./img/BuckRainbow1080.png =250x)

## Project Summary

This imagery was acquired and processed by Oregon State University, in collaboration with NOAA and NPS, as part of a research project to assess the accuracy of SfM derived bathymetry. 



## Data Acquisition

(image of flying the drone)

- description of takeoff sites
- overlap/sidelap
- poor sun glare some days

## Data Processing Methodology

- The imagery was initially processed in Matlab, to get the colors right. Add image showing some before/after.
- The processed in Agisoft Photoscan (VERSION) to generate an Orthophoto.  A polygon was generated to clean up the edges, and the data was exported as map tiles. Add image showing photoscan screenshot.

## Data Accuracy

- The data was georeferenced using the internal GPS of the drone. Horizontal accuracy has not been assessed.
- The radiometric stability and accuracy across the site is not good.
- 3D SfM results are not provided, but the team is working on methods to generate accurate depths from these imagery.

## Project Team

- Tim Battista (NOAA PI)
- Bryan Costa (NOAA)
- Matt Sharr (NOAA)
- Clayton Polluck (NPS)
- Nate Holloway (NPS)
- Chris Parrish (OSU)
- Chase Simpson (OSU)
- Richie Slocum (OSU)
- Wayne Wright

## Acknowledgements

