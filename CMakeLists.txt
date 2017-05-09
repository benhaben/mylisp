cmake_minimum_required(VERSION 3.6)
project(lisp)

include_directories(/usr/include/editline)
link_directories(/usr/lib)
link_libraries(edit)

#set(Boost_INCLUDE_DIR /usr/local/Cellar/boost/1.57.0)
#set(Boost_LIBRARY_DIR /usr/local/Cellar/boost/1.57.0/lib)
#find_package(editline REQUIRED)
#include_directories(${Boost_INCLUDE_DIR})

set(CMAKE_CXX_STANDARD 11)

set(SOURCE_FILES
        src/mpc.c
        src/mpc.h
        src/strings.c
        )

add_executable(lisp ${SOURCE_FILES})