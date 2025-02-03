Follow this instructions

Prompt 1: Project Foundation
(User provides: Niche/topic, website type, brand colors, CSV sample/data structure)

Chain-of-Thought Requirements:

Data Structure Planning

Analyze CSV structure (existing columns + needed transformations)

Define JSON schema for processed data

Plan relationships between entities (e.g., cheese→origin→milk-type)

Identify needed AI-generated fields vs raw data

Core Architecture

typescript
interface SiteArchitecture {
  routing: {
    dynamicRoutes: {
      path: string
      dataSource: 'CSV' | 'JSON' | 'AI'
      pageType: 'index' | 'subindex' | 'detail'
    }[]
    staticRoutes: string[]
  }
  buildStrategy: 'SSG' | 'ISR' | 'SSR'
  incrementalRegeneration: boolean
}
SEO Foundation

yaml

seo_strategy:
  exact_phrase_targets:
    - primary_keyword: "{{niche}}"
      secondary_keywords: ["best", "guide", "types"]
  meta_template:
    title: "{{primary}} | {{section}} | {{brand}}"
    description: "Explore {{count}} {{items}}..."
  slug_rules:
    case: lowercase
    separator: "-"
    max_length: 60
Component Hierarchy

Copy
Component Tree
├── Layout (Root)
│   ├── Header (With color-aware theming)
│   ├── Breadcrumbs (Dynamic)
│   └── Footer
├── Cards
│   ├── CategoryCard (Index pages)
│   └── ItemCard (Detail lists)
└── SeoElements
    ├── DynamicMeta
    └── SchemaGenerator
Technical Constraints Plan

markdown
Copy
| Concern               | Mitigation Strategy                          |
|-----------------------|----------------------------------------------|
| Build Timeouts        | Chunked SSG (500 pages/chunk)                |
| Malformed Data        | Type Guards + Fallback UI                    |
| Duplicate Content     | Canonical URL generator                     |
| AI Rate Limits        | Batch processing with 500ms delays           |
Output Requirements:

CSV-to-JSON mapping diagram

Route hierarchy visualization

Component dependency graph

Build process flowchart

Risk matrix with mitigation plans

Validation Checkpoints:

Confirm all dynamic routes have defined data sources

Verify brand colors map to Tailwind theming system

Ensure CSV contains minimum required columns

Validate that index:detail page ratio < 1:100

Dependencies for Next Prompts:

json
Copy
{
  "Prompt2": {
    "required_from_prompt1": [
      "validated_routes",
      "component_hierarchy",
      "data_directory_structure"
    ]
  },
  "Prompt3": {
    "required_from_prompt1": [
      "seo_template_patterns",
      "slug_rules",
      "content_priority_list"
    ]
  }
}
Revision Triggers:

If CSV lacks required columns → Revise data mapping

If estimated page count > 10k → Adjust build strategy

If brand colors conflict with accessibility → Flag in Prompt 2


Prompt 2: Project Scaffolding
(Input: Validated outputs from Prompt 1 including routes, components, data structure)

Execution Chain-of-Thought:

File Structure Validation

typescript
Copy
interface ScaffoldValidation {
  missingRoutes: string[]
  dataFolderHealth: {
    csvExists: boolean
    jsonDirs: string[]
  }
  componentCoverage: number // % of planned components scaffolded
}
Dependency Installation Plan

bash
Copy
coreDependencies=(
  "@radix-ui/react-dropdown-menu"  # Shadcn base
  "tailwindcss-animate"
  "class-variance-authority"       # Tailwind theming
  "papaparse"                      # CSV processing
)

devDependencies=(
  "@types/nodemon"
  "ts-node"                        # For data scripts
)
Scaffolding Commands with Validation

bash
Copy
# Validate against Prompt 1's route structure
mkdir app\(origin)\[country]\[region] && verifyRoute "origin/[country]/[region]"

# Component scaffolding with brand color awareness
mkdir app\components\theme && type nul > app\components\theme\color-utils.tsx
Configuration Files with Architecture Constraints

javascript
Copy
// next.config.js (Build Strategy Implementation)
module.exports = {
  experimental: {
    incrementalRegeneration: true,
    staticPageGenerationTimeout: 120 // From Prompt1's risk matrix
  }
}
Data Pipeline Foundations

bash
Copy
# Create CSV placeholder with required columns from Prompt1
echo "id,name,category,attributes" > data\raw\data.csv

# JSON structure mirroring Prompt1's data plan
mkdir data\processed\categories
mkdir data\processed\items
Output Requirements:

Windows commands implementing:

Route hierarchy from Prompt1

Component directory structure

