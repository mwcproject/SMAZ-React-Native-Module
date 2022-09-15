cmake_minimum_required(VERSION 3.4.1)

set (CMAKE_VERBOSE_MAKEFILE ON)
set (CMAKE_CXX_STANDARD 11)

add_library(SmazReact
            SHARED
            ../cpp/smaz-react.cpp
            cpp-adapter.cpp
            ../smaz-master/smaz.c
)

include_directories(
            ../cpp
            ../smaz-master
)
