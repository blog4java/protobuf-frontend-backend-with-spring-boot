#!/usr/bin/env bash
PROTO_DIR=../protobufs/src/main/proto
OUTPUT_DIR=${PWD}/src/app/protobufs
rm -rf ${OUTPUT_DIR}/*
mkdir ${OUTPUT_DIR}
f=index
for i in 'demo_service_message'
	    do
		    echo "Generating proto-buf file for : $i"
        pbjs -t static-module -o ${OUTPUT_DIR}/${f}.js ${PROTO_DIR}/${i}.proto
        pbts -o ${OUTPUT_DIR}/${f}.d.ts --no-comments ${OUTPUT_DIR}/${f}.js
        echo "Generated file with name ${f}"
	    done