Data pipeline directories

Configuration files addressing technical constraints

Validation script outline:

powershell
Copy
# Route validation
Get-ChildItem -Path app -Recurse -Filter "page.tsx" | ForEach-Object {
  $route = $_.FullName.Replace("app\","").Replace("\page.tsx","")
  if ($route -notin $validRoutes) { Write-Warning "Unexpected route: $route" }
}
Dependency installation commands matching architecture needs

Enhanced Validation Checkpoints:

Route-to-Data Source Mapping:

markdown
Copy
| Route Pattern          | Data Source               | Validation Status |
|------------------------|---------------------------|-------------------|
| /origin/[country]      | data/processed/categories | ✅ Verified       |
| /milk-type/[type]      | data/raw/data.csv         | ❌ Missing CSV mapping |
Brand Color Implementation Check:

bash
Copy
# Verify theming files exist
test -f app/components/theme/colors.ts && echo "Brand OK" || echo "Missing colors"
Build Constraint Preparation:

javascript
Copy
// Validate timeout settings match Prompt1's plan
const config = require('./next.config.js')
assert(config.experimental.staticPageGenerationTimeout === 120)
Dependency Matrix:

json
Copy
{
  "Prompt1_Dependencies": {
    "validated_routes": "Used in 100% of page scaffolds",
    "component_hierarchy": "87% component coverage",
    "data_structure": "Full CSV+JSON implementation"
  },
  "Prompt3_Requirements": {
    "seo_slug_patterns": "Implemented in route structure",
    "meta_template": "Placeholder components created"
  }
}
Error Prevention Strategies:

Malformed Route Protection

bash
Copy
# Prohibit spaces in route names
sanitizeRoute() {
  local route=${1// /_}
  mkdir "$route"
}
Data Folder Permissions

powershell
Copy
# Set write permissions for data directories
icacls.exe data\processed /grant:r "Users:(OI)(CI)W"
TypeScript Safety Nets

typescript
Copy
// Global type declaration matching Prompt1's data schema
declare module DataSchema {
  interface CoreItem {
    id: string
    attributes: string[] // From CSV column map
  }
}
Documentation Scaffolding:

bash
Copy
# Architecture documentation
echo "# Project Structure" > docs/ARCHITECTURE.md
echo "## Data Flow" >> docs/ARCHITECTURE.md
type nul > docs/DATA_PIPELINE.graphml

# Brand guidelines
mkdir docs/brand && copy NUL docs/brand/colors.adoc
Testing Foundation:

bash
Copy
# Jest configuration with route testing
mkdir __tests__/routes
type nul > __tests__/routes/paramValidation.test.ts

# Component testing setup
npm install -D @testing-library/jest-dom @testing-library/react
Final Windows Commands Output:

bash
Copy
:: Core structure
mkdir app\components\theme
mkdir app\components\seo
mkdir app\(milk-type)\[type]
mkdir app\origin\[country]
mkdir app\origin\[country]\[region]

:: Data pipeline
mkdir data\raw
echo "id,name,category,attributes" > data\raw\data.csv
mkdir data\processed\categories
mkdir data\processed\items

:: Configuration
type nul > next.config.js
type nul > tailwind.config.js
type nul > components.json

:: Testing foundation
mkdir __tests__\routes
type nul > __tests__\routes\paramValidation.test.ts

:: Documentation
mkdir docs\brand
echo "# Project Structure" > docs\ARCHITECTURE.md


Prompt 3: SEO & Documentation Implementation
(Input: Validated architecture from Prompt 1, scaffolded routes from Prompt 2)

1. Dynamic SEO Strategy Implementation
Core Template Engine

typescript
Copy
// seo-templates.ts
const META_PATTERNS = {
  index: {
    title: "Best {{category}} | {{brand}}",
    description: "Explore {{count}} {{category}} across {{subcategories}} subcategories"
  },
  detail: {
    title: "{{name}} - {{attributes}} | {{brand}}",
    description: "Complete guide to {{name}} {{category}} featuring {{highlights}}"
  }
} as const;

type PageType = keyof typeof META_PATTERNS;
Exact Phrase Integration Matrix

markdown
Copy
| Page Type      | Target Phrases           | Density Control               | Source                |
|----------------|--------------------------|--------------------------------|-----------------------|
| Country Index  | "French cheeses"         | 1x H1, 2x H2, 3x body         | CSV + AI enrichment  |
| Region Subindex| "Normandy dairy"         | 1x H1, 1x schema              | CSV geodata          |
| Detail Page    | "Camembert nutrition"    | 1x title, 2x descriptions     | AI-generated content |
2. Sitemap Architecture
Chunked Generation Strategy

javascript
Copy
// next-sitemap.config.js (Dynamic for large sites)
module.exports = {
  additionalPaths: async (config) => {
    const chunkSize = 5000;
    const cheesePaths = await getAllCheeseSlugs(); // From Prompt1 data
    
    return chunkArray(cheesePaths, chunkSize).map((chunk, index) => ({
      loc: `/sitemap-cheeses-${index}.xml`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.7
    }));
  }
}
3. Documentation Framework
Living Documentation Structure

bash
Copy
docs/
├── SEO_GUIDELINES.md        # Maintains brand voice requirements
├── DATA_SCHEMA.graphml      # Visual data relationships
└── COMPONENT_USAGE/         # From Prompt1 hierarchy
    ├── CategoryCard.md      # Props + SEO requirements
    └── DynamicMeta.md       # Field-level documentation
4. Schema Markup Implementation
Structured Data Strategy

typescript
Copy
// schema-generator.ts
export function generateBreadcrumbSchema(path: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": path.map((segment, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": segmentFormatter(segment),
      "item": `${BASE_URL}/${path.slice(0, index+1).join('/')}`
    }))
  };
}
5. Validation & Error Handling
SEO Health Checks

