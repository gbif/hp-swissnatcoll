---
layout: post # try to remoce this line (add # in the beginning of the line to make it a comment) - then the layout will change, but the content remain the same
title: Darwin Core Biodiversity Data Aggregator
description: Request for Proposal (RFP)
background: /assets/images/placeholders/moss.jpg
imageLicense: |
  None for this image, but it would normally go here. Markdown is allowed.
height: 50vh
---

# Darwin Core Biodiversity Data Aggregator - 

## Executive Summary

**Project Title:** Darwin Core Biodiversity Data Aggregator Development and Implementation  
**Organization:** [Your Organization Name]  
**RFP Issue Date:** [Date]  
**Proposal Due Date:** [Date + 30 days]  
**Project Start Date:** [Estimated Date]  
**Project Duration:** [Estimated Duration]

We are seeking qualified vendors to develop and implement a comprehensive biodiversity data aggregation solution based on the Darwin Core standard. The system will integrate biodiversity data from multiple sources into a standardized format, supporting research, conservation efforts, and data sharing with global biodiversity initiatives like GBIF.

## Background and Context

Our organization requires a robust biodiversity data management platform that can standardize and consolidate various biodiversity data sources according to Darwin Core specifications. This system will serve scientists, researchers, and biodiversity data managers who need to:

- Manage biological specimen and observation data
- Ensure data quality and compliance with international standards
- Share data with global biodiversity networks
- Provide enriched taxonomic and geographic information
- Support conservation and research initiatives

## Project Objectives

### Primary Objectives
- Develop a web-based biodiversity data aggregation platform compliant with Darwin Core standards
- Implement data import, validation, and mapping capabilities for various biodiversity data formats
- Integrate with taxonomic databases, geolocation services, and species registries
- Provide data export and API access for sharing with GBIF and other platforms
- Create user-friendly interfaces for data management and collection administration

### Secondary Objectives
- Implement image management and association with specimen/observation records
- Develop data validation workflows for species identification centers
- Create reporting and analytics capabilities for biodiversity insights
- Ensure GDPR compliance and data security for sensitive location data
- Provide comprehensive documentation and training materials

## Technical Requirements

Based on the reference implementation at https://github.com/zebbra/data_aggregator, the system should include:

### Core Functionality

1. **Collection Data Management**
   - Web interface for managing GrSciColl (Global Registry of Scientific Collections) data
   - Institution and collection metadata management
   - User role management and access control
   - Data governance and quality control workflows

2. **Data Import and Processing**
   - CSV file upload and parsing capabilities
   - Data validation against Darwin Core standards
   - Field mapping interface for non-standard data formats
   - Bulk data processing and transformation tools
   - Error handling and data quality reporting

3. **Darwin Core Mapping**
   - Interactive mapping interface for aligning source data to Darwin Core terms
   - Support for all Darwin Core classes (Occurrence, Event, Location, Taxon, etc.)
   - Validation of required and recommended Darwin Core fields
   - Custom field mapping and transformation rules

4. **Image Management**
   - Image upload and association with occurrence records
   - Metadata extraction and management
   - Image format conversion and optimization
   - Thumbnail generation and display
   - Integration with multimedia Darwin Core extensions

5. **Data Enrichment Services**
   - **Taxonomic Validation**: Integration with taxonomic databases for species name validation
   - **Geographic Encoding**: Forward and reverse geocoding services for location data
   - **Species Registry Integration**: Connection to national/regional species databases
   - **Conservation Status**: IUCN Red List status integration
   - **Administrative Geography**: Country, state/province identification

6. **Data Export and API**
   - CSV export in Darwin Core Archive (DwC-A) format
   - RESTful API for programmatic data access
   - Real-time data retrieval endpoints
   - Bulk data download capabilities
   - Integration with GBIF IPT (Integrated Publishing Toolkit)

7. **Validation and Quality Control**
   - Data submission workflows to infospecies centers
   - Automated data quality checks
   - Expert validation interfaces
   - Quality flags and annotations
   - Version control and audit trails

8. **GBIF Integration**
   - Direct publication to GBIF network
   - Dataset registration and management
   - Citation tracking and usage statistics
   - Metadata synchronization
   - DOI assignment for published datasets

### Technology Stack Requirements

Based on the reference implementation:

**Backend Framework:**
- Elixir with Phoenix Framework
- Ash Framework for data modeling and APIs
- PostgreSQL database
- OTP (Open Telecom Platform) for distributed systems

**Frontend Technology:**
- Phoenix LiveView for real-time interfaces
- Tailwind CSS for responsive design
- JavaScript for interactive components
- HTML5 for semantic markup

