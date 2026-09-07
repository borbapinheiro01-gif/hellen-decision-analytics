# Borba Mathematical Intelligence

### From Mathematical Theory to Data, AI & Decision Systems

A technical portfolio connecting **Mathematics, Computational Modeling, Data Science, Artificial Intelligence, Optimization and Decision Systems**.

My work reflects a trajectory from mathematical theory to computational modeling and, from there, to Machine Learning, data engineering, intelligent systems and quantitative decision-making.

> **Mathematics is the foundation.  
> Data and computation are the tools.  
> Intelligence and decision systems are the application.**

---

## About

I am **Hellen Borba Pinheiro**, a mathematician and Computational Modeling researcher working at the intersection of mathematical reasoning, algorithms, Data Science and Artificial Intelligence.

My background combines a strong theoretical foundation in Mathematics with applied research and computational work in:

- **Computational Modeling**
- **Data Science**
- **Machine Learning**
- **Mathematical Optimization**
- **Numerical Methods**
- **Scientific Computing**
- **Data Engineering**
- **Generative AI & Large Language Models**
- **Decision Intelligence**

I am particularly interested in problems where building an accurate model is only one part of the challenge.

My work also asks:

- Are the data reliable?
- Was the information actually available at prediction time?
- Is the model numerically stable?
- Are the parameters identifiable?
- Can the result be reproduced?
- Can the analytical pipeline recover safely from failures?
- Can the technical result be clearly explained?
- Can the output support a defensible decision?

---

# Technical Approach

A common reasoning structure connects many of my projects:

## **Understand → Model → Validate → Predict or Simulate → Optimize → Decide → Explain**

This means treating validation, assumptions, data quality, traceability and reproducibility as parts of the analytical system rather than final checks added after modeling.

The goal is to develop computational solutions that are not only technically interesting, but also:

- **testable;**
- **reproducible;**
- **traceable;**
- **interpretable;**
- **reliable;**
- **useful for decision-making.**

---

# Selected Work

## 01 · GN–ADMM

### Constrained Nonlinear Optimization · Algorithms · Scientific Computing

Research and development of a hybrid numerical methodology integrating **Gauss–Newton and ADMM** for constrained nonlinear least-squares problems.

The work combines mathematical formulation, algorithm development, implementation and numerical validation.

### Key areas

- nonlinear optimization;
- equality and inequality constraints;
- regularization;
- parameter estimation;
- dynamic systems;
- analytical sensitivity analysis;
- Jacobian validation;
- convergence monitoring;
- numerical stability;
- structural identifiability.

The methodology was evaluated across **80+ computational scenarios**, with experiments designed to analyze precision, consistency, convergence, feasibility and robustness under different configurations.

One important research result was distinguishing **numerical convergence from structural identifiability**:

> A model may converge successfully while individual parameters remain impossible to identify uniquely from the available observations.

### Core technologies

`Python` · `SciPy` · `NumPy` · `Scilab` · `Numerical Optimization` · `Gauss–Newton` · `ADMM`

---

## 02 · Delivery Risk Intelligence

### Data Science · Machine Learning · Data Engineering · Temporal Governance

An end-to-end analytical project focused on a practical question:

> **At the moment an order is placed, what information can legitimately be used to estimate its risk of late delivery?**

The project uses the public Brazilian Olist e-commerce dataset and treats data correctness and temporal availability as first-class engineering problems.

### Audited data foundation

- **96,470 delivered orders** in the frozen supervised Gold cohort;
- **6,534 late deliveries**;
- **6.77% late-delivery prevalence**;
- **13 audited purchase-time features**;
- heterogeneous relational sources;
- reproducible analytical transformations.

### Architecture

**RAW → Bronze → Silver → Gold → Purchase-Time Feature Layer → Analytics / ML**

### Key areas

- data contracts;
- analytical grain definition;
- structural, semantic and statistical Data Quality Gates;
- entity relationships;
- duplicate and missingness analysis;
- feature engineering;
- point-in-time governance;
- explicit prevention of future-data leakage;
- independent feature recomputation;
- chronological and out-of-time evaluation;
- logistics diagnostics.

The central engineering rule is:

