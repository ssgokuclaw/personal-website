export const projects = [
  {
    title: 'Groundwater Level Data Compiler and Data Pipeline',
    description:
      'Automated Python pipeline for compiling and standardizing groundwater level and oil contamination data from multiple databases. Includes data cleaning, unit normalization, and structured export workflows ready for analysis and public release. The data are published as data releases. Data Sets from the National Crude Oil Spill Fate and Natural Attenuation Research Site near Bemidji, Minnesota (https://doi.org/10.5066/P9FJ8I0P) along with Sampling site information, well construction details, and data dictionaries (https://doi.org/10.5066/F7736PDR)',
    tags: ['Python', 'Pandas', 'Automation', 'Groundwater', 'Oil'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: 'Geospatial Data Summarization and Figure Automation',
    description:
      'ArcPy-based workflow for automatically generating publication-quality geospatial figures from hydrological model outputs. Reduces manual GIS drafting from days to minutes by templating map layouts and symbology. This data processing pipeline transformed raw geogenic water contamination data into standard national percentiles based on study basin. The figures created from this pipeline were used in "Prioritizing water availability study settings to address geogenic contaminants and related societal factors" by Melinda Erickson et al in the Environmental Monitoring and Accessment journal. (https://doi.org/10.1007/s10661-024-12362-2). Includes figures 3, 4, 5, and 6.',
    tags: ['Python', 'ArcGIS Pro', 'ArcPy', 'GIS', 'Watershed'],
    github: null,
    demo: null,
    featured: true,
  },

  {
    title: 'StreamStats Validation and Testing',
    description:
      'Developed validation tests for the [StreamStats](https://www.usgs.gov/streamstats) application, including percent error checks, automated logging reports, and custom calculation test methods to ensure accurate streamflow statistics.',
    tags: ['Python', 'Geospatial', 'Hydrology', 'Watershed'],
    github: null,
    demo: null,
    featured: true,
  },

  {
    title: 'SWB Model Calibration Toolkit',
    description:
      'Python toolkit for calibrating Soil Water Balance (SWB) models against observed groundwater recharge data. Implements iterative parameter estimation and uncertainty analysis for regional recharge assessments.',
    tags: ['Python', 'NumPy', 'Hydrology', 'Modeling'],
    github: null,
    demo: null,
    featured: false,
  },
 
  {
    title: 'Watershed Data Pipeline',
    description:
      'End-to-end data organization and preprocessing pipeline for watershed modeling teams. Automates ingestion of multi-source hydrological records into structured formats compatible with standard modeling frameworks.',
    tags: ['Python', 'Pandas', 'Data Engineering', 'Watershed'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    title: 'Geologic Map Digitization Tool',
    description:
      'Utility for digitizing and standardizing legacy geologic map data into modern GIS-ready formats. Enables integration of historical field surveys into current USGS data workflows and spatial databases.',
    tags: ['Python', 'GIS', 'Geology', 'Data Processing'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    title: 'Recharge Estimation Dashboard',
    description:
      'Interactive visualization tool for exploring groundwater recharge estimates across the Upper Midwest. Displays modeled vs. observed recharge data with spatial and temporal filtering capabilities.',
    tags: ['Python', 'Matplotlib', 'Visualization', 'Groundwater'],
    github: null,
    demo: null,
    featured: false,
  },
];
