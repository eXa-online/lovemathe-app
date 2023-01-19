#!/bin/bash

rm -r dist && npm run build && serve -s dist/