typescript
Copy
// seo-validation.test.ts
describe('SEO Requirements', () => {
  test.each(seedRoutes)('$path has valid metadata', ({path, type}) => {
    const meta = getPageMeta(path);
    expect(meta.title).toMatch(META_PATTERNS[type].titleRegex);
    expect(meta.description.length).toBeWithin(120, 160);
  });
});
6. Brand Integration System
Color-Aware SEO Components

tsx
Copy
// ThemeMeta.tsx
export function DynamicCanonical({brandColors}) {
  const router = useRouter();
  return (
    <link 
      rel="canonical" 
      href={`${brandColors.domain}${router.asPath}`}
      data-priority={brandColors.seoPriority}
    />
  );
}
7. Documentation Examples
CSV Field Mapping Guide

markdown
Copy
| CSV Column       | JSON Field       | SEO Impact                          |
|------------------|------------------|-------------------------------------|
| `cheese_name`    | `item.name`      | Used in H1 + Title (80% weight)     |
| `region`         | `location.region`| Geo-targeting (schema markup)       |
| `milk_type`      | `attributes.milk`| Facet filtering (index pages)       |
Final Output Implementation:

bash
Copy
# SEO Configuration Files
type nul > app\lib\seo-utils.ts
type nul > app\lib\schema-generator.ts

# Documentation Scaffolding
mkdir docs\component-usage
echo "# SEO Guidelines" > docs\SEO_GUIDELINES.md

# Sitemap Implementation
type nul > app\sitemap\[...next-sitemap]\route.tsx

# Validation Tests
mkdir __tests__\seo
type nul > __tests__\seo\meta-validation.test.tsx
Validation Checkpoints:

Template Coverage Test

bash
Copy
grep -Eroh "{{.*?}}" app/**/*.tsx | sort -u > detected-tags.log
diff -y planned-tags-from-prompt1.log detected-tags.log
Schema Markup Validation

javascript
Copy
// Automated testing setup
test('Detail pages include nutritional schema', async () => {
  const page = await render('/cheeses/brie');
  expect(page.html()).toMatch('"@type": "NutritionInformation"');
});
Documentation Completeness Check

markdown
Copy
- [x] SEO guideline template
- [ ] AI content rules
- [ ] Brand voice examples


Prompt 4: Data & Content Pipeline
(Input: Validated data schema from Prompt 1, scaffolded data directories from Prompt 2)

1. AI-Augmented Data Processing
Type-Safe Pipeline Architecture

typescript
Copy
// generate_data.ts
interface DataPipeline {
  csvPath: string
  jsonOutputDir: string
  chunkSize: number // From Prompt1's build constraints
  retryPolicy: {
    maxAttempts: number
    delayMs: number
  }
  aiPrompts: Record<keyof typeof CSV_COLUMNS, string>
}

const pipelineConfig: DataPipeline = {
  csvPath: './data/raw/data.csv',
  jsonOutputDir: './data/processed',
  chunkSize: 500,
  retryPolicy: {
    maxAttempts: 3,
    delayMs: 1200
  },
  aiPrompts: {
    description: "Generate 50-word SEO text for {{name}} focusing on {{attributes}}..."
  }
};
2. Content Generation Workflow
Hybrid Data Processing