> **Every predictor intended for a purchase-time decision must be reproducible using only information genuinely available at that moment.**

A separate logistics layer evaluates expected freight and shipping friction without silently treating ex-post diagnostics as same-order predictors.

### Repository

[Delivery Risk Intelligence](https://github.com/borbapinheiro01-gif/delivery-risk-data-pipeline-)

### Core technologies

`Python` · `SQL` · `Pandas` · `scikit-learn` · `Data Quality` · `Data Contracts` · `Git`

---

## 03 · CRUZEIRO

### Data Science · Data Quality · Public Data · Decision Intelligence

A large analytical and methodological project involving heterogeneous Brazilian public-procurement data.

The project evolved from data acquisition and analytical modeling into a broader investigation of:

- **data reliability;**
- **provenance;**
- **methodological validation;**
- **resilient acquisition;**
- **analytical infrastructure;**
- **decision support.**

### Analytical foundation

The analytical workflow spans:

**Acquisition → Raw Evidence → Normalization → Cleaning → Consolidation → Features → Modeling → Validation → Decision Support**

### Main areas

- programmatic data acquisition;
- heterogeneous-source integration;
- cleaning and normalization;
- canonical representations;
- consolidation;
- feature engineering;
- scoring and analytical prioritization;
- modeling and validation;
- provenance;
- data lineage;
- methodological auditing;
- integrity analysis.

A major evolution of the project came from auditing the analytical pipeline itself.

Rather than treating historical transformations as automatically correct, the project adopted the principle:

## **Preserve RAW → Rebuild Critical Analytical Layers → Revalidate Models**

This separates valuable historical evidence from transformations whose semantics, joins, missing-data policies or modeling assumptions require stronger controls.

---

### PNCP Contract Enrichment & Data Reliability

A dedicated enrichment infrastructure was developed to connect the analytical base with contract information obtained programmatically from the **Portal Nacional de Contratações Públicas — PNCP**.

The objective was not only to retrieve additional information, but to build an acquisition process that could be:

**audited → resumed → validated → recovered → reproduced**

### Current audited scope

- **84,387 eligible records** in the enrichment base;
- **396 unique primary dates**;
- **593 unique candidate dates**;
- temporal coverage from **2021-09-04 to 2023-06-03**;
- **593 complete date caches**;
- **0 partial caches**.

### Gate 500 validation

Before extending the acquisition infrastructure, a controlled validation gate was executed.

**Result:**

- **500 records searched**
- **500 HIGH_CONFIDENCE matches**

The validated state was frozen together with execution evidence, checkpoints, manifests, enriched outputs and coverage information before subsequent stages were allowed to proceed.

### Resilient acquisition design

The acquisition layer evolved toward a **batch + resume-first** strategy.

Instead of repeatedly querying every required date independently, unresolved candidate dates can be grouped into intervals and retrieved through paginated API requests.

Previously acquired information is preserved in local caches and reused during subsequent executions.

The workflow includes:

- candidate-date discovery;
- batch planning;
- paginated API acquisition;
- complete/partial cache distinction;
- resume-first execution;
- dry-run validation;
- execution logging;
- checkpoints;
- frozen evidence bundles;
- artifact integrity verification;
- controlled recovery after interruption.

A failed execution therefore does not automatically imply restarting acquisition from the beginning.

The system first evaluates existing evidence and cache state, determines which information is already valid and resumes from the remaining unresolved state.

### Engineering principle

> **Data acquisition is part of the analytical methodology. A model cannot be more trustworthy than the evidence, lineage and recovery process supporting its data.**

This stage expanded CRUZEIRO beyond analytical modeling by introducing explicit concerns with **resilience, traceability, reproducibility and controlled external-data enrichment**.

### Core technologies

`Python` · `Pandas` · `NumPy` · `Requests` · `scikit-learn` · `SciPy` · `REST APIs` · `Pagination` · `Caching` · `Data Quality` · `Data Lineage` · `Audit Trails`

---

## 04 · Energy Analytics

### Time Series · Machine Learning · Forecasting · Decision Support

An applied Machine Learning project focused on energy-consumption forecasting and the use of predictive information for operational decision support.

### Experimental foundation

- **13,872 hourly observations**;
- **40 engineered features**;
- chronological train/test design;
- **2,031 observations** reserved for chronological evaluation.

The project compares:

- persistence baseline;
- statistical approaches;
- Random Forest;
- XGBoost.

Under the evaluated protocol, XGBoost achieved:

- **MAPE: 1.08%**
- approximately **68.04% reduction in MAE** relative to the baseline.

### Key areas

- time-series analysis;
- feature engineering;
- chronological validation;
- explicit leakage control;
- baseline construction;
- model benchmarking;
- Random Forest;
- XGBoost;
- operational interpretation of forecasts.

The broader objective is not simply forecasting consumption.

It is understanding how predictive models can become inputs to:

**resource prioritization → scenario analysis → operational decision-making**

### Core technologies

`Python` · `Pandas` · `NumPy` · `scikit-learn` · `XGBoost` · `Time Series` · `Machine Learning`

---

## 05 · NEXADITIN

### Adaptive AI · Mixture of Experts · Contextual Decision Systems

An experimental Adaptive AI research project designed for heterogeneous educational environments while preserving teacher authority over final decisions.

The architecture investigates how an intelligent system can adapt its recommendations when pedagogical context and objectives change.

### Key components

- contextual scoring;
- **Contextual Softmax**;
- **Mixture of Experts (MoE)**;
- contextual expert routing;
- multi-objective decision logic;
- contextual regime changes;
- expert specialization;
- explicit trade-offs between competing objectives.

Possible decision dimensions include:

- learning gaps;
- retention;
- cognitive load;
- accessibility;
- practical application;
- assessment objectives.

Instead of producing one permanently fixed ranking, the system explores how expert contributions can vary according to context.

### Status

> **Research prototype under experimental validation.**

Only components that have been implemented and tested are represented as such.

### Core areas

`Adaptive AI` · `Mixture of Experts` · `Contextual Softmax` · `Multi-Objective Decision Making` · `Mathematical Modeling`

---

# From Prediction to Decision

A broader research direction connects several of these projects.

Prediction answers:

> **What is likely to happen?**

Decision systems require additional questions:

> **What should be done?**  
> **Under which constraints?**  
> **With what uncertainty and risk?**  
> **Why is one action preferable to another?**

This direction is explored through **DecisionCore**, a compact prescriptive architecture combining:

## **Data → Simulation → Optimization → Action Selection → Recommendation → Explanation**

Methods investigated include:

- Monte Carlo simulation;
- risk-adjusted scoring;
- constrained optimization;
- ADMM;
- GN–ADMM for nonlinear formulations;
- warm starts and computational reuse;
- discrete action selection;
- explainable recommendations.

The objective is to connect predictive and analytical models to **prescriptive, interpretable and auditable decision systems**.

---

# Business & Communication

Technical depth is valuable when it can be translated into clear reasoning and useful decisions.

My experience includes communicating mathematical, analytical and computational concepts to audiences with different technical backgrounds through:

- teaching;
- research presentations;
- technical documentation;
- structured analytical reports;
- project communication;
- explanatory materials.

Across different projects, I work to translate:

## **Problem → Analytical Structure → Model or System → Evidence → Decision**

This ability to move between technical detail and practical interpretation is especially relevant in multidisciplinary environments involving:

**Data Science · Engineering · Research · Product · Business**

---

# Data & Production Readiness

My projects increasingly extend beyond isolated modeling toward **reliable analytical infrastructure**.

Current areas of work include:

- reproducible ETL and data pipelines;
- REST API integration;
- batch data acquisition;
- pagination;
- local caching;
- resume-first processing;
- data contracts;
- Data Quality Gates;
- lineage and provenance;
- execution logging;
- checkpoints;
- recovery workflows;
- temporal governance;
- model and feature validation;
- Git-based version control.

The objective is to build analytical systems in which:

**Data Acquisition → Transformation → Modeling → Validation**

can be inspected, tested and reproduced independently.

This work represents an ongoing transition from research and analytical experimentation toward **production-oriented data and Machine Learning systems**.

---

# Applied Domains

My technical work spans multiple application domains.

### Logistics & E-commerce
Delivery risk, freight analysis, temporal features and operational analytics.

### Energy
Consumption forecasting, model benchmarking and operational decision support.

### Public Data & Procurement
Heterogeneous-source integration, analytical auditing, enrichment, risk and decision-support infrastructure.

### Education
Adaptive AI and contextual decision systems.

### Dynamic & Behavioral Systems
Parameter estimation, nonlinear dynamics and information-propagation models.

### Decision Systems
Simulation, optimization, action selection and prescriptive analytics.

Working across different domains has strengthened my ability to identify the **mathematical, computational and analytical structure of a problem independently of its application context**.

---

# Technical Stack

## Programming & Scientific Computing

`Python` · `SQL` · `MATLAB` · `Scilab` · `LaTeX`

## Data Science & Machine Learning

`Pandas` · `NumPy` · `SciPy` · `scikit-learn` · `XGBoost`

## Mathematical & Statistical Methods

`Statistical Analysis` · `Time Series` · `Monte Carlo` · `Sensitivity Analysis` · `Numerical Methods` · `Parameter Estimation`

## Optimization

`Constrained Optimization` · `Gauss–Newton` · `ADMM` · `Regularization` · `Numerical Validation`

## Data Engineering

`ETL` · `Data Pipelines` · `REST APIs` · `Data Quality` · `Data Contracts` · `Data Lineage` · `Point-in-Time Governance` · `Batch Processing` · `Caching` · `Recovery Workflows`

## Development

`Git` · `GitHub` · `Linux`

## Artificial Intelligence

`Generative AI` · `Large Language Models` · `Prompt Engineering` · `AI-Assisted Development` · `Adaptive AI`

---

# Engineering & Research Principles

Across different application domains, I try to preserve the same principles.

### Mathematical Rigor

Complexity should be justified by the problem rather than added for appearance.

### Reproducibility

Analytical results should be traceable to data, code, assumptions and experimental conditions.

### Temporal Integrity

Predictive systems must distinguish information available at prediction time from information observed later.

### Data Quality

Model quality cannot compensate for an unreliable analytical foundation.

### Resilience

Long-running acquisition and processing workflows should preserve valid work and recover safely instead of repeating completed operations.

### Validation Beyond Metrics

A good metric does not automatically imply a valid model.

Assumptions, stability, identifiability, leakage and experimental design also matter.

### Traceability

When models support decisions, it should be possible to understand how:

**data → features → predictions → recommendations**

were produced.

### Technical Honesty

Implemented, experimentally validated, simulated and proposed components should be clearly distinguished.

---

# Academic Foundation

My professional trajectory is rooted in **Mathematics**.

I hold a Bachelor's degree in Mathematics and later moved toward Computational Modeling, numerical methods, optimization and data-driven systems.

My graduate research in **Computational Modeling in Science and Technology** strengthened this transition by connecting mathematical theory to:

- algorithms and programming;
- numerical methods;
- estimation theory;
- control theory;
- optimization;
- computational experimentation;
- scientific validation.

This path is the origin of the name:

# **Borba Mathematical Intelligence**

It represents the progression:

## **Mathematical Theory → Computational Modeling → Data & AI → Intelligent Decision Systems**

---

# About This Repository

This repository contains the source code for my professional technical portfolio.

It serves as a central presentation layer for selected work in:

**Mathematics · Computational Modeling · Data Science · Artificial Intelligence · Optimization · Decision Intelligence**

Larger technical projects may remain in dedicated repositories so that their architecture, code, experiments and documentation can be examined independently.

The objective of this repository is not to replace those technical repositories, but to provide a **coherent entry point into my work and professional trajectory**.

---

# Connect

### Portfolio

[hellen-decision-analytics.vercel.app](https://hellen-decision-analytics.vercel.app)

### GitHub

[github.com/borbapinheiro01-gif](https://github.com/borbapinheiro01-gif)

### LinkedIn

[Hellen Borba Pinheiro](https://www.linkedin.com/in/hellen-borba-pinheiro-0034451aa)

---

# Borba Mathematical Intelligence

### *From Mathematical Theory to Data, AI & Decision Systems*
