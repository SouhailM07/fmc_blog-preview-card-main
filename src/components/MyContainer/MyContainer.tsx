import "./mycontainer.css";
//  * mui
import {
  Container,
  Card,
  Typography,
  CardMedia,
  CardContent,
  Box,
  Avatar,
} from "@mui/material";

// assets
import img from "/illustration-article.svg";
import avatar_img from "/image-avatar.webp";

export default function MyContainer() {
  return (
    <>
      <Container
        maxWidth="xl"
        className="h-screen !flex justify-center items-center bg-Yellow"
      >
        <Card className="Card w-[27rem] px-[1.8rem] pt-[1.2rem] !rounded-2xl border-2 border-Black">
          <CardMedia
            component="div"
            image={img}
            className="w-full h-[14rem] rounded-xl"
          />
          {/*  */}
          <CardContent className="!px-0">
            <div className="mt-[1rem]">
              <span className="bg-Yellow px-[1rem] py-[0.5rem] rounded-md font-extrabold">
                Learning
              </span>
              <p className="mt-[1.5rem]">Published 21 Dec 2023</p>
            </div>
            {/*  */}
            <Typography className="!font-extrabold !text-[1.4rem] !my-[1rem] hover:text-Yellow cursor-pointer">
              HTML & CSS foundations
            </Typography>
            {/*  */}
            <Typography className="text-Grey  sm:!text-[1.1rem]">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </Typography>
            {/*  */}
            <Box className="flex space-x-5 items-center mt-[2rem]">
              <Avatar alt="img" src={avatar_img} />
              <p className="font-extrabold text-[1.3rem]">Greg Hooper</p>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
