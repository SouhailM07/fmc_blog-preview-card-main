import "./mycontainer.css";
//  * mui
import {
  Container,
  Card,
  CardActions,
  Paper,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";

// assets
import img from "/illustration-article.svg";

export default function MyContainer() {
  return (
    <>
      <Container
        maxWidth="xl"
        className="border-4 border-white h-screen !flex justify-center items-center bg-Yellow"
      >
        <Card className="w-[27rem] px-[1.8rem] pt-[1rem] !rounded-xl border-2 border-Black">
          <CardMedia
            component="div"
            image={img}
            className="w-full h-[15rem] rounded-xl"
          />
          <CardContent className="!px-0">
            <div className="mt-[1rem]">
              <span className="bg-Yellow px-[1rem] py-[0.5rem] rounded-md font-extrabold">
                Learning
              </span>
              <p className="mt-[1.5rem]">Published 21 Dec 2023</p>
            </div>
            <Typography className="!font-extrabold !text-[1.4rem] !my-[1rem]">
              HTML & CSS foundations
            </Typography>
            <Typography className="text-Grey !text-[1.1rem]">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
