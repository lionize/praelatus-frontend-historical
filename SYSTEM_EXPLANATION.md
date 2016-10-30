# System Explanation

## Table of Contents
- [Introduction](#introduction)

## Introduction

This document gives a birds-eye view of the system that runs the Praelatus frontend. This is written with the intent of simplifying what might otherwise appear to be a complex system with many moving parts.

In reality, there are three major pieces of the frontend:

- Component Display
- Data Management
- Server Communication

These pieces work in a sort of flow. Components are rendered using information from the data backend, which communicates with the server in different ways based on the user's interaction with the components. The server itself is hosted in the [backend](https://github.com/praelatus/backend) repository, but the frontend has a module dedicated specifically to handling interactions with the server.

## Component Display

Components are the key to the frontend! They determine what the user sees and how the information the user requests is displayed on the page. Intertwined with this is a responsibility for formatting page output (like css).

## Data Management

Data is managed primarily by a Redux store tied in with a few pieces of middleware. These are handled by modules, which are a specific method of organizing the data management code for easy reuse. See [REDUX_EXPLANATION.md](REDUX_EXPLANATION.md) for an in-depth explanation.

## Server Communication

Internally, this is known as the API module. The API module increases the flexibility of the application by encapsulating server calls. We keep all of the knowledge about the server in one location and only allow the rest of our application to use them as we see fit. This way, whenever the server itself changes, we can dynamically update all of our calls to it without having to change every individual piece of code--we simply update the API module and everything works again.