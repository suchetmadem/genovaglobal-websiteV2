export interface Article {
  slug: string
  title: string
  author: string
  date: string
  tags: string[]
  excerpt: string
  featured: boolean
  readingTime: string
  content: string[]
}

export const tags = [
  'AI',
  'Biology',
  'Engineering',
  'Math',
  'Environment',
  'Physics',
  'Chemistry',
  'Computer Science',
]

export const articles: Article[] = [
  {
    slug: 'neural-networks-climate-prediction',
    title: 'Using Neural Networks to Predict Urban Climate Patterns',
    author: 'Amara Chen',
    date: '2026-02-15',
    tags: ['AI', 'Environment'],
    excerpt:
      'This study explores the application of convolutional neural networks to forecast micro-climate variations in densely populated urban areas, offering new insights into heat island mitigation strategies.',
    featured: true,
    readingTime: '8 min read',
    content: [
      'Climate change poses significant challenges to urban environments worldwide. As cities continue to grow and develop, the urban heat island effect becomes increasingly pronounced, creating micro-climates that differ substantially from surrounding rural areas.',
      'In this research, we developed a convolutional neural network (CNN) model trained on satellite imagery and ground-level temperature data from 15 major metropolitan areas across four continents. The model processes multi-spectral imagery to identify patterns in urban development that correlate with temperature anomalies.',
      'Our methodology involved collecting over 50,000 data points spanning a three-year period from 2023 to 2025. Each data point included surface temperature readings, vegetation indices, building density metrics, and atmospheric composition measurements.',
      'The results demonstrate that our CNN model achieves 94.2% accuracy in predicting daily temperature variations at a neighborhood scale, outperforming traditional statistical models by a margin of 12 percentage points.',
      'Perhaps most significantly, the model identifies previously unrecognized correlations between building material composition and nighttime heat retention, suggesting that targeted material selection in new construction could reduce local temperatures by up to 2.3 degrees Celsius.',
      'These findings have important implications for urban planning policy. By integrating our predictive model into city planning workflows, municipalities can make data-driven decisions about green space allocation, building codes, and infrastructure development that actively mitigate climate impacts.',
    ],
  },
  {
    slug: 'crispr-algae-biofuel',
    title: 'CRISPR-Modified Algae for Next-Generation Biofuel Production',
    author: 'Jordan Okafor',
    date: '2026-02-08',
    tags: ['Biology', 'Environment'],
    excerpt:
      'A novel approach to engineering photosynthetic algae using CRISPR-Cas9 gene editing, resulting in a 340% increase in lipid production for sustainable biofuel applications.',
    featured: true,
    readingTime: '10 min read',
    content: [
      'The global demand for renewable energy sources continues to grow as nations work toward carbon neutrality goals. Algae-based biofuels represent one of the most promising alternatives to fossil fuels, but current production methods remain economically challenging.',
      'Our research team utilized CRISPR-Cas9 gene editing technology to modify the metabolic pathways of Chlorella vulgaris, a common freshwater microalga. Specifically, we targeted three genes involved in lipid biosynthesis and carbon fixation.',
      'Through systematic optimization of gene expression levels, we achieved a remarkable 340% increase in lipid production compared to wild-type strains, while maintaining robust growth rates under standard cultivation conditions.',
      'The modified algae strains were tested across multiple cultivation environments, including open pond systems and closed photobioreactors, demonstrating consistent performance improvements in all tested conditions.',
    ],
  },
  {
    slug: 'quantum-computing-molecular-simulation',
    title: 'Quantum Computing Applications in Molecular Drug Simulation',
    author: 'Priya Nakamura',
    date: '2026-01-28',
    tags: ['Computer Science', 'Chemistry'],
    excerpt:
      'Leveraging quantum computing algorithms to simulate complex molecular interactions for drug discovery, reducing computational time from weeks to hours.',
    featured: true,
    readingTime: '12 min read',
    content: [
      'Drug discovery is a notoriously time-consuming and expensive process, with the average new drug taking over a decade and billions of dollars to bring to market. A significant bottleneck lies in the computational simulation of molecular interactions.',
      'In this paper, we present a novel quantum computing approach that utilizes variational quantum eigensolver (VQE) algorithms to simulate molecular binding affinities with unprecedented accuracy and speed.',
      'Our experiments, conducted on a 127-qubit quantum processor, demonstrate that complex protein-ligand interactions can be simulated in hours rather than the weeks required by classical computing methods.',
      'The implications for pharmaceutical research are profound, potentially accelerating the drug discovery pipeline and enabling researchers to screen thousands of candidate molecules in the time previously required for just a handful.',
    ],
  },
  {
    slug: 'biodegradable-electronics',
    title: 'Designing Biodegradable Circuit Boards from Plant-Based Polymers',
    author: 'Marcus Rivera',
    date: '2026-01-20',
    tags: ['Engineering', 'Environment'],
    excerpt:
      'A breakthrough in sustainable electronics: fully functional circuit boards made from cellulose-based substrates that decompose within 90 days in standard composting conditions.',
    featured: true,
    readingTime: '7 min read',
    content: [
      'Electronic waste represents one of the fastest-growing waste streams globally, with over 50 million tonnes generated annually. Traditional circuit boards contain toxic materials that persist in the environment for centuries.',
      'Our research team has developed a novel approach to circuit board manufacturing using cellulose nanofiber substrates derived from agricultural waste products. These substrates maintain the electrical and thermal properties necessary for functional electronics.',
      'Testing has demonstrated that our biodegradable circuit boards maintain full functionality for an average of 18 months under normal operating conditions, after which they can be composted and fully decompose within 90 days.',
    ],
  },
  {
    slug: 'mathematical-modeling-coral-reef',
    title: 'Mathematical Modeling of Coral Reef Recovery Patterns',
    author: 'Sofia Tanaka',
    date: '2026-01-12',
    tags: ['Math', 'Biology', 'Environment'],
    excerpt:
      'Applying differential equation models to predict coral reef recovery trajectories following bleaching events, with implications for marine conservation strategy.',
    featured: true,
    readingTime: '9 min read',
    content: [
      'Coral reef ecosystems are among the most biodiverse and economically important marine environments on Earth. However, rising ocean temperatures have led to increasingly frequent and severe coral bleaching events.',
      'This research develops a system of partial differential equations that models the spatial and temporal dynamics of coral reef recovery following thermal stress events.',
      'By calibrating our model with data from reef systems across the Indo-Pacific region, we can predict recovery trajectories with 87% accuracy over five-year time horizons.',
    ],
  },
  {
    slug: 'renewable-energy-storage-graphene',
    title: 'Graphene-Enhanced Supercapacitors for Renewable Energy Storage',
    author: 'Kai Washington',
    date: '2026-01-05',
    tags: ['Physics', 'Engineering'],
    excerpt:
      'Novel graphene composite materials demonstrate energy storage capacities 5x greater than current lithium-ion technology, with faster charging cycles and longer lifespans.',
    featured: true,
    readingTime: '11 min read',
    content: [
      'The transition to renewable energy sources is fundamentally constrained by energy storage technology. Current battery systems suffer from limited capacity, slow charging times, and degradation over repeated use cycles.',
      'Our research focuses on a new class of graphene-based supercapacitors that combine the high energy density of batteries with the rapid charge-discharge characteristics of traditional capacitors.',
      'Through a novel fabrication process involving chemical vapor deposition on structured templates, we have created electrodes with an effective surface area 200 times greater than previous graphene supercapacitor designs.',
    ],
  },
  {
    slug: 'machine-learning-earthquake-prediction',
    title: 'Machine Learning Models for Early Earthquake Warning Systems',
    author: 'Elena Kowalski',
    date: '2025-12-18',
    tags: ['AI', 'Physics'],
    excerpt:
      'A deep learning system trained on seismic data from global monitoring stations achieves 78% accuracy in predicting significant seismic events up to 72 hours in advance.',
    featured: false,
    readingTime: '10 min read',
    content: [
      'Earthquake prediction remains one of the most challenging problems in geophysics. While short-term warnings of seconds to minutes are possible through P-wave detection, longer-term predictions have historically proven unreliable.',
      'Our approach utilizes a transformer-based deep learning architecture trained on 40 years of seismic data from over 2,000 monitoring stations worldwide.',
      'The model identifies subtle patterns in background seismicity, crustal deformation measurements, and electromagnetic anomalies that precede significant seismic events.',
    ],
  },
  {
    slug: 'synthetic-biology-plastic-decomposition',
    title: 'Engineered Bacteria for Accelerated Plastic Decomposition',
    author: 'David Okonkwo',
    date: '2025-12-10',
    tags: ['Biology', 'Chemistry', 'Environment'],
    excerpt:
      'Genetically engineered Ideonella sakaiensis bacteria demonstrate 50x faster PET plastic degradation rates, offering a scalable solution to global plastic pollution.',
    featured: false,
    readingTime: '8 min read',
    content: [
      'Plastic pollution represents one of the most pressing environmental challenges of our era. Over 380 million tonnes of plastic are produced annually, with less than 10% being effectively recycled.',
      'Building on the discovery of Ideonella sakaiensis, a bacterium naturally capable of degrading PET plastic, our team has used synthetic biology techniques to dramatically enhance its degradation capabilities.',
      'Through directed evolution and rational protein engineering, we have created a bacterial strain that breaks down PET plastic 50 times faster than the wild-type organism.',
    ],
  },
  {
    slug: 'topological-data-analysis-genomics',
    title: 'Topological Data Analysis in Cancer Genomics Research',
    author: 'Mei-Lin Zhao',
    date: '2025-12-01',
    tags: ['Math', 'Biology', 'Computer Science'],
    excerpt:
      'Applying persistent homology and topological methods to identify novel biomarkers in high-dimensional genomic datasets, revealing previously hidden patterns in cancer progression.',
    featured: false,
    readingTime: '13 min read',
    content: [
      'Cancer genomics generates enormously complex, high-dimensional datasets that challenge traditional statistical methods. Identifying meaningful patterns in this data is critical for developing targeted therapies.',
      'Our research applies topological data analysis (TDA), specifically persistent homology, to analyze gene expression profiles from over 10,000 tumor samples across 12 cancer types.',
      'The topological approach reveals structural features in the data that are invisible to conventional dimensionality reduction methods, identifying three previously unrecognized genomic signatures associated with treatment response.',
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured)
}

export function getRelatedArticles(
  currentSlug: string,
  currentTags: string[],
): Article[] {
  return articles
    .filter(
      (a) =>
        a.slug !== currentSlug && a.tags.some((t) => currentTags.includes(t)),
    )
    .slice(0, 3)
}
