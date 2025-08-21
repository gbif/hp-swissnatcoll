---
layout: post
permalink: /en/dagi-rdmp
title: Repository Roadmap and Structure Guide
description: Darwin Core Data Aggregator
background: /assets/images/placeholders/moss.jpg
imageLicense: |
  None for this image, but it would normally go here. Markdown is allowed.
toc: true
height: 50vh
---

# 🗺️ Repository Overview

The Darwin Core Data Aggregator is an Elixir/Phoenix application designed to integrate biodiversity data into Darwin Core compatible formats. This guide helps you navigate the repository structure, understand the codebase organization, and quickly find the information you need.

**Repository URL:** https://github.com/zebbra/data_aggregator  
**Primary Language:** Elixir  
**Framework:** Phoenix Framework with Ash Framework  
**Database:** PostgreSQL  
**License:** GNU AGPLv3



# 📂 Repository Structure

## Root Directory Files

```
data_aggregator/
├── README.md                   # Project overview and quick start guide
├── LICENSE                     # GNU AGPLv3 license text
├── LICENSE-IMPLICATIONS.md     # AGPLv3 license explanation
├── CONTRIBUTING.md             # Contribution guidelines
├── CODE_OF_CONDUCT.md         # Community standards
├── SECURITY.md                # Security policy and vulnerability reporting
├── .tool-versions             # Elixir/Erlang version requirements
├── mix.exs                    # Project dependencies and configuration
├── mix.lock                   # Locked dependency versions
└── .gitignore                 # Git ignore patterns
```

## Core Application Structure

Based on standard Phoenix/Elixir conventions and the project description:

```
├── lib/
│   ├── data_aggregator/              # Core business logic
│   │   ├── accounts/                 # User management and authentication
│   │   ├── collections/              # GrSciColl collection management
│   │   ├── darwin_core/              # Darwin Core mapping and validation
│   │   ├── data_import/              # CSV upload and processing
│   │   ├── enrichment/               # Data enrichment services
│   │   │   ├── taxonomy/             # Taxonomic validation
│   │   │   ├── geography/            # Geolocation services
│   │   │   ├── species_registry/     # Swiss species registry integration
│   │   │   └── iucn/                 # IUCN Red List integration
│   │   ├── images/                   # Image management and association
│   │   ├── export/                   # Data export functionality
│   │   ├── gbif/                     # GBIF integration and publishing
│   │   ├── validation/               # Data validation workflows
│   │   └── api/                      # REST API endpoints
│   └── data_aggregator_web/          # Web interface layer
│       ├── controllers/              # HTTP request handlers
│       ├── live/                     # Phoenix LiveView components
│       ├── templates/                # HTML templates
│       ├── views/                    # View modules
│       ├── router.ex                 # URL routing
│       └── endpoint.ex               # HTTP endpoint configuration
```

## Configuration and Assets

```
├── config/
│   ├── config.exs                    # Application configuration
│   ├── dev.exs                       # Development environment settings
│   ├── prod.exs                      # Production environment settings
│   ├── runtime.exs                   # Runtime configuration
│   └── test.exs                      # Test environment settings
├── assets/                           # Frontend assets
│   ├── css/                          # Tailwind CSS styles
│   ├── js/                           # JavaScript components
│   └── static/                       # Static files (images, fonts)
└── priv/
    ├── repo/migrations/              # Database migrations
    ├── repo/seeds.exs                # Database seed data
    └── static/                       # Compiled static assets
```

## Testing and Documentation

```
├── test/
│   ├── data_aggregator/              # Business logic tests
│   ├── data_aggregator_web/          # Web layer tests
│   ├── support/                      # Test helpers
│   └── test_helper.exs               # Test configuration
└── docs/
    ├── agpl_compliance.md            # AGPLv3 compliance guide
    └── [other documentation files]
```



# 🚀 Quick Start Navigation

## For New Contributors

