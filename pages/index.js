import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Header from "../src/components/Header";
import Sidebar from "../src/components/Sidebar";
import MainHeader from "../src/components/MainHeader";

const Column = dynamic(() => import("../src/components/Column"), {
  ssr: false,
});

const reorderColumnList = (sourceCol, startIndex, endIndex) => {
  const newTaskIds = Array.from(sourceCol.taskIds);
  const [removed] = newTaskIds.splice(startIndex, 1);
  newTaskIds.splice(endIndex, 0, removed);

  const newColumn = {
    ...sourceCol,
    taskIds: newTaskIds,
  };

  return newColumn;
};

export default function Home() {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source } = result;

    // If user tries to drop in an unknown destination
    if (!destination) return;

    // if the user drags and drops back in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // If the user drops within the same column but in a different positoin
    const sourceCol = state.columns[source.droppableId];
    const destinationCol = state.columns[destination.droppableId];

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
      return;
    }

    // If the user moves from one column to another
    const startTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = startTaskIds.splice(source.index, 1);
    const newStartCol = {
      ...sourceCol,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(destinationCol.taskIds);
    endTaskIds.splice(destination.index, 0, removed);
    const newEndCol = {
      ...destinationCol,
      taskIds: endTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      },
    };

    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Header />
      <Flex>
        <Sidebar />
        <Flex
          flexDir="column"
          bg="white"
          minH="100vh"
          w="calc(100% - 200px)"
          ml="200px"
          color="gray.400"
          pb="2rem"
          mt="50px"
        >
          <MainHeader />
          <Flex justify="space-between" px="4rem">
            {state.columnOrder.map((columnId) => {
              const column = state.columns[columnId];
              const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

              return <Column key={column.id} column={column} tasks={tasks} />;
            })}
          </Flex>
        </Flex>
      </Flex>
    </DragDropContext>
  );
}

const initialData = {
  tasks: {
    1: {
      id: 1,
      imp: "Low",
      content: "Configure Next.js application",
      desc: "Create this website before 19 in order to get sortlisted for next round",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&usqp=CAU",
    },
    2: {
      id: 2,
      imp: "Low",
      desc: "Create this website before 19 in order to get sortlisted for next round",
      content: "Configure Next.js and tailwind ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&usqp=CAU",
    },
    3: {
      id: 3,
      imp: "High",
      desc: "Create this website before 19 in order to get sortlisted for next round",
      content: "Create sidebar navigation menu",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&usqp=CAU",
    },
    4: {
      id: 4,
      imp: "Low",
      desc: "Create this website before 19 in order to get sortlisted for next round",
      content: "Create page footer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&usqp=CAU",
    },
    5: {
      id: 5,
      imp: "High",
      desc: "Create this website before 19 in order to get sortlisted for next round",
      content: "Create page navigation menu",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&usqp=CAU",
    },
    6: {
      id: 6,
      imp: "High",
      desc: "Create this website before 19 in order to get sortlisted for next round",
      content: "Create page layout",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&usqp=CAU",
    },
    7: {
      id: 7,
      imp: "Low",
      desc: "Create this website before 19 in order to get sortlisted for next round",
      content: "Create page layout",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&usqp=CAU",
    },
    8: {
      id: 8,
      imp: "High",
      desc: "Create this website before 19 in order to get sortlisted for next round",
      content: "Create page layout",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&usqp=CAU",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: [1, 4, 5],
    },
    "column-2": {
      id: "column-2",
      title: "On Progress",
      taskIds: [7, 8],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [2, 3, 6],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
};