**API Documentation:**
- OpenAPI/Swagger specification
- ReDoc documentation interface
- Interactive API testing tools

**Development Tools:**
- Mix build tool and dependency management
- Phoenix code generators
- Database migrations and seeds
- Comprehensive test suites

### Performance Requirements
- Handle concurrent uploads of files up to 100MB
- Process datasets with 100,000+ records efficiently
- Support 100+ concurrent users
- API response times under 2 seconds for data retrieval
- 99.5% system availability during business hours
- Daily automated backups with point-in-time recovery

### Darwin Core Compliance Requirements

**Mandatory Darwin Core Support:**
- Core terms: occurrenceID, basisOfRecord, catalogNumber
- Taxonomic terms: scientificName, kingdom, phylum, class, order, family, genus, specificEpithet
- Geographic terms: decimalLatitude, decimalLongitude, coordinateUncertaintyInMeters, country, stateProvince
- Temporal terms: eventDate, year, month, day
- Collection terms: institutionCode, collectionCode, recordedBy

**Optional Darwin Core Extensions:**
- Multimedia extension for images and media
- Simple Images extension
- Audubon Core for multimedia metadata
- Measurement or Facts extension
- Resource Relationship extension

### Integration Requirements

**External Services:**
- GBIF API for data publishing and retrieval
- Taxonomic databases (GBIF Backbone Taxonomy, Catalogue of Life)
- Geographic services (Google Maps, OpenStreetMap, GeoNames)
- IUCN Red List API
- National species registries and databases

**Data Standards:**
- Darwin Core Archive (DwC-A) format support
- EML (Ecological Metadata Language) for dataset metadata
- Dublin Core for basic metadata
- ABCD (Access to Biological Collection Data) schema compatibility

## Data Sources and Formats

### Expected Input Formats
1. **Structured Data**
   - CSV files with biodiversity records
   - Excel spreadsheets (.xlsx, .xls)
   - Tab-delimited text files
   - Darwin Core Archives

2. **Database Sources**
   - Collection management systems
   - Existing biodiversity databases
   - Legacy specimen databases
   - Field survey databases

3. **Media Files**
   - JPEG, PNG, TIFF images
   - Video files (MP4, MOV)
   - Audio recordings (MP3, WAV)
   - Document attachments (PDF)

### Data Types Supported
- **Specimen Records**: Physical specimens in collections
- **Observation Records**: Field observations and surveys
- **Living Specimen Records**: Zoo, aquarium, botanical garden records
- **Fossil Records**: Paleontological specimens
- **Environmental DNA Records**: eDNA sampling results

## Security and Compliance

### Data Security Requirements
- Encryption of sensitive location data for endangered species
- User authentication and authorization
- Role-based access control (RBAC)
- Audit logging for all data modifications
- Secure file upload with virus scanning
- HTTPS/TLS encryption for all communications

### Biodiversity Data Compliance
- Compliance with Nagoya Protocol on Access and Benefit-sharing
- CITES permit tracking for protected species
- Sensitive species data protection protocols
- Indigenous data sovereignty considerations
- Research ethics and permit compliance

### GDPR and Privacy Compliance
- Personal data protection for collectors and researchers
- Right to be forgotten implementation
- Data processing consent management
- Privacy impact assessments
- Data retention and deletion policies

## Deliverables

### Software Components

1. **Core Application**
   - Darwin Core data aggregation engine
   - Web-based collection management interface
   - Data import and validation system
   - API endpoints with documentation
   - Administrative and user management tools

2. **Integration Components**
   - GBIF publishing integration
   - Taxonomic database connectors
   - Geolocation service integrations
   - Species registry adapters
   - Image processing pipeline

3. **Documentation Package**
   - System architecture documentation
   - User manuals for different roles (admin, curator, researcher)
   - API documentation with examples
   - Darwin Core mapping guidelines
   - Deployment and maintenance guides

### Services and Support

1. **Implementation Services**
   - System installation and configuration
   - Data migration from existing systems
   - User training and workshops
   - Go-live support and monitoring
   - Performance optimization

2. **Ongoing Support**
   - Bug fixes and security patches
   - Darwin Core standard updates
   - Integration maintenance
   - User support and training
   - Feature enhancements

## Proposal Requirements

### Technical Proposal

1. **Architecture and Design**
   - System architecture based on Elixir/Phoenix framework
   - Database schema design for Darwin Core compliance
   - API design following REST principles
   - Scalability and performance approach
   - Security architecture and data protection measures

