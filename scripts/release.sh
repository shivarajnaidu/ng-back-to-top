#!/bin/sh

cp README.md projects/ng-back-to-top/
cd projects/ng-back-to-top/
npm version patch
ng build --prod ng-back-to-top