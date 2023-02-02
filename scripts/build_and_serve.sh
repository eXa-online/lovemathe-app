#!/bin/bash

export NODE_ENV=dev; rm -r dist && npm run build && serve -s dist/
