import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { GoKebabHorizontal } from 'react-icons/go'
import { ImFileOpenoffice } from 'react-icons/im'
import { TfiCommentAlt } from 'react-icons/tfi'

const Post = ({ task }) => {
    return (
        <Box borderRadius="8px">
            <Flex justify="space-between" mb="9px">
                <Heading fontSize="20px">{task.content}</Heading>
                <GoKebabHorizontal />
            </Flex>
            {task.imp === "Low" ? (
                <Text
                    mb="9px"
                    p="5px"
                    borderRadius="5px"
                    bg="orange.400"
                    w="fit-content"
                    color="orange.900"
                    fontSize="12px"
                >
                    {task.imp}
                </Text>
            ) : (
                <Text
                    mb="9px"
                    p="5px"
                    borderRadius="5px"
                    bg="red.400"
                    color="red.900"
                    w="fit-content"
                    fontSize="12px"
                >
                    {task.imp}
                </Text>
            )}
            <Text mb="10px">{task.desc}</Text>
            <img
                style={{ borderRadius: "10px", marginBottom: "10px" }}
                src={task.img}
                alt="card image"
            />
            <Flex justify="space-between">
                <Flex>
                    <Image
                        style={{
                            height: "25px",
                            objectFit: "cover",
                            width: "25px",
                            borderRadius: "50%",
                            marginLeft: "-3px",
                        }}
                        src="/img1.png"
                        alt="profile"
                        height={25}
                        width={25}
                    />
                    <Image
                        style={{
                            height: "25px",
                            objectFit: "cover",
                            width: "25px",
                            borderRadius: "50%",
                            marginLeft: "-3px",
                        }}
                        src="/img2.jpg"
                        alt="profile"
                        height={25}
                        width={25}
                    />
                    <Image
                        style={{
                            height: "25px",
                            objectFit: "cover",
                            width: "25px",
                            borderRadius: "50%",
                            marginLeft: "-3px",
                        }}
                        src="/img3.png"
                        alt="profile"
                        height={25}
                        width={25}
                    />
                </Flex>
                <Flex gap="10px">
                    <Flex gap="7px" alignItems="center" fontSize="12px">
                        <TfiCommentAlt />
                        <Text>comments</Text>
                    </Flex>
                    <Flex gap="7px" alignItems="center" fontSize="12px">
                        <ImFileOpenoffice />
                        <Text>files</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Post