2. **Darwin Core Implementation**
   - Approach to Darwin Core standard compliance
   - Data validation and quality control strategies
   - Taxonomic integration and validation methods
   - Geographic data processing and validation
   - Image and multimedia handling approach

3. **Integration Strategy**
   - GBIF integration architecture and workflow
   - External service integration approach
   - Data enrichment service implementation
   - API design for third-party integrations
   - Offline capability and sync mechanisms

4. **Development Approach**
   - Agile development methodology
   - Testing strategy (unit, integration, user acceptance)
   - Code quality and review processes
   - Documentation and knowledge transfer approach
   - Risk management and mitigation strategies

### Team and Experience

1. **Technical Expertise Required**
   - Elixir/Phoenix development experience
   - Biodiversity data management experience
   - Darwin Core standard knowledge
   - Database design and optimization skills
   - API development and integration experience

2. **Domain Knowledge Required**
   - Understanding of biodiversity research workflows
   - Experience with scientific data management
   - Knowledge of taxonomic databases and standards
   - Familiarity with GBIF and biodiversity networks
   - Conservation data sensitivity awareness

### Cost and Timeline

1. **Development Phases**
   - Phase 1: Core platform development (data import, Darwin Core mapping)
   - Phase 2: Integration services (GBIF, taxonomic databases)
   - Phase 3: Advanced features (image management, validation workflows)
   - Phase 4: Testing, documentation, and deployment

2. **Cost Breakdown**
   - Development costs by phase and component
   - Infrastructure and hosting costs
   - Third-party service integration costs
   - Training and support costs
   - Ongoing maintenance estimates

## Evaluation Criteria

1. **Technical Excellence (35%)**
   - Darwin Core compliance and implementation quality
   - Architecture design and scalability
   - Code quality and maintainability
   - Integration capabilities and approach
   - Performance and security measures

2. **Biodiversity Domain Expertise (25%)**
   - Understanding of biodiversity data workflows
   - Experience with scientific data management
   - Knowledge of relevant standards and protocols
   - Previous biodiversity project experience
   - Understanding of conservation data sensitivity

3. **Experience and Team (20%)**
   - Elixir/Phoenix development experience
   - Team qualifications and biodiversity knowledge
   - Project portfolio and references
   - Open source contribution history
   - Long-term support capabilities

4. **Cost and Value (20%)**
   - Total cost of ownership
   - Value proposition and cost-effectiveness
   - Transparent pricing model
   - Competitive pricing analysis
   - Long-term maintenance costs

## References and Standards

- **Darwin Core Standard**: https://dwc.tdwg.org/
- **GBIF Data Portal**: https://www.gbif.org/
- **TDWG Standards**: https://www.tdwg.org/standards/
- **Reference Implementation**: https://github.com/zebbra/data_aggregator
- **Darwin Core Quick Reference Guide**: https://dwc.tdwg.org/terms/
- **GBIF IPT User Manual**: https://ipt.gbif.org/manual/en/ipt/latest/

## Submission Guidelines

### Proposal Format
- Technical proposal: Maximum 25 pages
- Commercial proposal: Maximum 10 pages
- Include executive summary (maximum 2 pages)
- Provide project timeline with milestones
- Include team CVs and project references

### Required Demonstrations
- Working prototype or similar system demonstration
- Darwin Core mapping interface mockup
- GBIF integration proof of concept
- Data quality validation examples
- API documentation samples

### Submission Requirements
- **Deadline**: [Date and Time]
- **Contact**: [Project Manager Details]
- **Format**: PDF documents via email or secure portal
- **Questions**: Submit by [Date] to ensure responses before deadline

## Next Steps

1. **Vendor Briefing Session**: [Date] - Optional Q&A session
2. **Proposal Submission**: [Date]
3. **Technical Evaluation**: [Date Range]
4. **Vendor Presentations**: [Date Range] - Selected vendors only
5. **Reference Checks**: [Date Range]
6. **Final Selection**: [Date]
7. **Contract Negotiation**: [Date Range]
8. **Project Kickoff**: [Date]

## Contact Information

**Project Manager**: [Name]  
**Email**: [Email]  
**Phone**: [Phone]  
**Organization**: [Organization Name]

**Technical Lead**: [Name]  
**Email**: [Email]  
**Biodiversity Data Specialist**: [Name]  
**Email**: [Email]

{% include back-to-top.html %}
---

*This RFP incorporates requirements based on the open-source Darwin Core Data Aggregator project (https://github.com/zebbra/data_aggregator) licensed under GNU AGPLv3. All proprietary implementations must respect the licensing terms of any referenced open-source components.*
