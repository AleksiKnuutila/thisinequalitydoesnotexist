# Generative models for visualising abstract social processes: Guiding streetview image synthesis of StyleGAN2 with indices of deprivation

## Resources

- Table of F1 scores https://docs.google.com/spreadsheets/d/1Gd7QNX3BStHHpCF0gt6q-6kNT5qAdjR181ppLHj1bGs/edit?usp=sharing

## Abstract

## Introduction

Streetview images have predictive power. Could they be used to understand the visual quality of abstract social processes?

Why GANs? Have been around for a while but still SOTA for photorealistic image generation

What is special about non-conditional GANs:
 1. Unsupervised feature engineer, with qualities such as being continuous and reversible
 2. Interpretable features
 3. Correlations can be visualised in interesting ways

## Literature review

Some experiments with GANs.
- Google's "visual concepts"
- Tufte's explanation of visual change

## Methods

### Data
- Streetview images and how they were selected
- IMD

### Methods
-  - InterfaceGAN, guided forms of interpolation

## Results

### Projection into latent space

- 3 forms of projection, their limitation

![[model_comparison.png]]

### Guided interpolation

- Evaluating predictive potential

| Variable           | Projection model | Precision | Recall | F1 score |
|--------------------|------------------|-----------|--------|----------|
| Income_london_rank | E4E              |     0.794 |  0.721 |    0.756 |
| Education          | E4E              |     0.769 |  0.781 |    0.775 |
| Health             | E4E              |     0.899 |  0.754 |    0.820 |
| Income             | Restyle          |     0.788 |  0.772 |    0.780 |
| Education          | Restyle          |     0.773 |  0.763 |    0.768 |
| Health             | Restyle          |     0.836 |  0.788 |    0.811 |
| Income             | SG2-ADA          |     0.716 |  0.738 |    0.727 |
| Education          | SG2-ADA          |     0.735 |  0.700 |    0.717 |
| Health             | SG2-ADA          |     0.747 |  0.738 |    0.742 |

### Visualising latent walks

![[latent_walk_1.png]]

![[latent_walk_2.png]]


## Conclusions

Conclusions..