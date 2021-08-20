#!/bin/sh

DRAW=../../fishdraw
OUTMETA=../token
OUTIMG=../image

echo "Generating fish"

rm -rf $OUTMETA
rm -rf $OUTIMG
mkdir $OUTMETA
mkdir $OUTIMG

for i in $(seq 1 $1); do
	mkdir $OUTIMG/$i
	NAME="$(node name.js)"
	echo "  fish $i ($NAME)"
	node $DRAW/fishdraw.js --seed "$NAME" --format svg > $OUTIMG/$i/image.svg
	svgexport $OUTIMG/$i/image.svg $OUTIMG/$i/image-full.png 1920:1180
	convert $OUTIMG/$i/image-full.png -resize 2048x2048 -background transparent -gravity center -extent 2048x2048 -resize 350x350 $OUTIMG/$i/image-small.png
	sed "s/FISHID/$i/g" meta-template.json > $OUTMETA/$i
	sed -i "s/FISHNAME/$NAME/g" $OUTMETA/$i
done
