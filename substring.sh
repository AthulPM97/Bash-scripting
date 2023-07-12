#!/bin/bash
Str="This is a string"
subStr=${Str:6:5} # start from position 6 for length 5
echo $subStr