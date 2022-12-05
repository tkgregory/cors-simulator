#!/bin/bash

hugo -s website --environment development  && sls s3sync