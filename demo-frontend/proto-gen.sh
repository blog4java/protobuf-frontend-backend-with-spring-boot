#!/usr/bin/env bash
PROTO_DIR=../protobufs/src/main/proto
OUTPUT_DIR=${PWD}/src/app/protobufs
rm -rf ${OUTPUT_DIR}
mkdir ${OUTPUT_DIR}
for i in 'demo_service'
	    do
		    echo "Generating proto-buf file for : $i"
        pbjs -t static-module -o ${OUTPUT_DIR}/${i}.js ${PROTO_DIR}/${i}.proto
        pbts -o ${OUTPUT_DIR}/${i}.d.ts --no-comments ${OUTPUT_DIR}/${i}.js
	    done
