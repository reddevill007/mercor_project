import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { AiOutlineTeam } from "react-icons/ai";
import { BsCalendarDay } from "react-icons/bs";
import { GoKebabHorizontal } from "react-icons/go";
import { ImFileOpenoffice } from "react-icons/im";
import { TfiCommentAlt } from "react-icons/tfi";
import Post from "./Post";

const Column = ({ column, tasks }) => {
  let color = "red.300";

  if (column.id === "column-1") color = "purple.700";
  else if (column.id === "column-2") color = "yellow.500";
  else if (column.id === "column-3") color = "green.300";

  return (
    <Flex rounded="3px" bg="gray.100" w="350px" h="700px" flexDir="column">
      <Flex
        align="center"
        h="60px"
        rounded="3px 3px 0 0"
        px="1.5rem"
        gap="10px"
      >
        <Flex
          align="center"
          h="60px"
          rounded="3px 3px 0 0"
          gap="10px"
          borderBottom="4px"
          w="full"
          pt="20px"
          mb="20px"
          borderColor={color}
        >
          <Box h="5px" w="5px" borderRadius="50%" bg={color}></Box>
          <Text fontSize="17px" fontWeight={600} color="subtle-text">
            {column.title}
          </Text>
          <Flex
            justify="center"
            alignItems="center"
            fontSize="12px"
            bg={"gray.400"}
            color="gray.600"
            p="4px"
            h="20px"
            w="20px"
            borderRadius="50%"
          >
            {tasks.length}
          </Flex>
        </Flex>
      </Flex>

      <Droppable droppableId={column.id}>
        {(droppableProvided, droppableSnapshot) => (
          <Flex
            px="1.5rem"
            flex={1}
            flexDir="column"
            overflowY="scroll"
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                  <Flex
                    mb="1rem"
                    h="-webkit-fit-content"
                    bg="white"
                    rounded="3px"
                    p="1.5rem"
                    outline="2px solid"
                    outlineColor={
                      draggableSnapshot.isDragging
                        ? "card-border"
                        : "transparent"
                    }
                    boxShadow={
                      draggableSnapshot.isDragging
                        ? "0 5px 10px rgba(0, 0, 0, 0.6)"
                        : "unset"
                    }
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                  >
                    <Post task={task} />
                  </Flex>
                )}
              </Draggable>
            ))}
          </Flex>
        )}
      </Droppable>
    </Flex>
  );
};

export default Column;
