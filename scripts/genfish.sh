#!/bin/sh

DRAW=../../fishdraw
OUT=../metadata

echo "Generating fish"

rm -rf $OUT
mkdir $OUT

for i in $(seq 1 $1); do
	mkdir $OUT/$i
	NAME="$(node name.js)"
	echo "  fish $i ($NAME)"
	node $DRAW/fishdraw.js --seed "$NAME" --format svg > $OUT/$i/image.svg
	svgexport $OUT/$i/image.svg $OUT/$i/image-full.png 1920:1180
	convert $OUT/$i/image-full.png -resize 2048x2048 -background transparent -gravity center -extent 2048x2048 -resize 350x350 $OUT/$i/image-small.png
	sed "s/FISHID/$i/g" meta-template.json > $OUT/$i/meta.json
	sed -i "s/FISHNAME/$NAME/g" $OUT/$i/meta.json
done