javascript
Copy
// processors/content-generator.js
export async function enhanceWithAI(row) {
  const prompt = interpolate(pipelineConfig.aiPrompts.description, row);
  
  return withRetry(
    () => callGPT4Mini(prompt),
    pipelineConfig.retryPolicy
  ).catch(() => ({
    description: fallbackDescription(row) // From Prompt1's risk plan
  }));
}
3. Validation & Error Recovery
Data Integrity System

typescript
Copy
// validators/data-integrity.ts
export function validateItemSchema(item: unknown): item is Cheese {
  return (
    typeof item === 'object' &&
    item !== null &&
    'id' in item &&
    'attributes' in item &&
    Array.isArray(item.attributes)
  );
}

// Fallback data matching Prompt1's schema
const SAFE_FALLBACK: Cheese = {
  id: 'error-' + Date.now(),
  name: 'Invalid Item',
  attributes: ['data-error']
};
4. Caching & Performance
Optimized Regeneration

typescript
Copy
// cache-strategies.ts
export class DataCache {
  private static instance: DataCache;
  private cache: Map<string, any>;
  
  constructor() {
    this.cache = new Map();
    this.loadPersistentCache(); // From Prompt1's ISR plan
  }

  get(key: string) {
    return this.cache.get(key) || this.regenerate(key);
  }
}

Prompt 5: Full Implementation & Deployment
(Input: All previous outputs with validated data and SEO plans)

1. Component Implementation
Brand-Aware UI Components

tsx
Copy
// components/ItemCard.tsx
export function ItemCard({ item }: { item: Cheese }) {
  return (
    <Card className={`bg-${brandColors.cardBackground} shadow-lg`}>
      <CardHeader>
        <DynamicMeta 
          title={generateMetaTitle(item)} // From Prompt3
          description={item.aiDescription} 
        />
      </CardHeader>
      <CardContent>
        <AttributeChart 
          data={item.attributes} 
          colorScheme={brandColors.chartPalette}
        />
      </CardContent>
    </Card>
  );
}
2. Dynamic Route Implementation
Optimized SSG with ISR

typescript
Copy
// app/cheeses/[id]/page.tsx
export async function generateStaticParams() {
  return chunkedFetchIds().map(id => ({ id })); // Using Prompt4's chunking
}

export default function CheesePage({ params }: { params: { id: string } }) {
  const cheese = await getCheeseData(params.id); // From DataCache
  
  return (
    <Layout>
      <Breadcrumb path={['Cheeses', cheese.category, cheese.name]} />
      <ItemCard item={cheese} />
      <RelatedItems category={cheese.category} />
      <SchemaMarkup item={cheese} />
    </Layout>
  );
}
3. Final Build Optimization
Incremental Regeneration Setup

javascript
Copy
// next.config.js
module.exports = {
  experimental: {
    incrementalRegeneration: {
      routes: [
        {
          path: '/cheeses/[id]',
          revalidate: 3600 // 1 hour
        },
        {
          path: '/origin/[country]',
          revalidate: 86400 // Daily
        }
      ]
    }
  }
};
4. Deployment & Monitoring
CI/CD Pipeline

yaml
Copy
# .github/workflows/deploy.yml
jobs:
  build:
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run generate-data -- --incremental
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: next-build
          path: .next
          
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/download-artifact@v3
        with:
          name: next-build
      - uses: vercel/action@v30
        with:
          project-id: ${{ secrets.VERCEL_PROJECT_ID }}
Final Validation Suite

End-to-End Testing

typescript
Copy
// __tests__/e2e.test.ts
test('Full user journey', async () => {
  await page.goto('/');
  await expect(page).toHaveTitleMatching(Prompt3.titlePattern);
  
  await page.click('text="Browse Cheeses"');
  await expect(page).toHaveURL(/origin/);
  
  const firstCard = await page.locator('.item-card').first();
  await expect(firstCard).toContainText(/aged/i); // From CSV data
});
Performance Audit

bash
Copy
# Lighthouse CI implementation
npm install -D @lhci/cli
lhci autorun --collect.url="http://localhost:3000" 
SEO Health Check

javascript
Copy
// scripts/seo-audit.js
const sitemap = await fetchSitemap();
const pagesToCheck = sitemap.urls.slice(0, 100); // Sample size

for (const url of pagesToCheck) {
  const html = await fetchPage(url);
  validateMetaTags(html); // Against Prompt3 rules
  checkCanonical(html); // From brand config
}
Final Output Implementation:

bash
Copy
# Data Processing Implementation
type nul > lib/data-pipeline.ts
type nul > scripts/generate-data.ts

# Core Page Implementation
type nul > app/page.tsx
type nul > app/cheeses/[id]/page.tsx

# CI/CD Configuration
type nul > .github/workflows/deploy.yml

