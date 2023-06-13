import React from 'react'

const HomePageCard = () => {
  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={props.img}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">props.title</Heading>
            <Text>
              props.description
            </Text>
          </Stack>
        </CardBody>
       
      </Card>
    </div>
  );
}

export default HomePageCard
