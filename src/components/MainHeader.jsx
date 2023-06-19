import { Box, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { AiOutlineTeam } from 'react-icons/ai'
import { BiFilterAlt } from 'react-icons/bi'
import { BsCalendarDay, BsChevronDown, BsLink } from 'react-icons/bs'
import { HiOutlinePencil } from 'react-icons/hi'

const MainHeader = () => {
    return (
        <>
            <Flex alignItems="center" justify="space-between" mr="65px" gap="20px" mb="20px">
                <Flex alignItems="center" gap="20px">
                    <Heading pl="60px" color="black" mt="10px">
                        Mobile App
                    </Heading>
                    <Flex justify="center" alignItems="center" gap="10px">
                        <Box
                            bg="purple.300"
                            color="purple.900"
                            p="3px"
                            borderRadius="4px"
                        >
                            <HiOutlinePencil />
                        </Box>
                        <Box
                            bg="purple.300"
                            color="purple.900"
                            p="3px"
                            borderRadius="4px"
                        >
                            <BsLink />
                        </Box>
                    </Flex>
                </Flex>
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
                    <Image
                        style={{
                            height: "25px",
                            objectFit: "cover",
                            width: "25px",
                            borderRadius: "50%",
                            marginLeft: "-3px",
                        }}
                        src="/img4.png"
                        alt="profile"
                        height={25}
                        width={25}
                    />
                </Flex>
            </Flex>
            <Flex pl="60px" mb="20px" justify="space-between">
                <Flex gap="20px">
                    <Flex
                        justify="center"
                        alignItems="center"
                        gap="10px"
                        border="1px"
                        p="7px"
                        borderRadius="8px"
                    >
                        <BiFilterAlt /> Filter <BsChevronDown />
                    </Flex>
                    <Flex
                        justify="center"
                        alignItems="center"
                        gap="10px"
                        border="2px"
                        p="7px"
                        borderRadius="8px"
                    >
                        <BsCalendarDay /> Today <BsChevronDown />
                    </Flex>
                </Flex>
                <Flex
                    justify="center"
                    alignItems="center"
                    gap="10px"
                    border="2px"
                    p="7px"
                    borderRadius="8px"
                    mr="65px"
                >
                    <AiOutlineTeam /> Share
                </Flex>
            </Flex>
        </>
    )
}

export default MainHeader