1. **Start Here:**
   - [`README.md`](https://github.com/zebbra/data_aggregator/blob/develop/README.md){:target="_blank"} - Project overview and setup instructions
   - [`CONTRIBUTING.md`](https://github.com/zebbra/data_aggregator/blob/develop/CONTRIBUTING.md){:target="_blank"} - How to contribute
   - [`CODE_OF_CONDUCT.md`](https://github.com/zebbra/data_aggregator/blob/develop/CODE_OF_CONDUCT.md){:target="_blank"} - Community guidelines

2. **Setup Requirements:**
   - [`.tool-versions`](https://github.com/zebbra/data_aggregator/blob/develop/.tool-versions){:target="_blank"} - Check Elixir/Erlang version requirements
   - [`mix.exs`](https://github.com/zebbra/data_aggregator/blob/develop/mix.exs){:target="_blank"} - Review project dependencies
   - [`config/dev.exs`](https://github.com/zebbra/data_aggregator/blob/develop/config/dev.exs){:target="_blank"} - Configuration template

## For Developers

1. **Core Business Logic:**
   - [`lib/data_aggregator/`](https://github.com/zebbra/data_aggregator/tree/develop/lib/data_aggregator){:target="_blank"} - Main application logic
   - [`lib/data_aggregator_web/`](https://github.com/zebbra/data_aggregator/tree/develop/lib/data_aggregator_web){:target="_blank"} - Web interface components
   - [`priv/repo/migrations/`](https://github.com/zebbra/data_aggregator/tree/develop/priv/repo/migrations){:target="_blank"} - Database schema evolution

2. **API Documentation:**
   - http://localhost:4000/api/json/swagger - Interactive API documentation (dev)
   - http://localhost:4000/api/json/redoc - Alternative API docs (dev)
   - http://localhost:4000/docs/index.html - HexDocs (dev)

## For Data Managers and Scientists

1. **Data Model:**
   - [Database Diagram](https://dbdiagram.io/d/data-aggregator-basic-65393c35ffbf5169f071ed3f){:target="_blank"} - Visual data model
   - Darwin Core mapping modules in [`lib/data_aggregator/darwin_core/`](https://github.com/zebbra/data_aggregator/tree/develop/lib/data_aggregator/darwin_core){:target="_blank"}

2. **Integration Points:**
   - GBIF integration: [`lib/data_aggregator/gbif/`](https://github.com/zebbra/data_aggregator/tree/develop/lib/data_aggregator/gbif){:target="_blank"}
   - Taxonomic services: [`lib/data_aggregator/taxonomy/`](https://github.com/zebbra/data_aggregator/tree/develop/lib/data_aggregator/taxonomy){:target="_blank"}
   - Geographic services: `lib/data_aggregator/enrichment/geography/`

## For System Administrators

1. **Deployment:**
   - `config/prod.exs` - Production configuration
   - `config/runtime.exs` - Runtime environment setup
   - Docker/deployment files (if present in root)

2. **Security:**
   - [`SECURITY.md`](https://github.com/zebbra/data_aggregator/blob/develop/SECURITY.md){:target="_blank"} - Security policy
   - Authentication modules in `lib/data_aggregator/accounts/`



# 🔧 Key Functional Areas

## 1. Data Import and Processing
**Location:** `lib/data_aggregator/data_import/`
- CSV file upload handling
- Data validation and parsing
- Error reporting and recovery
- Batch processing capabilities

## 2. Darwin Core Mapping
**Location:** `lib/data_aggregator/darwin_core/`
- Darwin Core term definitions
- Data mapping interfaces
- Validation rules and checks
- Standard compliance verification

## 3. Collection Management
**Location:** `lib/data_aggregator/collections/`
- GrSciColl integration
- Institution and collection metadata
- User permissions and roles
- Collection-specific configurations

## 4. Data Enrichment Pipeline
**Location:** `lib/data_aggregator/enrichment/`
- **Taxonomy:** Species name validation and standardization
- **Geography:** Coordinate validation and reverse geocoding
- **Species Registry:** Integration with national databases
- **Conservation:** IUCN Red List status enrichment

## 5. Image Management
**Location:** `lib/data_aggregator/images/`
- Image upload and storage
- Metadata extraction
- Association with occurrence records
- Thumbnail generation and optimization

## 6. Export and API Services
**Location:** `lib/data_aggregator/export/` and `lib/data_aggregator/api/`
- CSV export in Darwin Core Archive format
- REST API endpoints
- Data serialization and formatting
- Access control and permissions

## 7. GBIF Integration
**Location:** `lib/data_aggregator/gbif/`
- Dataset registration and publishing
- IPT (Integrated Publishing Toolkit) integration
- Metadata synchronization
- DOI management for published datasets

## 8. Validation Workflows
**Location:** `lib/data_aggregator/validation/`
- Expert validation interfaces
- Quality control processes
- Submission to taxonomic authorities
- Feedback and correction workflows



# 🌐 External Resources

## Development Resources
- **Miro Board:** [Development Notes](https://miro.com/app/board/uXjVMBLi0fk=/){:target="_blank"} - Project planning and design
- **Database Model:** [Visual Schema](https://dbdiagram.io/d/data-aggregator-basic-65393c35ffbf5169f071ed3f)
- **Issues:** [GitHub Issues](https://github.com/zebbra/data_aggregator/issues){:target="_blank"} - Bug reports and feature requests
- **Pull Requests:** [GitHub PRs](https://github.com/zebbra/data_aggregator/pulls){:target="_blank"} - Code contributions

## Standards and Documentation
- **Darwin Core:** [TDWG Standards](https://dwc.tdwg.org/){:target="_blank"} - Data standard specification
- **GBIF:** [Global Biodiversity Information Facility](https://www.gbif.org/)
- **Phoenix Framework:** [Official Documentation](https://hexdocs.pm/phoenix/)
- **Ash Framework:** [Ash Documentation](https://ash-hq.org/)



# 📋 Development Workflow

## 1. Setup and Installation
```bash
# Clone repository
git clone https://github.com/zebbra/data_aggregator.git
cd data_aggregator

# Install dependencies
mix deps.get

# Setup database and assets
mix setup

# Start development server
mix phx.server
```

## 2. Key Development Commands
```bash
# Run tests
mix test

# Check code formatting
mix format --check-formatted

# Generate documentation
mix docs

# Database operations
mix ecto.migrate
mix ecto.rollback

# Interactive shell
iex -S mix phx.server
```

## 3. Contribution Process
1. Fork the repository
2. Create a feature branch from `develop`
3. Make your changes following the coding standards
4. Write tests for new functionality
5. Submit a pull request with detailed description
6. Participate in code review process



# 🔍 Finding Specific Information

## Configuration Issues
- **Database:** `config/dev.exs`, `config/prod.exs`
- **Environment Variables:** `config/runtime.exs`
- **Dependencies:** `mix.exs`

## Feature Implementation
- **Web Interface:** `lib/data_aggregator_web/live/` (LiveView components)
- **Business Logic:** `lib/data_aggregator/[domain]/` (specific domains)
- **Database Schema:** `priv/repo/migrations/`

## Integration Points
- **External APIs:** `lib/data_aggregator/enrichment/`
- **File Processing:** `lib/data_aggregator/data_import/`
- **Export Formats:** `lib/data_aggregator/export/`

## Testing and Quality
- **Test Suites:** `test/` directory structure mirrors `lib/`
- **Test Configuration:** `config/test.exs`
- **Code Quality:** Follow Elixir and Phoenix conventions



# 📞 Getting Help

## Community Support
- **Issues:** Report bugs or request features through GitHub Issues
- **Discussions:** Engage with the community on development topics
- **Documentation:** Refer to inline code documentation and README

## Technical Support
- **Code Questions:** Check existing issues or create new ones
- **Setup Problems:** Review configuration examples and documentation
- **Integration Help:** Consult external service documentation (GBIF, taxonomic databases)



This roadmap provides a comprehensive overview of the Darwin Core Data Aggregator repository. Use it as your guide to navigate the codebase, understand the architecture, and contribute effectively to this important biodiversity data management platform.

{% include back-to-top.html %}
